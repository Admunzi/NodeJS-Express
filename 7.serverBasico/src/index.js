import http from 'http'

const server = http.createServer((request, response) => {
    //Cuando llegue una peticion devolverá en la cebecera con el tipo de 
    // contenido html y codificacion utf8
    //response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
    //response.writeHead(400, {'Content-Type': 'application/json'})

    //Tambien lo podemos hacer así
    //response.setHeader('Content-Type', 'text/html; charset=UTF-8')
    //response.statusCode = 301
    //Cuando recibe el metodo get ejecuta x
  if (request.method === 'GET') {
    response.write('<h1>Método valido</h1>')
    return response.end()
  }

  response.write('<h1>Esta intentando acceder con un metodo no valido</h1>')
  return response.end()
})

server.listen(8000, 'localhost', err => {
  if (err) {
    return console.log('Error: ', err)
  }

  console.log('Server opened listen on http://localhost:8000')
})
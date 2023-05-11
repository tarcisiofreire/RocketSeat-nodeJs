import http from 'http'

const users = []

const server = http.createServer( async (req, res)=>{
  const { method, url } = req
 
  const buffers = []
  for await (const chunk of req){
    buffers.push(chunk)
  }
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null  
  }
  
  //list
  if(method === 'GET' && url === '/users'){

    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))

  }

  //insert
  if(method === 'POST' && url === '/users'){
    console.log('post')
    const { nome, email } = req.body
    users.push({
      id:1,
      nome,
      email
    })
    console.log(users)
    return res.writeHead(201).end()
  }
  return res.writeHead(404).end()
});
server.listen(3333);


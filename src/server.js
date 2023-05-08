import http from 'http'

const server = http.createServer((req, res)=>{
  const { method, url } = req
  console.log(method,url)
 
  return res.end('hello!!!!');


});
server.listen(3333);


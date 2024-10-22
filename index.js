const jsonServer = require('json-server')

const mpServer = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const PORT = 3000 || process.env.PORT

mpServer.use(middleware)
mpServer.use(router)

mpServer.listen(PORT,()=>{
    console.log(`Server start running`);
})
const { Router } = require('express')
const router = Router()
let  { fork }  = require('child_process')
const child_process = fork('./utils/child_process')

function serverRouter(app){
    app.use('/api', router)

    router.get('/random', (req, res)=>{
        let { cant } = req.query
        if(!cant) child_process.send(10000)
        else child_process.send(cant)
        child_process.on('message', (response) => {
            console.log(`Respuesta del proceso hijo: ${response.res}`)
            console.log(response)
            let newData = JSON.stringify(response.res)
            res.send(`Los nros. aleatorios entre ${cant}, y la cantidad de veces repetidas: ${newData}`)
        })
    })
}

module.exports = serverRouter
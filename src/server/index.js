import server from './web.server'

let webserver= new server()
webserver.start()
.then(()=>{
    console.log('Webserver Started') 
})

.catch(err=>{
    console.error(err)
    console.error('Failed to start web server')
})
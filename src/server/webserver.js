const express= require('express')

export default class Webserver{
    constructor()
    {
        this.app=express()
        this.app.use(express.static('dist/public'))
    }
    start(){
        return new Promise((resolve,reject)=>{
            try{
                this.server=this.app.listen(3000,function(){
                    resolve()
                })
            }
            catch{
                reject(e)
            }
        })

    }
    stop(){
        return new Promise((resolve,reject)=>{
            try{
                this.server.close(()=>{
                    resolve()
                })
            }
                catch{
                    reject(e)
                }
            

        
        })

    }
}
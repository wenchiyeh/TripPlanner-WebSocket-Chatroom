const WebSocket =require("ws")

const wss = new WebSocket.Server({port:8082})
const clients =[]

wss.on("connection",ws=>{
    clients.push(ws)
    ws.on("message",message=>{
        console.log(message)
        const data =JSON.parse(message)
        clients.forEach(client=>client.send(JSON.stringify(data)))
    })
    ws.on("close",()=>{
        console.log("disconnected")
    })
})
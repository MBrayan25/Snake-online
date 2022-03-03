export default function renderScreen(canvas,state,requestAnimationFrame,playerId){
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    for(let id in state.players){
        const player = state.players[id]

        if(player && playerId != id){
            const cor = player.ativo ? 'green': 'rgba(0,255,0,100)'

            ctx.fillStyle = cor
            ctx.fillRect(player.x,player.y,1,1) 
        }
    }

    for(let id in state.fruits){
        const fruit = state.fruits[id]
        if(fruit){
            ctx.fillStyle = 'rgb(180,20,20)'
            ctx.fillRect(fruit.x,fruit.y,1,1)
        }
    }

    function printCalda(player,cor){
        for(let calda of player.calda){
            ctx.fillStyle = cor
            ctx.fillRect(calda.x,calda.y,1,1) 
        }
    }

    const player = state.players[playerId]

    if(player){
        const cor = player.ativo ? 'rgb(70,0,180)': 'rgba(120,0,180,0.8)'

        ctx.fillStyle = cor
        ctx.fillRect(player.x,player.y,1,1)
        printCalda(player,cor)
    }

    requestAnimationFrame(()=>{
        renderScreen(canvas,state,requestAnimationFrame,playerId)
    })
}
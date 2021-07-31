class Game{

    getState(){
        database.ref('gameState').on("value", (data)=> {
            gameState= data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

  async  start(){

        player = new Player()

        form= new Form()
        form.display()
        var countRef=await database.ref('playerCount').once("value")

        if(countRef.exists()){
        player.getCount()
        }

        car1=createSprite(200,300)

        car2=createSprite(400,300)

        car3=createSprite(600,300)
         
        car4=createSprite(800,300)

        cars=[car1,car2,car3,car4]

        car1.addImage(car1img)
        car2.addImage(car2img)
        car3.addImage(car3img)
        car4.addImage(car4img)
    }

    play(){

        if(player.distance>3700){
            gameState=2
            player.rank++
            player.updateRank()
            myRank=player.rank
          }

        image(trackimg,0,-height*4,width,height*5)

        form.greetings.hide()
        textSize(20)
        text("game start",200,200)

        player.getinfoPlayer()
        player.getRank()
        if(keyIsDown(UP_ARROW)){
            player.distance+=5
            player.update()
        }
if(allPlayers !== undefined){
     
        var newY=300
        var index=0;
        var x=450

        for(var pls in allPlayers){

        cars[index].x=x
        cars[index].y=height-allPlayers[pls].distance

            if(pls === "player" + player.index){
            ellipse( cars[index].x, cars[index].y, 70,70)
            camera.position.x=width/2
            camera.position.y=cars[index].y
            }

            else{
            cars[index].shapeColor="black"
            }

           // text(allPlayers[pls].name+";"+allPlayers[pls].distance,200,newY)
           // newY+=50

           drawSprites()
           x+=200
           index++
        }
    }
    }

    end(){
        alert("game over " +  "your rank is "+ myRank)
    }
}

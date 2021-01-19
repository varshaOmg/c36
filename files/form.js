class Form{

    constructor(){

    }

    display(){
        var title = createElement("H2")
        title.html("car race!")
        title.position(250,300)
        var input = createInput("name")
        input.position(370,220)
        var button = createButton("play")
        button.position(309,109)
        button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playercount += 1
        player.updateName(name)
        player.updateCount(playercount)
        var greating = createElement("H4")
        greating.html("hola"+name)
        greating.position(243,234)

        })
    }


}
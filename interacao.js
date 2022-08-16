function saberMais(x){
    var inicio = 0
    for(var i = inicio; i <= x; i++){
        if(i == x ){
            var topside = document.getElementsByClassName("top-div")[i]
            var botside = document.getElementsByClassName("controle")[i]
            var info = document.getElementsByClassName("descricao")[i]
            topside.style.display = "none"
            botside.style.display = "none"
            info.style.display = "flex"
        }
    }
}
function voltar(x){
    var inicio = 0
    for(var i = inicio; i <= x; i++){
        if(i == x ){
            var topside = document.getElementsByClassName("top-div")[i]
            var botside = document.getElementsByClassName("controle")[i]
            var info = document.getElementsByClassName("descricao")[i]
            topside.style.display = "flex"
            botside.style.display = "flex"
            info.style.display = "none"
        }
    }
}
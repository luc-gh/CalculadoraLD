let botao = document.querySelector('botao');
let btn = document.querySelectorAll('span');
let valor = document.getElementById('valor');
let modo = document.querySelector('.modo');
let body = document.querySelector('body');
let condition = 0; //var responsável por detectar se a tela de resultado deve ser apagada ou não, dependendo do valor contido nela;

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function(){
    if(this.innerHTML == "="){  //click no '='
      try {
        valor.innerHTML = eval(valor.innerHTML);
      } catch (e) {
        valor.innerHTML = "E";
      }
      condition = 1;
    }
    else{
      if(this.innerHTML == "C"){
        valor.innerHTML = "";
        condition = 0;
      }
      else{
        if(valor.innerHTML.length > 16){
          valor.innerHTML = "E";
          condition = 1;
        }
        else{
          if(condition == 1){
            valor.innerHTML = "";
          }
          valor.innerHTML += this.innerHTML;
          condition = 0;
        }
      }
    }
  });
}

modo.onclick = function(){
  body.classList.toggle('dark');
};

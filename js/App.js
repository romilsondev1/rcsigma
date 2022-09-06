function response(){
    const campoinputname =  document.getElementById('name')
    const campoinputemail =  document.getElementById('email')
    const campoinputmessage = document.getElementById('message');

    const placeholder = "Há algo de errado aqui!"
    
    var name = document.getElementById('name'); 
    var nome = name.value;
    var email = document.querySelector('[name=email]'); 
    var mail = email.value
    var message = document.querySelector('[name=message]'); 
    var text = message.value

    if(nome == "" || mail == "" || text == ""){
      if(nome ==""){
      campoinputname.style.cssText = 'border: 2px solid red'
      campoinputname.setAttribute('placeholder', placeholder)
      }if(mail == ""){
        campoinputemail.style.cssText = 'border: 2px solid red'
        campoinputemail.setAttribute('placeholder', placeholder)
      }if(text == ""){
        campoinputmessage.style.cssText = 'border: 2px solid red'
        campoinputmessage.setAttribute('placeholder', placeholder)
      }
    }else{
    var titleModal = document.getElementById('exampleModalLabel')
    document.getElementById('div').innerHTML = "<div class='response '><img src='./img/emoji.png' id='emoji'><p>Estamos preparando seu Email!</p><div class='loader'><section class='c-loader'></section></div></div>";
    titleModal.innerText = 'Aguarde um pouco!';
    var attr = "display:none"
    var display = document.getElementById('display').setAttribute('style', attr)
    function dezSegundos(){
      window.location.href="https://rcsigmagestao.web.app/confirmation";
    }setTimeout(dezSegundos, 1000*4);
    }
}


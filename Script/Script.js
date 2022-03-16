var slideIndex = 1;
var slideIndex2 = 0;
var email;
showSlidesAutomatic();

function plusSlides(n){
showSlides(slideIndex += n)
}

function currentSlide(n){
showSlides(slideIndex = n)
}

function showSlides(n){
var i;
var slides = document.getElementsByClassName("mySlides");
var dots =  document.getElementsByClassName("dot");

 if(n > slides.length){slideIndex = 1}
 if(n < 1) {slideIndex = slides.length}
 
for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
}

for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "")
} 

slides[slideIndex - 1].style.display="block";
dots[slideIndex - 1].className += " active";


}

function showSlidesAutomatic(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots =  document.getElementsByClassName("dot");
    
     
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex2++;

    if(slideIndex2 > slides.length) { slideIndex2 = 1 }



    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    } 
    
    slides[slideIndex2 - 1].style.display="block";
    dots[slideIndex2 - 1].className += " active";
    
    setTimeout(showSlidesAutomatic, 15000);
    }


    function ValidaDados(){
var nome = document.getElementById('txtnome');
var endereco = document.getElementById('txtendereco');
var email = document.getElementById('txtemail');
var tamanho = document.getElementById('txttamanho');


caixa_nome = document.querySelector('.msg-nome');
caixa_nome.style.display = 'none';

caixa_endereco = document.querySelector('.msg-endereco');
caixa_endereco.style.display = 'none';

caixa_email = document.querySelector('.msg-email');
caixa_email.style.display = 'none';

caixa_tamanho = document.querySelector('.msg-tamanho');
caixa_tamanho.style.display = 'none';

caixa_obs = document.querySelector('.msg-obs');
caixa_obs.style.display = 'none';


if(nome.value.length<5){
    caixa_nome.innerHTML = "Por favor preenher o campo nome";
    caixa_nome.style.display = 'block'

    nome.focus();
    return false;
}

if(endereco.value.length<5){
    caixa_endereco.innerHTML = "Por favor preenher o campo endereco";
    caixa_endereco.style.display = 'block'

    endereco.focus();
    return false;
}
if(email.value.length<5){
    caixa_email.innerHTML = "Por favor preenher o campo emai";
    caixa_email.style.display = 'block'

    emai.focus();
    return false;
}
if(tamanho.value.length<5){
    caixa_tamanho.innerHTML = "Por favor preenher o campo tamanho";
    caixa_tamanho.style.display = 'block'

    tamanho.focus();
    return false;
}

if(document.getElementById('txtobs').value.length==0){
    caixa_obs.innerHTML = "Por favor preenher o campo de observações";
    caixa_obs.style.display = 'block'

    document.getElementById('txtobs').focus();
    return false;

}
function inicializaJS(){
    document.getElementById('txtnome').focus();
}

























if (email.value==""){

    alert("E-mail não informado");

    email.focus();

    return false;

}


if (invalid.test(email.value)==false){

    alert("Endereço de e-mail inválido");

    email.focus();

    return false;        

}











    }



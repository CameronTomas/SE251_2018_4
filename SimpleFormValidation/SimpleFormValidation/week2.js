// JavaScript Document
//Cameron Tomas
window.addEventListener('load', init);
function init(e){

    var p = document.querySelectorAll('#form p');
    console.log(p);

    var input = document.querySelectorAll('#form input');
    console.log(input);
    var  span = document.querySelectorAll('#form span');
    console.log(span);
    var nameFirst = document.querySelector('#first');
    var first = document.querySelector('#first-name');
    var last = document.querySelector('#last-name');
    var email = document.querySelector('#email');
    var phone = document.querySelector('#phone');
    var submit = document.querySelector('input[type="button"]');
    var confirmation = document.querySelector('#confirmation');
    var info= document.querySelector('#info');
    console.log(submit);
    submit.addEventListener('click', validation);
    function validation(e){
        for(i = 0; i < 5; i++)
        {
            update(input[i],p[i],span[i])
            if(input[2].value != input[3].value){
                p[2].style.color="red";
                span[2].innerHTML="*";
                p[3].style.color="red";
                span[3].innerHTML="*";
            }
        }
        
        if(span[0].innerHTML === ""&& span[1].innerHTML === ""&& span[2].innerHTML=== ""&& span[3].innerHTML=== ""&& span[4].innerHTML === "" && input[2].value === input[3].value){
            form.style.display="none";
            confirmation.style.display="block"
            for(i = 0; i < 3; i++){
                info.innerHTML += input[i].value;
                if(i != 0)info.innerHTML += '<br>'
                else info.innerHTML += ' ';
            } 
            info.innerHTML += input[4].value;
        }
    }

}

function update(_input, _p, _span)
{
    if(_input.value === ""){
        _p.style.color="red";
        _span.innerHTML="*";
    }else{
        _p.style.color="black";
        _span.innerHTML="";
    }
}
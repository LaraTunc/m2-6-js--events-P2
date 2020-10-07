// add js here
let form = document.querySelector('form'); 
let password= document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let termsOfService = document.getElementById('termsOfService'); 
let errorMessage = document.querySelector('.errorMessage');
let submitButton = document.querySelector('.submitButton');
let clearButton = document.querySelector('.clearButton');

let nouns = ["noun","word","random","hello","sunny","flowers","bluesky","smiley","boredom","beach","december","christmas","thanksgiving"];
let passwordSuggestion=""; 

form.addEventListener('submit',formValidation);
clearButton.addEventListener('click',clearFunction);

function formValidation (event) { 
    console.log(event.target);
    event.preventDefault();  
    clearErrors();
    if ( termsOfService.checked === false) { 
        window.alert('You must agree to the terms of service before continuing.'); 
        return;
    }; 
    if(password.value.length <10) { 
        errorMessage.style.display = "block"; 
        passwordGenerator();
        errorMessage.innerText=(`Your password is too short! How about "${passwordSuggestion}"?`);
        password.style.border="2px solid  hsl(333deg, 100%, 44%)";
        password.style.boxShadow= "0 0 5px blue";
        return; 
    }; 
    if (password.value !== confirmPassword.value && password.value.length >=10) { 
        errorMessage.style.display = "block"; 
        errorMessage.innerText=('Your passwords didn\'t match! Please provide the same password for each field.');
        confirmPassword.style.border="2px solid  hsl(333deg, 100%, 44%)";
        confirmPassword.style.boxShadow= "0 0 5px blue";
    } else { 
        window.alert('Success!')
        return clearFunction();
    }; 
}; 

function clearErrors () { 
    errorMessage.style.display = "none"; 
    password.style.border= "1px solid rgba(85, 85, 85, 0.747)";
    password.style.boxShadow= "initial";
    confirmPassword.style.border= "1px solid rgba(85, 85, 85, 0.747)";
    confirmPassword.style.boxShadow= "initial";
}; 

function clearFunction () { 
    form.reset();
};

function passwordGenerator () {  
    passwordSuggestion = nouns[randomIndexGenerator()]+"-"+nouns[randomIndexGenerator()]+"-"+nouns[randomIndexGenerator()]+"-"+nouns[randomIndexGenerator()];
}; 

function randomIndexGenerator () { 
    return Math.round(Math.random()*(nouns.length-1));
};
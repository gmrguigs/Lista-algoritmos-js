//let idade = 60;
let idade = parseInt(prompt("Informe sua idade"))

if(idade <= 13){
    alert("Criança");
}

else if(idade > 13 && idade < 20){
    alert("Adolescente");
}

else if( idade >= 20 && idade < 60){
    alert("Adulto");
}

else if(idade >= 60){
    alert("Idoso");
}
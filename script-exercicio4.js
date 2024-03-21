let codigo = parseInt(prompt("Informe o código do produto:"));

if(codigo >= 1 && codigo <=20){
    alert("Europa");
}

else if(codigo >=21 && codigo <=40){
    alert("Ásia");
}

else if(codigo >= 41 && codigo <= 60){
    alert("América");
}

else if(codigo >= 61 && codigo <= 80){
    alert("África");
}

else if(codigo > 80){
    alert("Paraguai");
} 

else{
    alert("Número inválido");
}
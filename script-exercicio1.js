// Exercicios 1 e 2

let numero = 30;

if(numero %2 == 0 && numero %3 == 0 && numero %5 != 0)
{
alert("Esse número é divisível por 2 e por 3 simultameamente, mas não é por 5");
}
else if(numero %2 == 0 && numero %3 == 0 && numero %5 == 0)
{
    alert("Esse número é divisível por 2,3 e 5 simultaneamente");   
}
else
{
alert("Esse número não e divisível por 2, 3 e 5 simultaneamente");
}
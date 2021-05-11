let num1 = document.getElementById("txtn1")
let num2 = document.getElementById("txtn2")
let res = document.getElementById("res")

function calcular(operacao)
{   
    if(num1.value.length == 0 || num2.value.length == 0)
    {
        alert("[ERRO]Faltam dados!Preencha corretamente")
        return 
    }  
    
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    var resp = 0
    switch(operacao)
    {
        case 0 :
            resp = soma(n1,n2)
        break
         
        case 1:
            resp = subtrair(n1,n2)
        break 
        
        case 2 :
            resp = multiplicar(n1,n2)
        break
        
        case 3:
            resp = dividir(n1,n2)
        break    
        
        case 4:
            resp = porcentagem(n1,n2)

    }
    res.innerHTML = `<p>a resposta é ${resp}</p>`
    num1.value = ""
    num1.focus()
    num2.value = ""
    num2.focus()

}

function soma(n1,n2)
{   
    let somatorio = (n1+n2)
    return somatorio    
}
function subtrair(n1,n2)
{
    let subtracao = n1-n2
    return subtracao
}
function multiplicar (n1,n2)
{
    let multiplicacao = n1*n2
    return multiplicacao
}

    

function dividir(n1,n2)
{
    
    let divisao = n1/n2
    return divisao 
    
}
function porcentagem (n1,n2)
{
    let porcento = (n1*n2)/100
    return porcento
}









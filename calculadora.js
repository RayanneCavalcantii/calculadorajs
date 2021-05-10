let num1 = document.getElementById("txtn1")
let num2 = document.getElementById("txtn2")
let res = document.getElementById("res")

function soma()
{
    if(num1.value.length == 0 || num2.value.length == 0){
        alert("[ERRO]Faltam dados!Preencha corretamente")
    }
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let somatorio = (n1+n2)
    res.innerHTML = `<p>a resposta é ${somatorio}</p>`
    num1.value = ""
    num1.focus()
    num2.value = ""
    num2.focus()
    
}


function subtrair()
{
    let n1 = Number.parseFloat(num1.value)
    let n2 = Number.parseFloat(num2.value)
    let subtracao = n1-n2
    res.innerHTML = `<p>a resposta é ${subtracao}</p>`
    num1.value = ""
    num1.focus()
    num2.value = ""
    num2.focus()

}
function multiplicar ()
{
    let n1 = Number.parseFloat(num1.value)
    let n2 = Number.parseFloat(num2.value)
    let multiplicacao = n1*n2
    res.innerHTML = `<p>a resposta é ${multiplicacao}</p>`
    num1.value = ""
    num1.focus()
    num2.value = ""
    num2.focus()
}
function dividir(v1,v2)
{
    let n1 = Number.parseFloat(num1.value)
    let n2 = Number.parseFloat(num2.value)
    let divisao = n1/n2
    res.innerHTML = `<p>a resposta é ${divisao}</p>` 
    num1.value = ""
    num1.focus()
    num2.value = ""
    num2.focus()
   
}









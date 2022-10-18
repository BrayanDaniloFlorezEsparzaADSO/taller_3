addEventListener(`DOMContentLoaded`,()=>{ 
    // #9Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los impares. Numero par es aquel que su residuo igual a cero (num mod !=0)
    let par =0
    let impa=0
    while(confirm(`desea ingresar un numero`)){
        let num=Number(prompt(`dijite un numero`))
        eval(`${(num%2==0)?"par+=num": "impa*=num"}`);
    }
    alert(`la suma de los pares es :${par}\nEl producto de los impares es: ${impa}`)


})

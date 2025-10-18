let x = "10"
let y = "01"

console.log(x === y)



function compararNumeros(num1, num2) {
    if(num1 < num2) {
        return "Numero 2 é maior"
    }   else if(num1 == num2){
        return "Os numero sao iguais"
    }   else {
        return "Numero 1 é maior"
    }
}

function numberCheck(numero){
    if(numero > 0) {
      return "Numero Possitivo"
    } else if (numero < 0) {
      return "Numero Negativo"  
    } else{
        return"Numero Zero"
    }
}

function dayOfWeek(dia){
    switch (dia) {
       case 1:
        return "Sunday"
       case 2:
        return "Monday"
       case 3:
        return "Tuesday"
       case 4: 
        return "Wednesday"   
       case 5:
        return "Thursday"
       case 6:
        return "Friday"
       case 7:
        return "Saturday"
       default:
        return "Dia da semana nao encontrado!"    
    }
}


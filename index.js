function retornarTrue() {
    var numeros = [10, 20, 30, 40, 10, 40, 30, 20]
    for (var i = 0; i < numeros.length; i++) {
        for (var j = i + 1; j < numeros.length; j++) {
            if ((numeros[i]) == (numeros[j])) {
                console.log("True")
            } else {
                console.log("False")
            }
        }
    }
}
retornarTrue()
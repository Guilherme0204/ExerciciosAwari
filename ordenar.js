function ordenar() {
    var numeros = [90, 8, 12, 3, 4, 5];
    numeros.sort(function (a, b) {
        return a - b;
    });
    console.log(numeros);
}
ordenar()
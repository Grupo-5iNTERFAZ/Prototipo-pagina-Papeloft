// Variables para almacenar la selección del producto
let selectedSize = '';
let selectedPages = '';
let selectedAdditional = '';
let cantidad = 1; // Cantidad predeterminada

// Incrementar la cantidad
document.getElementById('mas').addEventListener('click', function() {
    cantidad = parseInt(document.getElementById('cantidad').value) + 1;
    document.getElementById('cantidad').value = cantidad;
});

document.getElementById('menos').addEventListener('click', function() {
    if (cantidad > 1) { // No permitir que el número sea menor que 1
        cantidad = parseInt(document.getElementById('cantidad').value) - 1;
        document.getElementById('cantidad').value = cantidad;
    }
});

//imagen
var MainImg = document.getElementById("MainImg");
var smalling=document.getElementsByClassName("small-img");

smalling[0].onclick=function(){
    MainImg.src=smalling[0].src;
}
smalling[1].onclick=function(){
    MainImg.src=smalling[1].src;
}

smalling[2].onclick=function(){
    MainImg.src=smalling[2].src;
}

smalling[3].onclick=function(){
    MainImg.src=smalling[3].src;
}


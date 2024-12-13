
// Seleccionar/deseleccionar todo en el carrito
document.querySelector('.opciones label').addEventListener('change', function(event) {
    const isChecked = event.target.checked;
    document.querySelectorAll('.productos input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = isChecked;
    });
});

// Eliminar productos seleccionados
document.querySelectorAll('.eliminar').forEach(button => {
    button.addEventListener('click', function() {
        const producto = this.closest('.producto');
        producto.remove(); // Elimina el producto seleccionado
        actualizarTotales();
    });
});

// Verificar producto
document.querySelectorAll('.verificar').forEach(button => {
    button.addEventListener('click', function() {
        const producto = this.closest('.producto');
        alert('Producto verificado: ' + producto.querySelector('.info p').innerText);
    });
});

// Aumentar/decrementar la cantidad de un producto
document.querySelectorAll('.cantidad button').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        let cantidad = parseInt(input.value);
        if (this.textContent === '+') {
            cantidad++;
        } else if (this.textContent === '-' && cantidad > 1) {
            cantidad--;
        }
        input.value = cantidad;
        actualizarTotales();
    });
});

// Actualizar los totales
function actualizarTotales() {
    let subtotal = 0;
    document.querySelectorAll('.productos .producto').forEach(producto => {
        if (producto.querySelector('input[type="checkbox"]').checked) {
            const precio = parseFloat(producto.querySelector('.info p').textContent.split('$')[1]);
            const cantidad = parseInt(producto.querySelector('.cantidad input').value);
            subtotal += precio * cantidad;
        }
    });
    const envio = 0; // Aquí puedes calcular el costo de envío según tus reglas
    const impuestos = subtotal * 0.16; // Por ejemplo, un 16% de impuestos
    const total = subtotal + envio + impuestos;

    document.querySelector('.totales p:nth-child(1)').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.querySelector('.totales p:nth-child(2)').textContent = `Envío: $${envio.toFixed(2)}`;
    document.querySelector('.totales p:nth-child(3)').textContent = `Impuestos: $${impuestos.toFixed(2)}`;
    document.querySelector('.totales p:nth-child(4)').textContent = `Total a Pagar: $${total.toFixed(2)}`;
}
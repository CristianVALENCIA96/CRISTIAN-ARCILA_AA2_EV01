document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.product-item button');
    const serviceButtons = document.querySelectorAll('.service-item button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto agregado al carrito.');
        });
    });

    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Servicio solicitado. Nos pondremos en contacto pronto.');
        });
    });
});

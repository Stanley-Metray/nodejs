(async () => {
    try {
        const response = await fetch('/get-products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        const list = document.getElementById('products');
        if (products.length > 0)
            products.forEach((value) => {
                listElement = document.createElement('li');
                listElement.innerText = value;
                list.appendChild(listElement);
            });
        else
            list.innerHTML = '<h4>No Prodcuts</h4>';
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
})();
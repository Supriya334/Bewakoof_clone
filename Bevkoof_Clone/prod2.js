let container = document.querySelector(".cont-child2");
let arr = [];

const fetchData = async () => {
    let url = `http://localhost:3000/women`;

    try {
        let res = await fetch(url);
        let data = await res.json();
        arr = data;
        displayData();
    } catch (error) {
        console.log(error);
    }
};

const lowToHighBtn = document.getElementById('lowToHigh');
const highToLowBtn = document.getElementById('highToLow');
lowToHighBtn.addEventListener('click', () => {
    arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    displayData();
});
highToLowBtn.addEventListener('click', () => {
    arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    displayData();
});

function displayData() {
    container.innerHTML = "";
    arr.forEach((elem) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <img src="${elem.image}" alt="">
            <h3 class="product-name">${elem.name}</h3>
            <p class="product-price">${elem.price}</p>
            <p class="product-discount">${elem.discount}</p>
            <button class="add-to-cart">Add To Cart</button>
        `;
        div.className = "child-22";
        container.append(div);

        // Adding event listener to each "Add to Cart" button
        div.querySelector('.add-to-cart').addEventListener('click', (e) => {
            addToCart(e, elem);
        });
    });
}

function addToCart(e, product) {
    const productImage = product.image;
    const productName = product.name;
    const productPrice = product.price;

    // Create the product object
    const productData = {
        image:productImage,
        name: productName,
        price: productPrice,
        quantity: 1 // Assuming you want to add only one quantity for now
    };

    // Send the product data to the server
    fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle success
        console.log('Product added to cart:', data);
        // Optionally, you can show a success message to the user
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });
}

fetchData();

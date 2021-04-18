const singleClothing = document.querySelector(".singleProductDetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id)

const url = "https://rainydays.svanevik.one/wp-json/wc/store/products/" + id;


async function fetchProducts() {
  try {
    const productResponse = await fetch(url);
    const productJson = await productResponse.json();

    createHTML(productJson);

  } catch {
    console.log("Something is worng");
  } finally {
    console.log("Don't mind me")
  }
}

fetchProducts();

function createHTML(product) {
  singleClothing.innerHTML = `<section class="singleProduct_box">
                                <img src="${product.images[0].thumbnail}" class="singleProduct_image">
                                <h1 class="singleProduct_name">${product.name}</h2>
                                <h2 class="singleProduct_price">${product.prices.price} ${product.prices.currency_code}</h3>
                                <h3 class="singleProduct_info">${product.short_description}</h3>
                                <h4 class="singleProduct_button">Buy now</h4>
                                </section`;
}































// const allProductsJSON = "https://rainydays.svanevik.one/wp-json/wc/store/products?category=16"
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// const cardContainer = document.querySelector(".product_card");
// const productImageContainer = document.querySelector(".product_image");
// const productContainer = document.querySelector(".product");
// const productNameContainer = document.querySelector(".product_name");
// const productPriceContainer = document.querySelector(".product_price");

// const test = document.querySelector(".test");

// const proxy = "https://noroffcors.herokuapp.com/";
// const url = allProductsJSON + id;
// const corsFix = proxy + url;


// console.log(url);


// async function fetchProduct() {
//   try {
//     const response = await fetch(corsFix);

//     const json = await response.json();

//     console.log(json);

//     category.forEach(category => {console.log(category.name)})

    
//   } catch {
//     console.log("Test");
//   } finally {
//     console.log("Test2")
//   }
// } 

// fetchProduct();











// const fetchProducts = async (url) => {
//   const response = await fetch(url);
//   const json = await response.json();
//   productArray = json;
//   return json;
// }

// const fetchProduct = async (url) => {
//   const response = await fetch(`${all_products_url}/${id}`);
//   const json = await response.json();
//   return json;
// };

// const populateProduct = async () => {
//   const product = await fetchProduct();

//   for (let i = 1; i < product.images.length; i++) {
//     productImageContainer.innerHTML += `<img src="${product.images[i].src}"`;
//   }
// };
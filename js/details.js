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

    singleClothing.innerHTML = "";

    createHTML(productJson);

  } catch {
    console.log("Something is worng");
  } finally {
    console.log("Don't mind me")
  }
}

fetchProducts();

function createHTML(product) {
  singleClothing.innerHTML = `<section class="singleProduct_card">
                                <img src="${product.images[0].thumbnail}" class="singleProduct_image">
                                <h1 class="singleProduct_name">${product.name}</h2>
                                <h3 class="singleProduct_info">${product.description}</h3>
                                <h2 class="singleProduct_price">${product.prices.price} ${product.prices.currency_code}</h3>
                                <div class="button_container">
                                <a href="#" class="singleProduct_button">BUY NOW</a>
                                </section>`;
}
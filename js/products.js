const menContainer = document.querySelector(".productsMenContainer");

const urlMen = "https://rainydays.svanevik.one/wp-json/wc/store/products?category=16";

async function fetchMenProduct() {
    try {
        const resMen = await fetch(urlMen);
        const jsonMen = await resMen.json();

        menContainer.innerHTML = "";

        jsonMen.forEach(function (men) {
            menContainer.innerHTML += ` <section class="product_card">
                                        <a href="productDetails.html?id=${men.id}">
                                        <img src="${men.images[0].thumbnail}" class="product_image"></a>                            
                                        <h2 class="product_name">${men.name}</h2>
                                        <h3 class="product_price">${men.prices.price} ${men.prices.currency_code}</h3>
                                        <div class="button_container">
                                        <a href="productDetails.html?id=${men.id}" class="product_button">View product</a>
                                        </section>`;
        })
    } catch (error) {
        console.log("Something went wrong");
    }
}

fetchMenProduct();

const womanContainer = document.querySelector(".productsWomenContainer");

const urlWoman = "https://rainydays.svanevik.one/wp-json/wc/store/products?category=17";

async function fetchWomanProduct() {
    try {
        const resWoman = await fetch(urlWoman);
        const jsonWoman = await resWoman.json();

        womanContainer.innerHTML = "";

        jsonWoman.forEach(function (woman) {
            womanContainer.innerHTML += `<section class="product_card">
                                         <a href="productDetails.html?id=${woman.id}">
                                         <img src="${woman.images[0].thumbnail}" class="product_image"></a>                            
                                         <h2 class="product_name">${woman.name}</h2>
                                         <h3 class="product_price">${woman.prices.price} ${woman.prices.currency_code}</h3>
                                         <a href="productDetails.html?id=${woman.id}" class="product_button">View product</a>
                                         </section>`;
        })
    } catch (error) {
        console.log("Something went wrong");
    }
}

fetchWomanProduct();


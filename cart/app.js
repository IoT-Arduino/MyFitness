//variables
const productsDOM = document.querySelector(".products-center")
let cart = []
let buttonsDOM = []

// getting the products
const getProducts = async () => {
  try {
    let result = await fetch("products.json")
    let data = await result.json()
    let products = data.items
    products = products.map((item) => {
      const { title, price } = item.fields
      const { id } = item.sys
      const image = item.fields.image.fields.file.url
      return { title, price, id, image }
    })
    return products
  } catch (error) {
    console.log(error)
  }
}

// UI display function
const displayProducts = (products) => {
  let result = ""
  products.forEach((product) => {
    result += `
            <!-- single product  -->
            <article class="product">
                <div class="img-container">
                    <img src=${product.image} alt="product" class="product-img">

                    <button class="bag-btn snipcart-add-item" 
                        data-item-id=${product.id}
                        data-item-price=${product.price}
                        data-item-image=${product.image}
                        data-item-name=${product.title}
                        data-item-weight=${product.weight}

                        data-item-url="/paintings/starry-night"
                        data-item-description"This is cart item description."
                        data-item-custom1-name="Option color"
                        data-item-custom1-options="Black|Brown[+100.00]|Gold[+300.00]"
                        data-item-custom3-name="Gift"
                        data-item-custom3-type="checkbox"
                        data-item-custom4-name="Long message"
                        data-item-custom4-type="textarea"

                    >
                    <i class="fas fa-shopping-cart"></i>
                        add to cart
                    </button>


                </div>
                <h3>${product.title}</h3>
                <h4>$${product.price}</h4>
            </article>
            <!-- end of single product  -->
            `
  })
  productsDOM.innerHTML = result
}

document.addEventListener("DOMContentLoaded", () => {
  getProducts().then((products) => {
    displayProducts(products)
  })
})

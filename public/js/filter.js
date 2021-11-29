function toggleCart() {
  const cart = gsap.timeline();
  cart.to('body', {
    position: 'fixed'
  })
  cart.to('.cart-results-modal', {
    right: 0,
    opacity: 1
  })



  document.querySelector('.close-modal').addEventListener('click', () => {
    cart.reversed(true)
  });
}
document.querySelector('.cart').addEventListener('click', toggleCart);

document.addEventListener('commerce.ready', () => {

  // Retrieves the main containers
  let summary = document.querySelector('.summary')
  let cart = document.querySelector('.cart-total')

  // Listens for changes to the cart
  Commerce.subscribe('cart.change', event => {
    // Updates the summary
    summary.innerHTML = ` <p>${event.data.quantity} items / Total ${event.data.price.total.formatted}</p>`

    // Updates the cart list
    let list = ''
    Object.keys(event.data.items).forEach(id => {
      let item = event.data.items[id]
      list += `<img src="${item.product.image}"> <p class="item-info">${item.quantity} x ${item.product.name} = ${item.price.total.formatted} <span class="remove"><i class="far fa-trash-alt"  data-id="${id}"></i></span></p>`
    })
    cart.innerHTML = list || '<p>Cart is empty</p>'
  })

  // Adds a product to the cart when clicked
  let link = document.querySelector('.button-addCart');
  link.addEventListener('click', event => {
    let cartMessage = document.querySelector('.cart-added-item');
    // Cart Message When An Item Is Added 
    let message = gsap.timeline();
    message.to(cartMessage, {
      visibility: 'visible',
      opacity: 1
    })
    message.to(cartMessage, {
      visibility: 'hidden',
      opacity: 0,
      delay: 2
    })
    event.preventDefault()
    Commerce.cart.add({
      id: event.target.dataset.id
    })
  })


  // Removes a product from the cart when clicked
  document.querySelector('.cart-total').addEventListener('click', event => {
    event.preventDefault()
    let id = event.target.dataset.id
    if (id) {
      Commerce.cart.remove(id)
    }
  })

  // Clears the cart
  document.querySelector('.clear').addEventListener('click', () => {
    Commerce.cart.clear()
  })
})
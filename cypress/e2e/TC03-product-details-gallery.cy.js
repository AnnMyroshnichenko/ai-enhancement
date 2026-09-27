describe('TC-03 - Product Details & Image Gallery', () => {
  it('should display product details and allow switching product images', () => {
    cy.prompt([
      'visit https://modivo.ua/',
      'if a cookie consent, privacy, newsletter, promotional, or other modal overlay is displayed, close or dismiss it',
      'wait until the page is ready for interaction',
      'navigate to a suitable public product category',
      'open the first available product',
      'verify the product page is displayed',
      'verify the product name is visible',
      'verify the product price is visible',
      'verify product images are displayed',
      'click another product image in the image gallery',
      'verify that the displayed product image changes',
    ])
  })
})
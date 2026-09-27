describe('TC-04 - Homepage', () => {
  it('should display the main elements of the homepage', () => {
    cy.prompt([
      'visit https://modivo.ua/',
      'close any cookie consent or modal only if it is visible and blocks the page',
      'verify the visible MODIVO logo is displayed in the page header',
      'verify the homepage contains at least one visible main promotional banner or hero section',
      'verify the header search bar is available',
    ])
  })
})
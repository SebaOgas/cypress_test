describe('Logout negativo', () => {
    it('Intento de logout sin estar logueado', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    
      cy.get('button#logout').should('not.exist')
      
      cy.contains('button', 'Submit').should('be.visible')
    })
})

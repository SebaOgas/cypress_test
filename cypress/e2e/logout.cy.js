describe('Logout', () => {
    it('Cierre de sesion', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
  
      cy.get('input#email').type('marcosespeche@test.com')
      cy.get('input[type="password"]').type('test123')
  
      cy.get('button#submit').contains('Submit').click()
      
      cy.get('button#logout').contains('Logout').click()
      
      cy.contains('button', 'Submit').contains('Submit').should('be.visible')

    })
  })
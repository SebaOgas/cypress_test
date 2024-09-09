describe('Login', () => {
    it('Logueo de usuario', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
  
      cy.get('input#email').type('marcosespeche@test.com')
      cy.get('input[type="password"]').type('test123')
  
      cy.get('button#submit').contains('Submit').click()
      
      cy.contains('button', 'Logout').should('be.visible')

    })
  })
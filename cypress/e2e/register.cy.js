  describe('Register', () => {
    it('Registro de usuario', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
  
      cy.get('button#signup').contains('Sign up').click()
  
      cy.get('input#firstName').type('Marcuelo')

      cy.get('input#lastName').type('Espeche')

      cy.get('input#email').type('marcosespeche@test.com')

      cy.get('input[type="password"]#password').type('test123')
  
      cy.get('button#submit').contains('Submit').click()

      cy.contains('button', 'Logout').should('be.visible')

    })
  })

describe('Register', () => {
    it('Registro de usuario', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
  
      cy.get('button#signup').contains('Sign up').click()
  
      cy.get('input#firstName').type('Tatiana')

      cy.get('input#lastName').type('Duran')

      cy.get('input#email').type('andretatiduran@gmail.com')

      cy.get('input[type="password"]#password').type('1234567')
  
      cy.get('button#submit').contains('Submit').click()

      cy.contains('span', 'Email address is already in use').should('be.visible')

    })
  })
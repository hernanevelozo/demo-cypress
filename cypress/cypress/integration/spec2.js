describe('Teste End-to-End', () => {
  it('Teste 1: Visita Página', () => {
      // abre o site
      cy.visit('http://localhost:5000/')
  })
  
  it('Teste 2: Verifica item na página', () => {
      // Verifica se existe o livro desejado
      cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
  })    
  
  it('Teste 3: Calcula Frete', () => {    
      // Calcula o frete
      cy.get('[data-id=3]').within(() => {
          cy.get('input').type('10000-000')
          cy.contains('Calcular Frete').click()
          cy.wait(2000)
      })
      cy.get('.swal-text').should('contain.text', 'O frete é: R$')

      // Fecha o pop-up com o preço do frete
      cy.get('.swal-button').click()
  })

  it('Teste 4: Compra Livro', () => {
      // Seleciona o botão "Comprar" e clica nele
      cy.contains('Comprar').click()

      // Espera que o pop-up seja exibido
      cy.wait(2000)

      // Verifica se o pop-up contém a mensagem de sucesso
      cy.get('.swal-text').should('contain.text', 'Sua compra foi realizada com sucesso')

      // Fecha o pop-up clicando no botão
      cy.get('.swal-button').click()
  })
})

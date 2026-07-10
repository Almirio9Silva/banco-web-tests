describe('Transferencias', () => {
    beforeEach(()=> {
        cy.env(['URL']).then(({ URL }) => {
            cy.visit('/')
            cy.screenshot('apos-visitar-pagina')
        })
        cy.fazerLoginComCredenciaisValidas()
    })
    
    
    it('Deve transferir quando informo dados e valor validos', ()=> {
        
        cy.realizarTransferencia('Rubens Costa', 'Aline Dias', '11')

        cy.verificarMensagemNoToast('Transferência realizada!')
    })


     it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', ()=> {
        
        cy.realizarTransferencia('Rubens Costa', 'Aline Dias', '5000.01')

        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})
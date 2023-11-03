/// <reference types="cypress" />

describe('Deve acessar o site agenda de contatos', () => {
/*    beforeEach(()=> {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    }) */

    
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('[type="text"]').type('Rhuan')
        cy.get('[type="email"]').type('rhuan@email.io')
        cy.get('[type="tel"]').type('+55 (83) 99999-9999')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk').last().should('contain', 'Rhuan')
    })
    
    it('Deve editar o nome do primeiro contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('[type=button].edit').first().click()
        cy.get('[type="text"]').clear().type('Gean')
        cy.get('.alterar').click()
        cy.get('.sc-iAEyYk').first().should('contain', 'Gean')
    })

    it('Deve remover o último  contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('[type=button].delete').last().click()
        cy.get('.sc-iAEyYk').last().should('not.contain', 'Rhuan')
    })
})
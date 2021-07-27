/// <reference types="Cypress" />

const faker = require('faker');

const user = {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.exampleEmail(),
    password: faker.internet.password()
}

describe("Registration", () => {
    it ('Register new user', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type(user.name)
        cy.get('#last-name').type(user.lastname)
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('#password-confirmation').type(user.password)
        cy.get('.form-check-input').click()
        cy.get('.btn-custom').click()
    })
})

describe("Logout", () => {
    it('Logs user out', () => {
        cy.get('.nav-link').should('have.length', 4)
        cy.get('.nav-link').eq(3).click()
    })
})

describe("Login", () => {
    it('Log user in', () => {
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('.btn-custom').click()
    })
})
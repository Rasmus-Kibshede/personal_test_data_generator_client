/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Person generator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Login and logout', () => {

    // cy.contains('button', {  name: /login/i}).click();
    // cy.get('button[type=button]').as('login').click();

    cy.contains(/login/i).click();

    cy.contains(/profile/i);

    cy.contains(/logout/i).click();
  });

  it('Display random person', () => {
    cy.contains(/generate person/i).click();

    cy.get('#personBox').should('be.visible');

    cy.get('#personBox').within(() => {
      cy.contains('Fullname').should('exist');
      cy.contains('Gender').should('exist');
      cy.contains('Date of birth').should('exist');
      cy.contains('CPR').should('exist');
      cy.contains('Phonenumber').should('exist');

      cy.contains('City').should('exist');
      cy.contains('Postal code').should('exist');
      cy.contains('Street').should('exist');
      cy.contains('House number').should('exist');
    });
  });
});

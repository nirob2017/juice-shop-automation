class RegistrationPage {
  visit() {
    cy.visit("/#/register");
  }

  closeDialog() {
    cy.get(".close-dialog").click();
  }

  fillRegistrationForm(email, password) {
    cy.get("#emailControl").type(email);
    cy.get("#passwordControl").type(password);
    cy.get("#repeatPasswordControl").type(password);
    cy.get(".mat-select-placeholder").click();
    cy.get("#mat-option-1 > .mat-option-text").click();
    cy.get("#securityAnswerControl").type("Rose");
  }

  submit() {
    cy.get("#registerButton").click();
  }

  verifyRegistration() {
    cy.get(".mat-simple-snack-bar-content").should(
      "contain",
      "Registration completed successfully. You can now log in."
    );
  }
}

export default RegistrationPage;

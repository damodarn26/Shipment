
const { cssSelectors } = require('../../support/selectors');

describe("UI Validation Tests", function () {

   before('Use of fixtures', function () {
        cy.fixture('testData.json')
        .as('parcelDetails')
        cy.fixture('errorMessages.json')
          .as('errMsgs')
      });

   context('Error Messages', function () {
       it("Verify total weight and cyrillic error messages", function () {

        //Visit the website, enter weight and proceed
        cy.visit("/");
        cy.get(cssSelectors.weightText).click({ multiple: true }).type(this.parcelDetails.parcelWt);
        cy.get(cssSelectors.seePricesBtn).click()
        cy.get(cssSelectors.sendPackage).click();

        //Select the shipment type and delivery method
        cy.get(cssSelectors.pickupPoint).click({force: true});
        cy.get(cssSelectors.novaPoshta).click({force: true});

        //Fill the nearest branch
        cy.get(cssSelectors.nearestBranch).type(this.parcelDetails.nearestBranch.branch).type('{enter}')

        //Fill sender address details
        cy.get(cssSelectors.sender.name).type(this.parcelDetails.sender.name);
        cy.get(cssSelectors.sender.zipCode).type(this.parcelDetails.sender.zipCode);
        cy.get(cssSelectors.sender.terrain).type(this.parcelDetails.sender.terrain);
        cy.get(cssSelectors.sender.street).type(this.parcelDetails.sender.street);
        cy.get(cssSelectors.sender.houseNo).type(this.parcelDetails.sender.houseNo);
        cy.get(cssSelectors.sender.aptNo).type(this.parcelDetails.sender.aptNo);
        cy.get(cssSelectors.sender.phoneNo).type(this.parcelDetails.sender.phoneNo);
        cy.get(cssSelectors.sender.emailAddr).type(this.parcelDetails.sender.emailAddr);

        //Fill recepient address details
        cy.get(cssSelectors.recipient.name).type(this.parcelDetails.recipient.name);
        cy.get(cssSelectors.recipient.phoneNo).type(this.parcelDetails.recipient.phoneNo);
        cy.get(cssSelectors.recipient.emailAddr).type(this.parcelDetails.recipient.emailAddr);

        //Fill customs details for item1
        cy.get(cssSelectors.customs.item1.item).type(this.parcelDetails.customs.item1.item, {force: true});
        cy.get(cssSelectors.customs.item1.quantity).type(this.parcelDetails.customs.item1.quantity, {force: true});
        cy.get(cssSelectors.customs.item1.weight).type(this.parcelDetails.customs.item1.weight, {force: true});
        cy.get(cssSelectors.customs.item1.value).type(this.parcelDetails.customs.item1.value, {force: true});

        //Add a new row for item2
        cy.get(cssSelectors.customs.addItemBtn).click();

        //Fill customs details for item2
        cy.get(cssSelectors.customs.item2.item).type(this.parcelDetails.customs.item2.item, {force: true});
        cy.get(cssSelectors.customs.item2.quantity).type(this.parcelDetails.customs.item2.quantity, {force: true});
        cy.get(cssSelectors.customs.item2.weight).type(this.parcelDetails.customs.item2.weight, {force: true});
        cy.get(cssSelectors.customs.item2.value).type(this.parcelDetails.customs.item2.value, {force: true});

        //Fill the total weight
        cy.get(cssSelectors.customs.totalWeight).clear().type('10');

        //Check the terms of conditions
        cy.get(cssSelectors.termsStatement.first).click({force: true});
        cy.get(cssSelectors.termsStatement.second).click({force: true});
        cy.get(cssSelectors.termsStatement.third).click({force: true});
        cy.get(cssSelectors.termsStatement.fourth).click({force: true});

        //click on next step
        cy.get(cssSelectors.nextStepBtn).click();

        //Verify the error message when total weight of the package is less than the declared weight
        cy.get(cssSelectors.errors.wtError).should('contain', this.errMsgs.wtError);

        //Verify the error message when the recipient name is not in Cyrillic
        cy.get(cssSelectors.errors.cyrillicError).should('contain', this.errMsgs.cyrillicError);

    })
  })
});
const cssSelectors = {

   weightText: 'input[name="parcelWeight"]',
   seePricesBtn: 'form.ng-valid-pattern > .btn',
   sendPackage: ':nth-child(1) > :nth-child(1) > .card > .card-body > .row > .mt-4 > .btn',
   pickupPoint: 'input[id="pickupPoint"]',
   novaPoshta: 'input[id="NOVA_POSHTA"]',
   nearestBranch: 'input[type="search"]',

   sender: {
     name: 'input[id="senderName"]',
     zipCode: 'input[id="senderPostalCode"]',
     terrain: 'input[id="senderCity"]',
     street: 'input[id="senderStreet"]',
     houseNo: 'input[id="senderHouseNumber"]',
     aptNo: 'input[id="senderFlatNumber"]',
     phoneNo:'input[id="senderPhone"]',
     emailAddr:'input[id="senderEmail"]',
   },

   recipient: {
     name:'input[id="receiverName"]',
     phoneNo:'input[id="receiverPhone"]',
     emailAddr:'input[id="receiverEmail"]',
   },

   customs: {
     item1: {
       item:'input[name="parcelItemDescription-0"]',
       quantity: 'input[name="parcelItemQuantity-0"]',
       weight: 'input[name="parcelItemWeight-0"]',
       value: 'input[name="parcelItemValueClientCurrency-0"]',
      },
      item2: {
        item:'input[name="parcelItemDescription-1"]',
        quantity: 'input[name="parcelItemQuantity-1"]',
        weight: 'input[name="parcelItemWeight-1"]',
        value: 'input[name="parcelItemValueClientCurrency-1"]',
      },
      addItemBtn: 'button[type="button"][class="pl-0 btn btn-sm btn-link ng-scope"]',
      totalWeight: 'input[name="parcelWeight2"]'
   },

   termsStatement: {
     first:  'input[id="orderFormRegulation"]',
     second: 'input[id="orderProhibitedGoods"]',
     third:  'input[id="orderFormRegulation2"]',
     fourth: 'input[id="orderFormRegulation3"]'
   },
   
   nextStepBtn: 'button[id="btn_next_step"]',

   orderForm: {
     sender: {
       name: ':nth-child(1) > .card > .card-body > .card-text > p.ng-scope > .calculator-summary__value',
       zipCode: ':nth-child(1) > .card > .card-body > .card-text > :nth-child(2) > .calculator-summary__value',
       terrain: ':nth-child(1) > .card > .card-body > .card-text > :nth-child(3) > .calculator-summary__value',
       street: ':nth-child(1) > .card > .card-body > .card-text > :nth-child(4) > .calculator-summary__value',
       houseNo: ':nth-child(1) > .card > .card-body > .card-text > :nth-child(5) > .calculator-summary__value',
       aptNo: ':nth-child(1) > .card > .card-body > .card-text > :nth-child(6) > .calculator-summary__value',
       phoneNo:':nth-child(1) > .card > .card-body > .card-text > :nth-child(7) > .calculator-summary__value',
       emailAddr:':nth-child(1) > .card > .card-body > .card-text > :nth-child(8) > .calculator-summary__value',
      },

     recipient: {
       name:':nth-child(2) > .card > .card-body > .card-text > p.ng-scope > .calculator-summary__value',
       phoneNo:':nth-child(2) > .card > .card-body > .card-text > :nth-child(7) > .calculator-summary__value',
       emailAddr:':nth-child(2) > .card > .card-body > .card-text > :nth-child(8) > .calculator-summary__value',
      },

      customs: {
        item1: {
          name: 'tbody > :nth-child(1) > :nth-child(2)',
          qty: 'tbody > :nth-child(1) > :nth-child(3)',
          wt: 'tbody > :nth-child(1) > :nth-child(4)',
          val: 'tbody > :nth-child(1) > :nth-child(5)',
      },

        item2: {
          name: 'tbody > :nth-child(2) > :nth-child(2)',
          qty: 'tbody > :nth-child(2) > :nth-child(3)',
          wt: 'tbody > :nth-child(2) > :nth-child(4)',
          val: 'tbody > :nth-child(2) > :nth-child(5)',
      }
    }
   }
};

module.exports = { cssSelectors };

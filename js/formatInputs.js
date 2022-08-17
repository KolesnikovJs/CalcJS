
import { priceFormatter } from "./formatters.js"; 

//Инпуты

const inputCost = document.querySelector('#input-cost');
const inputDownPayment = document.querySelector('#input-downpayment');
const inputTern = document.querySelector('#input-tern');

const form = document.querySelector('#form');
const totalCost = document.querySelector('#total-cost');

//Cleave опции форматирования
const cleavePriceSettings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' '
}


const cleaveCost = new Cleave('#input-cost', cleavePriceSettings);

const cleaveDownPayment = new Cleave('#input-downpayment', cleavePriceSettings);

// Отображение и расчет суммы кредита

calcMortgage();

form.addEventListener('input', function() {

    calcMortgage();
})

function calcMortgage() {
    
    const totalAmount = +cleaveCost.getRawValue() - cleaveDownPayment.getRawValue();

    totalCost.innerText = priceFormatter.format(totalAmount);
}



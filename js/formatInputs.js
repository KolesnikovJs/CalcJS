
//Инпуты

const inputCost = document.querySelector('#input-cost');
const inputDownPayment = document.querySelector('#input-downpayment');
const inputTern = document.querySelector('#input-tern');


//Cleave опции форматирования
const cleavePriceSettings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' '
}


const cleaveCost = new Cleave('#input-cost', cleavePriceSettings);

const cleaveDownPayment = new Cleave('#input-downpayment', cleavePriceSettings);




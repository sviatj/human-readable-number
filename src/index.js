module.exports = function toReadable (number) {
let wordChartNonDivisibleByTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let wordChartDivisibleByTen = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let toWords = '';



if (number < 20) {
toWords = wordChartNonDivisibleByTen[number];
return toWords;
}

else if (number % 10 === 0 && number < 100) {
  let divideByTen = number / 10;
  toWords = wordChartDivisibleByTen[Math.floor(divideByTen)];
  return toWords;
}


else if (number % 100 === 0) {
  let divideByHundred = number / 100;
  toWords = wordChartNonDivisibleByTen[divideByHundred] + ' ' + 'hundred';

  return toWords;
}


else if (number < 100) {

  let divideByTen = number / 10;
  let firstDigit = Math.floor(divideByTen)
  let secondDigit = number % 10;

  let firstDigitWord = wordChartDivisibleByTen[firstDigit];
  let secondDigitWord = wordChartNonDivisibleByTen[secondDigit];

  let toWords = firstDigitWord + ' ' + secondDigitWord;

  return toWords;
  }



  else if (number % 100 < 20) {
    let firstDigit = number / 100;
    let firstDigitWord = wordChartNonDivisibleByTen[Math.floor(firstDigit)]; 

    let divideSecondDigit = number % 100;
    let secondDigitWord = wordChartNonDivisibleByTen[Math.floor(divideSecondDigit)]; 

    toWords = firstDigitWord + ' ' + 'hundred' + ' ' + secondDigitWord;

    return toWords;
  }

  else if (number > 100 && number % 10 !== 0) {

    let divideByHundred = number / 100;
    let firstHundredDigit = Math.floor(divideByHundred);


    let divideSecondDigit = number % 100;
    let result2 = divideSecondDigit / 10;
    let secondHundredDigit = Math.floor(result2);

    let thirdHundredDigit = divideSecondDigit % 10;

  
    let firstDigitWord = wordChartNonDivisibleByTen[firstHundredDigit];
    let secondDigitWord = wordChartDivisibleByTen[secondHundredDigit];
    let thirdDigitWord = wordChartNonDivisibleByTen[thirdHundredDigit]
  
    toWords = firstDigitWord + ' ' + 'hundred' +  ' ' + secondDigitWord +  ' ' + thirdDigitWord;
  
    return toWords;
  }


  else if (number > 100 && number % 10 == 0) {

    let divideByHundred = number / 100;
    let firstHundredDigit = Math.floor(divideByHundred);


    let divideSecondDigit = number % 100;
    let result2 = divideSecondDigit / 10;
    let secondHundredDigit = Math.floor(result2);

  
    let firstDigitWord = wordChartNonDivisibleByTen[firstHundredDigit];
    let secondDigitWord = wordChartDivisibleByTen[secondHundredDigit];

  
    toWords = firstDigitWord + ' ' + 'hundred' +  ' ' + secondDigitWord;
  
    return toWords;
  }

  else {
    return toWords;
  }

}












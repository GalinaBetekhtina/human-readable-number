module.exports = function toReadable (number) {
  let arrNumbers = [
      ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  ];
  let units, dozens, hundreds, numberWithoutUnits;

  if (number >= 0 && number < 10) {
      return arrNumbers[0][number];
  };
  if (number >= 10 && number < 20) {
      units = number % 10;
      return arrNumbers[1][units];
  };
  if (number >= 20 && number < 100) {
      dozens = Math.floor(number / 10);
      units = number % 10;
      
      if(units === 0) {
        return arrNumbers[2][dozens];
      }
      else {
        return arrNumbers[2][dozens] + ' ' + arrNumbers[0][units];
      }
  };
  if (number >= 100 && number < 1000) {
      hundreds = Math.floor(number / 100);
      numberWithoutUnits = Math.floor(number / 10);
      dozens = numberWithoutUnits % 10;
      units = number % 10;

    if (number % 100 === 0) {
        return arrNumbers[0][hundreds] + ' ' + 'hundred';
    }

    if (number % 100 > 9 && number % 100 < 20) {
        return arrNumbers[0][hundreds] + ' hundred ' + arrNumbers[1][units];
    }

    else if (number % 10 === 0) {
        return arrNumbers[0][hundreds] + ' hundred ' + arrNumbers[2][dozens];
    }

    else if (dozens === 0) {
        return arrNumbers[0][hundreds] + ' hundred ' + arrNumbers[0][units];
    }

    else {
        return arrNumbers[0][hundreds] + ' hundred ' + arrNumbers[2][dozens] + " " + arrNumbers[0][units];
    }
  }
};

$(document).ready(function () {

  // <блок функций>
  function getRates() {

    $.get(
      'http://data.fixer.io/api/latest', {
        'access_key': 'b2a27f6a318849d840d24156bbae4ec3',
        'symbols': 'USD, RUB'
      },
      function (response) {

        let rub_eur = response.rates.RUB,
          rub_usd = response.rates.RUB / response.rates.USD;
          ratesRub = {
            'eur': rub_eur,
            'usd': rub_usd
          };

          // console.log(ratesRub)
          return ratesRub
      }
    );

  }

  // </блок функций>

  let rub_eur,
      rub_usd;

  getRates();

  console.log(getRates().ratesRub);

});

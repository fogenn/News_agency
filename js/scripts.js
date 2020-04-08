$(document).ready(function () {

  let rub_eur = 0,
      rub_usd = 0;

  $.get(
    'http://data.fixer.io/api/latest', 
    {
      'access_key': 'b2a27f6a318849d840d24156bbae4ec3',
      'symbols': 'USD, RUB'
    },
    function (response) {

      rub_eur = response.rates.RUB,
      rub_usd = response.rates.RUB / response.rates.USD;

      $('.ads__price-curr__list').append(`
  
        <span class="ads__price-curr__position eur">
          EUR ${rub_eur.toFixed(3)}
        </span>
        <span class="ads__price-curr__position usd">
          USD ${rub_usd.toFixed(3)}
        </span>

      `);

    }

  );

});

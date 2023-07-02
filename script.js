
const input = document.getElementById("ticker");
const stockName = document.getElementById('err');

const btn = document.getElementById("btn");
const boxDiv = document.querySelectorAll('.box')

const enero = document.getElementById('ene');
const febrero = document.getElementById('feb');
const marzo = document.getElementById('mar');
const abril = document.getElementById('abr');
const mayo = document.getElementById('may');
const junio = document.getElementById('jun');
const julio = document.getElementById('jul');
const agosto = document.getElementById('ago');
const septiembre = document.getElementById('sep');
const octubre = document.getElementById('oct');
const noviembre = document.getElementById('nov');
const diciembre = document.getElementById('dic');

// Append class boxpaint in month of stock selected
const appendClass = (...args) => {
  for (let arg of args) arg.classList.add('boxpaint')
  return args;
}

btn.onclick = function (e) {
  e.preventDefault();

  let valor = input.value.toLowerCase();

  function mostrarDividendo() {
    switch (valor) {
      case 'ko':
      case 'cocacola':
      case 'coca-cola':
      case 'coca cola':
        clearAllBackgroundBox()
        appendClass(abril, julio, octubre, diciembre)
        showStockName('Coca-Cola Co');
        break;

      case 'pep':
      case 'pepsi':
        clearAllBackgroundBox()
        appendClass(enero, marzo, junio, septiembre)
        showStockName('PepsiCo Inc');
        break;

      case 'v':
      case 'visa':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName('Visa');
        break;

      case 't':
        clearAllBackgroundBox()
        appendClass(febrero, mayo, agosto, noviembre)
        showStockName('AT&T Inc');
        break;

      case 'xom':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName('Exxon Mobil Corp')
        break;

      case 'vz':
        clearAllBackgroundBox()
        appendClass(febrero, mayo, agosto, noviembre)
        showStockName('Verizon Communications Inc')
        break;

      case 'cvx':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName('Chevron Corp')
        break;

      case 'aapl':
      case 'apple':
        clearAllBackgroundBox()
        appendClass(febrero, mayo, agosto, noviembre)
        showStockName('Apple Inc')
        break;

      case 'mcd':
      case 'mcdonalds':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName('McDonalds')
        break;

      case 'wmt':
      case 'walmart':
        clearAllBackgroundBox()
        appendClass(enero, abril, junio, septiembre)
        showStockName('Wal-Mart')
        break;

      case 'mo':
      case 'altria':
        clearAllBackgroundBox()
        appendClass(enero, abril, julio, octubre)
        showStockName('Altria Group')
        break;

      case 'low':
        clearAllBackgroundBox()
        appendClass(febrero, mayo, agosto, noviembre)
        showStockName("Lowe's Companies Inc")
        break;

      case 'trow':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "T. Rowe Price Group Inc";
        break;

      case 'pfizer':
      case 'pfe':
        clearAllBackgroundBox()

        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Pfizer Inc";
        break;

      case 'pg':
        clearAllBackgroundBox()
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Procter & Gamble Company";
        break;

      case 'vfc':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "VF Corp";
        break;

      case 'wba':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Walgreens Boots Alliance Inc";
        break;

      case 'mmm':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "3M Company";
        break;

      case 'ibm':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "International Business Machines";
        break;

      case 'leg':
        clearAllBackgroundBox()
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Leggett & Platt Incorporated";
        break;

      case 'o':
        clearAllBackgroundBox()
        document.querySelectorAll('#ene, #abr, #jul, #oct, #feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Realty Income Corp";
        break;

      case 'abbv':
        clearAllBackgroundBox()
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "AbbVie Inc";
        break;

      case 'amcr':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Amcor PLC";
        break;

      case 'frt':
        clearAllBackgroundBox()
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Federal Realty Investment Trust";
        break;

      case 'ess':
        clearAllBackgroundBox()
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Essex Property Trust Inc";
        break;

      case 'ben':
        clearAllBackgroundBox()
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Franklin Resources Inc";
        break;

      case 'kmb':
        clearAllBackgroundBox()
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Kimberly-Clark Corp";
        break;

      case 'ed':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Consolidated Edison Inc";
        break;

      case 'swk':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Stanley Black & Decker Inc";
        break;

      case 'mdt':
        clearAllBackgroundBox()
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Medtronic PLC";
        break;

      case 'clx':
        clearAllBackgroundBox()
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Clorox Co";
        break;

      case 'jnj':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Johnson & Johnson";
        break;

      case 'sjm':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "JM Smucker Company";
        break;

      case 'cinf':
        clearAllBackgroundBox()
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Cincinnati Financial Corporation";
        break;

      case 'syy':
        clearAllBackgroundBox()
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Sysco Corporation";
        break;

      case 'cl':
        clearAllBackgroundBox()
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Colgate-Palmolive Company";
        break;

      case 'ato':
        clearAllBackgroundBox()
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Atmos Energy Corporation";
        break;

      case 'cah':
        clearAllBackgroundBox()
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Cardinal Health Inc";
        break;

      case 'apd':
        clearAllBackgroundBox()
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Air Products and Chemicals Inc";
        break;

      /*Acciones que no pagan dividendo*/

      case 'amzn':
      case 'amazon':
        clearAllBackgroundBox()
        stockName.textContent = 'Amazon no paga dividendos';
        break;

      default:
        clearAllBackgroundBox()
        stockName.textContent = 'No stock found';

    }
  }

  mostrarDividendo();
}

// Clear text with name of stock

const clearStockName = () => {
  stockName.textContent = '';
}

// Show text with name of stock

const showStockName = (name) => {
  stockName.textContent = name
}

// Clear all box paint

const clearAllBackgroundBox = () => {
  boxDiv.forEach((element) => {
    element.classList.remove('boxpaint');
  })
  clearBox()
  clearList()
}


const stockList = document.querySelector('.div-list')

// Append list of stocks in selected month

const appendList = () => {

  enero.addEventListener('click', () => {
    clearAllBox()
    clearAllBackgroundBox()
    enero.classList.add('paintMonth')
    stockList.innerHTML = `
    <div class="div_list">
    <span>January:</span>
    <ul class="ul-list">
      <li class="stocks">syy</li>
      <li class="stocks">cinf</li>
    </ul>
    </div>
    `
  })

  febrero.addEventListener('click', () => {
    clearAllBox()
    clearAllBackgroundBox()

    febrero.classList.add('paintMonth')
    stockList.innerHTML = `
    <div class="div_list">
    <span>February:</span>
    <ul class="ul-list">
      <li class="stocks">cl</li>
    </ul>
    </div>
    `
  })
}

appendList()

// Clear stock list
const clearList = () => {
  stockList.innerHTML = ''
}

// Clear color of the box 
const clearBox = () => {
  boxDiv.forEach((element) => {
    element.classList.remove('paintMonth');
  })
}

// Combination of two functions
// Clear the list of stock in months

const clearAllBox = () => {
  clearList()
  clearBox()
  clearStockName()
}

/*Agregar función de hacer click en la card del mes y que figure las acciones que pagan en ese mes
se puede agregar una animación que gire la card*/



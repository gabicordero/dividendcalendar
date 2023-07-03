
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
const eneAprJulOct = () => appendClass(enero, abril, julio, octubre);

const febMayAugNov = () => appendClass(febrero, mayo, agosto, noviembre);

const marJunSepDec = () => appendClass(marzo, junio, septiembre, diciembre);

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
        febMayAugNov()
        showStockName('AT&T Inc');
        break;

      case 'xom':
        clearAllBackgroundBox()
        marJunSepDec()
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
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("T. Rowe Price Group Inc")
        break;

      case 'pfizer':
      case 'pfe':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("Pfizer Inc")
        break;

      case 'pg':
        clearAllBackgroundBox()
        appendClass(febrero, mayo, agosto, noviembre)
        showStockName("Procter & Gamble Company")
        break;

      case 'vfc':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("VF Corp")
        break;

      case 'wba':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("Walgreens Boots Alliance Inc")
        break;

      case 'mmm':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("3M Company")
        break;

      case 'ibm':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("International Business Machines")
        break;

      case 'leg':
        clearAllBackgroundBox()
        appendClass(enero, abril, julio, octubre)
        showStockName("Leggett & Platt Incorporated")
        break;

      case 'o':
        clearAllBackgroundBox()
        appendClass(enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre)
        showStockName("Realty Income Corp")
        break;

      case 'abbv':
        clearAllBackgroundBox()
        appendClass(febrero, mayo, agosto, noviembre)
        showStockName("AbbVie Inc")
        break;

      case 'amcr':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("Amcor PLC")
        break;

      case 'frt':
        clearAllBackgroundBox()
        appendClass(enero, abril, julio, octubre)
        showStockName("Federal Realty Investment Trust")
        break;

      case 'ess':
        clearAllBackgroundBox()
        appendClass(enero, abril, julio, octubre)
        showStockName("Essex Property Trust Inc")
        break;

      case 'ben':
        clearAllBackgroundBox()
        appendClass(enero, abril, julio, octubre)
        showStockName("Franklin Resources Inc")
        break;

      case 'kmb':
        clearAllBackgroundBox()
        appendClass(enero, abril, julio, octubre)
        showStockName("Kimberly-Clark Corp")
        break;

      case 'ed':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("Consolidated Edison Inc")
        break;

      case 'swk':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("Stanley Black & Decker Inc")
        break;

      case 'mdt':
        clearAllBackgroundBox()
        stockName.textContent = "Medtronic PLC";
        appendClass(enero, abril, julio, octubre)
        showStockName("Medtronic PLC")
        break;

      case 'clx':
        clearAllBackgroundBox()
        appendClass(febrero, mayo, agosto, noviembre)
        showStockName("Clorox Co")
        break;

      case 'jnj':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("Johnson & Johnson")
        break;

      case 'sjm':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("JM Smucker Company")
        break;

      case 'cinf':
        clearAllBackgroundBox()
        appendClass(enero, abril, julio, octubre)
        showStockName("Cincinnati Financial Corporation")
        break;

      case 'syy':
        clearAllBackgroundBox()
        appendClass(enero, abril, julio, octubre)
        showStockName("Sysco Corporation")
        break;

      case 'cl':
        clearAllBackgroundBox()
        appendClass(febrero, mayo, agosto, noviembre)
        showStockName("Colgate-Palmolive Company")
        break;

      case 'ato':
        clearAllBackgroundBox()
        appendClass(marzo, junio, septiembre, diciembre)
        showStockName("Atmos Energy Corporation")
        break;

      case 'cah':
        clearAllBackgroundBox()
        eneAprJulOct()
        showStockName("Cardinal Health Inc")

        break;

      case 'apd':
        clearAllBackgroundBox()
        febMayAugNov()
        showStockName("Air Products and Chemicals Inc")
        break;

      /*Acciones que no pagan dividendo*/

      case 'amzn':
      case 'amazon':
        clearAllBackgroundBox()
        showStockName("Amazon no paga dividendos")
        break;

      default:
        clearAllBackgroundBox()
        showStockName("No stock found")
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



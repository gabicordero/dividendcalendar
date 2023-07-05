
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

// Append class 'boxpaint' in the month of stock selected
// Agregar clase 'boxpaint' en el mes de la accion seleccionada
const appendClass = (...args) => {
  for (let arg of args) arg.classList.add('boxpaint')
  return args;
}

const eneAprJulOct = () => appendClass(enero, abril, julio, octubre);

const febMayAugNov = () => appendClass(febrero, mayo, agosto, noviembre);

const marJunSepDec = () => appendClass(marzo, junio, septiembre, diciembre);

// Manejo del envio del formulario al hacer click en el botón
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
// Eliminar text con el nombre de la acción

const clearStockName = () => {
  stockName.textContent = '';
}

// Show text with name of stock
// Mostrar texto con el nombre de la acción
const showStockName = (name) => {
  stockName.textContent = name
}

// Clear all box paint
// Eliminar el color en el div
const clearAllBackgroundBox = () => {
  boxDiv.forEach((element) => {
    element.classList.remove('boxpaint');
  })
  clearBox()
  clearList()
}

// Arrays con las acciones que pagan dividend dependiendo el mes
let january = ['syy', 'cinf', 'ko']
let february = ['aapl', 't']
let march = []

// elemento del DOM donde se mostrará la info del array
const stockList = document.querySelector('.div-list')

// show list of stocks in selected month
// mostrar la lista de acciones del seleccionado
const showStocksInSelectedMonth = (boxDiv) => {
  let array = []

  boxDiv.classList.add('paintMonth')

  switch (boxDiv) {
    case enero:
      array = january
      break;
    case febrero:
      array = february
      break;

    default:
      break;
  }

  // crear elemento ul para luego agregar los elementos <li>
  const ulList = document.createElement('ul')
  ulList.classList.add('ul-list')

  // mostrar nombre del mes según click del usuario
  stockList.innerHTML = `<span>Dividend-paying stocks in ${boxDiv.children[0].outerText}:</span>`

  // recorrer el array para crear elementos li y agregarlos al ulList
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const listItem = document.createElement('li')
    listItem.classList.add('div-list');
    listItem.textContent = element;
    ulList.appendChild(listItem)
  }

  stockList.appendChild(ulList)

}

// agregar escucha de evento click a cada div del mes, limpiar estilos y mostrar acciones en el listado
// const appendList = (...months) => {
//   for (let month of months) {
//     month.addEventListener('click', () => {
//       clearAllBox()
//       clearAllBackgroundBox()
//       showStocksInSelectedMonth(month)
//       return months
//     })
//   }
// }

// appendList(enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre)


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


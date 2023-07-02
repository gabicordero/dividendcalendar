
const input = document.getElementById("ticker");
const stockName = document.getElementById('err');

const btn = document.getElementById("btn");

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

btn.onclick = function (e) {
  e.preventDefault();

  let valor = input.value.toLowerCase();

  function mostrarDividendo() {
    switch (valor) {
      case 'ko':
      case 'cocacola':
      case 'coca-cola':
      case 'coca cola':
        document.querySelectorAll('#abr, #jul, #oct, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });
        document.querySelectorAll('#ene, #feb, #mar, #may, #jun, #ago, #sep, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = 'Coca-Cola Co';
        break;

      case 'pep':
      case 'pepsi':
        document.querySelectorAll('#ene, #mar, #jun, #sep').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #abr, #may, #jul, #ago, #oct, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = 'PepsiCo Inc';
        break;

      case 'v':
      case 'visa':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = 'Visa';
        break;

      case 't':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        });

        stockName.textContent = 'AT&T Inc';
        break;

      case 'xom':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = 'Exxon Mobil Corp';
        break;

      case 'vz':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = 'Verizon Communications Inc';
        break;

      case 'cvx':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = 'Chevron Corp';
        break;

      case 'aapl':
      case 'apple':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = 'Apple Inc';
        break;

      case 'mcd':
      case 'mcdonalds':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = 'McDonald’s';
        break;

      case 'wmt':
      case 'walmart':
        document.querySelectorAll('#ene, #abr, #jun, #sep').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jul, #ago, #oct, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = 'Wal-Mart';
        break;

      case 'mo':
      case 'altria':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = 'Altria Group';
        break;

      case 'low':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Lowe's Companies Inc";
        break;

      case 'trow':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "T. Rowe Price Group Inc";
        break;

      case 'pfizer':
      case 'pfe':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Pfizer Inc";
        break;

      case 'pg':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Procter & Gamble Company";
        break;

      case 'vfc':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "VF Corp";
        break;

      case 'wba':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Walgreens Boots Alliance Inc";
        break;

      case 'mmm':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "3M Company";
        break;

      case 'ibm':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "International Business Machines";
        break;

      case 'leg':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Leggett & Platt Incorporated";
        break;

      case 'o':
        document.querySelectorAll('#ene, #abr, #jul, #oct, #feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        stockName.textContent = "Realty Income Corp";
        break;

      case 'abbv':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "AbbVie Inc";
        break;

      case 'amcr':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Amcor PLC";
        break;

      case 'frt':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Federal Realty Investment Trust";
        break;

      case 'ess':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Essex Property Trust Inc";
        break;

      case 'ben':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Franklin Resources Inc";
        break;

      case 'kmb':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Kimberly-Clark Corp";
        break;

      case 'ed':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Consolidated Edison Inc";
        break;

      case 'swk':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Stanley Black & Decker Inc";
        break;

      case 'mdt':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Medtronic PLC";
        break;

      case 'clx':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Clorox Co";
        break;

      case 'jnj':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Johnson & Johnson";
        break;

      case 'sjm':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "JM Smucker Company";
        break;

      case 'cinf':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Cincinnati Financial Corporation";
        break;

      case 'syy':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Sysco Corporation";
        break;

      case 'cl':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Colgate-Palmolive Company";
        break;

      case 'ato':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Atmos Energy Corporation";
        break;

      case 'cah':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Cardinal Health Inc";
        break;

      case 'apd':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        stockName.textContent = "Air Products and Chemicals Inc";
        break;

      /*Acciones que no pagan dividendo*/

      case 'amzn':
      case 'amazon':
        document.querySelectorAll('.box').forEach((element) => {
          element.classList.remove('boxpaint');
        })
        stockName.textContent = 'Amazon no paga dividendos';
        break;

      default:
        clearAllBackgroundBox()
        stockName.textContent = 'No stock found';

    }
  }

  mostrarDividendo();
}


const clearAllBackgroundBox = () => {
  enero.classList.remove('boxpaint');
  febrero.classList.remove('boxpaint');
  marzo.classList.remove('boxpaint');
  abril.classList.remove('boxpaint');
  mayo.classList.remove('boxpaint');
  junio.classList.remove('boxpaint');
  julio.classList.remove('boxpaint');
  agosto.classList.remove('boxpaint');
  septiembre.classList.remove('boxpaint');
  octubre.classList.remove('boxpaint');
  noviembre.classList.remove('boxpaint');
  diciembre.classList.remove('boxpaint');
}


const stockList = document.querySelector('.div-list')

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

const clearList = () => {
  stockList.innerHTML = ''
}

const clearBox = () => {
  enero.classList.remove('paintMonth');
  febrero.classList.remove('paintMonth');
  marzo.classList.remove('paintMonth');
  abril.classList.remove('paintMonth');
  mayo.classList.remove('paintMonth');
  junio.classList.remove('paintMonth');
  julio.classList.remove('paintMonth');
  agosto.classList.remove('paintMonth');
  septiembre.classList.remove('paintMonth');
  octubre.classList.remove('paintMonth');
  noviembre.classList.remove('paintMonth');
  diciembre.classList.remove('paintMonth');
}

const clearAllBox = () => {
  clearList()
  clearBox()
}

/*Agregar función de hacer click en la card del mes y que figure las acciones que pagan en ese mes
se puede agregar una animación que gire la card*/



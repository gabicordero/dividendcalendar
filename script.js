
const input = document.getElementById("ticker");
const error = document.getElementById('err');

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

        error.textContent = 'Coca-Cola Co';
        break;

      case 'pep':
      case 'pepsi':
        document.querySelectorAll('#ene, #mar, #jun, #sep').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #abr, #may, #jul, #ago, #oct, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = 'PepsiCo Inc';
        break;

      case 'v':
      case 'visa':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = 'Visa';
        break;

      case 't':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        });

        error.textContent = 'AT&T Inc';
        break;

      case 'xom':
        const xomadd = document.querySelectorAll('#mar, #jun, #sep, #dic');
        xomadd.forEach((element) => {
          element.classList.add('boxpaint');
        });

        const xomrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov');
        xomrem.forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = 'Exxon Mobil Corp';
        break;

      case 'vz':
        document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = 'Verizon Communications Inc';
        break;

      case 'cvx':
        document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = 'Chevron Corp';
        break;

      case 'aapl':
      case 'apple':
        const aapladd = document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const aaplrem = document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = 'Apple Inc';
        break;

      case 'mcd':
      case 'mcdonalds':
        const mcdadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const mcdrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = 'McDonald’s';
        break;

      case 'wmt':
      case 'walmart':
        const wmtadd = document.querySelectorAll('#ene, #abr, #jun, #sep').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const wmtrem = document.querySelectorAll('#feb, #mar, #may, #jul, #ago, #oct, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = 'Wal-Mart';
        break;

      case 'mo':
      case 'altria':
        const moadd = document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const morem = document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = 'Altria Group';
        break;

      case 'low':
        const lowadd = document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const lowrem = document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Lowe's Companies Inc";
        break;

      case 'trow':
        const trowadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const trowrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "T. Rowe Price Group Inc";
        break;

      case 'pfizer':
      case 'pfe':
        const pfiadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const pfirem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Pfizer Inc";
        break;

      case 'pg':
        const pgadd = document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const pgrem = document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Procter & Gamble Company";
        break;

      case 'vfc':
        const vfcadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const vfcrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "VF Corp";
        break;

      case 'wba':
        const wbaadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const wbarem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Walgreens Boots Alliance Inc";
        break;

      case 'mmm':
        const mmmadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const mmmrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "3M Company";
        break;

      case 'ibm':
        const ibmadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const ibmrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "International Business Machines";
        break;

      case 'leg':
        const legadd = document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const legrem = document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Leggett & Platt Incorporated";
        break;

      case 'o':
        const oadd = document.querySelectorAll('#ene, #abr, #jul, #oct, #feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const orem = document.querySelectorAll('').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Realty Income Corp";
        break;

      case 'abbv':
        const abbvadd = document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const abbvrem = document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "AbbVie Inc";
        break;

      case 'amcr':
        const amcradd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const amcrrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Amcor PLC";
        break;

      case 'frt':
        const frtadd = document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const frtrem = document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Federal Realty Investment Trust";
        break;

      case 'ess':
        const essadd = document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const essrem = document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Essex Property Trust Inc";
        break;

      case 'ben':
        const benadd = document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const benrem = document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Franklin Resources Inc";
        break;

      case 'kmb':
        const kmbadd = document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const kmbrem = document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Kimberly-Clark Corp";
        break;

      case 'ed':
        const edadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const edrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Consolidated Edison Inc";
        break;

      case 'swk':
        const swkadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const swkrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Stanley Black & Decker Inc";
        break;

      case 'mdt':
        const mdtadd = document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const mdtrem = document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Medtronic PLC";
        break;

      case 'clx':
        const cloroxadd = document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const cloroxrem = document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Clorox Co";
        break;

      case 'jnj':
        const jnjadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const jnjrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Johnson & Johnson";
        break;

      case 'sjm':
        const sjmadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const sjmrem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "JM Smucker Company";
        break;

      case 'cinf':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Cincinnati Financial Corporation";
        break;

      case 'syy':
        document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Sysco Corporation";
        break;

      case 'cl':
        const cladd = document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const clrem = document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Colgate-Palmolive Company";
        break;

      case 'ato':
        const atoadd = document.querySelectorAll('#mar, #jun, #sep, #dic').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const atorem = document.querySelectorAll('#ene, #feb, #abr, #may, #jul, #ago, #oct, #nov').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Atmos Energy Corporation";
        break;

      case 'cah':
        const cahadd = document.querySelectorAll('#ene, #abr, #jul, #oct').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const cahrem = document.querySelectorAll('#feb, #mar, #may, #jun, #ago, #sep, #nov, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Cardinal Health Inc";
        break;

      case 'apd':
        const apdadd = document.querySelectorAll('#feb, #may, #ago, #nov').forEach((element) => {
          element.classList.add('boxpaint');
        });

        const apdrem = document.querySelectorAll('#ene, #mar, #abr, #jun, #jul, #sep, #oct, #dic').forEach((element) => {
          element.classList.remove('boxpaint');
        })

        error.textContent = "Air Products and Chemicals Inc";
        break;

      /*Acciones que no pagan dividendo*/

      case 'amzn':
      case 'amazon':
        const amznrem = document.querySelectorAll('.box').forEach((element) => {
          element.classList.remove('boxpaint');
        })
        error.textContent = 'Amazon no paga dividendos';
        break;

      default:
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
        error.textContent = 'No stock found';

    }
  }

  mostrarDividendo();
}



const appendList = () => {
  const stockList = document.querySelector('.div-list')
  enero.addEventListener('click', () => {
    stockList.innerHTML = `
    <span>January:</span>
    <ul class="ul-list">
      <li class="stocks">ko</li>
      <li class="stocks">appl</li>
    </ul>
    `
  })
}

appendList()

/*Agregar función de hacer click en la card del mes y que figure las acciones que pagan en ese mes
se puede agregar una animación que gire la card*/



// Variables para guardar la información de dividendos
let dividendMonths = {
    "Enero": false,
    "Febrero": false,
    "Marzo": false,
    "Abril": false,
    "Mayo": false,
    "Junio": false,
    "Julio": false,
    "Agosto": false,
    "Septiembre": false,
    "Octubre": false,
    "Noviembre": false,
    "Diciembre": false,
  };
  
  // Función para obtener la información de dividendos de una acción
  async function getDividendInfo(ticker) {
    // Usar una API de finanzas para obtener la información de dividendos
    const response = await fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${ticker}`);
    const data = await response.json();
  
    // Inicializar todos los meses como false
    for (let month in dividendMonths) {
      dividendMonths[month] = false;
    }
  
    // Guardar la información de dividendos en un objeto
    if (data.dividends) {
      data.dividends.forEach(dividend => {
        const date = new Date(dividend.exDate);
        const month = date.toLocaleString("default", {month: "long"});
        dividendMonths[month] = true;
      });
    }
  
    return dividendMonths;
  }
  
  // Función para actualizar los elementos del mes en el HTML
  function updateCalendar(dividendMonths) {
    // Recorrer todos los meses
    for (let month in dividendMonths) {
      // Obtener el elemento del mes
      const monthElement = document.getElementById(month.toLowerCase());
      // Si el mes tiene un dividendo programado
      if (dividendMonths[month]) {
        // Agregar la clase "dividend-month" al elemento del mes
        monthElement.classList.add("dividend-month");
      } else {
        // Quitar la clase "dividend-month" del elemento del mes
        monthElement.classList.remove("dividend-month");
      }
    }
  }
  
  // Obtener el botón de enviar
  let btn = document.getElementById("btn");
  
  // Agregar un evento al botón de enviar para obtener la información de dividendos
  btn.addEventListener("click", async function() {
    // Obtener el valor del ticker
    const ticker = document.getElementById("ticker").value;
  
    // Obtener la información de dividendos
    dividendMonths = await getDividendInfo(ticker);
  
    // Actualizar los elementos del mes en el HTML
    updateCalendar(dividendMonths);
  });  
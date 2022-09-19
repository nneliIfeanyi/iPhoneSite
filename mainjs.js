/*const select = document.querySelector('.w3-select');
const para = document.querySelector('h3');

select.addEventListener('change', priceList);

function priceList() {
  const choice = select.value;

  if (choice === 'iPhone 7plus') {
    para.textContent = 'Price is 12k only';
  }
   else if (choice === 'iPhone 7') {
    para.textContent = 'Screen replacement price is #10,000 only.';
  }
   else if (choice === 'iPhone 6g') {
    para.textContent = 'Screen replacement price is #9,000 only.';
  }
   else if (choice === 'iPhone 6s') {
    para.textContent = 'Screen replacement price is #9,500 only.';
  }
   else {
    para.textContent = '';
  }
}*/
//TheAccordionScript
  function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  

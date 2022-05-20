let buyer = document.getElementById('buyer_m')
buyer.addEventListener('click', function () {      
   var ns=buyer.nextElementSibling;
   ns.classList.toggle('close');
   buyer.querySelector('.arrow').classList.toggle('rotate');
})

let seller = document.getElementById('seller_m')
seller.addEventListener('click', function () {      
   var ns=seller.nextElementSibling;
   ns.classList.toggle('close');
   seller.querySelector('.arrow').classList.toggle('rotate');
})
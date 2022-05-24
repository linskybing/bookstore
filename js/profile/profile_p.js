
let buyer = document.getElementById('buyer_m')
buyer.addEventListener('click', function () {
   var ns = buyer.nextElementSibling;
   ns.classList.toggle('close');
   buyer.querySelector('.arrow').classList.toggle('rotate');
})

let seller = document.getElementById('seller_m')
seller.addEventListener('click', function () {
   var ns = seller.nextElementSibling;
   ns.classList.toggle('close');
   seller.querySelector('.arrow').classList.toggle('rotate');
})

document.getElementById('filein').addEventListener('change', function (e) {
   view_upload_image(e);
   Uploadimg();
})


function view_upload_image(e) {
   e = e.target;
   var x = new FileReader;
   x.readAsDataURL(e.files[0]);

   x.onloadend = function () {
      document.querySelector('.membericon .icon img').src = this.result;
   }
}
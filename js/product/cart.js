
var cartlist;
var total = 0;
async function cartjsinit() {
    var data;
    await GetUserCart().then(r => data = r);
    if (data.hasOwnProperty('data')) {
        cartlist = data.data;
        console.log(data.data);
        loadcart();
    }
}
cartjsinit();
//載入購物車列表
function loadcart() {
    let table = document.querySelector('.cart-table tbody');
    let totaltable = document.querySelector('.total-table');
    if (cartlist.length > 0) {
        let div = document.createElement('div');
        div.classList.add('header');
        div.innerHTML = `       
            <h2>購物車總計</h2>       
        `;
        totaltable.appendChild(div);
        for (i = 0; i < cartlist.length; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                        <td class="product-remove">
                                <span class="xmark">
                                    <i class="fa-solid fa-xmark"></i>
                                </span>

                            </td>
                            <td class="img-block">
                                <img src="${(cartlist[i].Image != null) ? "http://localhost:8080/images/Products/" + cartlist[i].Image : "https://imagepng.org/wp-content/uploads/2019/08/google-chrome-icon-1.png"}"
                                    alt="">
                            </td>
                            <td class="product-name">
                                ${cartlist[i].Name}
                            </td>
                            <td class="product-price">
                                ${cartlist[i].Price} NT
                            </td>
                            <td class="product-quantity">
                                <div class="count">
                                    <div id="minus"><i class="fa-solid fa-arrow-down"></i></div>
                                    <input type="text" value="${cartlist[i].Count}">
                                    <div id="add"><i class="fa-solid fa-arrow-up"></i></div>
                                </div>
                            </td>
                            <td class="product-subtotal">
                                ${cartlist[i].Price * cartlist[i].Count}
                            </td>                 
            `;
            total += cartlist[i].Price * cartlist[i].Count;
            let a = tr.querySelector('.count input');
            let Inventory = cartlist[i].Inventory;
            let subtotale = document.createElement('div');
            let price = cartlist[i].Price;
            let id = i;
            subtotale.classList.add('subtotal');
            subtotale.id = id;
            subtotale.innerHTML = `
                <div>小計</div>
                <div>${cartlist[i].Price * cartlist[i].Count} NT</div>
            `;
            totaltable.appendChild(subtotale);
            tr.querySelector('.count input').addEventListener('change', function () {
                if (a.value > Inventory) {
                    a.value = Inventory;
                }
                let subtotal = tr.querySelector('.product-subtotal');
                let count = tr.querySelector('.count input').value;
                subtotal.innerHTML = count * price;
                document.getElementById(id).innerHTML = `
                <div>小計</div>
                <div>${count * price} NT</div>
                `;
                counttotal();
            });
            tr.querySelector('#add').addEventListener('click', function () {
                if (a.value < Inventory) {
                    a.value = Number(a.value) + 1;
                    total += price;
                }
                let subtotal = tr.querySelector('.product-subtotal');
                let count = tr.querySelector('.count input').value;
                subtotal.innerHTML = count * price;
                document.getElementById(id).innerHTML = `
                <div>小計</div>
                <div>${count * price} NT</div>
                `;
                counttotal();
            });
            tr.querySelector('#minus').addEventListener('click', function () {
                if (a.value > 1) {
                    a.value -= 1;
                    total -= price;
                }
                let subtotal = tr.querySelector('.product-subtotal');
                let count = tr.querySelector('.count input').value;
                subtotal.innerHTML = count * price;
                document.getElementById(id).innerHTML = `
                <div>小計</div>
                <div>${count * price} NT</div>
                `;
                counttotal();
            });
            tr.querySelector('.xmark').addEventListener('click', async function () {
                await DeleteCartItem(cartlist[id].ProductId);
                let count = tr.querySelector('.count input').value;
                total -= count * price;
                tr.remove();
                document.getElementById(id).remove();
                if (document.querySelectorAll('.subtotal').length == 0) {
                    document.querySelector('.sum').remove();
                }
            })
            table.appendChild(tr);
        }
        totaltable.innerHTML = totaltable.innerHTML + `
                <div class="subtotal sum">                   
                </div>
                <button class="submit">前往結帳</button>
            `;
        counttotal();
    }
}

function counttotal() {

    document.querySelector('.total-table .sum').innerHTML = `
            <div>總計</div>
            <div>${total} NT</div>
        `;

}
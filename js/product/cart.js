
var cartlist;
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

    if (cartlist.length > 0) {
        for (i = 0; i < cartlist.length; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                        <td class="product-remove">
                                <span class="xmark">
                                    <i class="fa-solid fa-xmark"></i>
                                </span>

                            </td>
                            <td class="img-block">
                                <img src="${(cartlist[i].Image != null) ? "http://localhost:8080/images/Products/" + cartlist[i].Image: "https://imagepng.org/wp-content/uploads/2019/08/google-chrome-icon-1.png"}"
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
            tr.querySelector('.count input').addEventListener('change', function () {
                tr.getElementById('add').addEventListener('click', function () {
                    if (a.value < productdata.Inventory) {
                        a.value = Number(a.value) + 1;
                    }
                })
                tr.getElementById('minus').addEventListener('click', function () {
                    if (a.value > 0) {
                        a.value -= 1;
                    }
                })
                let a = tr.querySelector('.count input');
                if (a.value > productdata.Inventory) {
                    a.value = productdata.Inventory;
                }
                let subtotal = tr.querySelector('.product-subtotal');
                let count = tr.querySelector('.count input').value;
                subtotal.innerHTML = count * cartlist[i].Price;
            });
            table.appendChild(tr);
        }
    }
}
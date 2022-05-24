var category;
var productlist;
var templist;
var nowpage = 1;
var totalpage;
var productcount;
var tempcount;
var pageitem = 10;
getcategory();
getproduct();
async function getcategory() {
    var data;
    await GetTag().then(r => data = r);

    if (data.hasOwnProperty('data')) {
        category = data.data;
    }
    Object.entries(category).forEach((key, value) => {
        var li = document.createElement('li');
        li.innerHTML = `
       ${category[value].Tag}<span class="num">${category[value].Count}</span>
       `;
        document.querySelector('.category ul').appendChild(li);
    })
}

async function getproduct() {
    var data;
    await GetAllProduct().then(r => data = r);

    productlist = data.data;
    productcount = productlist.length;
    templist = productlist;
    tempcount = productcount;
    console.log(productlist);
    paging();
}

//分頁
function paging() {
    totalpage = Math.ceil((tempcount / pageitem));
    let page = document.querySelector('.page ul');
    page.innerHTML = ``;
    console.log(nowpage);
    for (i = -6; i < tempcount + 5; i++) {
        if (i > 0 && i <= totalpage) {
            if (nowpage == 1 && i == 1) {
                let li = document.createElement('li');
                li.classList.add("no-drap");
                li.innerHTML = `                
                    <span>
                        <i class="fa-solid fa-angle-left">
                        </i>
                    </span>               
                `;
                page.appendChild(li);
            }
            else if (i == 1) {
                let li = document.createElement('li');
                li.innerHTML = `                
                    <span id="pre">
                        <i class="fa-solid fa-angle-left">
                        </i>
                    </span>               
                `;
                page.appendChild(li);
                document.getElementById('pre').addEventListener('click', function () {
                    nowpage = nowpage - 1;
                    paging();
                })
            }
            if (i == nowpage) {
                let li = document.createElement('li');
                li.innerHTML = `                
                <span>
                    <li class="active"><span>${i}</span></li>
                </span>               
                 `;
                page.appendChild(li);
            }
            else {
                let li = document.createElement('li');
                li.innerHTML = `                
                <span>
                    <li id="page-${i}"><span>${i}</span></li>
                </span>               
                 `;
                page.appendChild(li);                
                document.getElementById('page-' + i).addEventListener('click', function () {
                    nowpage = this.id[this.id.indexOf('-')+1];
                    paging();
                })
            }
            if (nowpage == totalpage && i == totalpage) {
                let li = document.createElement('li');
                li.classList.add("no-drap");
                li.innerHTML = `                
                    <span>
                        <i class="fa-solid fa-angle-right">
                        </i>
                    </span>               
                `;
                page.appendChild(li);
            }
            else if (i == totalpage) {
                let li = document.createElement('li');
                li.innerHTML = `                
                    <span id="next">
                        <i class="fa-solid fa-angle-right">
                        </i>
                    </span>               
                `;
                page.appendChild(li);

                document.getElementById('next').addEventListener('click', function () {
                    nowpage += 1;
                    paging();
                })
            }
        }
    }
    sortbyprice('DESC');
    pageproduct(templist);
}
//分頁資料
function pageproduct(templist) {
    let productblock = document.querySelector('.product');
    productblock.innerHTML = ``;
    for (i = (nowpage - 1) * pageitem; i < nowpage * pageitem; i++) {
        if (i < tempcount) {
            let nowdata = templist[i];
            let div = document.createElement('div');
            div.classList.add('item');
            div.innerHTML = `
                        <a href="product.html?id=${nowdata.ProductId}">
                            <img src="${(nowdata.Image != null) ? "http://localhost:8080/images/Products/" + nowdata.Image[0].Image : "https://imagepng.org/wp-content/uploads/2019/08/google-chrome-icon-1.png"}"
                                alt="" width="250px" height="250px">
                        </a>
                        <div class="detail">
                            <div class="p-title">${nowdata.Name}</div>
                            <div class="p-category">
                            ${nowdata.Description}
                                <span class="cart">
                                    <i class="fa-solid fa-cart-arrow-down"></i>
                                </span>
                            </div>
                            <div class="p-price">${nowdata.Price} NT</div>
                        </div>
            `;
            productblock.appendChild(div);
        }
    }
}

function sortbyprice(type) {
    templist = productlist;
    for (i = 0; i < templist.length; i++) {
        for (j = 0; j < templist.length - i - 1; j++) {
            if (sort(type, templist[j].Price, templist[j + 1].Price)) {
                var temp = templist[j];
                templist[j] = templist[j + 1]
                templist[j + 1] = temp;
            }
        }
    }
}

function sort(type, a, b) {
    let btn = false;
    if (type = 'DESC') {
        if (a <= b) {
            btn = true;
        }
    }
    else {
        if (a >= b) {
            btn = true;
        }
    }
    return btn;
}




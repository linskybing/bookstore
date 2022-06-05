var productdata;
async function geturl() {
    var url = location.href;

    if (url.indexOf('?') != -1) {
        var id = "";
        var ary = url.split('?')[1].split('&');

        for (i = 0; i <= ary.length - 1; i++) {
            if (ary[i].split('=')[0] == 'id') {
                id = ary[i].split('=')[1];
                await GetSingle(id).then(r => productdata = r);
                console.log(productdata);
                loadingpage();
                getscore();
                createtag();
                createreview();
                seller_info();
                product_img_info();
                setaddandminus();
                cartbtn();
            }
        }
    }
}

function loadingpage() {
    document.querySelector('.title #name').innerHTML = productdata.Name;
    document.querySelector('.title .price p').innerHTML = productdata.RentPrice + " NT / 天";
    document.querySelector('.description p').innerHTML = productdata.Description;
    document.querySelector('.sku span span').innerHTML = productdata.MaxRent + " 天";
}

function getscore() {
    var count = 0;
    var scoretotal = 0;
    var data = productdata.Review;
    if (data) {
        for (i = 0; i < data.length; i++) {
            scoretotal += data[i].CustomerScore;
            count += 1;
        }
    }
    var score = Math.floor(scoretotal / count);
    for (i = 0; i < score; i++) {
        let star = document.createElement('i');
        star.classList.add('fa-solid');
        star.classList.add('fa-star');
        document.querySelector('.price span').appendChild(star);
    }
    let span = document.createElement('span');
    span.innerHTML = `（共有${count}則評論 )`;
    document.querySelector('.price span').append(span);
}

function createtag() {
    var data = productdata.Category;
    if (data) {
        let list = document.querySelector('.category-list span');
        for (i = 0; i < data.length; i++) {
            let e = document.createElement('span');
            e.classList.add('tag');
            e.innerHTML = '#' + data[i].Tag;
            e.style.background = data[i].Color;
            list.appendChild(e);
        }
    }
}


function createreview() {
    var data = productdata.Review;
    if (data) {
        for (i = 0; i < data.length; i++) {
            let div = document.createElement('div');
            div.classList.add('review-content');
            div.innerHTML = `
                <div class="icon">
                    <img src="${(data[i].Image != null) ? "http://localhost:8080/images/Members/" + data[i].Image : "https://imagepng.org/wp-content/uploads/2019/08/google-chrome-icon-1.png"}" alt="">
                </div>
                <div class="message">
                    <span class="username">
                        <div>
                            ${data[i].Name} － <span class="date">${data[i].CustomerTime}</span>
                        </div>
                        <div class="score">
                                   
                        </div>
                    </span>
                    <span class="text">
                        ${data[i].CustomerReview}
                    </span>
                </div>
            `;
            for (j = 0; j < data[i].CustomerScore; j++) {
                let star = document.createElement('i');
                star.classList.add('fa-solid');
                star.classList.add('fa-star');
                div.querySelector('.score').appendChild(star);
            }
            document.querySelector('.review').appendChild(div);
        }
    }
}

function seller_info() {
    let s = document.querySelector('.seller-content');
    if (productdata.SellerImg != null) {
        let icon = s.querySelector('.icon img').src = 'http://localhost:8080/images/Members/' + productdata.SellerImg;
    }
    s.querySelector('.username').innerHTML = `
    ${productdata.SellerName}
    <span class="online">
        ${(productdata.SellerActive != 1) ? "下線" : "在線中"}
    <span class="${(productdata.SellerActive != 1) ? "offline-label" : "online-label"}"><i class="fas fa-circle"></i></span>
    </span>
    `;
    s.querySelector('.chat').addEventListener('click', function () {
        var token = getCookie('token');
        if (token.length > 0) {
            CreateChatroom(productdata.Seller);
            chatroom();
            document.querySelector('.wrapper').classList.toggle('close');
            isrefreshuserlist = true;
        }

        console.log('與我聯絡')
    })
}

function product_img_info() {
    let im = document.querySelector('.product-img-block');
    var data = productdata.Image;
    if (data) {
        let img = document.createElement('img');
        img.src = 'http://localhost:8080/images/Products/' + data[0].Image;
        im.appendChild(img);
        let div = document.createElement('div');
        div.classList.add('select');
        for (i = 1; i < data.length; i++) {
            let img = document.createElement('img');
            img.src = 'http://localhost:8080/images/Products/' + data[i].Image;
            div.appendChild(img);
        }
        im.appendChild(div);
    }

}

function setaddandminus() {
    let a = document.querySelector('.count input')
    document.getElementById('add').addEventListener('click', function () {
        if (a.value < productdata.MaxRent) {
            a.value = Number(a.value) + 1;
        }
    })
    document.getElementById('minus').addEventListener('click', function () {
        if (a.value > 0) {
            a.value -= 1;
        }
    })
    a.addEventListener('change', function () {
        if (a.value > productdata.MaxRent) {
            a.value = productdata.MaxRent;
        }
    })
}

function cartbtn() {
    let a = document.querySelector('.count input')
    let countdiv = document.querySelector('.purchase .count');
    let addcart = document.querySelector('.addtocart');
    let removecart = document.querySelector('.removecart');

    if (productdata.InCart != 0) {
        removecart.classList.remove('hidden');
        countdiv.classList.add('hidden');
        addcart.classList.add('hidden');
    }
    else {
        removecart.classList.add('hidden');
        countdiv.classList.remove('hidden');
        addcart.classList.remove('hidden');
    }
    addcart.addEventListener('click', async function () {
        if (money < productdata.Price) {
            displaypaymodal(productdata);
        }
        else {
            await AddtoCart(productdata.ProductId, a.value, 'Rent');
            var incart;
            await InCart(productdata.ProductId).then(r => incart = r);
            if (incart) {
                removecart.classList.remove('hidden');
                countdiv.classList.add('hidden');
                addcart.classList.add('hidden');
            }
        }

    })


    removecart.addEventListener('click', async function () {
        await DeleteCartItem(productdata.ProductId);
        var incart;
        await InCart(productdata.ProductId).then(r => incart = r);
        if (!incart) {
            removecart.classList.add('hidden');
            countdiv.classList.remove('hidden');
            addcart.classList.remove('hidden');
        }
    })

}
geturl();
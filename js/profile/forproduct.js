
var prodcutonlist;
var onIndex = 0;
var prodcutofflist;
var offIndex = 0;
var replenishment;
var repIndex = 0;
var nowIndex = 0;
var nowType = 'on';
var tempdata = {}

//載入商品資運
function loadonproduct() {
    GetOnProduct('null');

}



let checkbox_all = document.querySelector('.checkbox_head input');
checkbox_all.addEventListener('click', function () {
    checkboxes = document.getElementsByName('product');

    checkboxes.forEach(element => {
        element.checked = checkbox_all.checked;
    });
});

let modal = document.querySelector('.modal');


modal.addEventListener('click', function (e) {
    let element = e.target;
    if (element == modal) {
        modal.classList.toggle('hidden');
    }
})

let insert = document.querySelector('.insert');
insert.addEventListener('click', function () {
    modal.classList.toggle('hidden');
    displaymodal();
})


//顯示modal內容
let modal_content = document.querySelector('.modal-content-2')
function displaymodal() {
    modal.innerHTML = `
    <div class="modal-content-2">
        <div class="header">
            <div class="close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="modal-title">
                <h3>上架商品</h3>
            </div>
            <div class="menu">
                <ul>
                    <li class="active">商品資訊</li>                  
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="formgroup">
                <label for="editname">商品名稱</label>
                <input type="text" id="editname">
            </div>
            <div class="formgroup">
                <label for="editprice">商品價格</label>
                <input type="text" id="editprice">
            </div>
            <div class="formgroup">
                <label for="store">　　庫存</label>
                <input type="text" id="store">
            </div>
            <div class="formgroup">
                <label for="description">商品敘述</label>
                <textarea id="description"></textarea>
            </div>            
        </div>
        <div class="footer">
            <button class="submit">
                上架商品
            </button>
            <span class="cancel">取消</span>
        </div>
    </div>
    `;

    closemodal();
    modal_content_event('.modal .modal-content-2');
}
//取得資料陣列
function GetDataArray(type) {
    var data;
    if (type == 'on') {
        data = prodcutonlist;
    }
    else if (type == 'off') {
        data = prodcutofflist;
    }
    else {
        data = replenishment;
    }
    return data;
}

//修改資訊modal
function editmodal(id, type) {
    var data;
    data = GetDataArray(type);
    nowIndex = id;
    nowType = type;
    modal.innerHTML = `
    <div class="modal-content-2">
        <div class="header">
            <div class="close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="modal-title">
                <h3>修改商品</h3>
            </div>
            <div class="menu">
                <ul>
                    <li class="active" id="product">商品資訊</li>
                    <li id="rent">租借資訊</li>
                    <li id="photo">商品圖片</li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="formerror">                    
            </div>
            <div class="formgroup">
                <label for="editname">商品名稱<span class="must">*</span></label>
                <input type="text" id="editname" value="${data[id].Name}">
            </div>
            <div class="formgroup">
                <label for="editprice">商品價格<span class="must">*</span></label>
                <input type="text" id="editprice" value="${data[id].Price}">
            </div>
            <div class="formgroup">
                <label for="store">　　庫存<span class="must">*</span></label>
                <input type="text" id="store" value="${data[id].Inventory}">
            </div>
            <div class="formgroup">
                <label for="description">商品敘述<span class="must">*</span></label>
                <textarea id="description">${data[id].Description}</textarea>
            </div>            
        </div>
        <div class="footer">
            <button class="submit now" id="submit_p">
                更新資料
            </button>
            <button class="submit hidden" id="submit_r">
                更新資料
            </button>
            <button class="submit hidden" id="submit_i">
                更新資料
            </button>
            <span class="cancel">取消</span>
        </div>
    </div>
    `;

    closemodal();
    modal_content_event('.modal .modal-content-2');
    modal_rent_info();
    modal_image_info();
    sendeditdata();
}

//送出修改資料
function sendeditdata() {
    let btn = document.querySelector('#submit_p');
    btn.addEventListener('click', async function () {
        var data;
        data = GetDataArray(nowType);
        let Name = document.querySelector('#editname').value;
        let Price = document.querySelector('#editprice').value;
        let Inventory = document.querySelector('#store').value;
        let Description = document.querySelector('#description').value;
        tempdata = Object.assign(tempdata, { 'Name': Name });
        tempdata = Object.assign(tempdata, { 'Price': Price });
        tempdata = Object.assign(tempdata, { 'Inventory': Inventory });
        tempdata = Object.assign(tempdata, { 'Description': Description });
        if (!checkRate(parseInt(tempdata.Price)) || !checkRate(parseInt(tempdata.Inventory))) {
            numbererror()
        }
        else if (validate(tempdata)) {
            UpdateInfo(tempdata);
        }
        else {
            document.querySelector('.formerror').classList.add('erroractive');
            document.querySelector('.formerror').innerHTML = '必填資料不可為空';
        }

    })
    document.getElementById('submit_r').addEventListener('click', async function () {
        let isrent = document.getElementById('rentbox');
        if (isrent.checked) {
            let maxrent = document.querySelector('#editrent').value;
            let rentpriceedit = document.querySelector('#rentprice').value;
            tempdata = Object.assign(tempdata, { 'Rent': 1 });
            tempdata = Object.assign(tempdata, { 'MaxRent': maxrent });
            tempdata = Object.assign(tempdata, { 'RentPrice': rentpriceedit });
            if (!checkRate(maxrent) || !checkRate(rentpriceedit)) {
                document.querySelector('.formerror').classList.add('erroractive');
                document.querySelector('.formerror').innerHTML = '數量欄位必須為正整數且大於0';
            }
            else {
                UpdateInfo(tempdata);
            }
        } else {
            let maxrent = document.querySelector('#editrent').value;
            let rentpriceedit = document.querySelector('#rentprice').value;
            tempdata = Object.assign(tempdata, { 'Rent': 0 });
            tempdata = Object.assign(tempdata, { 'MaxRent': 0 });
            tempdata = Object.assign(tempdata, { 'RentPrice': 0 });
            UpdateInfo(tempdata);

        };
    })
}

//送出資訊
async function UpdateInfo(tempdata) {
    var data;
    data = GetDataArray(nowType);
    document.querySelector('.formerror').classList.remove('erroractive');
    document.querySelector('.formerror').innerHTML = '';
    var re;
    await UpdateProductInfo(tempdata, data[nowIndex].ProductId).then(r => re = r);
    if (re.hasOwnProperty('error')) {
        document.querySelector('.formerror').classList.add('erroractive');
        document.querySelector('.formerror').innerHTML = re.error;
    }
    else {
        document.querySelector('.formerror').classList.add('succece');
        document.querySelector('.formerror').innerHTML = re.info;
        GetOnProduct('null');
        setTimeout(() => {
            document.querySelector('.formerror').classList.remove('succece');
        }, 3000);
    }
}

//數量級錯
function numbererror() {
    document.querySelector('.formerror').classList.add('erroractive');
    document.querySelector('.formerror').innerHTML = '數量欄位必須為正整數且大於0';
}

//驗證資料是否為空
function validate(data) {
    var btn = true;
    Object.entries(data).forEach(([key, value]) => {
        if (value.length == 0) btn = false;
    })
    return btn;
}

//判斷正整數
function checkRate(nubmer) {
    if (/^[0-9]*[1-9][0-9]*$/.test(nubmer))
        return true;
    else
        return false;
}

//關閉modal
function closemodal() {
    let close = document.querySelector('.modal .close');
    close.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    let cancel = document.querySelector('.modal .cancel');
    cancel.addEventListener('click', function () {
        modal.classList.add('hidden');
    });
}

//modal事件
function modal_content_event(type) {
    let modal_content = document.querySelector(type);
    modal_content.display = 'flex'
    modal_content.classList.toggle('open');
}

//點擊租借資訊
function modal_rent_info() {
    let rent = document.getElementById('rent');
    rent.addEventListener('click', function () {
        var data;
        data = GetDataArray(nowType);
        let now = document.querySelector('.now');
        now.classList.remove('now');
        now.classList.add('hidden');
        let rentbtn = document.getElementById('submit_r')
        rentbtn.classList.remove('hidden');
        rentbtn.classList.add('now');
        let content = document.querySelector('.modal .content');
        content.innerHTML = `
        <div class="formerror">                    
        </div>
        <div class="formgroup onoption">
        <label>租借功能　　</label>
        <input type="checkbox" id="rentbox" >
        <label class="toggle" for="rentbox">
            <div class="radio ${(data[nowIndex].Rent == 0) ? "default" : "default-2"}"></div>
        </label>                   
        </div>
        <div class="formgroup">
            <label for="editrent">最大租借天數</label>
            <input type="text" id="editrent" ${(data[nowIndex].Rent == 0) ? 'disabled="disabled"' : ''} value="${data[nowIndex].MaxRent}">
        </div>
        <div class="formgroup">
            <label for="rentprice">租借價格(天)&nbsp;</label>
            <input type="text" id="rentprice" ${(data[nowIndex].Rent == 0) ? 'disabled="disabled"' : ''} value="${data[nowIndex].RentPrice}">
        </div>
        `;
        radio_event();
        modal_product_info();
        let rentbox = document.getElementById('rentbox');
        rentbox.checked = (data[nowIndex].Rent != 0);
    })
}

//租借radio_event

function radio_event() {
    var btn = true;
    let option = document.querySelector('.onoption .toggle');
    let active = document.querySelector('.modal .active');
    active.classList.remove('active');
    let rent = document.querySelector('#rent');
    rent.classList.add('active');
    option.addEventListener('click', function () {
        let radio = document.querySelector('.onoption .toggle .radio');
        let rentbox = document.querySelector('#rentbox');
        if (btn) {
            btn = false;
            if (!rentbox.checked) {
                radio.classList.remove('default');
                radio.classList.add('toggle-check');
                let modalinput = document.querySelectorAll('.modal input[type=text]');
                modalinput.forEach(e => {
                    e.removeAttribute('disabled');
                })
                return false;
            }
            else {
                radio.classList.remove('default-2');
                radio.classList.add('toggle-uncheck');
                let modalinput = document.querySelectorAll('.modal input[type=text]');
                modalinput.forEach(e => {
                    e.setAttribute('disabled', 'disabled');
                })
                return false;
            }

        }
        if (rentbox.checked) {
            let modalinput = document.querySelectorAll('.modal input[type=text]');
            modalinput.forEach(e => {
                e.setAttribute('disabled', 'disabled');
            })
        }
        else {
            let modalinput = document.querySelectorAll('.modal input[type=text]');
            modalinput.forEach(e => {
                e.removeAttribute('disabled');
            })
        }
        radio.classList.toggle('toggle-uncheck');
        radio.classList.toggle('toggle-check');

    });
}

//點擊商品資訊

function modal_product_info() {
    let product = document.getElementById('product');
    product.addEventListener('click', function () {
        var data;
        data = GetDataArray(nowType);
        let now = document.querySelector('.now');
        now.classList.remove('now');
        now.classList.add('hidden');
        let btn = document.getElementById('submit_p')
        btn.classList.remove('hidden');
        btn.classList.add('now');
        let content = document.querySelector('.modal .content');
        content.innerHTML = `
            <div class="formerror">                    
            </div>
            <div class="formgroup">
                <label for="editname">商品名稱</label>
                <input type="text" id="editname" value="${data[nowIndex].Name}">
            </div>
            <div class="formgroup">
                <label for="editprice">商品價格</label>
                <input type="text" id="editprice" value="${data[nowIndex].Price}">
            </div>
            <div class="formgroup">
                <label for="store">　　庫存</label>
                <input type="text" id="store" value="${data[nowIndex].Inventory}">
            </div>
            <div class="formgroup">
                <label for="description">商品敘述</label>
                <textarea id="description">${data[nowIndex].Description}</textarea>
            </div> 
        `;
        modal_product_event();
    })
}

//商品資訊所需事件
function modal_product_event() {
    let active = document.querySelector('.modal .active');
    active.classList.remove('active');
    let product = document.querySelector('#product');
    product.classList.add('active');
}

//點擊商品圖片
function modal_image_info() {
    let photo = document.getElementById('photo');
    photo.addEventListener('click', function () {
        var data;
        data = GetDataArray(nowType);
        let now = document.querySelector('.now');
        now.classList.remove('now');
        now.classList.add('hidden');
        let btn = document.getElementById('submit_i')
        btn.classList.remove('hidden');
        btn.classList.add('now');
        imgcount = 0;
        let content = document.querySelector('.modal .content');
        content.innerHTML = `
            <div class="formerror">                    
            </div>
            <div class="formgroup">
                <label>商品圖片</label>
            </div>
            <div class="formgroup type-fill">                
            </div>
        `;
        loadallimage();
        createfileitem();
        modal_image_event();
    })
}
//載入商品圖片
function loadallimage() {
    var data;
    data = GetDataArray(nowType);
    if (data[nowIndex].Image != null) {
        var image = data[nowIndex].Image;
        image.forEach(e => {
            let div = document.createElement('div');
            div.classList.add('img-item-2');
            div.innerHTML = `
            <img src="http://localhost:8080/images/Products/${e.Image}" alt="" id="img_exist_${e.Image}" class="">
            <div class="remove" id="remove_exist_${e.ImageId}">
                <i class="fa-solid fa-xmark"></i>
            </div>
            `;
            document.querySelector('.type-fill').appendChild(div);
        })
    }
}
//商品圖片事件
function modal_image_event() {
    let active = document.querySelector('.modal .active');
    active.classList.remove('active');
    let photo = document.querySelector('#photo');
    photo.classList.add('active');
}

//圖片即時預覽
var imgcount = 1;
function view_upload_image(e) {
    id = e.target.id;
    var x = new FileReader;
    x.readAsDataURL(this.files[0]);

    x.onloadend = function () {
        let img = document.querySelector('#img_photo_' + imgcount);
        img.classList.remove('hidden');
        document.querySelector('#label_' + id).classList.add('hidden');
        let remove = document.querySelector('#remove_' + imgcount);
        remove.classList.remove('hidden');
        remove.onclick = removeimg;
        createfileitem();
        img.src = this.result;
    }
}

//remove icon 
function removeimg(e) {
    let imgcontent = document.querySelector('.type-fill');
    let removeitem = e.target.parentNode.parentNode;
    if (removeitem.classList[0] == 'img-item') {
        removeitem.remove();
        createfileitem();
    }

}

//創造img_item 
function createfileitem() {
    var count = document.querySelectorAll('.img-item , .img-item-2').length;
    if (count < 5) {
        imgcount += 1;
        let div = document.createElement('div');
        div.classList.add('img-item');
        div.id = imgcount;
        div.innerHTML = `
        <label for="photo_${imgcount}" id="label_photo_${imgcount}">
        <i class="fa-solid fa-plus"></i>
        </label>
        <input type="file" id="photo_${imgcount}">
        <img src="" alt="" id="img_photo_${imgcount}" class="hidden">
        <span class="hidden remove" id="remove_${imgcount}">
            <i class="fa-solid fa-xmark"></i>
        </span>
        `;
        document.querySelector('.type-fill').appendChild(div);
        let image = document.getElementById('photo_' + imgcount);
        image.addEventListener('change', view_upload_image);
    }
    console.log(count);

}


//載入商品陣列
async function GetOnProduct(search) {
    var data;
    await GetSellerProduct('on', search).then(r => data = r);
    if (data.hasOwnProperty('data')) {
        prodcutonlist = data.data;
    }
    ClearContent();
    prodcutonlist.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('table_content');
        div.innerHTML = `   
            <div class="checkbox">
                <input type="checkbox" id="p_${element.ProductId}" name="product" value="${element.ProductId}">
                <label for="p_${element.ProductId}"><i class="fa-solid fa-check"></i></label>
            </div>
            <div class="productimg">
                <img src="${(element.Image != null) ? "http://localhost:8080/images/Products/" + element.Image[0].Image : ""}" alt="NULL">
            </div>
            <div class="productname">
                ${element.Name}
            </div>
            <div class="productprice">
            ${element.Price} NT
            </div>
            <div class="store">
            ${element.Inventory}
            </div>
            <div class="product_action">
                <input type="hidden" name="" id="index_${element.ProductId}" value="${onIndex}">
                <span id="editbtn_${onIndex}"><i class="fa-solid fa-pen-to-square"></i></span>
                <span id="deletebtn_${onIndex}"><i class="fa-solid fa-trash-can"></i></span>
            </div>
         `;
        document.querySelector('.product_table').appendChild(div);
        let edit = document.querySelector('#editbtn_' + onIndex);
        edit.addEventListener('click', function () {
            modal.classList.toggle('hidden');
            var getindex = document.getElementById('index_' + element.ProductId);
            editmodal(getindex.value, 'on');
        })
        onIndex += 1;
    });

}

function ClearContent() {
    onIndex = 0;
    document.querySelector('.product_table').innerHTML = `
                    <div class="table_action">
                        <div class="h1"></a></div>
                        <div class="action">
                            <button class="insert">
                                新增商品
                            </button>
                            <button class="delete">
                                下架商品
                            </button>
                        </div>
                    </div>
                    <div class="table_thead">
                        <div class="checkbox_head">
                            <input type="checkbox" id="p_all">
                            <label for="p_all"><i class="fa-solid fa-check"></i></label>
                        </div>
                        <div class="productimg_head">
                            商品圖片
                        </div>
                        <div class="productname_head">
                            商品名稱
                        </div>
                        <div class="productprice_head">
                            價格
                        </div>
                        <div class="store_head">
                            剩餘庫存
                        </div>
                        <div class="prodcut_action_head">
                            操作
                        </div>
                    </div>
    `;
}

//上傳商品圖片


GetOnProduct('null')
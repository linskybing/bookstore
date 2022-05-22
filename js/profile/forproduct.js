
var prodcutlist;

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

let edit = document.querySelector('#editbtn');
edit.addEventListener('click', function () {
    modal.classList.toggle('hidden');
    editmodal();
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

//修改資訊modal
function editmodal() {
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
        let content = document.querySelector('.modal .content');
        content.innerHTML = `
        <div class="formgroup onoption">
        <label>租借功能　　</label>
        <input type="checkbox" id="rent">
        <label class="toggle" for="rent">
            <div class="radio default"></div>
        </label>                   
        </div>
        <div class="formgroup">
            <label for="editrent">最大租借天數</label>
            <input type="text" id="editrent">
        </div>
        <div class="formgroup">
            <label for="rentprice">租借價格(天)&nbsp;</label>
            <input type="text" id="rentprice">
        </div>
        `;
        radio_event();
        modal_product_info();
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
        if (btn) {
            btn = false;
            radio.classList.remove('default');
        }

        let radio2 = document.querySelector('.toggle .toggle-check');
        if (radio2) {
            radio.classList.toggle('toggle-uncheck');
        }
        else {
            radio.classList.toggle('toggle-check');
        }

    });
}

//點擊商品資訊

function modal_product_info() {
    let product = document.getElementById('product');
    product.addEventListener('click', function () {
        let content = document.querySelector('.modal .content');
        content.innerHTML = `
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
        imgcount = 1;
        let content = document.querySelector('.modal .content');
        content.innerHTML = `
            <div class="formgroup">
                <label>商品圖片</label>
            </div>
            <div class="formgroup type-fill">
                <div class="img-item" id="1">
                    <label id="label_photo_1" for="photo_1">
                        <i class="fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="photo_1">
                    <img src="" alt="" id="img_photo_1" class="hidden">
                    <div class="hidden remove" id="remove_1">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('photo_1').addEventListener('change', view_upload_image);
        modal_image_event();
    })
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
    }

}

//創造img_item 
function createfileitem() {
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
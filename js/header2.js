let header = document.querySelector('header');

let div = document.createElement('div');

const token = getCookie('token');
const Name = getCookie('Name');
var timestring;
var today = new Date();

if (today.getHours() < 11) {
    timestring = "早安";
}
else if (today.getHours() < 13) {
    timestring = "午安";
}
else if (today.getHours() < 18) {
    timestring = "下午好";
}
else {
    timestring = "晚安";
}


div.classList.add('nav');

if (token != "") {
    div.innerHTML = `
    <ul>
    <li class="logo"><a href="index.html"><img src="../../image/logo.png"></a></li>
    <li><a href="../index.html">首頁</a></li>
    <li><a href="#">公告事項</a></li>
    <li><a href="../productlist.html">商品賣場</a></li>
    <li><a href="../productlist_rent.html">租借賣場</a></li>
    <li><a href="#">平台介紹</a></li>
    <li><a href="#">關於我們</a></li>
    </ul>
    <ul>    
    <li><a href="../cart_2.html">購物車</a></li>
    <li><a href="../report.html">問題回報</a></li>
    <li><a href="../profile.html">${timestring}，${Name}</a></li>
    <li id="logout"><a href="#">登出</a></li>
    </ul>
    `;
    ChatroomForUser();
    CreateChatroomE();
    BindWrapperEvent();
}
else {
    div.innerHTML = `
    <ul>
    <li class="logo"><a href="../index.html"><img src="../../image/logo.png"></a></li>
    <li><a href="../index.html">首頁</a></li>
    <li><a href="#">公告事項</a></li>
    <li><a href="../productlist.html">商品賣場</a></li>
    <li><a href="../productlist_rent.html">租借賣場</a></li>
    <li><a href="#">平台介紹</a></li>
    <li><a href="#">關於我們</a></li>
    </ul>
    <ul>
    <li><a href="../login.html">登入</a></li>
    <li><a href="../register.html">註冊</a></li>
    </ul>
    `;
}


header.appendChild(div);

if (token != "") {
    let logoutbtn = document.getElementById('logout').addEventListener('click', function () {
        Logout();
    })
}



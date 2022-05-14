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
    <li class="logo"><a href="index.html"><img src="../image/logo.png"></a></li>
    <li><a href="index.html">首頁</a></li>
    <li><a href="#">公告事項</a></li>
    <li><a href="search_result.html">商品賣場</a></li>
    <li><a href="#">平台介紹</a></li>
    <li><a href="#">關於我們</a></li>
    </ul>
    <ul>
    <li><a href="chatroom.html">聊天室</a></li>
    <li><a href="cart.html">購物車</a></li>
    <li><a href="report.html">問題回報</a></li>
    <li><a href="member.html">${timestring}，${Name}</a></li>
    <li id="logout"><a href="#">登出</a></li>
    </ul>
    `;
}
else {
    div.innerHTML = `
    <ul>
    <li class="logo"><a href="index.html"><img src="../image/logo.png"></a></li>
    <li><a href="index.html">首頁</a></li>
    <li><a href="#">公告事項</a></li>
    <li><a href="search_result.html">商品賣場</a></li>
    <li><a href="#">平台介紹</a></li>
    <li><a href="#">關於我們</a></li>
    </ul>
    <ul>
    <li><a href="login.html">登入</a></li>
    <li><a href="register.html">註冊</a></li>
    </ul>
    `;
}


header.appendChild(div);

if (token != "") {
    let logoutbtn = document.getElementById('logout').addEventListener('click', function () {
        Logout();
    })
}

let chatitem = document.createElement('div')
chatitem.classList.add('chatitem');
chatitem.innerHTML = `
<div class="chaticon">
<i class="fa-solid fa-comment-dots"></i>
</div>
<div class="wrapper">
<section class="users">
    <header>
        <div class="chat-content">
            <img src="image.png" alt="">
            <div class="details">
                <span>CodisadfNepal</span>
                <p>Actvice now</p>
            </div>
        </div>
        <a href="#" class="logout">Logout</a>
    </header>
    <div class="search">
        <span class="text">選擇使用者開始聊天</span>
        <input type="text" placeholder="搜尋使用者">
        <button>
            <i class="fas fa-search"></i>
        </button>
    </div>
    <div class="users-list">
        <a href="#">
            <div class="chat-content">
                <img src="image.png" alt="">
                <div class="details">
                    <span>Coding Nepal</span>
                    <p>This is test message</p>
                </div>
            </div>
            <div class="status-dot"><i class="fas fa-circle"></i></div>
        </a>
        <a href="#">
            <div class="chat-content">
                <img src="image.png" alt="">
                <div class="details">
                    <span>Coding Nepal</span>
                    <p>This is test message</p>
                </div>
            </div>
            <div class="status-dot"><i class="fas fa-circle"></i></div>
        </a>
        <a href="#">
            <div class="chat-content">
                <img src="image.png" alt="">
                <div class="details">
                    <span>Coding Nepal</span>
                    <p>This is test message</p>
                </div>
            </div>
            <div class="status-dot"><i class="fas fa-circle"></i></div>
        </a>
        <a href="#">
            <div class="chat-content">
                <img src="image.png" alt="">
                <div class="details">
                    <span>Coding Nepal</span>
                    <p>This is test message</p>
                </div>
            </div>
            <div class="status-dot"><i class="fas fa-circle"></i></div>
        </a>
        <a href="#">
            <div class="chat-content">
                <img src="image.png" alt="">
                <div class="details">
                    <span>Coding Nepal</span>
                    <p>This is test message</p>
                </div>
            </div>
            <div class="status-dot"><i class="fas fa-circle"></i></div>
        </a>
    </div>
</section>
</div>
`

document.querySelector('body').appendChild(chatitem);




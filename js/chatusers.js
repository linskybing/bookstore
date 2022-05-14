function CreateChatroomE() {
    const searchBar = document.querySelector(".users .search input"),
        searchBtn = document.querySelector(".users .search button");
    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            searchBar.classList.toggle("active");
            searchBar.focus();
            searchBtn.classList.toggle("active");

        })
        searchBar.setAttribute('onkeyup', "UpdateUsersList(" + searchBar.id + ")")
    }

    document.querySelector('.chaticon').addEventListener('click', function () {
        document.querySelector('.wrapper').classList.toggle('close');
    })
}


async function ChatroomForUser() {

    let chatitem = document.createElement('div')
    chatitem.classList.add('chatitem');
    chatitem.innerHTML = `
    <div class="chaticon">
    <i class="fa-solid fa-comment-dots"></i>
    </div>
    <div class="wrapper close">
    <section class="users">
        <header>
            <div class="chat-content">
                <img src="image.png" alt="">
                <div class="details">
                    <span>CodisadfNepal</span>
                    <p>Actvice now</p>
                </div>
            </div>     
        </header>
        <div class="search">
            <span class="text">選擇使用者開始聊天</span>
            <input type="text" placeholder="搜尋使用者" id="searchuser">
            <button>
                <i class="fas fa-search"></i>
            </button>
        </div>
        <div class="users-list">
        </div>
        
    </section>
    </div>
    `
    document.querySelector('body').appendChild(chatitem);

    var data;
    await GetUserChatroom().then(r => data = r);

    if (data.hasOwnProperty('data')) {
        let chatitem = document.createElement('div');
        chatitem.classList.add('chatitem');
        let userlist = document.createElement('div');
        userlist.classList.add('users-list');
        data.data.forEach(ele => {
            let a = document.createElement('a');
            a.id = ele.RoomId;
            a.innerHTML = `
            <div class="chat-content">
                <img src="${(ele.SellerImage == null) ? '../image/membericon.png' : 'http://localhost:8080/images/Members/' + ele.SellerImage}" alt="">
                <div class="details">
                    <span>${ele.Seller}</span>
                    <p>${(ele.Message == null) ? '' : ele.Message}</p>
                </div>
            </div>
            <div class="status-dot ${(ele.SellerActive == 1) ? '' : 'offline'}"><i class="fas fa-circle"></i></div>
            `;
            a.setAttribute('onclick', 'EnterChatroom(' + ele.RoomId + ')');
            userlist.appendChild(a);
        });
        document.querySelector('.users .users-list').innerHTML = userlist.innerHTML;
    }
}

function UpdateUsersList(search) {
    var token = getCookie('token');
    let searchtearm = search.value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", apidomain + '/chatroomc/' + searchtearm, true);
    xhr.setRequestHeader('Authorization', token);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                data = JSON.parse(data);
                console.log(data);
                if (data.hasOwnProperty('data')) {
                    let chatitem = document.createElement('div');
                    chatitem.classList.add('chatitem');
                    let userlist = document.createElement('div');
                    userlist.classList.add('users-list');
                    data.data.forEach(ele => {
                        let a = document.createElement('a');
                        a.id = ele.RoomId;
                        a.innerHTML = `
                        <div class="chat-content">
                            <img src="${(ele.SellerImage == null) ? '../image/membericon.png' : 'http://localhost:8080/images/Members/' + ele.SellerImage}" alt="">
                            <div class="details">
                                <span>${ele.Seller}</span>
                                <p>${(ele.Message) ? '' : ele.Message}</p>
                            </div>
                        </div>
                        <div class="status-dot ${(ele.SellerActive == 1) ? '' : 'offline'}"><i class="fas fa-circle"></i></div>
                        `;
                        a.setAttribute('onclick', 'EnterChatroom(' + ele.RoomId + ')');
                        userlist.appendChild(a);
                    });
                    document.querySelector('.users .users-list').innerHTML = userlist.innerHTML;
                }
                CreateChatroomE();
            }
        }
    }
    xhr.send();
}

function EnterChatroom(id) {
    let item = document.querySelector('.wrapper');
    item.innerHTML = `
    <section class="chat-area">
        <header>
            <a href="#" class="back-icon" onclick="chatroom()"><i class="fas fa-arrow-left"></i></a>
            <img src="image.png" alt="">
            <div class="details">
                <span>Coding Nepal</span>
                <p>Actvice now</p>
            </div>
        </header>
        <div class="chat-box">
            <div class="chat outgoing">
                <div class="details">
                    <p>asdfasdfasdfasdf</p>
                </div>
            </div>
            <div class="chat incoming">
                <img src="image.png" alt="">
                <div class="details">
                    <p>asdfasdfasdfasdf</p>
                </div>
            </div>
        </div>
        <form action="#" class="typing-area">
            <input type="text" placeholder="輸入訊息">
            <button><i class="fab fa-telegram-plane"></i></button>
    </form>
    </section>`;
    CreateChatroomE();
}

async function chatroom() {

    let item = document.querySelector('.wrapper').innerHTML = `  
    <section class="users">
        <header>
            <div class="chat-content">
                <img src="image.png" alt="">
                <div class="details">
                    <span>CodisadfNepal</span>
                    <p>Actvice now</p>
                </div>
            </div>     
        </header>
        <div class="search">
            <span class="text">選擇使用者開始聊天</span>
            <input type="text" placeholder="搜尋使用者" id="searchuser">
            <button>
                <i class="fas fa-search"></i>
            </button>
        </div>
        <div class="users-list">
        </div>        
    </section>
    `;
    var data;
    await GetUserChatroom().then(r => data = r);
    if (data.hasOwnProperty('data')) {
        let chatitem = document.createElement('div');
        chatitem.classList.add('chatitem');
        let userlist = document.createElement('div');
        userlist.classList.add('users-list');
        data.data.forEach(ele => {
            let a = document.createElement('a');
            a.id = ele.RoomId;
            a.innerHTML = `
            <div class="chat-content">
                <img src="${(ele.SellerImage == null) ? '../image/membericon.png' : 'http://localhost:8080/images/Members/' + ele.SellerImage}" alt="">
                <div class="details">
                    <span>${ele.Seller}</span>
                    <p>${(ele.Message) ? '' : ele.Message}</p>
                </div>
            </div>
            <div class="status-dot ${(ele.SellerActive == 1) ? '' : 'offline'}"><i class="fas fa-circle"></i></div>
            `;
            a.setAttribute('onclick', 'EnterChatroom(' + ele.RoomId + ')');
            userlist.appendChild(a);
        });
        document.querySelector('.users .users-list').innerHTML = userlist.innerHTML;
    }
    CreateChatroomE();

}
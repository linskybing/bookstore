
//設定聊天室事件
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
}
//綁定wrapper事件
function BindWrapperEvent() {
    document.querySelector('.chaticon').addEventListener('click', function () {
        document.querySelector('.wrapper').classList.toggle('close');
    })
}


//取得使用者列表
async function ChatroomForUser() {
    let image = getCookie('Image');
    let Name = getCookie('Name');
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
                <img src="${(image != '' && image != null) ? 'http://localhost:8080/images/Members/' + image : '../image/membericon.png'}" alt="">
                <div class="details">
                    <span>${Name}</span>
                    <p>在線中</p>
                </div>                
            </div>    
            <div style="font-size: 12px;color: #468669;padding-right:20px;"><i class="fas fa-circle"></i></div>          
        </header>
        <div class="option">
                <div class="useroption active">
                    我是買家
                </div>
                <div class="selleroption">
                    我是賣家
                </div>
        </div>
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

//更新使用者列表
function UpdateUsersList(search) {
    var token = getCookie('token');
    let searchtearm = search.value;
    if (searchtearm == '') searchtearm = 'null';
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
        }
    }
    xhr.send();
}

//取得賣家使用者列表
async function ChatroomForSeller() {
    let image = getCookie('Image');
    let Name = getCookie('Name');
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
                <img src="${(image != '' && image != null) ? 'http://localhost:8080/images/Members/' + image : '../image/membericon.png'}" alt="">
                <div class="details">
                    <span>${Name}</span>
                    <p>在線中</p>
                </div>
            </div>
            <div style="font-size: 12px;color: #468669;padding-right:20px;"><i class="fas fa-circle"></i></div>
        </header>
        
        <div class="option">
                <div class="useroption">
                    我是買家
                </div>
                <div class="selleroption active">
                    我是賣家
                </div>
        </div>
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
    await GetSellerChatroom().then(r => data = r);

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
                <img src="${(ele.UserImage == null) ? '../image/membericon.png' : 'http://localhost:8080/images/Members/' + ele.SellerImage}" alt="">
                <div class="details">
                    <span>${ele.User}</span>
                    <p>${(ele.Message == null) ? '' : ele.Message}</p>
                </div>
            </div>
            <div class="status-dot ${(ele.UserActive == 1) ? '' : 'offline'}"><i class="fas fa-circle"></i></div>
            `;
            a.setAttribute('onclick', 'EnterChatroom(' + ele.RoomId + ')');
            userlist.appendChild(a);
        });
        document.querySelector('.users .users-list').innerHTML = userlist.innerHTML;
    }
}


//更新賣家使用者列表
function UpdateSellerList(search) {
    var token = getCookie('token');
    let searchtearm = search.value;
    if (searchtearm == '') searchtearm = 'null';
    let xhr = new XMLHttpRequest();
    xhr.open("GET", apidomain + '/chatrooms/' + searchtearm, true);
    xhr.setRequestHeader('Authorization', token);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                data = JSON.parse(data);                
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
                else{
                    document.querySelector('.users .users-list').innerHTML = "";
                }
                
            }
        }
    }
    xhr.send();
}




var Roomid;
var time;
var count;
//進入聊天室
function EnterChatroom(id) {
    ChatDetail(id);
    Roomid = id;
    count = GetChatCount(id);
}

async function GetChatCount(id) {
    var count;

    await ChatCount(id).then(r => count = r);

    console.log(count);

    return count;
}

//聊天室
async function ChatDetail(id) {
    let data;
    await GetChatrecord(id, chatpage, itemnum).then(r => data = r);
    let item = document.querySelector('.wrapper');
    item.innerHTML = `
    <section class="chat-area">
        <header>
            <a href="#" class="back-icon" onclick="chatroom()"><i class="fas fa-arrow-left"></i></a>
            <img src="${(data[0].SellerImage != null) ? 'http://localhost:8080/images/Members/' + data[0].SellerImage : '../image/membericon.png'}" alt="">
            <div class="details">
                <span>${data[0].Seller}</span>
                <p>${(data[0].SellerActive == 1) ? '在線中<span style="display:inline;font-size: 12px;color: #468669;padding:1px 15px;"><i class="fas fa-circle"></i></span>' : '離線<span style="display:inline;font-size: 12px;color: #ccc;padding:1px 15px;"><i class="fas fa-circle"></i></span>'}</p>
            </div>
        </header>        
        <div class="chat-box">           
        </div>
        <form action="#" class="typing-area">
            <input type="text" placeholder="輸入訊息">
            <button><i class="fa-solid fa-paper-plane"></i></button>
        </form>
    </section>`;
    console.log(data);
    if (data.hasOwnProperty('data')) {
        var token = getCookie('Account');
        time = data.data[0].CreatedAt;
        data = data.data.reverse();

        let box = document.querySelector('.chat-box');

        data.forEach(ele => {
            let div = document.createElement('div');
            if (ele.Creator == token) {
                div.classList.add('chat');
                div.classList.add('outgoing');
                div.innerHTML = `
                <div class="details">
                    <p>${ele.Message}</p>
                </div>
                `;
            }
            else {
                div.classList.add('chat');
                div.classList.add('incoming');
                div.innerHTML = `
                <img src="${(ele.Image == null) ? '../image/membericon.png' : 'http://localhost:8080/images/Members/' + ele.Image}" alt="">
                <div class="details">
                    <p>${(ele.DeletedAt != "0000-00-00 00:00:00") ? '已收回訊息' : ele.Message}</p>
                </div>
                `;
            }
            box.appendChild(div);
        });
        box.scrollTop = box.scrollHeight;
    }

    let typearea = document.querySelector('.typing-area button').addEventListener('click', function (e) {
        e.preventDefault();
        let message = document.querySelector('.typing-area input').value;
        document.querySelector('.typing-area input').value = '';
        if (message != '') PostMessage(id, message);
        setTimeout(function () { }, 200);
    });    
    BindChatInterval();
}
var intervalID;
function BindChatInterval() {
    intervalID = setInterval("RefreshChat()", 500);
}

async function DynamicChat() {

}

async function RefreshChat() {
    let data;

    await UpdateMessgae(Roomid, time).then(r => data = r);
    if (data.hasOwnProperty('data')) {
        var token = getCookie('Account');
        time = data.data[0].CreatedAt;
        data = data.data.reverse();
        let box = document.querySelector('.chat-box');
        data.forEach(ele => {
            let div = document.createElement('div');
            if (ele.Creator == token) {
                div.classList.add('chat');
                div.classList.add('outgoing');
                div.innerHTML = `
                 <div class="details">
                     <p>${ele.Message}</p>
                 </div>
                 `;
            }
            else {
                div.classList.add('chat');
                div.classList.add('incoming');
                div.innerHTML = `
                 <img src="${(ele.Image == null) ? '../image/membericon.png' : 'http://localhost:8080/images/Members/' + ele.Image}" alt="">
                 <div class="details">
                     <p>${(ele.DeletedAt != "0000-00-00 00:00:00") ? '已收回訊息' : ele.Message}</p>
                 </div>
                 `;
            }
            box.appendChild(div);
            if (box.scrollHeight / 4 - box.scrollTop < 200) box.scrollTop = box.scrollHeight;
        });
    }
}

async function chatroom() {
    Roomid = null;
    count = null;
    time = null;
    chatpage = 1;
    let image = getCookie('Image');
    let Name = getCookie('Name');
    clearInterval(intervalID);
    let item = document.querySelector('.wrapper').innerHTML = `  
    <section class="users">
        <header>
            <div class="chat-content">
                <img src="${(image != '' && image != null) ? 'http://localhost:8080/images/Members/' + image : '../image/membericon.png'}" alt="">
                <div class="details">
                    <span>${Name}</span>
                    <p>在線中</p>                    
                </div>
            </div> 
            <div style="font-size: 12px;color: #468669;padding-right:20px;"><i class="fas fa-circle"></i></div>                
        </header>
        <div class="option">
                <div class="useroption active">
                    我是買家
                </div>
                <div class="selleroption">
                    我是賣家
                </div>
        </div>
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
    CreateChatroomE();

}
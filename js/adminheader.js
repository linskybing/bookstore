let header = document.querySelector("header");

const token = getCookie("token");
const Name = getCookie("Name");
var timestring;
var today = new Date();
var roleinfo;

if (today.getHours() < 11) {
    timestring = "早安";
} else if (today.getHours() < 13) {
    timestring = "午安";
} else if (today.getHours() < 18) {
    timestring = "下午好";
} else {
    timestring = "晚安";
}

loadheader();
async function loadheader() {
    await initroledata();
    let div = document.createElement("div");
    div.classList.add("nav");


    if (roleinfo) {
        header.innerHTML = `
        <div class="menucontainer">
            <div class="navblock">
            <a href="../index.html">
                <div id="brand"><img src="../../image/logo2.png" width="100px" width="200px"></div>
            </a>                        
            </div>
            <div id="navright">
                <ul class="inline-block-nav">              
                <li>
                    <a href="../cart_2.html"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-cart4" viewBox="0 0 16 16">
                        <path
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg></a>
                </li>
                <li>
                    <a href="../profile.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg></a>
                </li>
                <li>
                    <a href="#">
                    <svg id="menubtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    </a>
                </li>
                </ul>
               </div>
            </div>
        `;
        /*導覽列 */
        document.getElementById("menubtn").addEventListener("click", closesidebar);
        document.getElementById("closesidebar").addEventListener("click", closesidebar);
        function closesidebar() {
            document.getElementById("sidebar").classList.toggle("close");
        }
        if (getCookie("Image") != "null" && getCookie("Image")) {
            document.querySelector("#iconMember img").src =
                "http://localhost:8080/images/Members/" + getCookie("Image");
        }
    }
    else {
        window.location.href = "../index.html";
    }

    ChatroomForUser();
    CreateChatroomE();
    BindWrapperEvent();


    header.appendChild(div);
    if (token != "") {
        let logoutbtn = document
            .getElementById("logout")
            .addEventListener("click", function () {
                Logout();
            });
    }

}

async function initroledata() {
    await getUserroleData().then(r => roleinfo = r);
}
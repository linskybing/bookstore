var role;
var userrole;
var permisson;
var tempcount;
const pageitem = 10;
var totalpage;
var nowpage = 1;

initUserRole();
async function initUserRole() {
    if (!userrole) {
        var data;
        await GetAllRolePermisson().then(r => data = r);

        if (data) {
            userrole = data;
            tempcount = userrole.length;
            loadrole();
            paging();
        }
    }
    else {
        loadrole();
        paging();
    }


}

function loadrole() {
    if (userrole) {
        var data = userrole;
        let tableblock = document.querySelector('.tableblock');
        tableblock.innerHTML = `
        <table class="content-table">
            <thead>
            <th class="table-item">使用者帳號</th>
            <th class="table-item">使用者名稱</th>
            <th class="table-item">角色名稱</th>
            <th class="table-item">操作</th>
            </thead>
            <tbody>
            </tbody>
        </table>
        `;
        tableblock.querySelector('.content-table tbody').innerHTML = ``;
        for (i = (nowpage - 1) * pageitem; i < (nowpage) * pageitem && i < tempcount; i++) {
            let item = document.createElement('tr');
            item.classList.add('item');
            var onIndex = i;
            item.innerHTML = `                   
                    <td>
                        <div class="text">${data[i].Account}</div>
                    </td>
                    <td>
                        <div class="text">${data[i].Name}</div>
                    </td>    
                    <td>
                        <div class="text">${data[i].RoleName}</div>
                    </td>                  
                    <td>
                        <div class="text">
                        <input class="index" type="hidden" value="${onIndex}"/>
                        <span class="insert btnspan" id="editbtn_${onIndex}"><i class="fa-solid fa-pen-to-square"></i></span>
                        <span class="delete btnspan" id="deletebtn_${onIndex}"><i class="fa-solid fa-trash-can"></i></span>
                        </div>
                    </td>              
            `;
            item.querySelector('.insert').addEventListener('click', function (e) {
                let element = e.target;
                let index = document.querySelectorAll('.insert i');
                for (j = 0; j < index.length; j++) {
                    if (index[j] == element) {
                        let value = index[j].parentElement.parentElement.querySelector('input').value;
                        displaymodal(value);
                    }
                }
            })
            item.querySelector('.delete').addEventListener('click', function (e) {
                let element = e.target;
                let index = document.querySelectorAll('.delete i');
                for (j = 0; j < index.length; j++) {
                    if (index[j] == element) {
                        let value = index[j].parentElement.parentElement.querySelector('input').value;
                        displaymodal2(value);
                    }
                }
            })
            document.querySelector('.content-table tbody').appendChild(item);
        }
    }
}
//分頁
function paging() {
    totalpage = Math.ceil((tempcount / pageitem));
    let page = document.querySelector('.page ul');
    page.innerHTML = ``;
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
                    initTag();
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
                    nowpage = this.id[this.id.indexOf('-') + 1];
                    initTag();
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
                    initTag();
                })
            }
        }
    }
}

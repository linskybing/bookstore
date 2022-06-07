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
        var data2;
        await GetRole().then(r => data2 = r);

        if (data2) {
            console.log(data);
            role = data2;
        }

        var data;
        await GetUserAllUserRole().then(r => data = r);

        if (data) {
            console.log(data);
            userrole = data;
            tempcount = userrole.length;
            loadrole();
            paging();
        }

        var data2;
        await GetRole().then(r => data = r);
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
                        <div class="text rolelist">
                            <select name="role" id="${i}">
                            
                            </select>
                        </div>
                    </td>         
            `;
            let rolelist = item.querySelector('.rolelist select');
            for (i = 0; i < role.length; i++) {
                let option = document.createElement('option');
                option.value = i;
                option.innerHTML = role[i].RoleName;
                if (role[i].RoleName == data[i].RoleName) {
                    option.selected = true;
                }
                rolelist.appendChild(option);
            }
            rolelist.addEventListener('change', function (e) {
                let ele = e.target;
                console.log(ele.id, ele.value);
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

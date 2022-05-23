

var category;
var tagInput;
var input;
var searchlist;
var delarray = [];
var tmp = [];
var exist = [];
getcategory();
async function getcategory() {
    var data;
    await GetTag().then(r => data = r);

    if (data.hasOwnProperty('data')) {
        category = data.data;
    }
}

function bindfakeinput() {
    let input = document.querySelector('.fakeinput input')
    input.addEventListener("keyup", function (e) {
        var keycode = e.keyCode;

        selectMatchItem(input.value);
        searchcreate();
        document.querySelector('.fakeinput ul').classList.remove('hidden');
        if (keycode == 13 && input.value) {
            addTag(input.value)
            input.value = ""
            document.querySelector('.fakeinput ul').classList.add('hidden');
        }
    })
}

function addTag(inputvalue) {
    let taglist = document.getElementById('taglist');
    Object.entries(category).forEach((key, value) => {
        if (category[value].Tag == inputvalue && tmp.indexOf(inputvalue) < 0) {
            var dom = document.createElement('div');
            dom.classList.add('tag');
            dom.style.backgroundColor = category[value].Color;
            dom.innerHTML = '#' + inputvalue;
            dom.addEventListener('click', function (e) {
                document.querySelectorAll('#taglist .tag').forEach(function (child, index) {
                    if (child === dom) {
                        tmp.splice(index, 1);
                        console.log(tmp);
                        taglist.removeChild(dom);
                    }
                });
            });
            tmp.push(inputvalue);
            taglist.appendChild(dom);
        }
    })

}

//findvalue
function findcategory(search) {
    Object.entries(category).forEach((key, value) => {
        if (category[value].Tag == search) {
            console.log(category[value].Tag);
        }
    })
}

//初始化
function inittag() {
    insert = [];
    tmp = [];
    tagInput = document.querySelector('.modal .fakeinput');
    input = document.querySelector('.modal .fakeinput input');
    tagInput.addEventListener('click', function () {
        input.focus();
    })

    bindfakeinput();

}


//搜尋
function selectMatchItem(search) {
    searchlist = [];
    let all = []

    Object.entries(category).forEach((key, value) => {
        all.push(category[value].Tag);
        if (category[value].Tag.search(search) >= 0) {
            searchlist.push(category[value].Tag);
        }
    })
    if (searchlist.length == 0) {
        console.log(search.length)
        searchlist = all;
    }
    if (search.length == 0) {
        searchlist = [];
    }
}

function searchcreate() {
    let input = document.querySelector('.fakeinput input')
    let ul = document.querySelector('.searchresult');
    ul.innerHTML = ``;
    searchlist.forEach(e => {
        var li = document.createElement('li');
        li.innerHTML = e;
        li.addEventListener('click', function (e) {
            document.querySelectorAll('.modal .fakeinput li').forEach(function (child, index) {
                if (child === li) {
                    addTag(li.innerHTML)
                    input.value = ""
                    document.querySelector('.fakeinput ul').classList.add('hidden');
                }
            });
        })
        ul.appendChild(li);
    })

}

function getcategory() {
    var data;
    data = GetDataArray(nowType);
    data[nowType].Category
}



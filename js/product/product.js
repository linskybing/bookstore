var category;
var productlist;
getcategory();
getproduct();
async function getcategory() {
    var data;
    await GetTag().then(r => data = r);

    if (data.hasOwnProperty('data')) {
        category = data.data;
    }
    Object.entries(category).forEach((key, value) => {
        var li = document.createElement('li');
        li.innerHTML = `
       ${category[value].Tag}<span class="num">${category[value].Count}</span>
       `;
        document.querySelector('.category ul').appendChild(li);
    })
}

async function getproduct() {
    var data;
    await GetAllProduct().then(r => data = r);

    productlist = data;
    console.log(productlist);
}







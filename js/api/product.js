var p_nowpage = 1;
const p_itemnum = 10;
function GetSellerProduct(state, search) {
    var token = getCookie('token');
    return fetch(apidomain + '/products/' + state + '/' + search + '/' + p_nowpage + '/' + p_itemnum, {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    })
        .then(res => res.json())
        .then(res => {
            return res;
        })
        .catch(e => {
            console.error('Error:', error)
        })
}

function GetAllProduct() {
    var token = getCookie('token');
    return fetch(apidomain + '/product', {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    })
        .then(res => res.json())
        .then(res => {
            return res;
        })
        .catch(e => {
            console.error('Error:', error)
        })
}

function GetAllProductForrent() {
    var token = getCookie('token');
    return fetch(apidomain + '/product_rent', {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    })
        .then(res => res.json())
        .then(res => {
            return res;
        })
        .catch(e => {
            console.error('Error:', error)
        })
}

function UpdateProductInfo(data, id) {
    const token = getCookie('token')
    var formBody = []
    var details = data
    for (var property in details) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(details[property])
        formBody.push(encodedKey + "=" + encodedValue)
    }
    return fetch(apidomain + '/product/' + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': token,
        },
        body: formBody.join('&')
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(e => {
            console.error('Error:', e)
        })
}

function Uploadpimg(id) {
    const token = getCookie('token');
    var fileinput = new FormData()
    var inputs = document.querySelectorAll('.type-fill input[type="file"]');
    for (i = 0; i < inputs.length - 1; i++) {
        fileinput.append('file[]', inputs[i].files[0], inputs[i].files[0].name);
    }
    return fetch(apidomain + '/productimage/' + id, {
        method: 'POST',
        headers: {
            'Authorization': token,
        },
        body: fileinput
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(e => {
            console.error('Error:', e)
        })

}

function InsertProduct(data) {
    const token = getCookie('token');
    var sdata = new FormData()
    Object.entries(data).forEach(([key, value]) => {
        sdata.append(key, value);
    })
    console.log(sdata);
    return fetch(apidomain + '/product', {
        method: 'POST',
        headers: {
            'Authorization': token,
        },
        body: sdata
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(e => {
            console.error('Error:', e)
        })
}

function DeleteProduct(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/product/' + id, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(e => {
            console.error('Error:', e)
        })
}

function DeleteImg(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/productimage/' + id, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            return data
        })
        .catch(e => {
            console.error('Error:', e)
        })
}
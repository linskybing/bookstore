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
    var input = document.querySelector('.type-fill input[type="file"]')
    var fileinput = new FormData()
    fileinput.append('file[]', input.files[0])
    fetch(apidomain + '/productimage/' + id, {
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
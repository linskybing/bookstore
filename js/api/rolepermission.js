function GetByIdPermisson(id) {
    var token = getCookie('token');
    return fetch(apidomain + '/permisson/' + id, {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(e => {
            console.error('Error:', error)
        })
}

function PostRole(RoleId, FunctionId) {
    const token = getCookie('token');
    var data = new FormData();
    data.append('RoleId', RoleId);
    data.append('FunctionId', FunctionId);
    return fetch(apidomain + '/permisson', {
        method: 'POST',
        headers: {
            'Authorization': token,
        },
        body: data,
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(e => {
            console.error('Error:', error)
        })
}

function DELETERole(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/permisson/' + id, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
        },
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(e => {
            console.error('Error:', error)
        })
}
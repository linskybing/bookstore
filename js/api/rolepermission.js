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

function PostPermisson(RoleId, FunctionId) {
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

function DELETEPermisson(id, functionid) {
    const token = getCookie('token');
    return fetch(apidomain + '/permisson/' + id + '/' + functionid, {
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

function GetAllRolePermisson() {
    var token = getCookie('token');
    return fetch(apidomain + '/readforall', {
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

function GetUserAllUserRole(){   
    var token = getCookie('token');
    return fetch(apidomain + '/userpermissiona', {
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
function GetUserChatroom() {
    var token = getCookie('token');
    return fetch(apidomain + '/chatroomc/null', {
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

function UpdateUsersChatroom(search) {
    var token = getCookie('token');
    return fetch(apidomain + '/chatroomc/' + search, {
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

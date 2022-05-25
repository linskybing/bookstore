function GetDealRecord() {
    var token = getCookie('token');
    return fetch(apidomain + '/dealr', {
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

function GetDealRecordS() {
    var token = getCookie('token');
    return fetch(apidomain + '/dealrs', {
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
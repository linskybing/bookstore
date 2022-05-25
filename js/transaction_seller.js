var list;
async function listinit() {
    var data;
    await GetDealRecordS().then(r => data = r);
    if (data.hasOwnProperty('data')) {
        list = data.data;
        console.log(data.data);
        loadtransation();

    }
}
listinit();
function loadtransation() {
    if (list) {
        for (i = 0; i < list.length; i++) {
            let div = document.createElement('div');
            div.classList.add('info-item');
            div.innerHTML = `
                        <span class="data-label-num">
                            ${list[i].RecordId}
                        </span>
                        <span class="data-label-time">
                            ${list[i].CreatedAt}
                        </span>
                        <span class="data-label-text">
                            ${list[i].State}
                        </span>
                        <span class="data-label-text">
                            ${list[i].DealMethod}
                        </span>
                        <span class="data-label-text">
                            ${(list[i].DealType == 'Buy') ? "購買" : "租借"}
                        </span>                      
                        <div class="info-action data-action">
                            <div class="action">
                                <button class="insert" style="margin-right:10px">已寄出</button>                               
                            </div>
                            <div class="action"> 
                                <button class="delete" style="margin-right:10px">取消交易</button>
                            </div>
                        </div>
            `;
            document.querySelector('.personal-info-2').appendChild(div);
        }
    }
}
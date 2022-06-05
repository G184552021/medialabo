//課題6-1
let b = document.querySelector('button#ken');
b.addEventListener('click', sendRequest);


function sendRequest() {
  let kk = document.querySelector('#kensaku[name="kensaku"]');
  let k = kk.value;

    let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+ k +'.json';
    axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;
    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    //ここからデータを出力

    let catch0 = document.querySelector('div#catch0');
    catch0.textContent = "～"+ data.results.shop[0].genre.catch +"～";
    let na = document.querySelector('div#na');
    na.textContent = "店舗名 : " + data.results.shop[0].name;
    if (k === 'G001') {
        let img = document.createElement('imag');
        img.src = 
    }

    let nb = document.querySelector('div#nb');
    nb.textContent = "店舗名 : " + data.results.shop[1].name;


    let nc = document.querySelector('div#nc');
    nc.textContent = "店舗名 : " + data.results.shop[2].name;

    let nd = document.querySelector('div#nd');
    nd.textContent = "店舗名 : " + data.results.shop[3].name;

    let ne = document.querySelector('div#ne');
    ne.textContent = "店舗名 : " + data.results.shop[4].name;
    
    let nf = document.querySelector('div#nf');
    nf.textContent = "店舗名 : " + data.results.shop[5].name;
    
    let ng = document.querySelector('div#ng');
    ng.textContent = "店舗名 : " + data.results.shop[6].name;

    let nh = document.querySelector('div#nh');
    nh.textContent = "店舗名 : " + data.results.shop[7].name;

    let ni = document.querySelector('div#ni');
    ni.textContent = "店舗名 : " + data.results.shop[8].name;

    let nj = document.querySelector('div#nj');
    nj.textContent = "店舗名 : " + data.results.shop[9].name;




    // data.x を出力
    console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
//課題6-1
let count=0;
let b = document.querySelector('button#ken');
b.addEventListener('click', sendRequest);


function sendRequest() {
    count += 1;
    let kk = document.querySelector('#kensaku[name="kensaku"]');
    let k = kk.value;

    

    let kekka = document.querySelector('div#kekka');
    kekka.textContent = '検索結果を以下に表示します。また、過去の検索結果も表示します。';
    let a;
    if (k === 'G001') {
        a = '居酒屋';
    } else if (k === 'G002') {
        a = 'ダイニングバー・バル';
    } else if (k === 'G003') {
        a = '創作料理';
    } else if (k === 'G004') {
        a = '和食';
    } else if (k === 'G005') {
        a = '洋食';
    } else if (k === 'G006') {
        a = 'イタリアン・フレンチ';
    } else if (k === 'G007') {
        a = '中華';
    } else if (k === 'G008') {
        a = '焼き肉・ホルモン';
    } else if (k === 'G009') {
        a = 'アジア・エスニック料理';
    } else if (k === 'G010') {
        a = '各国料理';
    } else if (k === 'G011') {
        a = 'カラオケ・パーティ';
    } else if (k === 'G012') {
        a = 'バー・カクテル';
    } else if (k === 'G013') {
        a = 'ラーメン';
    } else if (k === 'G014') {
        a = 'その他グルメ';
    } else if (k === 'G015') {
        a = 'その他グルメ';
    } else if (k === 'G016') {
        a = 'お好み焼き・もんじゃ';
    } else if (k === 'G017') {
        a = '韓国料理';
    }
    let kekka1 = document.querySelector('div#kekka1');
    kekka1.textContent = '検索結果 : ' + a;

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
    let color = 'rgba(213, 233, 250, 0.778)';

    for (let i=0; i<data.results.shop.length; i++) {
        let catch1 = document.querySelector('div#kekka1');

        let catch0 = document.createElement('div');
        catch0.setAttribute('id' , 'css'+i);
        catch0.style.backgroundColor = color;
        catch0.style.padding = '20px';
        catch0.style.marginTop = '65px';
        catch0.style.marginRight = '100px';
        catch0.style.marginLeft = '100px';
        catch0.style.marginBottom = '20px';
        catch1.insertAdjacentElement("beforeend", catch0);

        let p = document.createElement('p');
        p.setAttribute('id' , 'cre0');
        catch0.insertAdjacentElement("beforeend",p);

        let div = document.createElement('div');
        div.setAttribute('id','catch'+i);
        div.textContent = "～"+ data.results.shop[i].genre.catch +"～";
        p.insertAdjacentElement('beforeend',div);

        let div0 = document.createElement('div');
        div0.setAttribute('id','n'+i);
        div0.textContent = '店舗名 : ' + data.results.shop[i].name;
        p.insertAdjacentElement('beforeend',div0);

        let span = document.createElement('span');
        span.setAttribute('id','yosan'+i);
        span.textContent = '予算';
        span.style.background = 'linear-gradient(transparent 70%, #a7d6ff 70%)';
        p.insertAdjacentElement('beforeend',span);
        let div1 = document.createElement('div');
        div1.setAttribute('id','yosan'+i);
        div1.textContent = data.results.shop[i].budget.name;
        span.insertAdjacentElement('beforeend',div1);

        let span0 = document.createElement('span');
        span0.setAttribute('id','time'+i);
        span0.textContent = '営業日時';
        span0.style.background = 'linear-gradient(transparent 70%, #a7d6ff 70%)';
        p.insertAdjacentElement('beforeend',span0);
        let div2 = document.createElement('div');
        div2.setAttribute('id','time'+i);
        div2.textContent = data.results.shop[i].open;
        span0.insertAdjacentElement('beforeend',div2);

        if (data.results.shop[i].sub_genre.name) {
            let span1 = document.createElement('span');
            span1.setAttribute('id','genre'+i);
            span1.textContent = 'ジャンル';
            span1.style.background = 'linear-gradient(transparent 70%, #a7d6ff 70%)';
            p.insertAdjacentElement('beforeend',span1);
            let div3 = document.createElement('div');
            div3.setAttribute('id','genre'+i);
            div3.textContent = data.results.shop[i].genre.name+' , '+data.results.shop[i].sub_genre.name;
            span1.insertAdjacentElement('beforeend',div3);
        } else {
            let span1 = document.createElement('span');
            span1.setAttribute('id','genre'+i);
            span1.textContent = 'ジャンル';
            span1.style.background = 'linear-gradient(transparent 70%, #a7d6ff 70%)';
            p.insertAdjacentElement('beforeend',span1);
            let div3 = document.createElement('div');
            div3.setAttribute('id','genre'+i);
            div3.textContent = data.results.shop[i].genre.name;
            span1.insertAdjacentElement('beforeend',div3);
        }

        let span2 = document.createElement('span');
        span2.setAttribute('id','adress'+i);
        span2.textContent = '住所';
        span2.style.background = 'linear-gradient(transparent 70%, #a7d6ff 70%)';
        p.insertAdjacentElement('beforeend',span2);
        let div3 = document.createElement('div');
        div3.setAttribute('id','adress'+i);
        div3.textContent = data.results.shop[i].address;
        span2.insertAdjacentElement('beforeend',div3);
    }

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
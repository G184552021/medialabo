//課題6-1
let b = document.querySelector('button#ken');
b.addEventListener('click', sendRequest);


function sendRequest() {
  let kk = document.querySelector('#kensaku[name="kensaku"]');
  let k = kk.value;
  //背景出力
  let color = 'rgba(213, 233, 250, 0.778)'
  let div = document.querySelector('div#css0');
  div.style.backgroundColor = color;
  let div1 = document.querySelector('div#css1');
  div1.style.backgroundColor = color;
  let div2 = document.querySelector('div#css2');
  div2.style.backgroundColor = color;
  let div3 = document.querySelector('div#css3');
  div3.style.backgroundColor = color;
  let div4 = document.querySelector('div#css4');
  div4.style.backgroundColor = color;
  let div5 = document.querySelector('div#css5');
  div5.style.backgroundColor = color;
  let div6 = document.querySelector('div#css6');
  div6.style.backgroundColor = color;
  let div7 = document.querySelector('div#css7');
  div7.style.backgroundColor = color;
  let div8 = document.querySelector('div#css8');
  div8.style.backgroundColor = color;
  let div9 = document.querySelector('div#css9');
  div9.style.backgroundColor = color;
  



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
    for (let i=0; i<data.results.shop.length; i++) {
        let (catch + i) = document.querySelector('div#catch0');
        (catch+i).textContent = "～"+ data.results.shop[i].genre.catch +"～";
    }
    
    //配列　0
    let catch0 = document.querySelector('div#catch0');
    catch0.textContent = "～"+ data.results.shop[0].genre.catch +"～";
    let na = document.querySelector('div#na');
    na.textContent = '店舗名 : ' + data.results.shop[0].name;

    let yosan0 = document.querySelector('span#yosan0');
    yosan0.textContent = '予算';
    let dyosan0 = document.querySelector('div#yosan0');
    dyosan0.textContent = data.results.shop[0].budget.name;
    let time0 = document.querySelector('span#time0');
    time0.textContent = '営業日時';
    let dtime0 = document.querySelector('div#time0');
    dtime0.textContent = data.results.shop[0].open;
    let genre0 = document.querySelector('span#genre0');
    genre0.textContent = 'ジャンル';
    let dgenre0 = document.querySelector('div#genre0');
    dgenre0.textContent = data.results.shop[0].genre.name + ' , ' +data.results.shop[0].sub_genre.name;
    let add0 = document.querySelector('span#add0');
    add0.textContent = '住所';
    let dadd0 = document.querySelector('div#add0');
    dadd0.textContent = data.results.shop[0].address;

    //配列 1
    let catch1 = document.querySelector('div#catch1');
    catch1.textContent = "～"+ data.results.shop[1].genre.catch +"～";
    let nb = document.querySelector('div#nb');
    nb.textContent = "店舗名 : " + data.results.shop[1].name;

    let yosan1 = document.querySelector('span#yosan1');
    yosan1.textContent = '予算';
    let dyosan1 = document.querySelector('div#yosan1');
    dyosan1.textContent = data.results.shop[1].budget.name;
    let time1 = document.querySelector('span#time1');
    time1.textContent = '営業日時';
    let dtime1 = document.querySelector('div#time1');
    dtime1.textContent = data.results.shop[1].open;
    let genre1 = document.querySelector('span#genre1');
    genre1.textContent = 'ジャンル';
    let dgenre1 = document.querySelector('div#genre1');
    dgenre1.textContent = data.results.shop[1].genre.name + ' , ' +data.results.shop[1].sub_genre.name;
    let add1 = document.querySelector('span#add1');
    add1.textContent = '住所';
    let dadd1 = document.querySelector('div#add1');
    dadd1.textContent = data.results.shop[1].address;
    //配列 2
    let catch2 = document.querySelector('div#catch2');
    catch2.textContent = "～"+ data.results.shop[2].genre.catch +"～";
    let nc = document.querySelector('div#nc');
    nc.textContent = "店舗名 : " + data.results.shop[2].name;

    let yosan2 = document.querySelector('span#yosan2');
    yosan2.textContent = '予算';
    let dyosan2 = document.querySelector('div#yosan2');
    dyosan2.textContent = data.results.shop[2].budget.name;
    let time2 = document.querySelector('span#time2');
    time2.textContent = '営業日時';
    let dtime2 = document.querySelector('div#time2');
    dtime2.textContent = data.results.shop[2].open;
    let genre2 = document.querySelector('span#genre2');
    genre2.textContent = 'ジャンル';
    let dgenre2 = document.querySelector('div#genre1');
    dgenre2.textContent = data.results.shop[2].genre.name + ' , ' +data.results.shop[2].sub_genre.name;
    let add2 = document.querySelector('span#add2');
    add1.textContent = '住所';
    let dadd2 = document.querySelector('div#add2');
    dadd2.textContent = data.results.shop[2].address;
    //配列 3
    let catch3 = document.querySelector('div#catch3');
    catch3.textContent = "～"+ data.results.shop[3].genre.catch +"～";
    let nd = document.querySelector('div#nd');
    nd.textContent = "店舗名 : " + data.results.shop[3].name;
    let yosan3 = document.querySelector('span#yosan3');
    yosan2.textContent = '予算';
    let dyosan3 = document.querySelector('div#yosan3');
    dyosan3.textContent = data.results.shop[3].budget.name;
    let time3 = document.querySelector('span#time3');
    time3.textContent = '営業日時';
    let dtime3 = document.querySelector('div#time3');
    dtime3.textContent = data.results.shop[3].open;
    let genre3 = document.querySelector('span#genre3');
    genre3.textContent = 'ジャンル';
    let dgenre3 = document.querySelector('div#genre3');
    dgenre3.textContent = data.results.shop[3].genre.name + ' , ' +data.results.shop[3].sub_genre.name;
    let add3 = document.querySelector('span#add3');
    add3.textContent = '住所';
    let dadd3 = document.querySelector('div#add3');
    dadd3.textContent = data.results.shop[3].address;
    //配列 4
    let catch4 = document.querySelector('div#catch4');
    catch4.textContent = "～"+ data.results.shop[4].genre.catch +"～";
    let ne = document.querySelector('div#ne');
    ne.textContent = "店舗名 : " + data.results.shop[4].name;

    let yosan4 = document.querySelector('span#yosan4');
    yosan4.textContent = '予算';
    let dyosan4 = document.querySelector('div#yosan4');
    dyosan4.textContent = data.results.shop[4].budget.name;
    let time4 = document.querySelector('span#time4');
    time4.textContent = '営業日時';
    let dtime4 = document.querySelector('div#time4');
    dtime4.textContent = data.results.shop[4].open;
    let genre4 = document.querySelector('span#genre4');
    genre4.textContent = 'ジャンル';
    let dgenre4 = document.querySelector('div#genre4');
    dgenre4.textContent = data.results.shop[4].genre.name + ' , ' +data.results.shop[4].sub_genre.name;
    let add4 = document.querySelector('span#add4');
    add4.textContent = '住所';
    let dadd4 = document.querySelector('div#add4');
    dadd4.textContent = data.results.shop[4].address;
    //配列 5
    let catch5 = document.querySelector('div#catch5');
    catch5.textContent = "～"+ data.results.shop[5].genre.catch +"～";
    let nf = document.querySelector('div#nf');
    nf.textContent = "店舗名 : " + data.results.shop[5].name;

    let yosan5 = document.querySelector('span#yosan5');
    yosan5.textContent = '予算';
    let dyosan5 = document.querySelector('div#yosan5');
    dyosan5.textContent = data.results.shop[5].budget.name;
    let time5 = document.querySelector('span#time5');
    time5.textContent = '営業日時';
    let dtime5 = document.querySelector('div#time5');
    dtime5.textContent = data.results.shop[5].open;
    let genre5 = document.querySelector('span#genre5');
    genre5.textContent = 'ジャンル';
    let dgenre5 = document.querySelector('div#genre5');
    dgenre5.textContent = data.results.shop[5].genre.name + ' , ' +data.results.shop[5].sub_genre.name;
    let add5 = document.querySelector('span#add5');
    add5.textContent = '住所';
    let dadd5 = document.querySelector('div#add5');
    dadd5.textContent = data.results.shop[5].address;
    //配列 6
    let catch6 = document.querySelector('div#catch6');
    catch6.textContent = "～"+ data.results.shop[6].genre.catch +"～";
    let ng = document.querySelector('div#ng');
    ng.textContent = "店舗名 : " + data.results.shop[6].name;

    let yosan6 = document.querySelector('span#yosan6');
    yosan6.textContent = '予算';
    let dyosan6 = document.querySelector('div#yosan6');
    dyosan6.textContent = data.results.shop[6].budget.name;
    let time6 = document.querySelector('span#time6');
    time6.textContent = '営業日時';
    let dtime6 = document.querySelector('div#time6');
    dtime6.textContent = data.results.shop[6].open;
    let genre6 = document.querySelector('span#genre6');
    genre6.textContent = 'ジャンル';
    let dgenre6 = document.querySelector('div#genre6');
    dgenre6.textContent = data.results.shop[6].genre.name + ' , ' +data.results.shop[6].sub_genre.name;
    let add6 = document.querySelector('span#add6');
    add6.textContent = '住所';
    let dadd6 = document.querySelector('div#add6');
    dadd6.textContent = data.results.shop[6].address;
    //配列 7
    let catch7 = document.querySelector('div#catch7');
    catch7.textContent = "～"+ data.results.shop[7].genre.catch +"～";
    let nh = document.querySelector('div#nh');
    nh.textContent = "店舗名 : " + data.results.shop[7].name;

    let yosan7 = document.querySelector('span#yosan7');
    yosan7.textContent = '予算';
    let dyosan7 = document.querySelector('div#yosan7');
    dyosan7.textContent = data.results.shop[7].budget.name;
    let time7 = document.querySelector('span#time7');
    time7.textContent = '営業日時';
    let dtime7 = document.querySelector('div#time7');
    dtime7.textContent = data.results.shop[7].open;
    let genre7 = document.querySelector('span#genre7');
    genre7.textContent = 'ジャンル';
    let dgenre7 = document.querySelector('div#genre7');
    dgenre7.textContent = data.results.shop[7].genre.name + ' , ' +data.results.shop[7].sub_genre.name;
    let add7 = document.querySelector('span#add7');
    add7.textContent = '住所';
    let dadd7 = document.querySelector('div#add7');
    dadd7.textContent = data.results.shop[7].address;
    //配列　8
    let catch8 = document.querySelector('div#catch8');
    catch8.textContent = "～"+ data.results.shop[8].genre.catch +"～";
    let ni = document.querySelector('div#ni');
    ni.textContent = "店舗名 : " + data.results.shop[8].name;

    let yosan8 = document.querySelector('span#yosan8');
    yosan8.textContent = '予算';
    let dyosan8 = document.querySelector('div#yosan8');
    dyosan8.textContent = data.results.shop[8].budget.name;
    let time8 = document.querySelector('span#time8');
    time8.textContent = '営業日時';
    let dtime8 = document.querySelector('div#time8');
    dtime8.textContent = data.results.shop[8].open;
    let genre8 = document.querySelector('span#genre8');
    genre8.textContent = 'ジャンル';
    let dgenre8 = document.querySelector('div#genre8');
    dgenre8.textContent = data.results.shop[8].genre.name + ' , ' +data.results.shop[8].sub_genre.name;
    let add8 = document.querySelector('span#add8');
    add8.textContent = '住所';
    let dadd8 = document.querySelector('div#add8');
    dadd8.textContent = data.results.shop[8].address;
    //配列 9
    let catch9 = document.querySelector('div#catch9');
    catch9.textContent = "～"+ data.results.shop[9].genre.catch +"～";
    let nj = document.querySelector('div#nj');
    nj.textContent = "店舗名 : " + data.results.shop[9].name;

    let yosan9 = document.querySelector('span#yosan9');
    yosan9.textContent = '予算';
    let dyosan9 = document.querySelector('div#yosan9');
    dyosan9.textContent = data.results.shop[9].budget.name;
    let time9 = document.querySelector('span#time9');
    time9.textContent = '営業日時';
    let dtime9 = document.querySelector('div#time9');
    dtime9.textContent = data.results.shop[9].open;
    let genre9 = document.querySelector('span#genre9');
    genre9.textContent = 'ジャンル';
    let dgenre9 = document.querySelector('div#genre9');
    dgenre9.textContent = data.results.shop[9].genre.name + ' , ' +data.results.shop[9].sub_genre.name;
    let add9 = document.querySelector('span#add9');
    add9.textContent = '住所';
    let dadd9 = document.querySelector('div#add9');
    dadd9.textContent = data.results.shop[9].address;




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
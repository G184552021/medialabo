// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let s = document.querySelector('button#kaitou');
s.addEventListener('click',hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let y = document.querySelector('input[name="suuji"]');  // 第5回課題:テキストボックスの数値をここに代入
    let yy = y.value;
    let yoso = parseInt(yy);

    kaisu = kaisu + 1;

    let yosou = document.querySelector('span#yoso');
    yosou.textContent = kaisu + '回目の予想: '+ yoso;

    let a = document.querySelector('div#kotae');
//答えの判定
    if (kaisu >= 4) {
        a.textContent = '答えは '+ kotae +' でした．すでにゲームは終わっています';
    } else {
        if (yoso === kotae) {
            a.textContent='正解です. おめでとう!';
        } else {
            if (yoso > kotae) {
                a.textContent='まちがい．答えはもっと小さいですよ';
            } else {
                a.textContent='まちがい．答えはもっと大きいですよ';
            }   
        }
    } 
    a.insertAdjacentElement('afterend',a);
}
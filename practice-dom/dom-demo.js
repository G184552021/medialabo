let eu = document.querySelector('li#EU');
eu.remove()
let ul = document.querySelector('ul');
let li;
li = document.createElement('li');
li.textContent = 'アジア大陸';
ul.insertAdjacentElement('beforeend', li);
li = document.createElement('li');
li.textContent = 'ヨーロッパ大陸';
ul.insertAdjacentElement('beforeend', li);


// 練習4-7
// id が sevenOcean の h2 要素を検索
// （次の行を完成させる）
let h2sevenOcean = document.querySelector('h2');

// 7大洋　の名前を配列に代入
let oceans = [
  '北極海',
  '北大西洋',
  '南大西洋',
  'インド洋',
  '北太平洋',
  '南太平洋',
  '南極海'
]
// ul 要素を新規作成する．（次の行を完成させる）
ul = document.cleateElement('ul');

// ul 要素を h2sevenOcean の次に追加する（次の行を書く）
h2sevenocean.insertAdjacentElement('beforeend',ul);

// ul に7つの大陸を追加する
for (let o of oceans) {
  // （この中を完成させる）
    ul.insertAdjacentElement('beforeend', li);
}



// すべての h2 要素を検索する（次の行を完成させる）
let h2s = document.querySelector('h2');

// h2 要素に対して繰り返す
for (let h2 of h2s) {
    h2s.
  // h2 の背景色を 'palegreen' に変更する
  //   (次の行を書く)

}

let ls = document.querySelectorAll('li');
for (let li of ls) {
    li.classList.add('orangeUnderline');
  }
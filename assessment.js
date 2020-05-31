(function(){
'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/** 指定した要素の子供をすべて除去する
　　　@param {HTMLElement} element HTMLの要素
   */

function removeAllChildren(element){
while(element.firstChild){
//子要素がある限り削除する
element.removeChild(element.firstChild);
}

assessmentButton.onClick = () => {
const userName = userNameInput.value;
if(userName.length === 0){
//名前がからのときは処理を中止する
return;
}

//診断結果表示エリアの作成
removeAllChildren(resultDivided);
const header = document.createElement('h3');
header.innerText = '診断結果';
resultDivided.appendChild(header);

const paragraph = document.createElement('p');
const result = assessment(userName);
paragraph.innerText = result;
resultDivided.appendChild(paragraph);

//ツイートエリアの作成
removeAllChildren(tweetDivided);
const anchor = document.createElement('a');
const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=*******' + encodeURIcomponent(result);
anchor.setAttribute('href',hrefValue);
anchor.className = 'twitter-hashtag-button';
anchor.innerText = 'tweet  ****************';

tweetDivided.appendChild(anchor);

 twttr.widgets.load();
 };
 
 userNameInput.onkeydown = (event) => {
 if(event.keyCode === 13){
 assessmentButton.onClick();
   }
  };
  
 const answers = ['takuchan69のいいところは声です。心に残ります',
 'takuchan69のいいところは眼差しです。凛としています',
 'takuchan69のいいところは情熱です',
 'takuchan69のいいところは厳しさです。',
 'takuchan69のいいところは知識です。',
 'takuchan69のいいところはユニークさです。',
 'takuchan69のいいところは用心深さです。',
 'takuchan69のいいところは見た目です。',
 'takuchan69のいいところは決断力です。',
 'takuchan69のいいところは思いやりです。',
 'takuchan69のいいところは感受性です。',
 'takuchan69のいいところは好奇心です。'];
 
 /**
 名前の文字列を渡すと診断結果を返す関数
 @param {string} userName ユーザーの名前
 @return {string} 診断結果
 */
 
 function assessment(userName){
    //全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for(let i = 0;i < userName.length;i++){
    sumOfCharCode +=userName.charCodeAt(i);
    }
    
    //文字コード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    
    result = result.replace(/takuchan69/g,userName);
    return result;
    }
    
    //デバッグのためのコードconsole.assert(param1[boolean],param2)
       console.assert(assessment('太郎') === '太郎のいいところは決断力です','診断結果の文言の特定の部分を名前に置き換える処理が正しくありません');
 );
      console.assert(assessment('太郎') === assessment('太郎'),'入力が同じなら同じ結果を返すはずの出力が正しくありません');
 })();
    

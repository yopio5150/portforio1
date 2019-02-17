(function(){
    'use strict';
    const userNameInput = document.getElementById('user-name');
    const shindanButton = document.getElementById('shindan');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');

    /**
　　* 指定した要素の子どもを全て削除する
　　* @param {HTMLElement} element HTMLの要素
　　*/
    function removeAllChildren(element) {
        while (element.firstChild) { // 子どもの要素があるかぎり削除
            element.removeChild(element.firstChild);
        }
    }

    shindanButton.onclick = () => {
        const userName = userNameInput.value;
        if (userName.length === 0) { // 名前が空の時は処理を終了する
            return;
        }
        
        // 診断結果表示エリアの作成
        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);
        

        //TODO ツイートエリアの作成
    };
    const answers = [
        '{userName}の推しメンは、譜久村みずきです。',
        '{userName}の推しメンは、生田絵梨名です。',
        '{userName}の推しメンは、石田亜由美です。',
        '{userName}の推しメンは、佐藤優樹です。',
        '{userName}の推しメンは、小田さくらです。',
        '{userName}の推しメンは、牧野真莉愛です。',
        '{userName}の推しメンは、野中美希です。',
        '{userName}の推しメンは、森戸智咲です。',
        '{userName}の推しメンは、横山玲奈です。',
        '{userName}の推しメンは、加賀楓です。',
        '{userName}の推しメンは、譜久村みずきです。',
    ];

/**
* 名前の文字列を渡すと診断結果を返す関数
* @param {string} userName ユーザーの名前
* @return {string} 診断結果
*/
function assessment(userName) {
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfcharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
    }
    // 文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfcharCode % answers.length;
    let result = answers[index];
    result = result.replace(/\{userName\}/g, userName);     
    return result;
}

    // テストコード
    console.assert(
        assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
        '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );
    console.assert(
        assessment('太郎') === assessment('太郎'),
        '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);
})();
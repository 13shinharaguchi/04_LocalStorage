$(function () {
    //配列準備
    let test = []
    var storageKey = 'me';
    //保存ボタン
    $('.set_local').on("click", function () {

        //入力されたものを変数にいれる
        var input = $('.title').val()
        text_area = $('.text_area').val()

        //オブジェクトに格納
        var data = {
            title: input,
            text: text_area
        }

        //配列にオブジェクトを入れる
        test.push(data)

        //配列をJSON形式に変換
        const json_tes = JSON.stringify(test)

        //JSON配列をローカルストレージにいれる
        localStorage.setItem(storageKey, json_tes);

        //入力を白紙にする
        $('.title').val('')
        $('.text_area').val('')
    })

    //削除ボタン(一旦すべて削除する)
    $('.remove_local').on("click", function () {
        localStorage.clear()
    })


    function display() {
        //ローカルストレージの中身を変数に格納し、元の形に戻す
        let shin_json = localStorage.getItem(storageKey)
        let shin = JSON.parse(shin_json)

        //もどした配列の中身の個数ぶん回す
        for (var i = 0; i < shin.length; i++) {
            let shin2 = shin[i]
            let title_test = shin2.title
            let text_test = shin2.text

           
            var template =
                '<input type="text" id="title_test" class="form-control" value="aa" />' +
                '<textarea class="form-control" id="text_area_test">%s</textarea>'
            //文字列になってしまうため、変数に置き換える
            template = template.replace('aa', title_test).replace('%s', text_test);

             //htmlに追加する
            $("#memoArea").append(template);
        }
    }
    //表示ボタン
    $('.display').on("click", function () {
        display()
    })
})
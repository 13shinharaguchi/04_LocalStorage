$(function () {
    //配列準備
    let test = []
    var storageKey = 'me';


// //記録保存（他の挙動に影響するからコメントアウト）
//     if (localStorage.getItem(storageKey)) {
//         const jsonData = localStorage.getItem(storageKey)
//         const maindata = JSON.parse(jsonData);//parse=解析する

//         console.log(maindata)
//         for (var i = 0; i < maindata.length; i++) {
//             let title_test = maindata[i].title; //ここは増える変数なので、下にあるallDataは保存するたび、増やし、履歴として残ります。
//             let text_test = maindata[i].title_test;

//             test.push(maindata[i])
//         }
//     };

    //保存ボタン
    $('.set_local').on("click", function () {

        //入力されたものを変数にいれる
        let input = $('.title').val()
        let text_area = $('.text_area').val()

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
        display()
    })

    //削除ボタン(一旦すべて削除する)
    $('.remove_local').on("click", function () {
        localStorage.clear()
    })


    function display_all() {
        //ローカルストレージの中身を変数に格納し、元の形に戻す
        let shin_json = localStorage.getItem(storageKey)
        let shin = JSON.parse(shin_json)

        //もどした配列の中身の個数ぶん回す
        for (var i = 0; i < shin.length; i++) {
            let shin2 = shin[i]
            let title_test = shin2.title
            let text_test = shin2.text


            // var template =
            //     '<div class=card>' +
            //     '<input type="text" calss="title_test_i" class="form-control" value="aa" />' +
            //     '<textarea class="form-control" calss="text_area_test_i">%s</textarea>' +
            //     '</div>'
            var template =
                '<div class=card_wrapper>'
            //文字列になってしまうため、変数に置き換える
            // template = template.replace('%title', title_test).replace('%text', text_test);

            var text_top = '<div class=card_title> %title'
            text_top = text_top.replace('%title', title_test)

            var text_under = '<div class=card_text> %text '
            text_under = text_under.replace('%text', text_test)
            //htmlに追加する
            $("#memoArea").append(template);
            $(".card_wrapper").append(text_top);
            $(".card_wrapper").append(text_under);

        }
    }
    let count = 0
    function display() {
        //ローカルストレージの中身を変数に格納し、元の形に戻す
        let shin_json = localStorage.getItem(storageKey)
        let shin = JSON.parse(shin_json)

        //もどした配列の中身の個数ぶん回す

        let shin2 = shin[shin.length - 1]
        let title_test = shin2.title
        let text_test = shin2.text

        var template =
            '<div class=card_wrapper>' +
            '<div class=cara_title> %title' +
            '<p class=card_text> %text'
        //文字列になってしまうため、変数に置き換える
        template = template.replace('%title', title_test).replace('%text', text_test);




        // var template =
        //     '<div class=card>' +
        //     '<input type="text" calss="title_test_i" class="form-control" value="aa" />' +
        //     '<textarea class="form-control" calss="text_area_test_i">%s</textarea>' +
        //     '</div>'
        // var template =
        //     '<div class=card_wrapper>' 
        //文字列になってしまうため、変数に置き換える
        // template = template.replace('%title', title_test).replace('%text', text_test);

        // var text_top = '<div class=card_title> %title'
        // text_top = text_top.replace('%title', title_test)

        // var text_under = '<div class=card_text> %text '
        // text_under = text_under.replace('%text', text_test)
        //htmlに追加する
        if (count < 5) {
            count++;
            $("#memoArea").append(template);

        }

        // $(".card_wrapper").append(text_top);
        // $(".card_wrapper").append(text_under);
    }

    //表示ボタン
    $('.display').on("click", function () {
        display_all()
    })

    let idenx_s = 0
    //クリックされたら下に表示する
    $(document).on("click", '.card_wrapper', function () {
        let hs = $(this).find('p').text()
        console.log('タイトルの取得', hs)
        $("#pop_title").text(hs)

        idenx_s = $('.card_wrapper').index(this);
        console.log(idenx_s)
        $('#pop_title').css({
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'flex-direction': 'column',
            'background-color': 'sienna',
            'width': 'auto',
            'height': '90%'
        });

    })

    //編集ページに飛ぶ
    $("#editer").on("click", function () {
        // location.href = '/html/main.html'
        $('.modal').css('display', 'block');
        const json_text2 = localStorage.getItem(storageKey)

        //JSONをもとの形にもどす
        const text2 = JSON.parse(json_text2)
        console.log(text2)
        //戻したデータを表示する
        $("#input_ss").val(text2[idenx_s].title)
        $("#text_area_ss").val(text2[idenx_s].text)

       
    })


    $('#onn').on("click", function () {
        let input = $("#input_ss").val()
        let text_area = $("#text_area_ss").val()

        //オブジェクトに格納
        var data = {
            title: input,
            text: text_area
        }

        //配列にオブジェクトを入れる
        test[idenx_s] = data

        const json_tes = JSON.stringify(test)

        //JSON配列をローカルストレージにいれる
        localStorage.setItem(storageKey, json_tes);
        $('.modal').css('display', 'none');
    })

})
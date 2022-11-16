$(function () {
    let clickcount = 0
    //複数を配列の中にオブジェクトで保存する
    $('.set_local').on("click", function () {
        if (clickcount < 3) {
            clickcount = clickcount + 1
            const title = $(".title").val()
            const text_area = $(".text_area").val()
            const date = $("#date").val()

            let data =
            {
                title: title,
                text_area: text_area,
                date: date
            }


            const data_json = JSON.stringify(data)
            localStorage.setItem(clickcount + "着", data_json)

            $(".title").val('')
            $(".text_area").val('')
            $("#date").val('')
        } else {
            clickcount = 0 
        }

    })


    $('.display').on("click", function () {
        SpeechRecognition = webkitSpeechRecognition
        const recognition = new SpeechRecognition();

        recognition.onresult = (event) => {
            const count = event.results[0][0].transcript

            console.log(count)

            const json_data = localStorage.getItem(count + "着")
            const redata = JSON.parse(json_data)
            $(".title_test").val(redata.title)
            $(".text_area_test").val(redata.text_area)

        }
        recognition.start();


        // $(".text_area_test").val(memo[ss].text_area)
    })



    //変更のテスト
    // 音声認識
    // $(".hekou").on("click", function () {
    //     SpeechRecognition = webkitSpeechRecognition
    //     const recognition = new SpeechRecognition();

    //     recognition.onresult = (event) => {
    //         const ss = event.results[0][0].transcript

    //         console.log(ss)

    //         const top1_json2 = localStorage.getItem(clickcount + "着")

    //         //JSONをもとの形にもどす
    //         const memo = JSON.parse(top1_json2)
    //         console.log(memo)
    //         $(".title_test").val(memo[ss].title)
    //         $(".text_area_test").val(memo[ss].text_area)
    //     }
    //     recognition.start();

    // })

    //入力画面に移動する
    $(".back_button").on("click", function () {
        location.href = "/html/login.html"
    })

    //削除
    $('.remove_local').on("click", function () {
        //キーを選択して消す
        // localStorage.removeItem("memo")

        //全消し
        localStorage.clear()
    })





})
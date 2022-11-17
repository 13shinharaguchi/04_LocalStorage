$(function () {


    //保存関数
    function saveStorage(key, hage) {
        localStorage.setItem(key, JSON.stringify(hage));
    }

    //取得関数
    function getStorage(key) {
        let json_data = localStorage.getItem(key)
        const re_json_date = JSON.parse(json_data)
        return re_json_date
    }

    //削除関数
    function removeStorage() {
        localStorage.clear()
    }

    //追加関数
    function add() {
        let title = $(".title").val()
        let text_area = $(".text_area").val()
        add_memo(title, text_area)
        saveMemo(title, text_area)
    }

    //追加メモ、あんまりわからん
    function add_memo(title, text_area) {
      
        $(".title").val('')
        $(".text_area").val('')
    }

    //保存メモ
    memo_all = []
    function saveMemo(title, text_area) {
        let testob = {
            title: title,
            text_area: text_area
        };
        memo_all.push(testob)
        saveStorage("memoOb", memo_all)
    }


    $('.set_local').on("click", function () {
        add()
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
$(function () {
    //保存
    $('.set_local').on("click", function () {
        const text = $(".text_area").val()
        localStorage.setItem("memo", text)
    })

    //削除
    $('.remove_local').on("click", function () {
        //キーを選択して消す
        // localStorage.removeItem("memo")

        //全消し
        localStorage.clear()
    })

    //確認画面に移動する
    $(".login_button").on("click", function () {
        location.href = "/html/voice.html"
    })

    //入力画面に移動する
    $(".enter_button").on("click", function () {
        location.href = "/html/enter.html"
    })



})
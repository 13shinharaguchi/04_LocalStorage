$(function () {
    //保存
    $('.set_local').on("click", function () {
        const text = $(".text_area").val()
        localStorage.setItem("memo", text)
    })

    //削除
    $('.remove_local').on("click", function () {
        localStorage.removeItem("memo")
    })

    //確認画面に移動する
    $(".login_button").on("click", function () {
        location.href = "/html/voice.html"
    })

})
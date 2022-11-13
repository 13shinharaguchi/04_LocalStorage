$(function () {
    //保存
    $('.set_local').on("click", function () {
        const text = $(".text_area").val()
        const passward = $("#password_area").val()

        localStorage.setItem("memo", text)

    })

    //削除
    $('.remove_local').on("click", function () {
        localStorage.removeItem("memo")
    })

    //ログイン機能
    $('.certification_local').on("click", function () {
        const certification = localStorage.getItem("memo")
        const text_local = $(".certification_area").val()

        if (certification === text_local) {
            alert("成功")
        } else
            alert("ちゃう")
        
        
    })





})
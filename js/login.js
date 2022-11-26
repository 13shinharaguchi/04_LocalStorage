$(function () {
    //ログイン画面
    $('.login').on("click", function () {
        let login_pass = $('#pass').val()
        let local_pass = localStorage.getItem("pass")

        if (login_pass === local_pass) {
            location.href = '/html/enter.html'
        } else {
            $('.error').html('<p>パスワードが違います</p>');
        }
    })
})
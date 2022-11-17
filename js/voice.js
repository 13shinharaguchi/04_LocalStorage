//文字をローカルストレージにいれて音声認識であたりをつける
$(".phonetic_match").on("click", function () {
    //文字で保存したローカルストレージを取得して、変数に入れる
    const test = (localStorage.getItem("memo"))

    SpeechRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition();
    //音声を取得してイベントを発火させる
    recognition.continuous = true;
    recognition.onresult = (event) => {
        const test2 = event.results[0][0].transcript

        console.log(test2)
        //入力されたものとあっているかを確認する
        if (test === test2) {
            alert("同じです")
        } else {
            alert("違うよー")
        }
    }
    //ブラウザのマイクを起動させる
    recognition.start();
})

$(".back_button").on("click", function () {
    location.href = "/html/login.html"
})


$(function () {
    $("#btnAdd").val("追加").on('click', function () {

        // 要素数
        var n = $(".hoge").length + 1;

        // 追加する要素文字列
        var dom = "<div class='hoge' id='hoge-" + n + "'>" + n + ".";
        dom += "<input type='text' id='hoge-in- " + n +"'/>";
        dom += "</div>";

        // 要素を追加
        $("#dvContentArea").append(dom);
    });
    $("#btnDel").val("削除").on('click', function () {

        // 要素数
        var n = $(".hoge").length;

        // 要素数が0の場合戻る
        if (n <= 0) return;

        // 要素の削除
        $(`#hoge-${n}`).remove();
    });
});
function changeInput(d) {
    alert("id:" + d.id + "の値が" + $(d).val() + "に変更された。");
}

$(function () {
    // 削除処理
    $("#delete").on("click", function () {
        localStorage.clear();
        showList();
    });

    // 保存処理
    $("#save").on("click", function () {
        localStorage.setItem(localStorage.length.toString(), $("#todo").val());
        $("#todo").val("");
        showList();
    });

    showList();
});

function showList() {
    $("#list").html("");
    for (let i = 0; i < localStorage.length; i++) {
        $("#list").append("<li class='list-group-item'><button class='btn btn-danger mr-2' onclick='deleteItem(" + localStorage.key(i) + ")'><i class='fas fa-trash-alt'></i></button>" + localStorage.getItem(localStorage.key(i)) + "</li>");
    }
}

function deleteItem(i) {
    localStorage.removeItem(i);
    showList();
}
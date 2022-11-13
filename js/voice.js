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

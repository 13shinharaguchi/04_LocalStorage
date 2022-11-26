if (localStorage.getItem("me")) {
    //ローカルストレージからしゅとくして変数にいれる
    const json_text2 = localStorage.getItem("me")

    //JSONをもとの形にもどす
    const text2 = JSON.parse(json_text2)
    console.log(text2)
    //戻したデータを表示する
    $("#input").val(text2[0].title)
    $("#text_area").val(text2[0].text)
}
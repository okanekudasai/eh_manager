var cookies = document.cookie.split(";");
var id, pw;

if (cookies.length > 0) {
    for (var c of cookies) {
        var cook = c.split("=");
        if (cook[0] == "id") id = cook[1];
        else if (cook[0] == "pw") pw = cook[1]; 
    }
} else {
    console.log("쿠키가 없습니다.");
}

join_button.addEventListener("click", () => {
    location.href = "./join.html";
});
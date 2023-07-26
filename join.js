id_input.addEventListener("keyup", (e) => {
    console.log(id_input.value);
});

pw_repeat_input.addEventListener("keyup", (e) => {
    if (pw_repeat_input.value.length == 0) return;
    if (pw_input.value == pw_repeat_input.value) console.log("일치");
    else console.log("불일치");
})

join_button.addEventListener("click", () => {
    console.log("가입하기 버튼 눌림!");
})
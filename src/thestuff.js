async function init() {
    const postBtn = document.getElementById("post");
    postBtn.addEventListener("click", post);
}

function post() {
    let field = document.getElementById("postField");
    let text = field.value;
    if (text === "") {
        field.placeholder = "YOU CANNOT POST NOTHING!";
        setTimeout(function () {
            field.placeholder = "type something";
        }, 2000);
    }
}
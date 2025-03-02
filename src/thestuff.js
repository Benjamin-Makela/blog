const time = new Date();

async function init() {
    const postBtn = document.getElementById("postBtn");
    postBtn.addEventListener("click", post);
}

let emptyCldn = 0;
let waitTime = 1000;
function post() {
    let field = document.getElementById("postBodyField");
    let text = field.value;
    if (text === "") {
        field.placeholder = "YOU CANNY POST NOTHING!";
        emptyCldn++;
        setTimeout(function() {
            emptyCldn--;
            if (emptyCldn == 0)
                field.placeholder = "type something";
        }, waitTime);
    } else {
        
    }
}
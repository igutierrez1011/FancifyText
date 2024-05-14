window.onload = function() {
    document.getElementById("biggerBtn").onclick = function() {
        document.getElementById("textInput").style.fontSize = "24pt";
    };

    document.getElementById("mooBtn").onclick = function() {
        let textArea = document.getElementById("textInput");
        let sentences = textArea.value.split(".");
        for (let i = 0; i < sentences.length; i++) {
            if (sentences[i].trim().length > 0) {
                sentences[i] = sentences[i].trim() + "-Moo";
            }
        }
        textArea.value = sentences.join(". ").trim() + ".";
        textArea.value = textArea.value.toUpperCase();
    };
}

function changeStyle() {
    let textArea = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

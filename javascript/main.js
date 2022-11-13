window.addEventListener("keyup", enterKey);
/**
 * @param {Window | KeyboardEvent} e
 */
function enterKey(e) {
    let val = commandLine.value.split(" ");
    switch (e.key) {
        case "Enter":
            if (secret) {
                secret = false;
                setFocus();
                if (passwordLine.value != password)
                    addElement("Incorrect Password!", "text-danger");
                else {
                    addElement(
                        '<span class="command">rmos</span> DANGER! Will delete this OS',
                        "text-danger"
                    );
                }
                passwordLine.value = "";
                return;
            }
            let v = commands[val[0]];
            addElement(
                '<label>visitor@<span class="text-danger">Rama</span>:<span class="text-blue-500">' +
                    directory.textContent +
                    "</span>$</label> " +
                    val.join(" ")
            );
            cmdHistory.unshift(val.join(" "));
            commandLine.value = "";
            hC = 0;

            if (val[0] == "") return;
            if (v == undefined)
                return addElement(
                    '<label class="text-danger">' +
                        val[0] +
                        " not found. For a list of commands, type <span class=\"command\">'help'</span></label>"
                );

            if (v["text"] != undefined) addElement(v["text"], v["style"]);
            if (v["run"] != undefined) v.run(val);
            break;
        case "ArrowUp":
            if (cmdHistory[hC] == undefined) return;
            commandLine.value = cmdHistory[hC];
            hC = Math.abs((-hC - 1) % cmdHistory.length);
            break;
        case "ArrowDown":
            if (cmdHistory[hC] == undefined) return;
            commandLine.value = cmdHistory[hC];
            hC = (hC + 1) % cmdHistory.length;
            break;
    }
}

/**
 * @param {string} text
 */
function addElement(text, style) {
    let n = document.createElement("div");
    n.innerHTML = text;
    n.classList = style;
    output.appendChild(n);
    window.scrollTo(0, document.body.offsetHeight);
}

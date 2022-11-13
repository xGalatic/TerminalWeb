const commandLine = getElement("#command-line");
const passwordLine = getElement("#password-line");
let password = "ramacodes123";
const output = getElement("#output");
let directory = getElement("#dir-text");
let cmdHistory = [];
let hC = 0;
let secret = false;
window.onload = showBanner;

function changeDirectory(val) {
    directory.textContent = val;
}

function showBanner() {
    addElement(
        `


<p>****____***************************__**___</p>
<p>***/ __ \\____*_____*___**____*_***/**|/**/</p>
<p>**/ /_/ / __ \`/ __ \`__ \\/ __ \`/**/*/|_/*/ </p>
<p>*/ _, _/ /_/ / / / / / / /_/ /**/*/**/*/**</p>
<p>/_/ |_|\\__,_/_/ /_/ /_/\\__,_/**/_/**/_/***(_)</p>
        <div>Welcome to my interactive web terminal.</div>
        <div>for a list of available commands, type <span class=\"command\">'help'</span>.</div>
        <div>NOTE: All commands are CASE sensitive</div>`.replaceAll(
            "*",
            "&nbsp;"
        ),
        "text-warn"
    );
}

function setFocus() {
    if (secret) {
        getElement("#password").classList = "flex";
        return passwordLine.focus();
    }
    getElement("#password").classList = "hidden";
    getElement("#cmd").classList = "flex";
    commandLine.focus();
}

/**
 *
 * @param {string} element
 * @returns {HTMLElement}
 */
function getElement(element) {
    return document.querySelector(element);
}

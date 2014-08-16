// ==UserScript==
// @name        CheckBoxes
// @namespace   github.com/vasuman/userscripts
// @description Checks all checkboxes boxes on a page
// @include     *
// @version     0.0
// @grant       GM_registerMenuCommand
// ==/UserScript==

function checkAll() {
    var inputs = document.getElementsByTagName('input'),
    forEach = Array.prototype.forEach;
    forEach.call(inputs, function(input) {
        if (input.type && input.type == 'checkbox') {
            input.checked = true;
        }
    });
}

GM_registerMenuCommand("Check all boxes", checkAll);

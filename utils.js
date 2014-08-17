/* A collection of miscellneous utilities to make writing userscripts easier */

var GM_registerKeyTrigger = (function() {
    'use strict';
    var callbacks = {}
    function keyDownListener(ev) {
        var keyStr = '';
        if (ev.altKey) {
            keyStr += 'Alt - ';
        }
        if (ev.ctrlKey) {
            keyStr += 'Ctrl - ';
        }
        if (ev.shiftKey) {
            keyStr += 'Shift - ';
        }
        if (ev.char) {
            keyStr += ev.char;
        } else {
            if (ev.key == 32) {
                keyStr += 'Space';
            }
        }
        var callback = callbacks[keyStr];
        if (callback) {
            ev.preventDefault();
            return callback();
        }
    }
    function init() {
        window.addEventListener('keydown', keyDownListener);
    }
    init();
    return function(key, callback) {
        if (callbacks[key] != null) {
            callbacks[key].push(callback);
        } else {
            callbacks[key] = [callback];
        }
    }
})();

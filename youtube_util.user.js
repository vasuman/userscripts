// ==UserScript==
// @name        YoutubeUtil
// @namespace   github.com/vasuman/userscripts
// @description Miscellaneous Youtube functions
// @include     http://*.youtube.com/*
// @include     https://*.youtube.com/*
// @require     https://raw.github.com/vasuman/userscripts/blob/master/util.js
// @version     0.0
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    var uw = unsafeWindow || window || this.window,
    player = null;
    const STATE_FINISHED = 0,
    STATE_PLAYING = 1,
    STATE_PAUSED = 2;
    function init() {
        var element;
        if(yt && yt.player && yt.player.getPlayerByElement) {
            element = document.getElementById('player');
            player = yt.player.getPlayerByElement(element);
        } else {
            player = document.getElementById('movie_player');
        }
    }

    function togglePlaying() {
        var state = player.getPlayerState();
        if (state == STATE_PLAYING) {
            player.pauseVideo();
        } else if (state == STATE_PAUSED) {
            player.playVideo();
        }
    }

    GM_registerKeyTrigger('Space', togglePlaying);
})();

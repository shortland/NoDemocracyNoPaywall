// ==UserScript==
// @name         No Pay/Adwall - BusinessInsider
// @namespace    https://github.com/shortland/NoDemocracyNoPaywall
// @version      0.1
// @description  Title.
// @author       shortland
// @match        https://www.businessinsider.com/*
// @grant        none
// ==/UserScript==

(doIt = function() {
    window.tp = null;
    window.___tp = null;
    setTimeout(doIt, 10);
})();

setTimeout(() => {
    document.getElementsByTagName("html")[0].style.overflow = "scroll";
}, 1500);

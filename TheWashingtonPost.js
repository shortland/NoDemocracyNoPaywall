// ==UserScript==
// @name         No Pay/Adwall - TheWashingtonPost
// @namespace    https://github.com/shortland/NoDemocracyNoPaywall
// @version      0.1.1
// @description  Title.
// @author       shortland
// @match        https://www.washingtonpost.com/*
// @grant        none
// ==/UserScript==

(doIt = function() {
    window.TWP = null;
    setTimeout(doIt, 10);
})();

setTimeout(() => {
    document.getElementsByTagName("html")[0].style.overflow = "scroll";
}, 1500);

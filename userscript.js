// ==UserScript==
// @name         No Democracy? No Paywall.
// @namespace    https://github.com/shortland/NoDemocracyNoPaywall
// @version      0.1.1
// @description  Title.
// @author       shortland
// @match        https://www.washingtonpost.com/*
// @grant        none
// ==/UserScript==

console.log("No Democracy? No Paywall.");
(doIt = function() {
    window.TWP = null;
    setTimeout(doIt, 10);
})();

setTimeout(() => {
    document.getElementsByTagName("html")[0].style.overflow = "scroll";
}, 1500);

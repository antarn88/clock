"use strict";
const getClock = (() => {
    setInterval(() => {
        const format = { hour: "numeric", minute: "numeric", second: "numeric" };
        const dateNow = new Date().toLocaleTimeString("hu", format);
        document.querySelector(".clock").textContent = dateNow;
    }, 1000);
})();
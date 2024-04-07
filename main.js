
// =====1=====

const timerSpan = document.querySelector("#test_timer")

let seconds1 = 3600
const simpleTimerMinutes = setInterval(function () {
    
    seconds1 -= 1
    let m = Math.floor(seconds1/60%60)
    let h = Math.floor(seconds1/3600%24)
    let d = Math.floor(seconds1/86400)

    timerSpan.textContent = `${d}d ${h}h ${m}m`

    if (seconds1 < 0) {
        clearInterval(simpleTimer)
        timerSpan.innerHTML = "Час вийшов"
    } else if (seconds1 === 1800) {
        console.log("Залишилась половина часу")
    }
}, 1000)

// =====2=====

const animateSpan = document.querySelector("#animated_timer")
const box = document.querySelector("#box")
const btn = document.querySelector("#btn")

btn.addEventListener("click", activeTimer)

function activeTimer() {
    let ms = 30000
    btn.setAttribute("disabled", "disabled")
    const simpleTimer = setInterval(function () {
    
    ms -= 4
    let s = Math.floor(ms/1000)    

    animateSpan.textContent = `${s}s ${ms%1000}ms`

    if (ms < 0) {
        clearInterval(simpleTimer)
        animateSpan.innerHTML = "Час вийшов"
        box.style.border = "3px solid green"
        btn.removeAttribute("disabled")
    } else if (ms === 10000) {
        box.style.border = "3px solid red"
    }
}, 1)}







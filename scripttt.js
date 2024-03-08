var seconds = 0
var setTimer = setInterval(myfunc,1000)
function myfunc(){
    seconds++
    var hour = Math.floor(seconds / 3600)
    var minute = Math.floor((seconds - hour * 3600) / 60)
    var Upseconds = seconds - (hour * 3600 + minute * 60)
    document.getElementById("counter").innerHTML = hour + ':' + minute +':' + Upseconds
}

function stop(){
    clearInterval(setTimer)
}
function start(){
    setInterval(setTimer)
}
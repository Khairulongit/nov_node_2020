var currentDate = function (){
    return new Date()
}

var currentDay = function(){
    return new Date().getDay()
}

var currentTime = function(){
    var cd = new Date()
    return cd.getTime() + " : " + cd.getHours() + " : " + cd.getMinutes() + " : " + cd.getSeconds()
}

exports.getCurrentDate = currentDate
exports.getCurrentDay = currentDay
exports.getCurrentTime = currentTime
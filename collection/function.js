//js模拟阻塞线程
function sleep(milliSeconds){
    var startTime = new Date().getTime(); // get the current time    
    while (new Date().getTime() < startTime + milliSeconds);
}

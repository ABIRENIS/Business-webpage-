let starts = document.querySelector('.start');
    let stops = document.querySelector('.stop');
    let restarts = document.querySelector('.restart');
    let resets = document.querySelector('.reset');
    let watch = document.getElementById('watch');
    let clkRun = null;

    let hour = parseInt(localStorage.getItem("hour")) || 0;
    let minute = parseInt(localStorage.getItem("minute")) || 0;
    let second = parseInt(localStorage.getItem("second")) || 0;
    let timerRunning = localStorage.getItem("timerRunning") === "true";
    updatetime(); 
    function start() {
      watch.value = null;
      if (clkRun === null) {
        clkRun = setInterval(time, 1000);
        localStorage.setItem("timerRunning", "true");
      }
    }
       if (timerRunning) {
      start();
     }
    function time() {
      second++;
      if (second === 60) {
        second = 0;
        minute++;
      }
      if (minute === 60) {
        minute = 0;
        hour++;
      }
      updatetime();
      localStorage.setItem("hour", hour);
      localStorage.setItem("minute", minute);
      localStorage.setItem("second", second);
    }
    function updatetime() {
      starts.innerText = String(hour).padStart(2, '0') + ' :';
      stops.innerText = String(minute).padStart(2, '0') + ' :';
      restarts.innerText = String(second).padStart(2, '0'); 
    }
    function stop() {
      clearInterval(clkRun);
      clkRun = null;
      localStorage.setItem("timerRunning", "false");
    }
    function restart() {
      if (hour != 0) {
        totalfun1();
      } else if (minute != 0) {
        totalfun2();
      } else if (second != 0) {
        totalfun3();
      } else {
        alert("Please start the watch");
      }
    }
    function totalfun3() {
      let total = `${second} sec only`;
      watch.value = total;
      stop();
      hour = 0;
      minute = 0;
      second = 0;
      resetTime();
    }
    function totalfun2() {
      let total = `${minute}min : ${second}sec`;
      watch.value = total;
      stop();
      hour = 0; 
      minute = 0;
      second = 0;
      resetTime();
    }
    function totalfun1() {
      let total = `${hour}: hour ${minute} min ${second} sec`;
      watch.value = total;
      stop();
      hour = 0;
      minute = 0;
      second = 0;
      resetTime();
    }
    function resetTime() {
      localStorage.setItem("hour", 0);
      localStorage.setItem("minute", 0);
      localStorage.setItem("second", 0);
      localStorage.setItem("timerRunning", "false");
       updatetime();
    }
   function reset(){
      stop();
      hour = 0;
      minute = 0;
      second = 0;
      watch.value =null;
      resetTime();
   }
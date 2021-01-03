// ==UserScript==
// @name         HostMap Alarm
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Ipcom host map alarm
// @author       Expl0it87
// @match        http://map.ipcom.lg.ua/nagios/cgi-bin/status.cgi?hostgroup=shk&style=hostdetail
// @grant        none
// ==/UserScript==

(function() {
    var i=0;
var audio = new Audio('https://melodiimp3.ru/download/740');
    audio.volume=0.1;
    function alarm(){
        var j=0;
        var hostup = document.getElementsByClassName("statusHOSTDOWN");
        for(var i=0; i<hostup.length; i++)
        {
            if(hostup[i].textContent=='DOWN') j++;
        }

         if(j>0){
             document.title = j+' не работают';
                audio.play();
            }

    };

    function refresh(){
        window.location.reload();
    }

    alarm();

    let refreshtimerid = setInterval(() => refresh(), 300000);
})();
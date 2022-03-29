<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="matchtime"><input type="text" placeholder="Match 1"></div>
    
    <div class="timer">
        <h1 class="clocktext" id="mainclockminute">4</h1>
        <h1 class="clocktext" id="colon">:</h1>
        <h1 class="clocktext" id="mainclockseconds">00</h1>

        <!-- <h2 class="timetype" id="timetypemin">min</h2> -->
        <!-- <h2 class="timetype" id="timetypesec">sec</h2> -->

        <button class="cbtn" id="clockstopbtn" onclick="stopclock()">Stop</button>
        <button class="cbtn" id="clockbtn" onclick="clock()">Start</button>
        <button class="cbtn" id="clockresetbtn" onclick="resetclock()">Reset</button>
        <button class="cbtn" id="newclockbtn" onclick="restart()">Restart</button>
    </div>
    

    <div class="contestor" id="whitecontestor">
        <input type="text" placeholder="Contestor 1" id="c1">
    </div>

    <div class="contestor" id="bluecontestor">
        <input type="text" placeholder="Contestor 2" id="c2">
    </div>

    <div id="osaekomi">
        <div id="txt"><h1>OSAEKOMI</h1></div>
        <button class="obtn" id="wobtn" onclick="whiteoseakomifnc()">WHITE</button>
        <button class="obtn" id="sobtn" onclick="stop_o()">Toketa</button>
        <button class="obtn" id="robtn" onclick="reset_o()">Reset</button>
        <!--<button class="obtn" id="robtn">Reset</button>-->
        <button class="obtn" id="bobtn" onclick="blueoseakomifnc()">BLUE</button>
    </div>

    <div id="osaekomiclock">
        <div class="progress-bar">
            <div class="progress-bar-value"></div>
            <div class="progress-bar-fill" id="white-progress-bar"></div>
            <div class="progress-bar-fill" id="blue-progress-bar"></div>
        </div>
    </div>

    <div id="white" class="score">
        <button class="ubtn" id="wiubtn" onclick="cntUpIppon('wii')">↑</button>
        <div class="indicator" id="wi">
            <p>IPPON</p>
            <h1 id="wii">0</h1>
        </div>
        <button class="dbtn" id="widbtn" onclick="cntDown('wii')">↓</button>

        <button class="ubtn" id="wwubtn" onclick="cntUpWasaari('wwi')">↑</button>
        <div class="indicator" id="ww">
            <p>WASAARI</p>
            <h1 id="wwi">0</h1>
        </div>
        <button class="dbtn" id="wwdbtn" onclick="cntDown('wwi')">↓</button>

        <button class="ubtn" id="wsubtn" onclick="cntUpShido('wsi')">↑</button>
        <div class="indicator" id="ws">
            <p>SHIDO</p>
            <h1 id="wsi">0</h1>    
        </div>
        <button class="dbtn" id="wsdbtn" onclick="cntDown('wsi')">↓</button>
    </div>

    <div id="blue" class="score">

        <button class="ubtn" id="biubtn" onclick="cntUpIppon('bii')">↑</button>
        <div class="indicator" id="bi">
            <p>IPPON</p>
            <h1 id="bii">0</h1>
        </div>
        <button class="dbtn" id="bidbtn" onclick="cntDown('bii')">↓</button>   

        
        <button class="ubtn" id="bwubtn" onclick="cntUpWasaari('bwi')">↑</button>
        <div class="indicator" id="bw">
            <p>WASAARI</p>
            <h1 id="bwi">0</h1>
        </div>
        <button class="dbtn" id="bwdbtn" onclick="cntDown('bwi')">↓</button>


        
        <button class="ubtn" id="bsubtn" onclick="cntUpShido('bsi')">↑</button>
        <div class="indicator" id="bs">
            <p>SHIDO</p>
            <h1 id="bsi">0</h1>
        </div>
        <button class="dbtn" id="bsdbtn" onclick="cntDown('bsi')">↓</button>

    </div>

    <button id="reset" onclick="resetter('bwi')">all zero</button>
    <button class="winbtn" id="whitewinbtn">confirmed winner</button>    
    <button class="winbtn" id="bluewinbtn">confirmed winner</button>        

    <script src='script.js'></script>
</body>
</html>
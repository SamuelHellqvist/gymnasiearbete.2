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
    <!-- Här kan man skriva in vilken match det är, till exempel match 1 eller semifinal -->
    <div id="matchtime"><input type="text" placeholder="Match 1"></div>
    
    <!-- timern används för att hålla koll på tiden, matchen ändras bara 4 min -->
    <div class="timer">
        <h1 class="clocktext" id="mainclockminute">4</h1>
        <h1 class="clocktext" id="colon">:</h1>
        <h1 class="clocktext" id="mainclockseconds">00</h1>

        <!-- <h2 class="timetype" id="timetypemin">min</h2> -->
        <!-- <h2 class="timetype" id="timetypesec">sec</h2> -->

        <!-- knappen för att stoppa klockan är tänkt att användas när domaren stoppar tiden -->
        <button class="cbtn" id="clockstopbtn" onclick="stopclock()">Stop</button>
        <button class="cbtn" id="clockbtn" onclick="clock()">Start</button>
        <!-- om man någon gång skulle behöva starta om matchen så finns det en knapp för det -->
        <button class="cbtn" id="clockresetbtn" onclick="resetclock()">Reset</button>
        <!-- det finns två olika startknappar, eftersom det i javascripten är skillnad på att starta och starta om tiden -->
        <button class="cbtn" id="newclockbtn" onclick="restart()">Restart</button>
    </div>
    
    <!-- här finns det inputs så att man kan skriva in de tävlandes namn och ändra det till vad man vill när en ny match hålls -->
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

    <!-- fasthållningarna visas med hjälp av progress-bars. Då ser publiken hur mycket någon tävlande måste hålla i den andre för att få poäng -->
    <div id="osaekomiclock">
        <div class="progress-bar">
            <div class="progress-bar-value"></div>
            <div class="progress-bar-fill" id="white-progress-bar"></div>
            <div class="progress-bar-fill" id="blue-progress-bar"></div>
        </div>
    </div>

    <!-- poäng och varningar visas med hjälp av siffror
    det finns knappar för att öka poängen och minska poängen
    om något poäng fylls i av mistag är det viktigt att man kan ta bort -->
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

    <!-- en reset knapp kan användas förr att återställa all poäng ställningar till 0 så att
    man enkelt kan börja nästa match -->
    <button id="reset" onclick="resetter('bwi')">all zero</button>
    <!-- <button class="winbtn" id="whitewinbtn">confirmed winner</button>     -->
    <!-- <button class="winbtn" id="bluewinbtn">confirmed winner</button>         -->

    <script src='script.js'></script>
</body>
</html>
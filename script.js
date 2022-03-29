//uppfunktion till wasaari (den som har flest wasarri (poäng) i slutet av matchen vinner)
function cntUpWasaari(getID){
    temp=document.getElementById(getID);
    console.log(temp);
    cnt=parseInt(temp.innerHTML);
    console.log(temp.innerHTML);
    cnt++;
    temp.innerHTML=cnt;
    console.log(cnt);
}

//nerfunktion
function cntDown(getID){
    temp=document.getElementById(getID);
    console.log(temp);
    cnt=parseInt(temp.innerHTML);
    console.log(temp.innerHTML);
    //används för att poängen kan vara mindre än 0
    if (cnt > 0){
        cnt--;
        temp.innerHTML=cnt;
        console.log(cnt);
    }
    if (cnt < 0){
        cnt++;
        temp.innerHTML=cnt;
    }
}

//uppfunktion till ippon (får en en ippon vinner man)
function cntUpIppon(getID){
    temp=document.getElementById(getID);
    console.log(temp);
    cnt=parseInt(temp.innerHTML);
    console.log(temp.innerHTML);
    if (cnt == 0){
        cnt++;
        temp.innerHTML=cnt;
    }
    if (cnt == 2){
        cnt--;
        temp.innerHTML=cnt;
    }
    if (cnt == 1){
        console.log("Winner chosen");

    }
}

//uppfunktion till shido (får man tre shidos (varningar) vinner motståndaren)
function cntUpShido(getID){
    temp=document.getElementById(getID);
    console.log(temp);
    cnt=parseInt(temp.innerHTML);
    console.log(temp.innerHTML);
    cnt++;
    temp.innerHTML=cnt;
    if (cnt==4){
        cnt--;
        temp.innerHTML=cnt;
    }
    if (cnt == 3){
        console.log("Winner chosen")
    }
}

//function för att resetta allt
function resetter(){
    console.log("resetting scores, true");
    document.getElementById('wii').innerHTML="0";
    document.getElementById('bii').innerHTML="0";
    document.getElementById('wwi').innerHTML="0";
    document.getElementById('bwi').innerHTML="0";
    document.getElementById('wsi').innerHTML="0";
    document.getElementById('bsi').innerHTML="0";
    resetclock();
    reset_o();
}

//variabel som sätts till 0 som senare kommer att användas i en funktion som behöver ett växande värde
var ot = 0;

//variabel som sätts till 1. kommer senare användas för att veta när det går att använda
//funktionerna för oseakomi/fasthållning
var crash = 1;

//function för att stoppa osaekomi funktionerna
function stop_o(){
    crash--;
    console.log("cancelling oaseakomi");
    console.log(crash);

    var resetthis = document.querySelector('#robtn');
    resetthis.style.opacity = "100%";
    resetthis.style.position = "relative";
    resetthis.style.gridColumn = "2/4";

    var toketa = document.querySelector('#sobtn');
    toketa.style.position = "absolute";
    toketa.style.opacity = "0%";

    var blue = document.querySelector('#bobtn');
    blue.style.opacity = "0%";

    var white = document.querySelector('#wobtn');
    white.style.opacity = "0%";
}

//function för att resetta oseakomi funktionerna så att man kan använda dem igen
function reset_o(){
    console.log("crash");
    crash++;
    console.log(crash);

    var resetthis = document.querySelector('#robtn');
    resetthis.style.opacity = "0%";
    resetthis.style.position = "absolute";

    var toketa = document.querySelector("#sobtn");
    toketa.style.opacity = "100%";
    toketa.style.position = "relative";
    toketa.style.gridColumn = "2/4";
    

    var blue = document.querySelector('#bobtn');
    blue.style.opacity = "100%";

    var white = document.querySelector('#wobtn');
    white.style.opacity = "100%";


}


//function som används när tävlande i vit dräkt håller en fasthållning
function whiteoseakomifnc(points){ 
    var progress = document.querySelector("#white-progress-bar");

    progress.style.opacity = "100%";

    var bluefiller = document.querySelector("#blue-progress-bar");
    bluefiller.style.opacity = "0%"
    
    console.log("starting osaekomi now, white");
    points = ot;
    crash = crash;

    progress.style.width = points + "%";
    
    if (crash == 1){
        setTimeout( ()=>{
            ot++;
            whiteoseakomifnc(points);
        }, 200);

        if (ot == 50){
            console.log("Somebody got a wasaari")
            cntUpWasaari('wwi')
        }

        if (ot == 100){
            ot--;
            // cntDown('wwi');
            console.log("Somebody won");
            cntUpIppon('wii');
        }
    }
    if (crash == 0){
        progress.style.width = 0 + "%";
        console.log("resetting slider")
        ot = 0;
        console.log(ot)
        }
}

//function som används när tävlande i blå dräkt håller en fasthållning
function blueoseakomifnc(points){

    var progress = document.querySelector("#blue-progress-bar");

    progress.style.opacity = "100%";

    var whitefiller = document.querySelector("#white-progress-bar");
    whitefiller.style.opacity = "0%"
    
    console.log("starting osaekomi now, blue, yes");
    points = ot;

    progress.style.width = points + "%";
    
    if (crash == 1){
        setTimeout( ()=>{
            ot++;
            blueoseakomifnc(points);
        }, 200);

        if (ot == 50){
            console.log("Somebody got a wasaari");
            cntUpWasaari('bwi');
        }

        if (ot == 100){
            ot--;
            console.log("Somebody won!");
            // cntDown('bwi')
            cntUpIppon('bii');
        }
    }
    if (crash == 0){
        progress.style.width = 0 + "%";
        console.log("resetting slider");
        ot = 0;
        console.log(ot);
        }
}

function clock(){
    if(yn == 1){
        sec = document.getElementById('mainclockseconds');
        min = document.getElementById('mainclockminute');

        ant = parseInt(min.innerHTML);
        bnt = parseInt(sec.innerHTML);

        setTimeout( ()=>{
            bnt--;
            sec.innerHTML=bnt;
            clock('mainclocksecond')
        }, 1000);

        if(bnt == 0){
            bnt = 59;
            sec.innerHTML = bnt;
            ant--;
            min.innerHTML = ant;
        }

        if(ant < 0){
            ant = 0;
            min.innerHTML = ant;
        }
    }
}

var yn = 1;

function stopclock(){
    yn--;
    console.log(yn)

    var newstart = document.querySelector('#newclockbtn');
    newstart.style.position = "relative";
    newstart.style.gridColumn = "1";
    newstart.style.opacity = "100%";

    var oldstart = document.querySelector("#clockbtn");
    oldstart.style.position = "absolute"
    oldstart.style.opacity = "0";

    var reset = document.querySelector('#clockresetbtn');
    reset.style.opacity = "100%";
    reset.style.gridColumn = "3"

    var stop = document.querySelector('#clockstopbtn');
    stop.style.opacity = "0%";
    stop.style.gridColumn = "2";
}

function resetclock(){
    console.log("test")
    yn = 1;
    console.log(yn)
    sec = document.getElementById('mainclockseconds');
    min = document.getElementById('mainclockminute');
    ant = parseInt(min.innerHTML);
    bnt = parseInt(sec.innerHTML);

    ant = 4;
    bnt = 0;

    min.innerHTML = ant;
    sec.innerHTML = bnt;

    var oldstart = document.querySelector('#clockbtn');
    oldstart.style.position = "relative";
    oldstart.style.gridColumn = "1";
    oldstart.style.opacity = "100";

    var newstart = document.querySelector('#newclockbtn');
    newstart.style.position = "absolute";
    newstart.style.opacity = "0%";
    console.log("hello world!")

    var reset = document.querySelector('#clockresetbtn');
    reset.style.opacity = "0%";
    reset.style.gridColumn = "2";

    var stop = document.querySelector('#clockstopbtn')
    stop.style.opacity = "100%";
    stop.style.gridColumn = "3"
}

function restart(){
    yn++;
    console.log(yn);
    clock();
    console.log("hello world!");
    var reset = document.querySelector('#clockresetbtn');
    reset.style.opacity = "0%";
    reset.style.gridColumn = "2";
    var stop = document.querySelector('#clockstopbtn');
    stop.style.opacity = "100%";
    stop.style.gridColumn = "3"
}

function greet(){
    console.log("Hello world!")
}

greet()
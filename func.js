//uppfunktion till wasaari (den som har flest wasaari (poäng) i slutet av matchen vinner)
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
        console.log("Winner chosen");
    }
}

//function för att resetta allt
function resetter(){
    console.log("resetting scores, true");
    // ställer om alla indikatorer till 0
    document.getElementById('wii').innerHTML="0";
    document.getElementById('bii').innerHTML="0";
    document.getElementById('wwi').innerHTML="0";
    document.getElementById('bwi').innerHTML="0";
    document.getElementById('wsi').innerHTML="0";
    document.getElementById('bsi').innerHTML="0";
    // ställer klockan till grundtiden
    stopclock();
    setTimeout( ()=>{
        resetclock();
    }, 1000);
}

//variabel som sätts till 0 som senare kommer att användas i en funktion som behöver ett växande värde
var ot = 0;

//variabel som sätts till 1. kommer senare användas för att veta när det går att använda
//funktionerna för oseakomi/fasthållning
var crash = 1;

//function för att stoppa osaekomi funktionerna

/*---------------------------------------------------------------
NOTE! This function needs to be changes since it is not efficient
----------------------------------------------------------------*/

function stop_o(){
    crash--;
    console.log("cancelling oaseakomi");
    console.log(crash);

    
    //var resetthis = document.querySelector('#robtn');
    //resetthis.style.opacity = "100%";
    //resetthis.style.position = "relative";
    //resetthis.style.gridColumn = "2/4";

    //var toketa = document.querySelector('#sobtn');
    //toketa.style.position = "absolute";
    //toketa.style.opacity = "0%";

    var blue = document.querySelector('#bobtn');
    blue.style.opacity = "0%";

    var white = document.querySelector('#wobtn');
    white.style.opacity = "0%";

    reset_o();
}

//function för att resetta oseakomi funktionerna så att man kan använda dem igen

/*---------------------------------------------------------------
NOTE! This function needs to be changes since it is not efficient
----------------------------------------------------------------*/
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
            console.log("Somebody got a wasaari");
            cntUpWasaari('wwi');
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
        console.log(ot);
        }
}

//function som används när tävlande i blå dräkt håller en fasthållning
function blueoseakomifnc(points){

    var progress = document.querySelector("#blue-progress-bar");

    progress.style.opacity = "100%";
    
    console.log("starting osaekomi now, blue");
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

// function för att starta klockan
function clock(){

    if(yn == 1){

        sec = document.getElementById('mainclockseconds');
        min = document.getElementById('mainclockminute');

        ant = parseInt(min.innerHTML);
        bnt = parseInt(sec.innerHTML);

        setTimeout( ()=>{
            bnt--;
            sec.innerHTML=bnt;
            clock('mainclocksecond');
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


var yn = 0;

// function för att stoppa klockan
function stopclock(){
    yn = 0;
    clock();
    console.log(yn);

    var start = document.getElementById('clockbtn');
    start.classList.remove("disabled");

    var reset = document.getElementById("clockresetbtn");
    reset.classList.remove("disabled");

    var stop = document.getElementById("clockstopbtn");
    stop.classList.add("disabled");


}

function startclock(){
    yn = 1;
    clock();

    var start = document.querySelector("#clockbtn");
    start.classList.add("disabled");

    var stop = document.querySelector("#clockstopbtn");
    stop.classList.remove("disabled");

    var reset = document.querySelector("#clockresetbtn");
    reset.classList.add("disabled");
}
// function för att resetta klockan
function resetclock(){
    stopclock();
    buttonsoff();
    console.log(yn);
    sec = document.getElementById('mainclockseconds');
    min = document.getElementById('mainclockminute');
    ant = parseInt(min.innerHTML);
    bnt = parseInt(sec.innerHTML);

    // sekunderna och minuterna sätts till grundvärden
    ant = 4;
    bnt = 0;

    min.innerHTML = ant;
    sec.innerHTML = bnt;
}

// en funktion för att intruducera användare som använder konsolen till programmet
function greet(){
    console.log("Hello!");
    console.log("Welcome to this webbsite. It is a service built to visualize the scores in a judo-match. I hope it works to your satisfaction. It is made with the latest OS ruleset for judo. If you have any questions or suggestions you can reach me, the maker of this service, via my emial samuel@hellqvist.nu");
    console.log("I hope you enjoy!");
    console.log("//Samuel");
}

function buttonsoff(){
    var stop = document.querySelector("#clockstopbtn");
    stop.classList.add("disabled");

    var reset = document.querySelector("#clockresetbtn");
    reset.classList.add("disabled");
}


greet()
buttonsoff()
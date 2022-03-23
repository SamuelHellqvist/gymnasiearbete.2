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
}

var ot = 0;

function blueoseakomifnc(points){
    var progress = document.querySelector("#blue-progress-bar");

    // var background = document.querySelector(".progress-bar-value")
    // background.style.backgroundColor = "var(--blueaccent)";

    var bluefiller = document.querySelector("#blue-progress-bar")
    bluefiller.style.opacity = "100%"

    var whitefiller = document.querySelector("#white-progress-bar")
    whitefiller.style.opacity = "0%"
    
    console.log("starting osaekomi now, blue");
    points = ot;

    progress.style.width = points + "%";
    
    setTimeout( ()=>{
        ot++;
        blueoseakomifnc(points);
    }, 200);
    if (ot == 100){
        console.log("Somebody scored!");
        ot--;
        cntUpIppon('bii');
    }
}

function whiteoseakomifnc(points){
    var progress = document.querySelector("#white-progress-bar");
    
    // var background = document.querySelector(".progress-bar-value")
    // background.style.backgroundColor = "white";

    var bluefiller = document.querySelector("#blue-progress-bar")
    bluefiller.style.opacity = "0%";

    progress.style.opacity = "100%";

    console.log("starting osaekomi now, white");
    
    points = ot;

    progress.style.width = points + "%";
    
    setTimeout( ()=>{
        ot++;
        whiteoseakomifnc(points);
    }, 200);
    if (ot == 100){
        console.log("Somebody scored!");
        ot--;
        cntUpIppon('wii');
    }
    
}

function osaekomireset(){
    console.log("Osaekomi is resetted");
}
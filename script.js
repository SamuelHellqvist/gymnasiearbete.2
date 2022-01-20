//uppfunktion
function cntUp(getID){
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

//uppfunktion till ippon
function cntUpIppon(getID){
    temp=document.getElementById(getID);
    console.log(temp);
    cnt=parseInt(temp.innerHTML);
    console.log(temp.innerHTML);
    cnt++;
    temp.innerHTML=cnt;
    console.log(cnt);
    if (cnt == 1){
        var elem = document.getElementById('whitewin');
        elem.style.opacity = "100%"
        var elem = document.getElementById('extx');
        elem.style.opacity = "100%"
    }
}

//function för att gömma winner-rutan om något gåt fel eller domaren ändrar besutet
function hide(){
    var elem = document.getElementById('whitewin');
        elem.style.opacity = "1%";
    var mele = document.getElementById('wii');
        mele.innerHTML = "0";
}
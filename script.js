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
    if (cnt == 0){
        cnt++;
        temp.innerHTML=cnt;
    }
    if (cnt == 2){
        cnt--;
        temp.innerHTML=cnt;
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
}
var cookiecount = 0;
var cpc = 1;
var bakerprice = 20;
var autoclicker = 0;
var bakers = 0;
var cps = 0;

function update(){
    document.getElementById('text').innerHTML = cookiecount + " Cookies";
    document.title = cookiecount + " Cookies";
    document.getElementById('amountAutoClick').innerHTML = "Auto clickers: " + autoclicker;
    document.getElementById('costAutoCliker').innerHTML = "Auto Clickers cost:  " + ((autoclicker+1) * 12);
    document.getElementById('cps').innerHTML = "Cookies per secons: " + cps;
}

function timer() {
    cookiecount = cookiecount + autoclicker;
    update()
}
setInterval(timer, 1000)

function buyAutoClicker() {
    if (cookiecount >= ((autoclicker+1) * 12)) {
        cookiecount = cookiecount - ((autoclicker+1) * 12);
        autoclicker = Math.round(autoclicker +1.1);
        cps = 1.1 * autoclicker;
        update()
    }else {
        alert("You dont have enough cookies")
    }
}


function save() {
    localStorage.setItem("cookiecount", cookiecount);
    localStorage.setItem("autoClick", autoclicker);
}

function load() {
    cookiecount = localStorage.getItem("cookiecount");
    cookiecount = parseInt(cookiecount);
    autoclicker = localStorage.getItem("autoClick");
    autoclicker = parseInt(autoclicker);
    update()
}



function bakeCookie() {
    cookiecount += cpc;
    update()

}

function hireBaker() {
    if(cookiecount >= bakerprice) {
        cpc += 1;
        bakers += 1;
        cookiecount -=bakerprice;
        bakerprice = Math.round(bakerprice * 1.7) ;
        document.getElementById('text').innerHTML = "Cookies: " + cookiecount;
        document.getElementById('bakerPriceText').innerHTML = "Bakerprice: " + bakerprice;
        document.getElementById('bakerAmount').innerHTML = "Bakers: " + bakers;
        document.getElementById('cookiePerClick').innerHTML = "Cookies per click: " + cpc;
    } else {
        alert("You dont have enough cookies")
    }

    
}
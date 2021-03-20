var cookiecount = 0;
var cpc = 1;
var bakerprice = 20;
var autoclicker = 0;

function update(){
    document.getElementById('text').innerHTML = "Cookies: " + cookiecount;
    document.title = cookiecount + "Cookies";
    document.getElementById('amountAutoClick').innerHTML = "You Own " + autoclicker + " Auto Clickers";
    document.getElementById('costAutoCliker').innerHTML = ((autoclicker+1) * 12) + "Cookies";
}



function timer() {
    cookiecount = cookiecount + autoclicker;
    update()
}
setInterval(timer, 1000)

function buyAutoClicker() {
    if (cookiecount >= ((autoclicker+1) * 12)) {
        cookiecount = cookiecount - ((autoclicker+1) * 12);
        autoclicker = autoclicker +1;
        update()
        
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
        cookiecount -=bakerprice;
        bakerprice = Math.round(bakerprice * 1.7) ;
        document.getElementById('text').innerHTML = "Cookies: " + cookiecount;
        document.getElementById('bakerPriceText').innerHTML = "Bakerprice: " + bakerprice;
    } else {
        alert("You dont have enough cookies")
    }

    
}
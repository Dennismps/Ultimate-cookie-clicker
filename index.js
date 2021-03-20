var cookies = 0;
var cpc = 1;
var bakerprice = 20;
function bakeCookie() {
    cookies += cpc;
    document.getElementById('cookie-text').innerHTML = "Cookies: " + cookies;

}

function hireBaker() {
    if(cookies >= bakerprice) {
        cpc += 1;
        cookies -=bakerprice;
        bakerprice = Math.round(bakerprice * 1.7) ;
        document.getElementById('cookie-text').innerHTML = "Cookies: " + cookies;
        document.getElementById('bakerPriceText').innerHTML = "Bakerprice: " + bakerprice;
    } else {
        alert("You dont have enough cookies")
    }

    
}
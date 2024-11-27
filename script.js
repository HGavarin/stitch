const myImg = document.getElementById("change-gif");

const buttonColere = document.getElementById("colere");

const buttonEat = document.getElementById("eat");

const buttonIcecream = document.getElementById("ice-cream");

const buttonHawaii = document.getElementById("hawaii");

const buttonWind = document.getElementById("wind");

const buttonSnow = document.getElementById("snow");

const buttonSleep = document.getElementById("sleep");

const buttonDance = document.getElementById("dance");

const buttonKiss = document.getElementById("kiss");

const gameOver = document.getElementById("game-over-main-div")

const retryButton = document.getElementById("retry").addEventListener("click", function() {
    progressWidthSleep = 60;
    progressWidthFun = 60;
    progressWidthStamina = 60;
    progressWidthHealth = 100;
    gameOver.style.display = "none";
});

let health = true;
let stamina = false;
let sleep = true;

buttonColere.addEventListener("click", function() {
    stamina = true;
    sleep = true;
    health = false;
    fun = true;
    myImg.src = "img/colere.gif";
});
buttonEat.addEventListener("click", function() {
    myImg.src = "img/hungry-stitch.gif";
    stamina = false;
    sleep = true;
    health = false;
    fun = true;
});
buttonIcecream.addEventListener("click", function() {
    stamina = false;
    sleep = true;
    health = false;
    fun = false;
    myImg.src = "img/eat-ice.gif";
});
buttonHawaii.addEventListener("click", function() {
    stamina = true;
    sleep = true;
    health = false;
    fun = false;
    myImg.src = "img/dance-hawai.gif";
});
buttonWind.addEventListener("click", function() {
    stamina = true;
    sleep = false;
    health = false;
    fun = false;
    myImg.src = "img/play-wind.gif";
});
buttonSnow.addEventListener("click", function() {
    stamina = false;
    sleep = true;
    health = false;
    fun = false;
    myImg.src = "img/play-snow.gif";
});
buttonSleep.addEventListener("click", function() {
    stamina = true;
    sleep = false;
    health = true;
    fun = true;
    myImg.src = "img/sleep.gif";
});
buttonDance.addEventListener("click", function() {
    stamina = true;
    sleep = true;
    health = false;
    fun = false;
    myImg.src = "img/dance.gif";
});
buttonKiss.addEventListener("click", function() {
    stamina = true;
    sleep = false;
    health = false;
    fun = false;
    myImg.src = "img/kiss-heart.gif";
});

let progressWidthSleep = 60;
let progressWidthFun = 60;
let progressWidthStamina = 60;
let progressWidthHealth = 100;

const sleepBar = document.getElementById("progress-bar-sleep")
const funBar = document.getElementById("progress-bar-fun")
const staminaBar = document.getElementById("progress-bar-stamina")
const healthBar = document.getElementById("progress-bar-health")

function decreaseProgress() {

    if( sleep == true && progressWidthSleep > 0)
    {
        progressWidthSleep--;
    }
    if( fun == true && progressWidthFun > 0)
    {
        progressWidthFun--;
    }
    if( stamina == true && progressWidthStamina > 0)
    {
        progressWidthStamina--;
    }
    if( !fun && progressWidthFun <= 100 )
    {
        progressWidthFun++;
    }
    if( !sleep && progressWidthSleep <= 100)
    {
        progressWidthSleep++;
    }
    if( !stamina && progressWidthStamina <= 100)
    {
        progressWidthStamina++;
    }
    if( !health && progressWidthFun > 0 && progressWidthSleep > 0 && progressWidthStamina > 0 && progressWidthHealth <= 100)
    {
        progressWidthHealth++;
    }
    if( progressWidthSleep <= 0 )
    {
        progressWidthHealth--;
    }
    if( progressWidthFun <= 0 )
    {
        progressWidthHealth--;
    }
    if( progressWidthStamina <= 0 )
    {
        progressWidthHealth--;
    }
    if( stamina == true && !sleep && health == true && fun == true && progressWidthSleep <= 100)
    {
        progressWidthSleep+=2;
    }
    if( !stamina && sleep == true && !health && fun == true && progressWidthStamina <= 100)
    {
        progressWidthStamina+=2;
    }
    if( stamina == true && sleep == true && !health && !fun && progressWidthFun <= 100)
    {
        progressWidthFun+=2;
    }
    if( progressWidthHealth <= 0 )
    {
        gameOver.style.display = "block";
    }
     sleepBar.style.width = progressWidthSleep + '%'
     funBar.style.width = progressWidthFun + '%'
     staminaBar.style.width = progressWidthStamina + '%'
     healthBar.style.width = progressWidthHealth + '%'
}
const interval = setInterval(decreaseProgress, 1000);
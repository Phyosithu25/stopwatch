
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const continueBtn = document.querySelector(".continue");
const resetBtn = document.querySelector(".reset");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const count = document.querySelector(".count");
let sec = 0 ,min = 0, hur = 0 ,mili = 0;

const startTime = () =>{
    mili ++ ;
    if (mili ===100) {
        mili = 0;
        sec ++;
    }if (sec === 60) {
        sec = 0;
        min ++;

    }if (min === 60) {
        min = 0;
        hur ++;
    }
    display();
    

}
let intervalId;
startBtn.addEventListener("click",()=> {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 10);
    
});

pauseBtn.addEventListener("click",() => {
    clearInterval(intervalId);

});
continueBtn.addEventListener("click",()=> {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 10);
});
resetBtn.addEventListener("click", ()=> {
     
    sec = 0;
    min = 0;
    hur = 0;
    mili = 0;
    display();
    clearInterval(intervalId);
    
    
})

const display = ()=>{
    const secText  = sec < 10 ? "0"+ sec+"" : sec;
    const minText  = min < 10 ? "0"+ min+"" : min;
    const hurText  = hur < 10 ? "0"+ hur+"" : hur;
    const miliText  = mili < 10 ? "0"+ mili+"" :mili;
    
    seconds.textContent = secText;
    minutes.textContent = minText;
    hours.textContent = hurText;
    count.textContent = miliText;
}
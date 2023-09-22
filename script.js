
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
    if (sec == 0 & min == 0 & hur == 0 & mili == 0){
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 10);
    btnOn();
    return;
    }
    btnOff();
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 10);
    btnOn();
    

    
    
    

    
});

pauseBtn.addEventListener("click",() => {
    if (sec == 0 & min == 0 & hur == 0 & mili == 0) {
        return;
    };
    btnOff();
    clearInterval(intervalId);
    btnOn();


    
});
continueBtn.addEventListener("click",()=> {
    if (sec == 0 & min == 0 & hur == 0 & mili == 0) {
       return;
   }
    btnOff();
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 10);
    btnOn();
});
resetBtn.addEventListener("click", ()=> {
    if (sec == 0 & min == 0 & hur == 0 & mili == 0) {
        return;
    }
     btnOff();
    sec = 0;
    min = 0;
    hur = 0;
    mili = 0;
    display();
    clearInterval(intervalId);
    btnOn();
    setTimeout(()=> {resetBtn.style.background = "#FFFFFF";
    resetBtn.style.color = "#047ac9"},1000)
    return;
});

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
const btnOff = () =>{
    const isOpen = document.getElementsByClassName("isopen")[0];
    isOpen.style.background = "#FFFFFF";
    isOpen.style.color = "#047ac9";
    isOpen.classList.remove("isopen");
}

const btnOn = () =>{
    const clickId = event.target.id;
    let clickbtn = document.getElementsByClassName(clickId)[0];
    clickbtn.style.background = "#047ac9";
    clickbtn.style.color = "#FFFFFF";
    console.log(clickbtn);
    clickbtn.classList.add("isopen");

}

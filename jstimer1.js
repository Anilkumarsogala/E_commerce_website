let isDOBOpen=true;
let dateOfBirth;
const settingCogEl=document.getElementById("settingIcon")
const settingContentEl=document.getElementById("settingContent")
const intialText=document.getElementById("intialText");
const afterDobButton=document.getElementById("afterDobButton")
const dobInput=document.getElementById("dobInput")
const dobButton=document.getElementById("dobButton")
const years=document.getElementById("years")
let months=document.getElementById("months")
let days=document.getElementById("days")
let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")

const toggleDateOfBirthSelector=()=>{
if(isDOBOpen)
    {
        settingContentEl.classList.remove("hide")

    }
    else
    {
        settingContentEl.classList.add("hide")
    }
    isDOBOpen=!isDOBOpen

}
function twoDigitNumber(number)
{
    return number>9?number:`0${number}`
}
const upDate=()=>{

    const currentDate= new Date()  
    let timing=currentDate-dateOfBirth;
    let year=Math.floor(timing/(1000*60*60*24*365));
    let month=Math.floor(timing/(1000*60*60*24*365)%12);
    let day=Math.floor(timing/(1000*60*60*24)%30);
    let hour=Math.floor(timing/(1000*60*60)%24);
    let minute=Math.floor(timing/(1000*60)%60);
    let second=Math.floor(timing/(1000)%60);
    years.innerHTML=twoDigitNumber(year);
    months.innerHTML=twoDigitNumber(month);
    days.innerHTML=twoDigitNumber(day);
    hours.innerHTML=twoDigitNumber(hour);
    minutes.innerHTML=twoDigitNumber(minute)
    seconds.innerHTML=twoDigitNumber(second);


    

}
// const coller=()=>
// {

//     let dateOfString=dobInput.value
//     dateOfBirth=new Date(dateOfString)
//     setDateOfBirthHandler(dateOfBirth)
// }//also use this function insted of down ternory condition;
function setDateOfBirthHandler(){
   let dateOfString=dobInput.value//nv key board nuchi date thisukunte  if --executes other wise else--executes
    dateOfBirth=dateOfString?new Date(dateOfString):null;
    if(dateOfBirth)
    {
        intialText.classList.add("hide")
        afterDobButton.classList.remove("hide")
         setInterval(()=>upDate(),1000);
    }
    else
    {
        afterDobButton.classList.add("hide")
        intialText.classList.remove("hide")
    }
}


setDateOfBirthHandler();
settingCogEl.addEventListener('click',toggleDateOfBirthSelector);
dobButton.addEventListener('click',setDateOfBirthHandler);



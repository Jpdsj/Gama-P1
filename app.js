const btn = document.querySelector('.btn');

btn.addEventListener("click", function(e){

    e.preventDefault();

    const name = document.querySelector('#formInput');
    const nameValue = name.value;

    const email = document.querySelector('#formInput2');
    const emailValue = email.value;

    console.log(nameValue);
    console.log(emailValue);

    localStorage.setItem('Nome', JSON.stringify(nameValue));
    localStorage.setItem('E-mail', JSON.stringify(emailValue));

})
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)
const spinnerLoading = document.querySelector('#loading')
const countDownContainer = document.querySelector('#countdown')

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountDownValues = ({days, hours, minutes, seconds}) => {
    secondsContainer.textContent = getTimeUnit(seconds)
    minutesContainer.textContent = getTimeUnit(minutes)
    hoursContainer.textContent = getTimeUnit(hours)
    daysContainer.textContent = getTimeUnit(days)
}

const updateCountDown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
    const minutes = Math.floor(difference / 1000 / 60 ) % 60
    const seconds = Math.floor(difference / 1000 ) % 60    

    insertCountDownValues({days, hours, minutes, seconds})
    
}

setTimeout(() => {
    spinnerLoading.remove()
    countDownContainer.style.display = 'flex'
},1000)

setInterval(updateCountDown, 1000)
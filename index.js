loginbtn.addEventListener('click', () => {
    loginbtn.innerHTML="log in";
    loginplz.innerHTML="로그인을 해주세요";
})




chatbtn.onclick  = function(){
    window.open('chat.html');
}

const date = new Date();

const renderCalendar = () => {
    date.setDate(1);


    const monthDays = document.querySelector(".days");

    const lastDay = new Date(date.getFullYear(), 
    date.getMonth()+1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), 
    date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), 
    date.getMonth()+1, 0).getDay();

    const nextDays = 7 - lastDayIndex -1;


    const months = [
        "January",
        "February",
        "March",
        "April",
        "May", 
        "June",
        "July",
        "August",
        "September",
        "October",
        "Novenber",
        "December"
    ];

    document.querySelector('.date h1').innerHTML= months[date.getMonth()];

    document.querySelector('.date p').innerHTML= new Date().toDateString();

    let days = "";

    for(let x = firstDayIndex; x>0; x--) {
        days += `<div class="prev-date">${prevLastDay-x+1}</div>`;
    }

    for(let i = 1; i <= lastDay; i++) {
        if(i=== new Date().getDate() && 
        date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        }else {
        days += `<div>${i}</div>`;
        }
    }

    for(let j=1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

}



document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() -1);
    renderCalendar(); 
})

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() +1);
    renderCalendar(); 
})




document.querySelector('.days').addEventListener('click', () => {
    let text;
    let schedule = prompt('일정을 등록하세요');
    schedule = text;
    document.getElementById("test").innerHTML = test;

})
renderCalendar(); 



// 공연장 정보 라이트 박스
// 초기화
var indicator = document.querySelectorAll('.indicator button');
var lightbox = document.querySelector('#lightbox');
var block = document.querySelector('#block'); // 라이트박스 배경

// 라이트 박스 표시
function lightbox_open(num){
lightbox.setAttribute('class', 'active');
block.setAttribute('class', 'active');

change_img(num);
indicator[num-1].focus();	
}

// 라이트 박스 닫기
function lightbox_close(){
lightbox.removeAttribute('class');
block.removeAttribute('class');
}

// 이미지 전환 표시 함수
function change_img(val){
var imgs = document.querySelectorAll('figure > img');

for( var i=0; i< imgs.length; i++){
imgs[i].removeAttribute('class');
}
imgs[val-1].setAttribute('class', 'active');
}	

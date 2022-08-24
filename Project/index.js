// 로그인
loginbtn.addEventListener('click', () => {
    if (id.value == 'aaaa') {
    if (password.value == '0000') {
                alert('log in!')
                window.location.href="main.html";
                //index.loginplz.innerHTML="환영";

            }
            else {
                alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
                errStack ++;
            }
        }
        else {
            alert('존재하지 않는 계정입니다.')
        }
    
        if (errStack >= 5) {
            alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.')
        }
    })

// 슬라이드 이미지
var slides = document.querySelector(".slides" > img);
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
    for (var i = 0; i < slides.lenth; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

function prevSlide() {
    if(current > 0) current -= 1;
    else current = slides.length -1 ;
        showSlides(current);
}

function nextSlide() {
    if(current < slides.length-1) current += 1;
    else current = 0;
        showSlides(current);
}
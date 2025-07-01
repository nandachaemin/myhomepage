// 로그인 버튼 클릭 이벤트
document.querySelector('.login-btn').addEventListener('click', function() {
    // 로그인 기능은 나중에 구현
    alert('로그인 기능은 현재 준비중입니다.');
});

// 스크롤시 헤더 스타일 변경
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// 캐러셀 기능 구현
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;
    const slideInterval = 5000; // 5초마다 슬라이드 변경
    let slideTimer;

    // 슬라이드 보여주기
    function showSlide(index) {
        // 현재 활성화된 슬라이드의 active 클래스 제거
        slides.forEach(slide => slide.classList.remove('active'));
        
        // 새로운 슬라이드에 active 클래스 추가
        slides[index].classList.add('active');
    }

    // 다음 슬라이드로 이동
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // 이전 슬라이드로 이동
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // 자동 슬라이드 시작
    function startSlideTimer() {
        slideTimer = setInterval(nextSlide, slideInterval);
    }

    // 자동 슬라이드 정지
    function stopSlideTimer() {
        clearInterval(slideTimer);
    }

    // 이벤트 리스너 등록
    prevBtn.addEventListener('click', () => {
        prevSlide();
        // 버튼 클릭시 자동 슬라이드 잠시 정지
        stopSlideTimer();
        startSlideTimer();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        // 버튼 클릭시 자동 슬라이드 잠시 정지
        stopSlideTimer();
        startSlideTimer();
    });

    // 마우스가 캐러셀 위에 있을 때 자동 슬라이드 정지
    document.querySelector('.carousel').addEventListener('mouseenter', stopSlideTimer);
    document.querySelector('.carousel').addEventListener('mouseleave', startSlideTimer);

    // 첫 번째 슬라이드 표시 및 자동 슬라이드 시작
    showSlide(currentSlide);
    startSlideTimer();

    // 제품 섹션 '더보기' 버튼 기능
    const moreButtons = document.querySelectorAll('.more-btn');
    
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 현재 버튼이 속한 제품 설명 영역 찾기
            const productDescription = this.parentElement;
            const fullText = productDescription.querySelector('.full-text');
            
            // 전체 텍스트가 보이는지 확인
            if (fullText.style.display === 'none' || !fullText.style.display) {
                // 숨겨진 상태라면 보여주기
                fullText.style.display = 'block';
                this.textContent = '접기';
            } else {
                // 보이는 상태라면 숨기기
                fullText.style.display = 'none';
                this.textContent = '더보기';
            }
        });
    });

    // CEO 인사말 '더보기/닫기' 버튼 기능
    const greetingToggleBtn = document.querySelector('.greeting-toggle-btn');
    const greetingPreview = document.querySelector('.greeting-preview');
    const greetingFull = document.querySelector('.greeting-full');
    
    if (greetingToggleBtn) {
        greetingToggleBtn.addEventListener('click', function() {
            // 전체 텍스트가 보이는지 확인
            if (greetingFull.style.display === 'none' || !greetingFull.style.display) {
                // 숨겨진 상태라면 전체 텍스트 보여주기
                greetingPreview.style.display = 'none';
                greetingFull.style.display = 'block';
                this.textContent = '닫기';
            } else {
                // 보이는 상태라면 미리보기만 보여주기
                greetingPreview.style.display = 'block';
                greetingFull.style.display = 'none';
                this.textContent = '더보기';
            }
        });
    }

    // Q&A 질문 제출 기능
    const questionForm = document.getElementById('questionForm');
    const submissionMessage = document.getElementById('submissionMessage');
    
    if (questionForm) {
        questionForm.addEventListener('submit', function(e) {
            // 폼의 기본 제출 동작을 막기
            e.preventDefault();
            
            // 질문 제목과 내용 가져오기
            const questionTitle = document.getElementById('questionTitle').value;
            const questionContent = document.getElementById('questionContent').value;
            
            // 입력값 확인
            if (questionTitle.trim() === '' || questionContent.trim() === '') {
                alert('질문 제목과 내용을 모두 입력해주세요.');
                return;
            }
            
            // 폼 숨기고 메시지 보여주기
            questionForm.style.display = 'none';
            submissionMessage.style.display = 'block';
            
            // 실제 서비스에서는 여기서 서버로 데이터 전송
            console.log('질문 제목:', questionTitle);
            console.log('질문 내용:', questionContent);
            
            // 3초 후 폼 다시 보이기 (데모용)
            setTimeout(function() {
                questionForm.style.display = 'block';
                submissionMessage.style.display = 'none';
                // 폼 내용 초기화
                questionForm.reset();
            }, 3000);
        });
    }
}); 
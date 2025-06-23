class PoliticalCompass {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.shuffledQuestions = this.shuffleArray([...questions]);
        this.init();
    }

    init() {
        this.bindEvents();
        this.showStartPage();
    }

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => this.startTest());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());
        
        // 라디오 버튼 선택시 다음 버튼 활성화
        document.addEventListener('change', (e) => {
            if (e.target.name === 'answer') {
                document.getElementById('next-btn').disabled = false;
            }
        });
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showStartPage() {
        this.showPage('start-page');
    }

    startTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.showPage('question-page');
        this.displayQuestion();
    }

    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }

    displayQuestion() {
        const question = this.shuffledQuestions[this.currentQuestion];
        const questionText = document.getElementById('question-text');
        const questionDescription = document.getElementById('question-description');
        const questionExample = document.getElementById('question-example');
        const currentQuestionSpan = document.getElementById('current-question');
        const totalQuestionsSpan = document.getElementById('total-questions');
        const progressBar = document.getElementById('progress');
        const nextBtn = document.getElementById('next-btn');

        // 질문 텍스트 설정
        questionText.textContent = question.text;
        questionDescription.textContent = question.description;
        questionExample.textContent = question.example;
        
        // 진행률 표시
        currentQuestionSpan.textContent = this.currentQuestion + 1;
        totalQuestionsSpan.textContent = this.shuffledQuestions.length;
        
        // 프로그레스 바 업데이트
        const progress = ((this.currentQuestion + 1) / this.shuffledQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;

        // 이전 답변 초기화
        document.querySelectorAll('input[name="answer"]').forEach(input => {
            input.checked = false;
        });

        // 다음 버튼 비활성화
        nextBtn.disabled = true;

        // 마지막 질문이면 버튼 텍스트 변경
        if (this.currentQuestion === this.shuffledQuestions.length - 1) {
            nextBtn.textContent = '결과 보기';
        } else {
            nextBtn.textContent = '다음 질문';
        }
    }

    nextQuestion() {
        // 현재 답변 저장
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) return;

        const currentQuestionData = this.shuffledQuestions[this.currentQuestion];
        this.answers.push({
            questionId: currentQuestionData.id,
            value: parseInt(selectedAnswer.value),
            category: currentQuestionData.category,
            type: currentQuestionData.type
        });

        this.currentQuestion++;

        if (this.currentQuestion >= this.shuffledQuestions.length) {
            this.showResults();
        } else {
            this.displayQuestion();
        }
    }

    calculateScore() {
        let totalScore = 0;
        const categoryScores = {
            economic: { total: 0, count: 0 },
            social: { total: 0, count: 0 },
            political: { total: 0, count: 0 }
        };

        this.answers.forEach(answer => {
            let score = answer.value;
            
            // 진보적 질문의 경우 점수를 뒤집음 (동의할수록 진보적 = 낮은 점수)
            // 최종 점수: 1=진보적, 5=보수적
            if (answer.type === 'progressive') {
                score = 6 - score;
            }
            // 보수적 질문은 그대로 (동의할수록 보수적 = 높은 점수)

            totalScore += score;
            categoryScores[answer.category].total += score;
            categoryScores[answer.category].count++;
        });

        const averageScore = totalScore / this.answers.length;
        
        // 카테고리별 평균 점수 계산
        Object.keys(categoryScores).forEach(category => {
            const cat = categoryScores[category];
            cat.average = cat.count > 0 ? cat.total / cat.count : 3;
        });

        return {
            overall: averageScore,
            categories: categoryScores
        };
    }

    getResultCategory(score) {
        for (const [key, category] of Object.entries(resultCategories)) {
            if (score >= category.range[0] && score <= category.range[1]) {
                return { key, ...category };
            }
        }
        return { key: 'center', ...resultCategories.center };
    }

    getCategoryLabel(score) {
        if (score <= 2.0) return { text: '매우 진보적', class: 'very-progressive' };
        if (score <= 2.5) return { text: '진보적', class: 'progressive' };
        if (score <= 2.9) return { text: '중도 진보', class: 'center-left' };
        if (score <= 3.1) return { text: '중도', class: 'center' };
        if (score <= 3.5) return { text: '중도 보수', class: 'center-right' };
        if (score <= 4.0) return { text: '보수적', class: 'conservative' };
        return { text: '매우 보수적', class: 'very-conservative' };
    }

    showResults() {
        const scores = this.calculateScore();
        const resultCategory = this.getResultCategory(scores.overall);
        
        // 결과 페이지 표시
        this.showPage('result-page');

        // 결과 카테고리 표시
        const resultCategoryElement = document.getElementById('result-category');
        resultCategoryElement.textContent = resultCategory.name;
        resultCategoryElement.className = resultCategory.key;

        // 스펙트럼 인디케이터 위치 설정 (1-5 점수를 0-100% 위치로 변환)
        const position = ((scores.overall - 1) / 4) * 100;
        const indicator = document.getElementById('result-indicator');
        indicator.style.left = `calc(${position}% - 10px)`;

        // 결과 설명 표시
        document.getElementById('result-description').textContent = resultCategory.description;

        // 카테고리별 점수 표시
        const economicLabel = this.getCategoryLabel(scores.categories.economic.average);
        const socialLabel = this.getCategoryLabel(scores.categories.social.average);
        const politicalLabel = this.getCategoryLabel(scores.categories.political.average);
        
        const economicElement = document.getElementById('economic-score');
        const socialElement = document.getElementById('social-score');
        const politicalElement = document.getElementById('political-score');
        
        economicElement.textContent = economicLabel.text;
        economicElement.className = economicLabel.class;
        
        socialElement.textContent = socialLabel.text;
        socialElement.className = socialLabel.class;
        
        politicalElement.textContent = politicalLabel.text;
        politicalElement.className = politicalLabel.class;

        // 결과 애니메이션
        setTimeout(() => {
            indicator.style.opacity = '1';
            indicator.style.transform = 'translateY(-50%) scale(1.2)';
            setTimeout(() => {
                indicator.style.transform = 'translateY(-50%) scale(1)';
            }, 300);
        }, 500);
    }

    restart() {
        this.currentQuestion = 0;
        this.answers = [];
        this.shuffledQuestions = this.shuffleArray([...questions]);
        this.showStartPage();
        
        // 결과 인디케이터 초기화
        const indicator = document.getElementById('result-indicator');
        indicator.style.opacity = '0';
        indicator.style.left = '0%';
    }
}

// 페이지 로드시 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    new PoliticalCompass();
});
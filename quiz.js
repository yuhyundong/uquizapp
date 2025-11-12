const quizData = [
    {
    question: 'HTML의 약자는?',
    options: [
    'HyperText Makeup Language',
    'HyperText Markup Language',
    'HighText Markup Language',
    'Hyper Tool Markup Language',
    ],
    answer: 1,
    },
    {
    question: 'CSS는 무엇의 약자인가?',
    options: [
    'Creative Style Sheets',
    'Cascading Style Sheets',
    'Computer Style Sheets',
    'Colorful Style Sheets',
    ],
    answer: 1,
    },
    {
    question: 'HTML에서 웹페이지의 제목을 정의하는 태그는?',
    options: ['<header>', '<title>', '<h1>', '<meta>'],
    answer: 1,
    },
    {
    question: 'CSS에서 요소의 텍스트 색상을 지정하는 속성은?',
    options: ['background', 'font-style', 'text-color', 'color'],
    answer: 3,
    },
    {
    question: 'JavaScript에서 함수를 선언하는 올바른 방법은?',
    options: [
    'function = myFunc() {}',
    'def myFunc() {}',
    'function myFunc() {}',
    'fn myFunc() {}',
    ],
    answer: 2,
    },
    {
    question: 'HTML에서 외부 CSS 파일을 연결할 때 사용하는 태그는?',
    options: ['<script>', '<style>', '<css>', '<link>'],
    answer: 3,
    },
    {
    question: 'JavaScript에서 배열의 길이를 확인하는 방법은?',
    options: ['array.length()', 'array.size', 'array.length', 'array.count'],
    answer: 2,
    },
    {
    question: 'CSS에서 박스 모델의 구성 요소가 아닌 것은?',
    options: ['margin', 'border', 'padding', 'outline'],
    answer: 3,
    },
    {
    question: 'JavaScript에서 조건문을 작성하는 기본 키워드는?',
    options: ['while', 'if', 'switch', 'for'],
    answer: 1,
    },
    {
    question: 'HTML에서 이미지를 표시할 때 사용하는 태그는?',
    options: ['<img>', '<image>', '<pic>', '<src>'],
    answer: 0,
    },
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const nextBtn = document.getElementById('next-btn');

function showQuestion(index) {
    const q = quizData[index];
    quizContainer.innerHTML = '';

    const questionEl = document.createElement('div');
    questionEl.className = 'question';

    const title = document.createElement('p');
    title.textContent = `${index + 1}. ${q.question}`;
    questionEl.appendChild(title);

    q.options.forEach((opt, i) => {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'answer';
    radio.value = i;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(' ' + opt));
    questionEl.appendChild(label);
    questionEl.appendChild(document.createElement('br'));
    });

    quizContainer.appendChild(questionEl);
}

nextBtn.addEventListener('click', () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
    alert('보기를 선택해주세요!');
    return;
    }

    const answerIndex = parseInt(selected.value);
    if (answerIndex === quizData[currentQuestion].answer) {
    score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
    showQuestion(currentQuestion);
    } else {
    const user = localStorage.getItem('uquiz_user');
    const total = quizData.length;

    const rawRanking = localStorage.getItem('uquiz_ranking') || '[]';
    const ranking = JSON.parse(rawRanking);
    ranking.push({ id: user, score, total });
    localStorage.setItem('uquiz_ranking', JSON.stringify(ranking));

    window.location.href = 'result.html';
    }
});

showQuestion(currentQuestion);
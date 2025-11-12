document.querySelector('#start-btn').onclick = () => {
const id = document.querySelector('#user-id').value.trim();
if (id) {
    localStorage.uquiz_user = id;
    location.href = 'quiz.html';
} else {
    alert('아이디를 입력해주세요!');
}
};
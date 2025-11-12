const user = localStorage.getItem('uquiz_user');
const ranking = JSON.parse(localStorage.getItem('uquiz_ranking') || '[]');

// 내 점수 출력
const myEntry = ranking.find((r) => r.id === user);
document.getElementById(
    'my-score'
).textContent = `내 점수: ${myEntry.score} / ${myEntry.total}`;

// 랭킹 정렬 후 테이블 생성
ranking.sort((a, b) => b.score - a.score);

const table = document.getElementById('ranking-table');
table.innerHTML = '<tr><th>순위</th><th>ID</th><th>점수</th></tr>';
ranking.forEach((entry, idx) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${idx + 1}</td><td>${entry.id}</td><td>${
    entry.score
    } / ${entry.total}</td>`;
    table.appendChild(row);
});

document.getElementById('restart-btn').addEventListener('click', () => {
    localStorage.removeItem('uquiz_user');

    window.location.href = 'index.html';
});
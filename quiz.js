function submitQuiz() {
    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'c',
        q4: 'c',
        q5: 'd',
        q6: 'c',
        q7: 'a',
        q8: 'b',
        q9: 'c',
        q10: 'b'
    };

    let score = 0;
    for (let i = 1; i <= 10; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer && userAnswer.value === answers[`q${i}`]) {
            score++;
        }
    }

    let resultMessage = '';
    if (score <= 4) {
        resultMessage = 'Less, but you can improve';
    } else if (score <= 7) {
        resultMessage = 'Good score';
    } else {
        resultMessage = 'Excellent';
    }

    document.getElementById('popup-message').innerHTML = `
        <p>You scored ${score} out of 10. ${resultMessage}</p>
    `;

    document.getElementById('popup').style.display = 'block';
    document.getElementById('content-wrapper').classList.add('blur');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('content-wrapper').classList.remove('blur');
}

document.addEventListener('DOMContentLoaded', function() {
    const monkeyElement = document.getElementById('monkey');
    const feedButton = document.getElementById('feed');
    const playButton = document.getElementById('play');
    const bathButton = document.getElementById('bath');
    const sleepButton = document.getElementById('sleep');
    const messageElement = document.getElementById('message');

    const healthBar = document.getElementById('health');
    const energyBar = document.getElementById('energy');
    const stressBar = document.getElementById('stress');
    const hungerBar = document.getElementById('hunger');

    const feedSound = new Audio('feed.mp3');
    const playSound = new Audio('play.mp3');
    const bathSound = new Audio('bath.mp3');
    const sleepSound = new Audio('sleep.mp3');

    function updateBars(action) {
        messageElement.innerText = '';
        switch(action) {
            case 'feed':
                messageElement.innerText = 'O macaquinho está feliz e alimentado!';
                hungerBar.value = Math.max(0, hungerBar.value - 20);
                healthBar.value = Math.min(100, healthBar.value + 10);
                energyBar.value = Math.min(100, energyBar.value + 5);
                stressBar.value = Math.max(0, stressBar.value - 5);
                feedSound.play();
                break;
            case 'play':
                messageElement.innerText = 'O macaquinho está brincando!';
                hungerBar.value = Math.min(100, hungerBar.value + 10);
                energyBar.value = Math.max(0, energyBar.value - 20);
                healthBar.value = Math.min(100, healthBar.value + 5);
                stressBar.value = Math.max(0, stressBar.value - 20);
                playSound.play();
                break;
            case 'bath':
                messageElement.innerText = 'O macaquinho está tomando banho!';
                stressBar.value = Math.max(0, stressBar.value - 20);
                energyBar.value = Math.min(100, energyBar.value + 5);
                healthBar.value = Math.min(100, healthBar.value + 5);
                bathSound.play();
                break;
            case 'sleep':
                messageElement.innerText = 'O macaquinho está dormindo!';
                energyBar.value = Math.min(100, energyBar.value + 30);
                healthBar.value = Math.min(100, healthBar.value + 20);
                stressBar.value = Math.max(0, stressBar.value - 20);
                hungerBar.value = Math.min(100, hungerBar.value + 5);
                sleepSound.play();
                break;
        }

        setTimeout(function() {
            messageElement.innerText = '';
        }, 2000);
    }

    feedButton.addEventListener('click', () => updateBars('feed'));
    playButton.addEventListener('click', () => updateBars('play'));
    bathButton.addEventListener('click', () => updateBars('bath'));
    sleepButton.addEventListener('click', () => updateBars('sleep'));
});

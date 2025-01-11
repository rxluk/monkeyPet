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

    function updateBars(action) {
        messageElement.innerText = '';
        switch(action) {
            case 'feed':
                messageElement.innerText = 'O macaquinho está feliz e alimentado!';
                hungerBar.value = Math.max(0, hungerBar.value - 20);
                healthBar.value = Math.min(100, healthBar.value + 10);
                energyBar.value = Math.min(100, energyBar.value + 5);
                stressBar.value = Math.max(0, stressBar.value - 5);
                break;
            case 'play':
                messageElement.innerText = 'O macaquinho está brincando!';
                hungerBar.value = Math.min(100, hungerBar.value + 10);
                energyBar.value = Math.max(0, energyBar.value - 20);
                healthBar.value = Math.min(100, healthBar.value + 5);
                stressBar.value = Math.max(0, stressBar.value - 20);
                break;
            case 'bath':
                messageElement.innerText = 'O macaquinho está tomando banho!';
                stressBar.value = Math.max(0, stressBar.value - 20);
                energyBar.value = Math.min(100, energyBar.value + 5);
                healthBar.value = Math.min(100, healthBar.value + 5);
                break;
            case 'sleep':
                messageElement.innerText = 'O macaquinho está dormindo!';
                energyBar.value = Math.min(100, energyBar.value + 30);
                healthBar.value = Math.min(100, healthBar.value + 20);
                stressBar.value = Math.max(0, stressBar.value - 20);
                hungerBar.value = Math.min(100, hungerBar.value + 5);
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
function updateTime() {
    const timeElement = document.getElementById('current-time');
    if(timeElement) {
        timeElement.textContent = Date.now().toString();
    }
}

updateTime();
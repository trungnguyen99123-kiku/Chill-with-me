function showGenre(genre, btn) {
    let groups = document.querySelectorAll('.genre-group');
    groups.forEach(g => g.style.display = 'none');
    document.querySelector('.' + genre).style.display = 'block';
    
    let btns = document.querySelectorAll('.tab-btn');
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function playSong(name, file) {
    let player = document.getElementById('audio-player');
    let label = document.getElementById('track-name');
    let btn = document.getElementById('play-pause-btn');
    
    player.src = file;
    label.innerText = "🎵 Đang phát nhạc: " + name;
    player.play();
    btn.innerText = "Pause";
}

function togglePlay() {
    let player = document.getElementById('audio-player');
    let btn = document.getElementById('play-pause-btn');
    if (!player.src) return;
    if (player.paused) { player.play(); btn.innerText = "Pause"; }
    else { player.pause(); btn.innerText = "Play"; }
}

function toggleBGPanel() { document.getElementById('bg-panel').classList.toggle('active'); }

function changeBG(img) { 
    document.body.style.backgroundImage = `url('${img}')`; 
    toggleBGPanel(); 
}

function changeVolume(v) { document.getElementById('audio-player').volume = v; }

// Hiệu ứng chuột nhẹ nhàng
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.93) {
        let s = document.createElement('span');
        s.className = 'mouse-text';
        s.innerText = 'I LOVE YOU';
        s.style.left = e.clientX + 'px';
        s.style.top = e.clientY + 'px';
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1200);
    }
});
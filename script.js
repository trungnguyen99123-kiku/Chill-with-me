// HIỆU ỨNG MOUSE TRAIL (HẠT LẤP LÁNH)
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Đặt hạt chính xác tại đầu con trỏ
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    
    // Tạo kích thước ngẫu nhiên cho hạt nhìn cho đẹp
    const size = Math.random() * 8 + 2 + 'px';
    sparkle.style.width = size;
    sparkle.style.height = size;

    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 600);
});

function showGenre(genre, btn) {
    document.querySelectorAll('.genre-group').forEach(g => g.style.display = 'none');
    let target = document.querySelector('.' + genre);
    if(target) target.style.display = 'block';
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function playSong(name, file) {
    let player = document.getElementById('audio-player');
    let label = document.getElementById('track-name');
    player.src = encodeURI(file);
    label.innerText = "🎵 Đang phát: " + name;
    player.play().catch(e => console.error("Lỗi file:", file));
    document.getElementById('play-pause-btn').innerText = "Pause";
}

function togglePlay() {
    let player = document.getElementById('audio-player');
    let btn = document.getElementById('play-pause-btn');
    if (player.paused) { player.play(); btn.innerText = "Pause"; }
    else { player.pause(); btn.innerText = "Play"; }
}

function toggleBGPanel() { document.getElementById('bg-panel').classList.toggle('active'); }

function changeBG(img) { 
    document.body.style.backgroundImage = "url('" + encodeURI(img) + "')"; 
    toggleBGPanel(); 
}
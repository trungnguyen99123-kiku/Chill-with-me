// HIỆU ỨNG TRÁI TIM THEO CHUỘT
document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div');
    heart.className = 'heart-trail';
    heart.innerHTML = '❤';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    const size = Math.random() * 15 + 10 + 'px';
    heart.style.fontSize = size;
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 800);
});

// ĐIỀU CHỈNH ÂM LƯỢNG
function changeVolume() {
    let player = document.getElementById('audio-player');
    let slider = document.getElementById('volume-slider');
    player.volume = slider.value;
}

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
    
    // SỬ DỤNG encodeURI ĐỂ ĐỌC ĐƯỢC CÁC TÊN FILE CÓ KHOẢNG TRẮNG CỦA ÔNG
    player.src = encodeURI(file); 
    
    label.innerText = "🎵 Đang phát: " + name;
    player.volume = document.getElementById('volume-slider').value;
    
    player.play().catch(e => {
        alert("Lỗi: Không tìm thấy file nhạc. Hãy đảm bảo file nhạc nằm cùng thư mục với code!");
    });
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
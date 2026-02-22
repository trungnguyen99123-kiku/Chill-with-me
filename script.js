function showGenre(genreName, element) {
    var groups = document.getElementsByClassName('genre-group');
    for (var i = 0; i < groups.length; i++) { groups[i].style.display = 'none'; }
    document.querySelector('.' + genreName).style.display = 'block';
    
    var buttons = document.getElementsByClassName('tab-btn');
    for (var i = 0; i < buttons.length; i++) { buttons[i].classList.remove('active'); }
    element.classList.add('active');
}

function playSong(name, filename) {
    var player = document.getElementById('audio-player');
    var label = document.getElementById('track-name');
    var btn = document.getElementById('play-pause-btn');
    
    player.src = filename;
    label.innerText = "🎵 Đang phát: " + name;
    
    player.play().then(() => {
        btn.innerText = "Pause";
    }).catch(e => {
        alert("Lỗi: Không tìm thấy file '" + filename + "'. Nhớ bỏ file vào cùng thư mục code nhé!");
    });
}

function togglePlay() {
    var player = document.getElementById('audio-player');
    var btn = document.getElementById('play-pause-btn');
    if (!player.src) return;
    if (player.paused) { player.play(); btn.innerText = "Pause"; }
    else { player.pause(); btn.innerText = "Play"; }
}

function changeVolume(val) { document.getElementById('audio-player').volume = val; }
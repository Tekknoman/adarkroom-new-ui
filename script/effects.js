var Effects = {
    init: function() {
        if (!document.getElementById('background')) {
            var bg = document.createElement('div');
            bg.id = 'background';
            document.body.prepend(bg);
        }
    },

    setScene: function(scene) {
        document.body.classList.remove('scene-room', 'scene-forest');
        if (scene) document.body.classList.add('scene-' + scene);
    },

    sparkBurst: function() {
        var bg = document.getElementById('background');
        if (!bg) return;
        var s = document.createElement('div');
        s.className = 'spark';
        bg.appendChild(s);
        setTimeout(function() { s.remove(); }, 800);
    }
};


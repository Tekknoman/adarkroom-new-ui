var Effects = {
    particleIntensity: 2,
    idleTimer: null,

    init: function() {
        if (!document.getElementById('background')) {
            var bg = document.createElement('div');
            bg.id = 'background';
            document.body.prepend(bg);
        }
        this.updateIntensity();
        this.startIdle();
    },

    updateIntensity: function() {
        if (typeof $SM !== 'undefined') {
            var lvl = $SM.get('config.particleIntensity', true);
            if (typeof lvl === 'number') this.particleIntensity = lvl;
        }
        this.startIdle();
    },

    setScene: function(scene) {
        document.body.classList.remove('scene-room', 'scene-forest');
        if (scene) document.body.classList.add('scene-' + scene);
    },

    sparkBurst: function() {
        var bg = document.getElementById('background');
        if (!bg) return;
        this.updateIntensity();
        var lvl = this.particleIntensity;
        if (!lvl) return;
        for (var i = 0; i < lvl * 4; i++) {
            var s = document.createElement('div');
            s.className = 'spark';
            s.style.left = (50 + (Math.random() * 40 - 20)) + '%';
            s.style.top = (50 + (Math.random() * 40 - 20)) + '%';
            s.style.animationDelay = (Math.random() * 0.3) + 's';
            bg.appendChild(s);
            (function(el){ setTimeout(function(){ el.remove(); }, 800); })(s);
        }
    },

    idleParticle: function(){
        var bg = document.getElementById('background');
        if(!bg) return;
        var p = document.createElement('div');
        p.className = 'idleParticle';
        p.style.left = (Math.random() * 100) + '%';
        p.style.top = (Math.random() * 100) + '%';
        bg.appendChild(p);
        setTimeout(function(){ p.remove(); }, 4000);
    },

    startIdle: function(){
        if(this.idleTimer){
            clearInterval(this.idleTimer);
            this.idleTimer = null;
        }
        if(this.particleIntensity > 0){
            var delay = 4000 / this.particleIntensity;
            var self = this;
            this.idleTimer = setInterval(function(){ self.idleParticle(); }, delay);
        }
    }
};


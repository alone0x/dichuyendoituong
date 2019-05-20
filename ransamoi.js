let Ran = function () {
        let self = this;
        ctx = document.getElementById("canvas").getContext("2d");
        self.x = 30;
        self.y = 30;
        self.radius = 6;
        let speedx = Number(1);
        let speedy = 1;

        self.tienInterval;
        self.luiInternal;
        self.lenInterval;
        self.xuongInterval;

        this.inc = function (moi) {
            if (Math.sqrt(Math.pow(self.x - moi.x) + Math.pow(self.y - moi.y)) <= (self.radius + moi.radius)) {
                self.x.push(self.x + 6);
                return true;
            }
        };
        this.creatRan = function () {
            ctx.beginPath();
            ctx.arc(self.x, self.y, self.radius, 0, 2 * Math.PI);
            ctx.fill();
        };

        this.diChuyentien = function () {
            self.tienInterval = setInterval(function () {
                    ctx.clearRect(0, 0, 600, 600);
                    self.x += speedx;
                    self.y += 0;
                    self.creatRan();
                },
                5
            )
        };
        self.diChuyenlui = function () {
            self.luiInterval = setInterval(function () {
                    ctx.clearRect(0, 0, 600, 600);
                    self.x += -speedx;
                    self.y += 0;
                    self.creatRan();
                },
                5
            )

        };
        self.diChuyenlen = function () {
          self.lenInterval =   setInterval(function () {
                    ctx.clearRect(0, 0, 600, 600);
                    self.y += -speedy;
                    self.x += 0;
                    self.creatRan();
                },
                5
            )
        };
        self.diChuyenxuong = function () {
            self.xuongInterval =  setInterval(function () {
                    ctx.clearRect(0, 0, 600, 600);
                    self.y += speedy;
                    self.x += 0;
                    self.creatRan();
                },
                5
            )
        };
        self.stopInterval = function () {
            clearInterval(self.tienInterval);
            clearInterval(self.luiInterval);
            clearInterval(self.lenInterval);
            clearInterval(self.xuongInterval);
        };


        self.moveSelection = function (abc) {
            if (abc.keyCode === 37) {
                self.stopInterval();
                self.diChuyenlui();

            } else if (abc.keyCode === 39) {
                self.stopInterval();
                self.diChuyentien();

            } else if (abc.keyCode === 38) {
                self.stopInterval();
                self.diChuyenlen();
            } else if (abc.keyCode === 40) {
                self.stopInterval();
                self.diChuyenxuong();
            }
        }

    }
;
let ran = new Ran();
ran.creatRan();


function diChuyen(x) {
    window.addEventListener('keydown', x.moveSelection);
}

let Moi = function () {
    self.x = function () {
        return Math.floor(Math.random() * 600);
    };
    self.y = function () {
        return Math.floor(Math.random() * 600);
    };
    self.radius = 5;


};


var Furry = require('./furry');
var Coin = require('./coin');

function Game() {

    var board = document.getElementById('board');
    var counter = 0;
    var self = this;
    var idSetInterval;

    this.board = board.getElementsByTagName('div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;

    this.index = function (x, y) {

        return x + (y * 10);

    };

    this.showFurry = function () {

        self.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');

    };

    this.hideVisibleFurry = function () {

        var elDivFurry = document.querySelector('.furry');
        elDivFurry !== null ? elDivFurry.removeAttribute('class') : null;

    };

    this.showCoin = function () {

        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin')

    };

    this.moveFurry = function () {

        this.gameOver();

        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
            this.showFurry()
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
            this.showFurry()
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
            this.showFurry()
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
            this.showFurry()
        }

        this.checkCoinCollision();

    };

    this.turnFurry = document.addEventListener('keydown', function (event) {

        switch (event.which) {
            case 37:
                self.furry.direction = 'left';
                break;
            case 38:
                self.furry.direction = 'up';
                break;
            case 39:
                self.furry.direction = 'right';
                break;
            case 40:
                self.furry.direction = 'down';
                break;
            default:
                console.log('Inny klawisz: ' + event.which)
        }

    });

    this.checkCoinCollision = function () {

        // console.warn('coin.x : ' + this.coin.x);
        // console.log('furry.x :' + this.furry.x);
        // console.warn('coin.y : ' + this.coin.y);
        // console.log('furry.y :' + this.furry.y);

        if ((this.coin.x == this.furry.x) && (this.coin.y == this.furry.y)) {

            //console.error('TADAMMMMMMMMMM')
            var coin = document.querySelector('.coin');
            coin.removeAttribute('class');
            counter++; //console.log(counter);
            var score = document.getElementById('score');
            console.log(score);
            var divNr = score.querySelector('div');
            console.warn(divNr);
            var nr = divNr.querySelector('strong');
            console.error(nr);
            nr.innerHTML = counter;
            var newCoin = new Coin();
            this.coin = newCoin;
            game.showCoin();

        }
    };

    this.gameOver = function () {

        if ((this.furry.x < 0) || (this.furry.x > 9) || (this.furry.y < 0) || (this.furry.y > 9)) {

            console.log('kolizja z ścianą');
            self.hideVisibleFurry(); // console.log(self.hideVisibleFurry)
            clearInterval(idSetInterval);
            hideVisibleFurry(); // console.log(hideVisibleFurry)

        }
    };

    this.startGame = function () {

        idSetInterval = setInterval(function () {

            self.moveFurry();

        }, 250)

    };

};

var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();

module.exports = game;
module.exports = Game;
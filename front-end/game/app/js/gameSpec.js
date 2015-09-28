var Game = require('./game.js');
var Player = require('./player.js');

    describe('Game', function(){
        it('should be create a player', function(){
            var game = new Game();
			//Steps
            var actRes = game._createPlayers();
            var expRes = new Player();
            //Validation
			expect(actRes).toBeDefined();
			expect(typeof(actRes)).toEqual(typeof(expRes));
        });
		
		it('should be finish the game', function(){
            var game = new Game();
			//Steps
            var actRes = game.start();
            var expRes = parseInt((8*8)/3);
            //Validation
			expect(actRes).toEqual(expRes);
        });
    });

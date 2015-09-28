var Player = require('./player.js')

    describe('Player', function(){
        it('should be create a table for the player', function(){
            var player = new Player();
			//Steps
            var actRes = player.createTable(3,4);
            var expRes = 3*4;
            //Validation
            expect(actRes).toEqual(expRes);
        });
    });


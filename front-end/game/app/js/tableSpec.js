var Table = require('./table.js');
var Ship = require('./ship.js');

    describe('Table', function(){
        it('should be create ships', function(){
            var table = new Table(8,8);
			//Steps
            var actRes = table._createShips();
            var expRes = parseInt((8*8)/20)+1;
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('should be do shot in the same place', function(){
            var table = new Table(8,8);
			//Steps
			table._createShips();
			table._initField();
			table._placeShips();
			table._doShot(1,1);
			var actRes = table._doShot(1,1);
            var expRes = 2;
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('should be do shot in a non existence place', function(){
            var table = new Table(8,8);
			//Steps
			table._createShips();
			table._initField();
			table._placeShips();
			var actRes = table._doShot(8,9);
            var expRes = 0;
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('should be do shot a ship', function(){
            var table = new Table(8,8);
			//Steps
			table._createShips();
			table._initField();
			var ship = table._placeShips();
			var actRes = table._doShot(ship[0],ship[1]);
            var expRes = 1;
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('should be do a failed shot', function(){
            var table = new Table(8,8);
			//Steps
			table._createShips();
			table._initField();
			table._placeShips();
			var actRes = table._doShot(1,1);
            var expRes = 3;
            //Validation
			expect(actRes).toEqual(expRes);
        });
    });

var doOperation = function(numA, numB, callback){
    callback();
    callback();
    callback();
    return numA + numB;
};

doOperation(1,2,function(){
    console.log('Hello!');
});

(function(){
    console.log('Anonymous: Hello!');
})();

(function(name){
    if(!name)
        name = 'world';
    console.log('Hello',name);
})('Pepe');


//Nested functions
var Person = function(name,age){
    this.name = name;
    var _age = age;

    this.printBio = function(){
        console.log('Hello, my name is',this.name,'and I am',_age,'years old');
        _doSomethingPrivate();
    };

    this.getAge = function(){
        return _age;
    }

    this.setAge = function(age){
        _age=age;
    }

    //Para hacer un metodo privado
    var _doSomethingPrivate = function(){
        console.log('This is a private method');
    }
};

Person.sayHello = function(){
    console.log('Say hello');
}

//Test Person class
var pepe=new Person('Pepe',23);
pepe.printBio();
Person.sayHello();
//ERROR   pepe._doSomethingPrivate();
//ERROR   _doSomethingPrivate();
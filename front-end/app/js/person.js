var Person = function(name,age){
    this.name = name;
    var _age = age;

    this.getAge = function(){ return _age; }
    this.setAge = function(age){ _age=age; }

    //Para hacer un metodo privado
    var _doSomethingPrivate = function(){
        console.log('This is a private method');
    }
};

Person.prototype.printBio = function(){
    //Para que funcione el methodo privado habria que volver a crear el metodo dentro de
    // la funcion o crear cierto tipos de mecanismos para que pueda ser llamado por
    // varias funciones
    var _doSomethingPrivate = function(){
        console.log('This is a private method');
    };
    console.log('Hello, my name is',this.name,'and I am',this.getAge(),'years old');
    _doSomethingPrivate();
};

Person.sayHello = function(){
    console.log('Say hello');
}


var pepe=new Person('Pepe',23);
pepe.printBio();
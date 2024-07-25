/*Задача 1*/

function parseCount(value) {
    if (Number.isNaN(parseFloat(value))) {
        throw new Error("Невалидное значение");
    }
    else {
        return parseFloat(value);
    }
}

function validateCount(value) {
    try {
       return parseCount(value);
    }
    catch(e) {
        return e;
    }    
}

/*Задача 2*/

class Triangle {
    constructor(a ,b ,c) {
        if(a+b<c || a+c<b || c+b<a) {throw new Error("Треугольник с такими сторонами не существует")}
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        let p = this.perimeter/2;
        let s = ( p * ( p - this.a ) * ( p - this.b ) * ( p - this.c )) ** (0.5);
        return +s.toFixed(3);
    }
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    }
    catch(e) {
        return { 
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}

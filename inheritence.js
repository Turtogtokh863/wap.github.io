function filter(bannedWords){

    let words = this.split(' ');
    let updated = '';
    for(var i=0; i<words.length; i++){
        // var contains = false;
        // for(var j=0; j<bannedWords.length;j++){
        //     if(words[i] === bannedWords[j]){
        //         contains = true;
        //         break;
        //     }
        // } *********this one was causing trouble due to secondary for loop needs to check whether bannedWords is array or NOT!!!!
        if(!bannedWords.includes(words[i])){
            updated = updated + words[i] + " ";
        }
    }
    return updated;

}
String.prototype.filter = filter;
console.log("This house is not nice".filter(['not','nice']));
console.log("This house is not nice".filter(['not']));
var sentence = "this house is not nice";
console.log(sentence.filter('not')); //this one wont work because bannedWorks acts as String instead of being Array.*****

function bubbleSort(){
    var arr = this;
    var n = arr.length;
    for(let i=0; i<n-1;i++){
        for(let j=0; j < n-i-1; j++){
            if (arr[j] > arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

Array.prototype.bubblesort=bubbleSort;
var array = [6,4,0, 3,-2,1];
console.log(array.bubblesort());

function Person(name){
    this.name = name;
    this.teach = function(subject){
        this.subject = subject;
        return this.name + " is now teaching " + this.subject +".";
    }
    this.changeName=function(name2){
        this.name=name2;
        return this.name + " " + this.subject;
    }


}
const tina = new Person("Tukker");
console.log(tina.changeName("DOe"));
console.log(tina.teach("TM"));
var teacher = new Person("Tina");
var sub = "CS472";
console.log(teacher.teach(sub));
console.log(teacher.teach(sub+"WAP"));
console.log(teacher.changeName("Joe"));
// Create an object called Teacher derived from a Person function constructor, and implement
// a method called teach that receives a string called subject, and prints out: [teacher's name]
//     is now teaching [subject]. Create a Teacher object and call its teach method.
//         Also do the same thing using Object.create. When using Object.create you will need a
//     factory function instead of a function constructor in order to pass parameters such as
// ‘name’ to be set in the prototype.

const person = {
    name: "unnamed",
    teach: function (subject) {
        return this.name + " is now teaching " + this.subject +".";
    },
    changeCourse: function (course) {
        return this.name + " is now teaching " + this.course +".";

    }
}

const p1 = Object.create(person);
p1.name = "Tina";
p1.subject="WAP"
p1.course = sub;
console.log(p1.name);
console.log(p1.teach());
console.log(p1.changeCourse(sub));

// Write code that will create person, student, and professor objects.
// • Person objects have
// o name and age fields
// o a greeting method that prints out: “Greetings, my name is [name] and I am
//     [age] years old.”
// o a salute method that prints out: “Good morning!, and in case I dont see you,
//     good afternoon, good evening and good night!”
// • Student objects inherit name, age, and salute from person. They also have a field
// ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
//     [name] and I am studying [major]. The greeting should be output to the console.
// • Professor objects inherit name, age, and salute from person. They also have a field
// ‘department’ and have their own greeting method. Their salutation is “Good day,
//     my name is [name] and I am in the [department] department.” Output it to the
// console.
// • Create a professor object and a student object. Call both the greeting and salutation
// methods on each.
// • Do this exercise once using the object prototype approach for inheritance and then
// using the function constructor approach.

const Person1 = {
    age: "0",
    name: "unnamed",
    greeting:function () {
        console.log("Greetings, my name is "+ this.name +" and I am " + this.age + "years old.");
    },
    salute:function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");

    }
}

const student = Object.create(Person1);
student.greeting = function () {
    console.log("Hey, my name is " +this.name +" and I am studying " +this.major);
}
student.name = "Tukker";
student.__proto__.major = sub;
student.greeting();
student.salute();

const professor2 = Object.create(Person1);
professor2.greeting = function () {
    console.log("Good day, my name is " +this.name +" and I am in the " +this.department +" department.");
}
professor2.name = "Tina";
professor2.__proto__.department = "Computer Science";
professor2.greeting();

const Person2 = function (name,age) {
    this.name=name;
    this.age=age;
}
Person2.prototype.greeting = function () {
    console.log("Greetings, my name is "+ this.name +" and I am " + this.age + "years old.");
}
Person2.prototype.salute = function () {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
}

const stud = function (name,age,major) {
    Person2.call(this,name,age);
    this.major=major;
}
stud.prototype=Object.create(Person2.prototype);
stud.prototype.greeting = function () {
    console.log("Hey, my name is " +this.name +" and I am studying " +this.major);
}


const tukk = new stud("Tukker",28);
tukk.major = sub;
tukk.greeting();
tukk.salute();

const prof = function (name,age,department) {
    Person2.call(this.name,this.age);
    this.department=department;
}
prof.prototype=Object.create(Person2.prototype);
prof.prototype.greeting = function () {
    console.log("Good day, my name is " +this.name +" and I am in the " +this.department +" department.");
}

const bagsh = new prof("Tina",22);
bagsh.department="CS";
bagsh.greeting();
bagsh.salute();
var testObject = {name: 'Sarah', id: 273, drink: 'soda'};   //test object to practice on

function OrderedMap(object) {      //places objectitems in safe array
    this._object = object;
    console.log(object);
    this._mySafeArray = [];
       for (keys in object) {
           var temp = {};
           temp[keys] = object[keys];
         this._mySafeArray.push(temp)
     }
   console.log(this._mySafeArray);      //prints in safe order
}

OrderedMap.prototype.myPush = function (item) {
    console.log('I am pushing');
    this._mySafeArray.push(item);
    console.log(this._mySafeArray);
}
OrderedMap.prototype.myPop = function () {
    console.log('I am popping')
    this._mySafeArray.pop();
    console.log(this._mySafeArray);
}
OrderedMap.prototype.myShift = function () {
    console.log('I am shifting');
    this._mySafeArray.shift();
    console.log(this._mySafeArray);
}

OrderedMap.prototype.myUnshift = function (item) {
    console.log('I am unshifting');
    this._mySafeArray.unshift(item);
    console.log(this._mySafeArray);
}

String.prototype.replaceAll = function(target, replacement) {
    return this.split(target).join(replacement);
};
OrderedMap.prototype.myToString = function () {
   console.log('I am stringing');
    var objToString = JSON.stringify(this._mySafeArray);
    var cleanerString = objToString.replaceAll('"',"'");
    var furtherMore = '"'+ cleanerString +'"';
    console.log(furtherMore);
}


MyObject.prototype = Object.create(OrderedMap.prototype); //cloning to the OrdMap prototype

function MyObject() {
    OrderedMap.call(this, testObject);
}

var myObject = new MyObject();
myObject.myPush({loves:'Sushi'});    //testing the OrdMap methods
myObject.myPop();
myObject.myShift();
myObject.myUnshift({favNumber:8});
myObject.myToString();



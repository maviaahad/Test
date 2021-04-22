//part1


//ques1
let  newarray = Array.apply(null, Array(100))
    .map(function(val, index) {
        return index+1;
    });

console.info('  Create an Array from 0...100 without using traditional For-loop');
console.info(newarray);
console.info('Create an Array from 0...100 without using traditional For-loop');

//ques2
let evenArray = newarray.filter(function (e) {
    return e % 2 === 0;
});
console.info('Create an Array of only even numbers');
console.log(evenArray);
console.info('Create an Array of only even numbers');

//ques4
let evenArray1 = evenArray.map(function (e) {
    return e*e;
});
console.info('an Array of square only even numbers');
console.log(evenArray1);
console.info(' an Array of square only even numbers');


//ques3

function getPromise(){
    return new Promise(function(resolve,reject){
        let result;
        let num=2

        if(num%2===0){
            console.log('num', num*num)
              return num*num

        }
        else{
            throw error;
        }

    })
}
function getResult() {
    getPromise()
        .then(function(response) {

        })
    }


let result = getResult();


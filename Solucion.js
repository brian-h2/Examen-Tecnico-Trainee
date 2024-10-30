/*Situacion 1*/
/*
Aprovecho para realizar uso de los multiples recursos del sistema
mediante el uso de bucles for anidados para comparar la primera posicion 
con la segunda y asi continuamente con todos los valores hasta que la condicion
de suma entre los dos valores contenidos en los indices de igual al requiredSum
*/

function sumNums (nums,requiredSum) {

    for(let i = 0; i < nums.length; i++) {
        for(let x = i + 1; x < nums.length; x++) {

            if(nums[i] + nums[x] === requiredSum) {
                console.log('True') ;
                return;
            }
            
        }
    }
    console.log('False');

};

let nums = [1,2,4,4];
let requiredSum = 8;

sumNums(nums,requiredSum)

/*Situacion 2*/
/*
Con recursos limitados y tiempo de ejecucion importante, implemente set
ya que el valor que se asigne dentro de este pasa una sola vez por el mismo
hasta que se cumpla la condicion, donde si tiene un valor repetido o no el valueAcumulated, en este 
caso si, por lo cual es un par y al cumplirse se devuelve verdadero.
*/ 

function sumNumsDos(nums2,requiredSum2) {
    const valueAcumulated = new Set()

    for(let num of nums2) {
        let numberSum = requiredSum2 - num;
        
        if(valueAcumulated.has(numberSum)) {
            console.log('True');
            return
        };

        valueAcumulated.add(num);
    };
    console.log('False');
};

let nums2 = [1,4,3,9];
let requiredSum2 = 8;

sumNumsDos(nums2,requiredSum2);
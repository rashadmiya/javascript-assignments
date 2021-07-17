/**feet to mile start */

function feetToMile (feet) {
    let mile = 5280;
    let convertedResults =( feet/mile).toFixed(2);
    console.log(`${convertedResults} miles`);
}

feetToMile(11160)


/**feet to mile end */

/**Wood Calculator start */

function woodCalculator (chair,table,bed) {

    let chairCost = `${chair *1} cubic feet for chair`
    let tableCost = `${table * 3} cubic feet for table`
    let bedCost = `${bed * 5} cubic feet for bed`

    let avarage = (chair * 1)+(table * 3)+(bed * 5)

    console.log(chairCost,tableCost,bedCost +" and the totall amount is : "+avarage);

}

woodCalculator(5,1,2)   

/**Wood Calculator end */

/**brick Calculator start */


function brickCalculator (floor) {
    
    let more10Floor = (secondModule)=> secondModule *12*1000;
    let more20Floor = (thirdModule)=> thirdModule *10*1000;

    if (floor <= 10){
       let brickAmount =  floor * 15 * 1000;
       return brickAmount;
    }else{

        if (floor >10 && floor <=20) {

            let secondModule = floor - 10;
            let firstModule = secondModule;
            let brickAmount = brickCalculator(firstModule) + more10Floor(secondModule)
    
         return brickAmount;
            
        } else if (floor>20 && floor <30) {

            let thirdModule = floor - 20;

            floor = floor-thirdModule;

            let secondModule = floor - 10;
            let firstModule = secondModule;

            let brickAmount = brickCalculator(firstModule) + more10Floor(secondModule) +more20Floor(thirdModule);
            return brickAmount;
        }

    }

}


let results = brickCalculator(25);

console.log(results);

/** brick Calculator end*/

/** tiny friend start */
 function tinyFriend ( friends){
   
    let tinyFriend = friends[0];

    for (let i = 0; i < friends.length; i++) {
    let element = friends[i];

    if (tinyFriend.length > element.length) {
        tinyFriend = element;
    }

}
return tinyFriend;
}

// let nameArray = ['rashad','rakib','redoy','masu','dulal','sad'];

let result = tinyFriend(['rashad','rakib','redoy','masu','dulal','sad']);

console.log(result);

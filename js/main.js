//console.log("Hello!  This is your javascript file."); 
//1. add an event listener - for sleep and mood boxes

//8.28 check

const daysArray = [
    {
        named : "Rania",
        date : "08/26/25",
        happyOccur : 1,
        sadOccur: 0,
        sleepyOccur: 1,
        energyOccur: 2,
        nervOccur: 1,
        sleepHours: 8,
        dailyEntry: "This is just a placeholder for entery 1"
    },
    {
        named: "Rania",
        date: "08/27/25",
        happyOccur: 1,
        sadOccur: 0,
        sleepyOccur: 1,
        energyOccur: 3,
        nervOccur: 1,
        sleepHours: 9,
        dailyEntry: "This is a place holder for entery 2"
    }
];

window.onload = function () {
    let happyOccur = 1;
    let sadOccur = 0;
    let sleepyOccur = 1;
    let energyOccur = 3;
    let nervOccur = 1;

    document.addEventListener("DOMContentLoaded", function () {
        const check1 = document.getElementById("checkbox1");
        check1.addEventListener('change', function(){
            if (check1.checked == true){
                happyOccur += 1;
                console.log(happyOccur);
            } else {
                happyOccur -= 1;
            }
        });
    });

    
    document.addEventListener("DOMContentLoaded", function () {
        var check2 = document.getElementById("checkbox2");
        check2.addEventListener('change', function(){
            if (check2.checked == true){
                sadOccur += 1;
                console.log(sadOccur);
            } else {
                sadOccur -= 1;
            }
        });
    });

    
    document.addEventListener("DOMContentLoaded", function () {
        var check3 = document.getElementById("checkbox3");
        check3.addEventListener('change', function(){
            if (check3.checked == true){
                sleepyOccur += 1;
                console.log(sleepyOccur);
            } else {
                sleepyOccur -= 1;
            }
        });
    });

    
    document.addEventListener("DOMContentLoaded", function () {
        var check4 = document.getElementById("checkbox4");
        check4.addEventListener('change', function(){
            if (check4.checked == true){
                energyOccur += 1;
                console.log(energyOccur);
            } else {
                energyOccur -= 1;
            }
        });
    });

    
    document.addEventListener("DOMContentLoaded", function () {
        var check5 = document.getElementById("checkbox5");
        check5.addEventListener('change', function(){
            if (check5.checked == true){
            nervOccur += 1;
            console.log(nervOccur);
            } else {
                nervOccur -= 1;
            }
        });
    });

    document.getElementById("submitEntry").addEventListener("click", () => {
        const named = document.getElementById("fname").value;
        const fullDate = new Date();
        const currDate = fullDate.toLocaleDateString();
        const happy = happyOccur;
        const sad = sadOccur;
        const sleep = sleepyOccur;
        const energy = energyOccur;
        const nervy = nervOccur;
        const hours = document.getElementById("sleepHours").value;
        const entered = document.getElementById("userJournal").value;

        const today = {
            named: named,
            date: currDate,
            happyOccur: happy,
            sadOccur: sad,
            sleepyOccur: sleep,
            nervOccur: nervy,
            energyOccur: energy,
            sleepHours: hours,
            dailyEntry: entered
        };

        daysArray.push(today);
        
    });

};

//2.create an array of objects that stores the user entries
//make sure to make some test data for previous days
//if the user interacts with the page be sure to update that information

//check 8.29

//3.write a function to loop over the array
//compute: the average no of hours slept, display on page, and update when user changes
//compute: no of days they have different feelings ex happy d1, sad d2..

//check 1 9.1



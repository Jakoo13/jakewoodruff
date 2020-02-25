

/*
 const retirement = (retirementAge) => {
   let a = ' years left until retirement.';
   return function(yearOfBirth){
     let age = 2016 - yearOfBirth;
     console.log((retirementAge - age) + a);
   }
 }
 let retirementUS = retirement(66);
 let retirementGermany = retirement(65);
 let retirementIceland = retirement(67)
 retirementUS(1990);
 retirementGermany(1990);
 retirementIceland(1990);
 


/////// functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ',can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, '   + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do    you do?');
        }
    }
}

var teacherQuestion = 
interviewQuestion('teacher');
teacherQuestion('John');
*/


function statement(currentBusiness) {
    if (currentBusiness === 'cars') {
        return function(maleOrFemale) {
            document.getElementById("customText").textContent = 'This Site has been optimized for a ' + maleOrFemale + ' in the car business';
            if (maleOrFemale === 'female') {
                document.getElementById('cont').style.background = 'rgb(173, 85, 85)';
                //backgroundColor.setAttribute('background', 'blue');
            } 
         }
    } else if (currentBusiness === 'AV') {
        return function(maleOrFemale) {

            document.getElementById("customText").textContent = 'This Site has been optimized for a ' + maleOrFemale + ' in the AV business';
            document.querySelector(".showcase").style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(img/soundeffects.jpg)'; 
            document.querySelector(".showcase h1").textContent = 'S&S Home Automation';
            document.querySelector(".showcase p").textContent = 'Building houses of the future';
            //INSERTING NEW PICS IN BOTTOM LIST
            var pic1 = document.createElement("img")
            var att = document.createAttribute("src");
            att.value = "img/homeAuto1.jpg";
            var picList = document.querySelector('.piclist');
            pic1.setAttributeNode(att);
            picList.appendChild(pic1);
    
        } 
           
    }
    
}


var avQuestion = statement('AV');
avQuestion('male');

//var carQuestion = statement('cars');
//carQuestion('male');




















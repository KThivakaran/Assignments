//Evaluates a student's score and returns their grade using a switch statement to assess score ranges. 
 
function gradeCalculation(mark){

    switch(true){

    case mark >=90:

    return "Grade A+";
    
    break;
    
    case mark >=80 && mark < 90:
        return "Grade A"
break;
case mark >=70 && mark < 80:
        return "Grade B"
break;


case mark <70 :
        return "Grade C"
break;

}}

//gradeCalculation(90)

console.log("Mark scored with  :"+gradeCalculation(78));

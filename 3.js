  var annualIncome=4500000;
     if(annualIncome<=250000){
         console.log("No tax");
     }
     else if(annualIncome>250000&&annualIncome<=500000){
         console.log("5% tax");
     }
     else if(annualIncome>500000&&annualIncome<=1000000){
         console.log("20% tax");
     }
     else{
         console.log("30% tax");
     }

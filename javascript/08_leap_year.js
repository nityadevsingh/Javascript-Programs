a = Number(prompt("Enter a year"));

// typeof(a);
if(a%4==0){
    if(a%400==0){
        if(a%100==0){
            alert("This is a leap year");
        }
        else{
            alert("This is not a leap year");
        }
    }
    else{
        alert("This is a leap year");
    }
}
else{
    alert("This is not a leap year");
}
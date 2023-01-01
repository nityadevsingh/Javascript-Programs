a = prompt("Enter Your Name :");
b = prompt("Enter His/Her Name :");

var love = Math.random();
love*=100;
love = Math.floor(love) + 1;

if (love > 70){
    alert("Your Love Score Is " + love + 
    "%" + a +" " + b );
}
else{
    alert("Your Love Score Is " + love + "%");
} 
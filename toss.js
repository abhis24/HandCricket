console.log("Hello, my name is Salman Shah the creator of this online version of the game hand cricket");

var userChoice1="";
while(userChoice1!="even" && userChoice1!="odd")		//prevent from entring invalid input...
	userChoice1 = prompt ("Do you choose odd OR even?");
console.log("User entered : "+userChoice1);			

var userChoice = parseInt(prompt("Choose  Your Number"));	//use parseInt() to  convert string to integer...

var computerChoice = Math.floor(Math.random()*6);		//Math.random() returns value [0,1).
								//So, [0,1)*6 = [0,6).
								//Math.floor() to make it integer from 0 to 5
computerChoice++;						//(int 0 to 5) +1 = int 1 to 6
console.log("Computer: " + computerChoice);

var tossChoice = userChoice + computerChoice;

console.log("tossCoice : "+tossChoice);

var usertossCoice="";

if ( (tossChoice % 2 == 0 && userChoice1 == "even") || (tossChoice % 2 == 1 && userChoice1 == "odd") )
     while(usertossChoice!="bat" && usertossChoice!="bowl")
	     usertossChoice = prompt("Do you want to Bat or Bowl?");  
else{
    tossChoice1 = Math.floor(Math.random()*2);
    if(tossChoice1==0)
	    var usertossChoice = "bat";
    else 
        var usertossChoice = "bowl";
}

console.log("You have to " + usertossChoice + " first");
alert("You have to " + usertossChoice + " first");

if(usertossChoice == "bat")
	var c = 1;	
else 
	var c = 0;


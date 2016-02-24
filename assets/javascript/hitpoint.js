//so far this is good code for updating round events

//next step is to implement this into main RPG code

//fight engine
//==================================
// var players = [
//     {"name":"Obi-Wan Kenobi", "hitPoints":120, "attack": 8 ,"counterAttack":15, "image":"obi-wan.jpg", "alive": true},
//     {"name":"Luke Skywalker", "hitPoints":100, "attack": 6 , "counterAttack":5, "image":"luke-skywalker.jpg", "alive": true},
//     {"name":"Darth Sidious", "hitPoints":150,"attack": 5, "counterAttack":20, "image":"darth-sidious.png", "alive": true},
//    {"name":"Darth Maul", "hitPoints":180,"attack": 4, "counterAttack":25, "image":"darth-maul.jpg", "alive": true}
// ]

//console.log(name);
//playerhp
var myHp = 120;

//opponent HP
var oppHp =180;
var opp = "Darth Maul";

//what i inflict
//follows series add original value each found of damage
//======================================================
myDamInitial = 4;
myDam = 4;

//opponent damae -- static

oppDam  = 25;





var endRound = function() {
	if(myDam <= 0) {
	alert('Round Over: You died!');

	alert('Round over: You defeated');
	//players.alive = false;
}

else {
	oppHp = oppHp - myDam; 
	myHp = myHp - oppDam;
	myDam = myDam + myDamInitial;

//update HTML with jQuery


$('p#hp').append(myHp);
$('p#oppHp').append(oppHp);
$('p#myDam').append(myDam);
$('p#theirDam').append(oppDam);
//$('#hp').append($(document.createTextNode( myHp )));

}
};

$(document).ready (function(){
	endRound();
	//$('p#hp').append(myHp);
});


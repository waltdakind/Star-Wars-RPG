// class of objects -- players
//========================================

// wanted to use this array but looks like referring to data stored in htm will be easier
var players = [
   {"name":"Obi-Wan Kenobi", hitPoints:120, "attack": 8 ,"counterAttack":15, "image":"obi-wan.jpg"},
    {"name":"Luke Skywalker", "hitPoints":100, "attack": 6 , "counterAttack":5, "image":"luke-skywalker.jpg"},
     {"name":"Darth Sidious", "hitPoints":150,"attack": 5, "counterAttack":20, "image":"darth-sidious.png"},
    {"name":"Darth Maul", "hitPoints":180,"attack": 4, "counterAttack":25, "image":"darth-maul.jpg"}
 ]

// loop through to update DOM
// place name of character at top in .characters#name
// place image variable in "<img src="assets/images/" +$(this)
//place hit points in .character#hitPoints

 // for(var i = 0; i < players.length; i++) {
 // 	//create initial display here

 // 	$
 // }

var attacker;
var defender;

//Health Points
//Attack Power (incremental increase)
//Counter Attack Power (fixed)

//FUNCTIONS
//=====================================================================
	//Picking a player
	//=================

	function pickPlayer()  {

	//	alert(event.target.id);
	var attacker = (event.target.id);
	//$( "#attackerId" ).data("attackerId", { initials: event.target.id});
	console.log(attacker);
$("#attackerId").text(attacker);



  $('.btn').bind("click");
 
     //set initial attack power equal to players.player.attack
    // initialAttackPower = players.attack.value(this);
     //alert(initialAttackPower);
//hide the current box
      $(this).addClass('chosenFighter').css('background:white');
      //code for inserting before list
	

//var node = document.getElementsByClassName("characters").lastChild;
//var list = document.getElementsByClassName("characters");

	 $('.characters img').unbind("click", pickPlayer);
      $(this).closest('.box').insertBefore('.characters');
     // $(this).closest('.box').clone()
    // $(this).closest('.box').fadeOut(4000);   

   //   $(this).detach().insertBefore('.characters');

     // add all but choice to enemies -- this isnt working
     //add background red
     $(".characters:not('.chosenFighter')").addClass('enemies');

     //$('.div.box.enemies').css('background:red');
      $('li.chosenFighter.box').fadeIn(4000);

      //unbind so no further clicks accepted
     // $unbind('click','pickPlayer');
     
 //display in figher area
 	//$(this).('.chosenFighter').append('li.chosenFighter')
 //apply red border to other boxes
    //line below doesnt work
      // $('.row.characters.enemies.box').style.background:'red';
//bind so clicks work for next function
      $('.characters img').bind("click", enemyChoice);


    }

    function enemiesMade() { 

   	//apply red border to other boxes
    }

	//Picking a target Enemy
	//=================
	function enemyChoice() {
	var defender = (event.target.id);
	console.log(defender);
	$( "#defenderId" ).data( event.target.id);
	//addClass('defender')
      $(this).addClass('defender');
 
	 $('.characters img').unbind("click", enemyChoice);
      $(this).closest('.box').insertAfter('.characters').css('border-color::black');
 
   //   $(this).detach().insertAfter('.characters');

     // add all but choice to enemies -- this isnt working
     //add background black to defender, red to remaining enemies

     $(".characters:not('.defender')").addClass('remaining');

      $('.defender.box').fadeIn(4000);

     $('.btn').bind("click");

	}



//===================================================================
function attackDefender() {

	// 	console.log();
//deduct hp from enemy target
//debugging see if attack button registers
//==========================
//alert('btn registered');
//alert('attacker is ' + attacker);
//lookup hp for attacker and defender
var attackerPhoto = ($( "img" ).attr( "src" ));

var defenderPhoto = ($( "img" ).last().attr( "src" ));
console.log(attackerPhoto);
console.log(defenderPhoto);


//turn off the button while the fight happens
//$('button').unbind("click", enemyChoice);

// incrementally increase player


//defender attack

//turn button back on for next round
//$('.btn').bind("click", attackDefender);

};





//MAIN PROCESS
//=====================================================================
$(document).ready (function(){

//picking character to play first
$('.characters img').click(pickPlayer);

$('.enemies img').click(enemyChoice);
//populate the chosen char in the .li.chosenFigher area
//background not changing!!!! work on this after figth engine implemented


//call the fight function on button click

$('.btn').click(attackDefender);

});









	

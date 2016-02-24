// class of objects -- players
//========================================


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





//Health Points
//Attack Power (incremental increase)
//Counter Attack Power (fixed)

//FUNCTIONS
//=====================================================================
	//Picking a player
	//=================

	function pickPlayer()  {
   
     //set initial attack power equal to players.player.attack
    // initialAttackPower = players.attack.value(this);
     //alert(initialAttackPower);
//hide the current box
      $(this).addClass('chosenFighter');
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

      $('li.chosenFighter.box').fadeIn(4000);

      //unbind so no further clicks accepted
     // $unbind('click','pickPlayer');
      
 //display in figher area
 	//$(this).('.chosenFighter').append('li.chosenFighter')
 //apply red border to other boxes
    //line below doesnt work
      // $('.row.characters.enemies.box').style.backgroundColor='red';
//bind so clicks work for next function
      $('.characters img').bind("click", enemyChoice);
    }


    function enemiesMade() { 

   	//apply red border to other boxes

    }


// move chosen player out of top to player field   #chosenFighter


	//Picking a target Enemy
	//=================
	function enemyChoice() {

	//addClass('defender')

      $(this).addClass('defender');
 

	 $('.characters img').unbind("click", enemyChoice);
      $(this).closest('.box').insertAfter('.characters');
 

   //   $(this).detach().insertAfter('.characters');


     // add all but choice to enemies -- this isnt working
     //add background black to defender, red to remaining enemies



     //$(".characters:not('.defender')").addClass('remaining');

      $('.defender.box').fadeIn(4000);

//hide target class from box area
//   --
	
	}

//===================================================================
	// function playerAttack() {
	// 	console.log();
// deduct hp from enemy target
//players.enemy.hitPoints = players.enemy.hitPoints - players.player.attack
// incrementally increase player
//players.player.attack = players.player.attack + intialAttackPower
	// }


//========================================================================
	// function enemyResponse() {
	// 	console.log();
//deduct amount in enemy.player.CounterAttack from chosenPlayer.hitPoints
	// }

	// function roundComplete() {
	// 	console.log();
	// }

	// function increaseAttackPower() {

	// }



//MAIN PROCESS
//=====================================================================
$(document).ready (function(){

//picking character to play first
$('.characters img').click(pickPlayer);

$('.enemies img').click(enemyChoice);
//populate the chosen char in the .li.chosenFigher area


});










	

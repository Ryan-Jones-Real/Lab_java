/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];


/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle - 
					0 - hide the html tag
					1 - make the html tag visible
			
			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.  
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.  
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/





	function viewStudentStats(id, toggle){
        if(toggle == 0){
            document.getElementById(id).style.visibility = "hidden";
            document.getElementById(id).style.height = 0;
            //visibility = hidden;
            height = 0;
        }
        else{
            document.getElementById(id).style.visibility = "visible";
            document.getElementById(id).style.height = "auto";
        }
	}



				
/*
	Home Page: 
		changeColor(color) method
			parameter: 
				color- A css color
				
			purpose: This method will set the html body's background color to the 
					 provided parameter.
*/


    function changeColor(color){
        document.body.style.background= color;
    }

/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none
			
			purpose: This method will iterate through the stats table and 
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.
						
						2. Update the winner column to the name of the winning team.
						
						3. Keep track of the number of wins/losses for the Buffs.
						
						4. Update the second table to show the total number of wins/losses for the Buffs.
*/



    function loadStatsPage(){
        tbl = document.getElementById("stats_table");
        wins = 0;
        losses = 0;
        
        
        for(row = 2; row < tbl.rows.length; row++){
         
            
            homeScore = 0;
            oppScore = 0;
            for(col = 0; col < tbl.rows[row].cells.length; col++){
              
                
                if(col == 2){
                   homeScore = parseInt(tbl.rows[row].cells[col].innerHTML); 
                }
                else if(col == 3){
                    oppScore = parseInt(tbl.rows[row].cells[col].innerHTML);
                }
                if(homeScore > oppScore){
                    console.log("Hiya");
                    console.log(tbl.rows[row]);
                    tbl.rows[row].cells[4].innerHTML = "CU BOULDER";
                    wins++;
                }
                else{
                    losses++;
                   tbl.rows[row].cells[4].innerHTML = tbl.rows[row].cells[1].innerHTML;
                }
                
                
                
            }
        }
        
        
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
    }
/*
	Football Player Information Page
		loadPlayersPage method:
			parameters: none
			
			purpose: This method will populate the dropdown menu to allow the 
					 user to select which player's information to view.
					 
					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the 
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method 
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.
						
					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.
                    
                    
                    
                    
          
		
		switchPlayers(playerNum) method:
			parameters: 
				playerNum - The index of the football player in the players array.
			
			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.
				
				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards
					
					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/
				
        function loadPlayersPage(){
         //   var playerNum = 0;
            //document.getElementById("player_info.html").href = #;
           // //ONCLICK
          //  playerNum++;
           // if(playerNum >= players.length()){
           //     playerNum = 0;   
          //  }
          //  document.getElementById('dropdown').innerHTML = players[playerNum].name;
         //   <div class="dropdown"><br><br>
         //     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-//haspopup="true" aria-expanded="false">
                   //             On which page should Article Appear?
                         //   </button>
                    //        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        //        <a class="dropdown-item" href="#">Smart Page</a>
                    //            <a class="dropdown-item" href="#">Dumb Page</a>
                        //        <a class="dropdown-item" href="#">*secret page*</a>
                      //      </div>
                     ///   </div>
            //document.getElementById("player_selector").classList.toggle("show");
            document.getElementById("player_selector").toggle("show");
        }
 

        function switchPlayers(playerNum){
            document.getElementById('p_year').innerHTML  =  players[playerNum].year;
            document.getElementById('p_major').innerHTML  =  players[playerNum].major;
            document.getElementById('g_played').innerHTML  =  players[playerNum].games_played;
            document.getElementById('player_img').innerHTML  =  players[playerNum].img;
            document.getElementById('p_yards').innerHTML  =  players[playerNum].pass_yards;
            document.getElementById('r_yards').innerHTML  =  players[playerNum].rushing_yards;
            document.getElementById('rec_yards').innerHTML  =  players[playerNum].receiving_yards;
            document.getElementById('alt').innerHTML  =  players[playerNum].alt;
            document.getElementById('selectPlayerButton').innerHTML  =  players[playerNum].name;
            
            avg_pyds = players[playerNum].pass_yards / players[playerNum].games_played;
            avg_ryds = players[playerNum].rushing_yards / players[playerNum].games_played;
            avg_recyds = players[playerNum].receiving_yards / players[playerNum].games_played;
            document.getElementById('avg_p_yards').innerHTML  =  avg_pyds;
            document.getElementById('avg_r_yards').innerHTML  =  avg_ryds;
            document.getElementById('avg_rec_yards').innerHTML  =  avg_recyds;
            
        }

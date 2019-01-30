
let isCurrentPlayerX = 'X';
let gameOver = false;
let clickCounter = 0;
let winnerMessage = '';

function makeMove(event) {

    // Only do something if CELL is empty
    if ($(event.target).text() === '' && gameOver === false) {
         clickCounter++;
        // CELL should be marked with current player name
        if (isCurrentPlayerX === 'X') {
            $(event.target).text('X')
        } else {
            $(event.target).text('O')
        }
        
        // check for winner
        checkWinner()
        

        // Give the next player their turn
        if (isCurrentPlayerX === 'X') {
            isCurrentPlayerX = 'O';
        } else {
            isCurrentPlayerX = 'X';
        }
    }

 }
    // when user clicks on board
    $('td').on('click', makeMove);

     function checkWinner(){ 
     // top row winner
        if ($('#0').text() === $('#1').text() && $('#0').text() === $('#2').text() && $('#0').text() !== ''){
            $('.message').text('The winner is' + " " + winnerMessage + " "  + isCurrentPlayerX)
           gameOver = true
           
    // second row winner
        }else if($('#3').text() === $('#4').text() && $('#3').text() === $('#5').text() && $('#3').text() !== ''){
           $('.message').text('The winner is' + " " + winnerMessage + " "  + isCurrentPlayerX)
            gameOver = true
    // bottom row winner
        }else if($('#6').text() === $('#7').text() && $('#6').text() === $('#8').text() && $('#6').text() !== ''){
           $('.message').text('The winner is' + " " + winnerMessage + " "  + isCurrentPlayerX)
            gameOver = true
    // left column winner
        }else if($('#0').text() === $('#3').text() && $('#0').text() === $('#6').text() && $('#0').text() !== ''){
           $('.message').text('The winner is' + " " + winnerMessage + " "  + isCurrentPlayerX)
            gameOver = true
    // middel column winner
        }else if($('#1').text() === $('#4').text() && $('#1').text() === $('#7').text() && $('#1').text() !== ''){
           $('.message').text('The winner is' + " " + winnerMessage + " "  + isCurrentPlayerX)
            gameOver = true
    // right column winner
        }else if($('#2').text() === $('#5').text() && $('#2').text() === $('#8').text() && $('#2').text() !== ''){
           $('.message').text('The winner is' + " " + winnerMessage + " "  + isCurrentPlayerX)
            gameOver = true
    // first arrow winner
        }else if($('#0').text() === $('#4').text() && $('#0').text() === $('#8').text() && $('#0').text() !== ''){
           $('.message').text('The winner is' + " " + winnerMessage + " "  + isCurrentPlayerX)
           gameOver = true
    // second arrow winner
        }else if($('#2').text() === $('#4').text() && $('#2').text() === $('#6').text() && $('#2').text() !== ''){
           $('.message').text('The winner is' + " " + winnerMessage + " "  + isCurrentPlayerX)
           gameOver = true
    // no one win
        }else if(clickCounter === 9){
            $('.message').text('Oops!! Try again')
        }
    }  
    
    // refresh the page to start a new game
        function resetGame(){
        $('button').on('click', resetGame)
        location.reload();
    }

        
        
            

    

 
    
              
    
    

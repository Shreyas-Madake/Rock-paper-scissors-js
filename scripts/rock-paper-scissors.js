let score=JSON.parse(localStorage.getItem('score')) || 
            {
            wins:0,
            loses:0,
            ties:0
              };

        updateScoreElement();
          
         /*
        if(score===null){
          score ={
            wins:0,
            loses:0,
            ties:0
          };
            }*/
        let isAutoPlaying=false;
        let intervalId;
      function autoPlay(){
        if(!isAutoPlaying){
          intervalId=setInterval(function() {
          const playerMove=pickComputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying=true;
        } else{
          clearInterval(intervalId);// to stop
          isAutoPlaying=false;
        }
        
      }

      function playGame(playerMove){
         const computerMove=pickComputerMove();
        
      let result='';
      if(playerMove=== 'scissors'){
        if(computerMove==='rock'){
        result='You Lose.';
      } else if(computerMove==='paper'){
        result='You Win.';
      } else if(computerMove==='scissors'){
        result='Tie.';
      }
      }
      else if(playerMove==='paper'){
        if(computerMove==='rock'){
        result='You win.';
      } else if(computerMove==='paper'){
        result='Tie.';
      } else if(computerMove==='scissors'){
        result='You lose.';
      }
      }
      else if(playerMove==='rock'){
        if(computerMove==='rock'){
        result='Tie.';
      } else if(computerMove==='paper'){
        result='You Lose.';
      } else if(computerMove==='scissors'){
        result='You Win.';
      }
      }

      if(result==='You Win.'){
        score.wins+=1;
      }else if(result==='You Lose.'){
        score.loses+=1;
      }else if(result==='Tie.'){
        score.ties+=1;
      }
        localStorage.setItem('score',JSON.stringify(score));

         updateScoreElement();
         document.querySelector('.js-result').
         innerHTML=result;
         
         document.querySelector('.js-moves').
         innerHTML=`You
          <img src="images/${playerMove}-emoji.png" class="move-icon">
          <img src="images/${computerMove}-emoji.png" class="move-icon">
          computer`;
      
      
        
      }

      function updateScoreElement(){
         document.querySelector('.js-score')
        .innerHTML=`Wins:${score.wins},Losses:${score.loses},Ties:${score.ties}`;
      }



  
   function pickComputerMove(){
    const randomNumber=Math.random();
      
      if(randomNumber>=0 && randomNumber< 1 / 3){
        computerMove='rock';
      } else if(randomNumber>= 1/3 && randomNumber< 2/3){
         computerMove='paper';
      } else if(randomNumber>=2/3 && randomNumber<1){
        computerMove='scissors';
      }
      return computerMove;//to get its value out of function too
   }
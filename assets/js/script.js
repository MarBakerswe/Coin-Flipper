// TODO: Declare any global variables we need

let headRolls = 0;
let tailsRolls = 0;


 // Flip Button Click Handler
document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    //document.querySelector('#flip')
    document.getElementById('flip').addEventListener('click', () => {
        // determain the result using Math.random(), 0 -1
        let flippedHeads = Math.random() < 0.5;

        if (flippedHeads) {
        // Display image and the message is heads
        document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg';
        document.getElementById('message').textContent = 'You Fliped Heads!';
        
        // Increment the headsRolls counter
        headRolls++;
    
    } else {
        // Display image and the message is tails
        document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg';
        document.getElementById('message').textContent = 'You Fliped Tails!';

         // Increment the headsRolls counter
         tailsRolls++;

    }

         // Update the scorboard
        // TODO: Calculate the total number of rolls/flips

        let totalRolls = headRolls + tailsRolls;
        

        // Make variables to track the percentages of heads and tails

        let perecentHeads = 0;
        let percentTails = 0;
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)

        if (totalRolls > 0){
            perecentHeads = Math.round((headRolls / totalRolls) * 100);
            percentTails = Math.round((tailsRolls / totalRolls) * 100);
        }
        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headRolls;
        document.getElementById('heads-percent').textContent = perecentHeads + '%';
        document.getElementById('tails').textContent = tailsRolls;
        document.getElementById('tails-percent').textContent = percentTails + '%';


    });

  

    // Clear Button Click Handler  
    
    document.getElementById('clear').addEventListener('click', () => {
        // TODO: Reset global variables to 0
  
    headRolls = 0;
    tailsRolls = 0;
    document.getElementById('message').textContent = 'Let\'s Get Rolling';

           // Update the scorboard
        // TODO: Calculate the total number of rolls/flips

        let totalRolls = headRolls + tailsRolls;
        

        // Make variables to track the percentages of heads and tails

        let perecentHeads = 0;
        let percentTails = 0;
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)

        if (totalRolls > 0){
            perecentHeads = Math.round((headRolls / totalRolls) * 100);
            percentTails = Math.round((tailsRolls / totalRolls) * 100);
        }
        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headRolls;
        document.getElementById('heads-percent').textContent = perecentHeads + '%';
        document.getElementById('tails').textContent = tailsRolls;
        document.getElementById('tails-percent').textContent = percentTails + '%';

         // TODO: Update the scoreboard (same logic as in flip button click handler)

         

    });

       

})

function updateScoreboard(){

    //Update the scoreboard
    //TODO: Calculate the total number o frolls/flips
    let totalRolls = headRolls + tailsRolls;


    // Make variables to track the percentages of heads and tails

    let perecentHeads = 0;
    let percentTails = 0;
    // TODO: Use the calculated total to calculate the percentages
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)

    if (totalRolls > 0){
        perecentHeads = Math.round((headRolls / totalRolls) * 100);
        percentTails = Math.round((tailsRolls / totalRolls) * 100);
    }
    // TODO: Update the display of each table cell
    document.getElementById('heads').textContent = headRolls;
    document.getElementById('heads-percent').textContent = perecentHeads + '%';
    document.getElementById('tails').textContent = tailsRolls;
    document.getElementById('tails-percent').textContent = percentTails + '%';

}
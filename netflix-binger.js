;(function() {
  'use strict';
  
  let interval = 500;
  
  function findAutoplayInterrupter() {
    return document.getElementsByClassName('player-autoplay-interrupter');
  }
  
  function findContinuePlayingBtn() {
    return document.getElementsByClassName('continue-playing');
  }

  setInterval(() => {
    let interrupter = findAutoplayInterrupter();
    
    if(interrupter.length) {
      let continueBtn = findContinuePlayingBtn();
      
      if(continueBtn.length) continueBtn[0].click();
    }
  }, interval);
  
}());

(function(window){	
    
    var byeSpeaker = {};		
    
    byeSpeaker.speakWord = "Good Bye";	
    
    byeSpeaker.speak=function speak(names) { 	
        
     console.log(speakWord + " " +names);	
    }
    
  window.byeSpeaker = byeSpeaker;
}) (window);


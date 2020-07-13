(function (window) {	
    
    var helloSpeaker = {};	
    
    helloSpeaker.speakWord ="Hello";	
    
    helloSpeaker.speak= function speak(names){ 
        
        console.log(speakWord + " " + names);
    }
    
    window.helloSpeaker = helloSpeaker;

}) (window);


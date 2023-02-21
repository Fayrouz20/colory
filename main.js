
  let myButton = document.getElementById('button');

  let i = 0;

  let mynew = 'One language sets you in a corridor for life. Two languages open every door along the way';


  myButton.onclick = function(){

  	'use strict';

  	var typewriter = setInterval(function(){

  		
  		if(i < mynew.length){

  		  let myText = document.getElementById('text').textContent += mynew[i++];
  		}
  	
  	
  		

  	},200);

  }

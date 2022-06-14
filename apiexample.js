var animalDiv;
var visit;
var visit2;
var mammal;
var bird;
var reptile;
var frog;
var fish;
var day;
var night;
var dusk;
var score = 0;
var scorebox;
var btnClrChange;
 var countdown;
function timer () {
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").innerHTML = " Times Up!<br>Score: "+ score + "<br>" +"<button> Restart </button>";
}
function restart() {
	location.reload();
}
// initialize variables after page loads
window.onload = function() {

  countdown = document.getElementById("count");
  var timerforpage = setInterval(timerforpager,1000);
  
	document.getElementById("visit").addEventListener('click', fetchAnimal);
  document.getElementById("visit2").addEventListener('click', fetchAnimal);
	
	btnClrChange = document.querySelectorAll(".clr");
	animalDiv = document.getElementById("animal");
	mammal = document.getElementById("mammal").value;
	bird = document.getElementById("bird").value;
	reptile = document.getElementById("reptile").value;
	frog = document.getElementById("frog").value;
	fish = document.getElementById("fish").value;
	day = document.getElementById("day").value;
	night = document.getElementById("night").value;
	dusk = document.getElementById("dusk").value;
	scorebox = document.getElementById("scorebox");
	visit = document.getElementById("Visit");
  visit2 = document.getElementById("Visit2")
	   document.getElementById("lightbox").style.display = "none";
  
  //fetchAnimal();
  
  setTimeout(timer, 31000);
  
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}    

}; // window.onload

// get animal from api
function fetchAnimal() {
	
	
	
	for (let i = 0; i < btnClrChange.length; i++) {
		
		btnClrChange[i].style.color = "black";
		btnClrChange[i].style.boxShadow = "none";
		btnClrChange[i].disabled = false;
	}
	
	fetch('https://zoo-animal-api.herokuapp.com/animals/rand/1?'+ Math.random())
		.then(response => response.json())
		.then(data => show(data));
	
		
} // fetchAnimal

function show(data) {
	console.log(data);
	animalDiv.innerHTML = "<h2>" + data[0].name + "</h2>" +
		"<p> Latin Name: " + data[0].latin_name + "<br> Life Span: " + data[0].lifespan + " yrs<p>" + "<img src='" + data[0].image_link + "' alt=animal image'>";
		
		
	document.getElementById("mammal").onclick = function() {
		if (data[0].animal_type == mammal) {
			
			document.getElementById("mammal").style.color = "green";
			document.getElementById("mammal").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			
			document.getElementById("mammal").style.color = "red";
			document.getElementById("mammal").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //mammal markit

	document.getElementById("bird").onclick = function() {
		if (data[0].animal_type == bird) {
			
			document.getElementById("bird").style.color = "green";
			document.getElementById("bird").style.boxShadow = "1px 0px 10px green";
			score++;
		} else {
			
			document.getElementById("bird").style.color = "red";
			document.getElementById("bird").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //bird markit

	document.getElementById("reptile").onclick = function() {
		if (data[0].animal_type == reptile) {
			
			document.getElementById("reptile").style.color = "green";
			document.getElementById("reptile").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			
			document.getElementById("reptile").style.color = "red";
			document.getElementById("reptile").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //Reptile markit

	document.getElementById("frog").onclick = function() {
		if (data[0].animal_type == frog) {
			
			document.getElementById("frog").style.color = "green";
			document.getElementById("frog").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			
			document.getElementById("frog").style.color = "red";
			document.getElementById("frog").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //Frog markit

	document.getElementById("fish").onclick = function() {
		if (data[0].animal_type == fish) {
		
			document.getElementById("fish").style.color = "green";
			document.getElementById("fish").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			
			document.getElementById("fish").style.color = "red";
			document.getElementById("fish").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //Fish markit


	document.getElementById("day").onclick = function() {
		if (data[0].active_time == day) {
			
			document.getElementById("day").style.color = "green";
			document.getElementById("day").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
		
			document.getElementById("day").style.color = "red";
			document.getElementById("day").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //day markit	

	document.getElementById("night").onclick = function() {
		if (data[0].active_time == night) {
			
			document.getElementById("night").style.color = "green";
			document.getElementById("night").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			
			document.getElementById("night").style.color = "red";
			document.getElementById("night").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //night markit

	document.getElementById("dusk").onclick = function() {
		if (data[0].active_time == dusk) {
			
			document.getElementById("dusk").style.color = "green";
			document.getElementById("dusk").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			
			document.getElementById("dusk").style.color = "red";
			document.getElementById("dusk").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //dusk markit

} //showData



function printScore() {

	scorebox.innerHTML = "score: " + score + " ";

}

// // change the animal displayed
// function changeAnimal(data) {
// console.log(data);
// animalDiv.innerHTML = 
// "<h2>" + data[0].name + "</h2>"+
// "<p> Latin Name: " + data[0].latin_name + "<br> Life Span: "+ data[0].lifespan + " yrs<p>"
// + "<img src='" + data[0].image_link + "'>";


// } // changeAnimal

// function ma(data) {
// // if (data.animal_type == mammal) {
// // console.log("correct");
// // }
// // else {
// // console.log("wrong");
// // }
// console.log(data);
// }

function timerforpager() {
    countdown.value--;
    if(countdown.value == 0) {
      clearInterval();
    }
}

window.addEventListener('offline', () => {
	
	   document.getElementById("lightbox").style.display = "block";
	   document.getElementById("message").innerText= "Device needs internet to function.";
	
});
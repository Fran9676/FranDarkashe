function switchi() {
	
	if(!(divList[i+1] === undefined))
	{
		console.log(divList);
		divList[i].classList.toggle("main");
		divList[i].classList.toggle(divList[i+1].classList.value);
		divList[i+1].classList.toggle(divList[i+1].classList.value);
		divList[i+1].classList.toggle("main");
		//divList[i].parentNode.appendChild(divList[i]);
		//divList[i+1].parentNode.insertBefore(divList[i+1], divList[i].parentNode.firstChild); //Insert (divList[i+1] before firstChild
		i=i+1;
	} else {
		 console.log(divList[0].parentNode);
		 divList[i].classList.toggle("main");
		 divList[i].classList.toggle(divList[0].classList.value);
		 divList[0].classList.toggle(divList[0].classList.value);
		 divList[0].classList.toggle("main");
 		 //divList[i].parentNode.appendChild(divList[i]);
		 i=0;
	}
	order();
}

function controlledSwitch(e){

	console.log(divList);
	divList[i].classList.toggle("main");
	divList[i].classList.toggle(e.target.parentNode.classList.value);
	e.target.parentNode.classList.toggle(e.target.parentNode.classList.value);
	e.target.parentNode.classList.toggle("main");
	order();
	i = Number(e.target.parentNode.id); // Number() makes a string into an int
}

function order() {
	let x = 0;
	let y = 0;
	let calc;
	let yCalc;
	divList.forEach(e => {
		if(x==5){
			x=0;
			y=y+1;
		}
		if(!(e.classList == "main")){
			calc = 20*(x);
			calc = calc+"%"
			yCalc = 100 + (35*y);
			yCalc = yCalc+"%";
			e.style.left = calc;
			e.style.top = yCalc;
		} else {
			e.style.top = "10%";
			e.style.left = "10%";
		}
		x=x+1;
	});
}

function set() {
	divList[0].classList.toggle("main");
	divList[0].classList.toggle(divList[1].classList.value);
	divList[1].classList.toggle(divList[1].classList.value);
	divList[1].classList.toggle("main");
	order();
}

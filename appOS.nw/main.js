var gui = require('nw.gui');
var win = gui.Window.get();

//win.showDevTools();

function m (){
	win.minimize();
}

function mx (){
	win.maximize();
}

function c (){
	document.getElementsByClassName("mac")[0].style.display = "none";
	document.getElementsByClassName("windows")[0].style.display = "none";
	//loadScene();
	timer();
	setTimeout(function(){
		timer();
		setTimeout(function(){
			timer();
			setTimeout(function(){
				win.close();
			}, 1000);			
		}, 200);		
	}, 200);
}

function chge(){
	var ms = document.getElementsByClassName("mac")[0].style.display;
	if(ms == "block" || ms == ""){
		document.getElementsByClassName("mac")[0].style.display = "none";
		document.getElementsByClassName("windows")[0].style.display = "block";
	}else{
		document.getElementsByClassName("windows")[0].style.display = "none";
		document.getElementsByClassName("mac")[0].style.display = "block";
	}

}
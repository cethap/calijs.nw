(function() {

// Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

// Get the current window
var win = gui.Window.get();

win.maximize();
//win.showDevTools();
//location.href="app://x/";

/*var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);

// Create table and insert one line
db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS foo (id unique, text)');
  tx.executeSql('INSERT INTO foo (id, text) VALUES (3, "synergies")');
  tx.executeSql('INSERT INTO foo (id, text) VALUES (4, "luyao")');
}); 

// Query out the data
db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM foo', [], function (tx, results) {
    var len = results.rows.length, i;
    for (i = 0; i < len; i++) {
      alert(results.rows.item(i).text);
    }
  });
});*/



//alert("ssllll");


}).call(this);

function init(){
/*    if(navigator.webkitGetUserMedia){
        navigator.webkitGetUserMedia({video:true}, onSuccess, onFail);
    }
    else{
        alert('webRTC not available');
    }*/
}

function onSuccess(stream){
    document.getElementById('camFeed').src = webkitURL.createObjectURL(stream);
}

function onFail(){
    alert('could not connect stream');
}

function takePhoto(){
    var c = document.getElementById('photo');
    var v = document.getElementById('camFeed');
    c.getContext('2d').drawImage(v, 0, 0, 320, 240);
}
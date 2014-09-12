function rumcoke()
{
    $.get('http://192.168.1.100:9000/drinks/rumcoke',function(data){
	    console.log(data);
	});
}

function gintonic()
{
    $.get('http://192.168.1.100:9000/drinks/gintonic',function(data){
	    console.log(data);
	});
}

function drinks( valve, time)
{
    var exec = require('child_process').exec;
    exec('drink_control.sh ' + valve + ' ' + time);
}

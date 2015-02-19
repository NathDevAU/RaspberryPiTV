var host = document.location.origin;
function rumcoke()
{
    $.get(host + '/drinks/rumcoke',function(data){
	    console.log(data);
	});
}

function gintonic()
{
    $.get(host + '/drinks/gintonic',function(data){
	    console.log(data);
	});
}

function drinks( valve, time)
{
    var exec = require('child_process').exec;
    exec('drink_control.sh ' + valve + ' ' + time);
}

function kill()
{
    $.get(host + '/drinks/kill',function(data){
	    console.log(data);
	});
}

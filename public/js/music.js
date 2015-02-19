var host = 'http://192.168.1.9:9000';
function player_pause()
{
    $.get(host + '/pandora/pause',function(data){
	    console.log(data);
	});
}

function player_quit()
{
    $.get(host + '/pandora/quit',function(data){
	    console.log(data);
	});
}

function player_play()
{
    $.get(host + '/pandora/play',function(data){
	    console.log(data);
	});
}

function player_next()
{
    $.get(host + '/pandora/next',function(data){
	    console.log(data);
	});
}

function power()
{
    $.get(host + '/pandora/power',function(data){
	    console.log(data);
	});
}

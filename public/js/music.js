function player_pause()
{
    $.get('http://192.168.1.76:9000/pandora/pause',function(data){
	    console.log(data);
	});
}

function player_quit()
{
    $.get('http://192.168.1.76:9000/pandora/quit',function(data){
	    console.log(data);
	});
}

function player_play()
{
    $.get('http://192.168.1.76:9000/pandora/play',function(data){
	    console.log(data);
	});
}

function player_next()
{
    $.get('http://192.168.1.76:9000/pandora/next',function(data){
	    console.log(data);
	});
}

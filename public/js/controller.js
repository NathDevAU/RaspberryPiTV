function player_pause()
{
    $.get('http://192.168.1.100:9000/omx/pause',function(data){
	    console.log(data);
	});
}

function player_quit()
{
    $.get('http://192.168.1.100:9000/omx/quit',function(data){
	    console.log(data);
	});
}

function player_kill()
{
    $.get('http://192.168.1.100:9000/omx/kill',function(data){
	    console.log(data);
	});
}

function player_play()
{
    $.get('http://192.168.1.100:9000/omx/play',function(data){
	    console.log(data);
	});
}

function player_back15()
{
    $.get('http://192.168.1.100:9000/omx/back15',function(data){
	    console.log(data);
	});
}

function player_forward15()
{
    $.get('http://192.168.1.100:9000/omx/forward15',function(data){
	    console.log(data);
	});
}

function player_back60()
{
    $.get('http://192.168.1.100:9000/omx/back60',function(data){
	    console.log(data);
	});
}

function player_forward60()
{
    $.get('http://192.168.1.100:9000/omx/forward60',function(data){
	    console.log(data);
	});
}

function player_volup()
{
    $.get('http://192.168.1.100:9000/omx/volup',function(data){
	    console.log(data);
	});
}

function player_voldown()
{
    $.get('http://192.168.1.100:9000/omx/voldown',function(data){
	    console.log(data);
	});
}


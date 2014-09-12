var host = document.location.origin;
function player_pause()
{
    $.get(host + '/omx/pause',function(data){
	    console.log(data);
	});
}

function player_quit()
{
    $.get(host + '/omx/quit',function(data){
	    console.log(data);
	});
}

function player_kill()
{
    $.get(host + '/omx/kill',function(data){
	    console.log(data);
	});
}

function player_play()
{
    $.get(host + '/omx/play',function(data){
	    console.log(data);
	});
}

function player_back15()
{
    $.get(host + '/omx/back15',function(data){
	    console.log(data);
	});
}

function player_forward15()
{
    $.get(host + '/omx/forward15',function(data){
	    console.log(data);
	});
}

function player_back60()
{
    $.get(host + '/omx/back60',function(data){
	    console.log(data);
	});
}

function player_forward60()
{
    $.get(host + '/omx/forward60',function(data){
	    console.log(data);
	});
}

function player_volup()
{
    $.get(host + '/omx/volup',function(data){
	    console.log(data);
	});
}

function player_voldown()
{
    $.get(host + '/omx/voldown',function(data){
	    console.log(data);
	});
}

function player_update()
{
    $.get(host + '/omx/update',function(data){
	    console.log(data);
	});
}

function player_restart()
{
    $.get(host + '/omx/restart',function(data){
	    console.log(data);
	});
}


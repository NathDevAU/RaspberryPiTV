var host = document.location.origin;
function kitchen_on()
{
    $.get('http://192.168.1.9:9000/lights/kitchen_on',function(data){
	    console.log(data);
	});
}

function kitchen_off()
{
    $.get('http://192.168.1.9:9000/lights/kitchen_off',function(data){
	    console.log(data);
	});
}

function front_outside_on()
{
    $.get('http://192.168.1.9:9000/lights/front_outside_on',function(data){
	    console.log(data);
	});
}

function front_outside_off()
{
    $.get('http://192.168.1.9:9000/lights/front_outside_off',function(data){
	    console.log(data);
	});
}

function back_outside_on()
{
    $.get('http://192.168.1.9:9000/lights/back_outside_on',function(data){
	    console.log(data);
	});
}

function back_outside_off()
{
    $.get('http://192.168.1.9:9000/lights/back_outside_off',function(data){
	    console.log(data);
	});
}

function down_hall_on()
{
    $.get('http://192.168.1.9:9000/lights/down_hall_on',function(data){
	    console.log(data);
	});
}

function down_hall_off()
{
    $.get('http://192.168.1.9:9000/lights/down_hall_off',function(data){
	    console.log(data);
	});
}

function up_hall_on()
{
    $.get('http://192.168.1.9:9000/lights/up_hall_on',function(data){
	    console.log(data);
	});
}

function up_hall_off()
{
    $.get('http://192.168.1.9:9000/lights/up_hall_off',function(data){
	    console.log(data);
	});
}

function bedroom_on()
{
    $.get('http://192.168.1.9:9000/lights/bedroom_on',function(data){
	    console.log(data);
	});
}

function bedroom_off()
{
    $.get('http://192.168.1.9:9000/lights/bedroom_off',function(data){
	    console.log(data);
	});
}

function fan_on()
{
    $.get('http://192.168.1.9:9000/lights/fan_on',function(data){
	    console.log(data);
	});
}

function fan_off()
{
    $.get('http://192.168.1.9:9000/lights/fan_off',function(data){
	    console.log(data);
	});
}

function party_on()
{
    $.get('http://192.168.1.9:9000/lights/party_on',function(data){
	    console.log(data);
	});
}

function party_off()
{
    $.get('http://192.168.1.9:9000/lights/party_off',function(data){
	    console.log(data);
	});
}

function bonus_on()
{
    $.get('http://192.168.1.9:9000/lights/bonus_on',function(data){
	    console.log(data);
	});
}

function bonus_off()
{
    $.get('http://192.168.1.9:9000/lights/bonus_off',function(data){
	    console.log(data);
	});
}

function garage()
{
//$.get('http://192.168.1.9:9000/lights/garage',function(data){
//	    console.log(data);
//	});
    $.get(host + '/misc/garage',function(data){
	    console.log(data);
	});
}


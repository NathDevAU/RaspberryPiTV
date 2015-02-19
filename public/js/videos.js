var host = document.location.origin;
var socket = io.connect(host); 
var search;
    socket.on('connect', function(data){
        socket.emit('remote');

        //Youtube
        var Youtube = {
            getVideo: function(query, socket){
                socket.emit('video',{action:"getvideos", query:query});
            }
        }		

        $$(".r-container").swipeLeft(function(){
            socket.emit('controll',{action:"swipeLeft"}); 
        });

        $$(".r-container").swipeRight(function(){
            socket.emit('controll',{action:"swipeRight"}); 
        });
        $$(".r-header").tap(function(){
            socket.emit('controll',{action:"tap"}); 
            $(".app-body").fadeToggle("fast", function () {});	
        });
        $$(".app-body").tap(function(){
        });
        $(".search input").change(function() {
            search = $(this).val();
            Youtube.getVideo($(this).val(), socket);
        });

        socket.on("loading", function(data){
            var lines = data.output.split(/\r\n|\r|\n/);
            console.log("Lines: " + lines.length);
            //if(lines.length == 15) {
                //console.log("I got: " + [lines]);
                //Youtube.processResult(lines, socket);
                var rand = "Random";
                $("ul.video").html("");
                var jsonObj = [];
                    jsonObj = {
                        id:escape(rand),
                        title:rand};
                    
                    var template = $('#videoTpl').html(),
                        html = Mustache.to_html(template, jsonObj);
                        $('ul.video').append(html);	
                var i;
                var fin = lines.length - 1;
                for (i = 2; i < fin; ++i) {
                    var name = lines[i].split("/");
                    console.log(name[name.length-1]);
                    jsonObj = {
                        id:escape(lines[i]),
                        title:name[name.length-1]};
                    
                    var template = $('#videoTpl').html(),
                        html = Mustache.to_html(template, jsonObj);
                        $('ul.video').append(html);	
                }
                    $(".watch").on("click",function(){
                        var video_id = $(this).data('id');
                        socket.emit('video',{action:"local", video_id:video_id});
                        load_control();
                    });
            //}

        })  
    });

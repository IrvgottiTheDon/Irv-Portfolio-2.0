/*! formstone v1.1.3 [background.js] 2016-05-24 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(a){y.iterate.call(A,r)}function d(){A=a(v.base)}function e(b){b.youTubeGuid=0,b.$container=a('<div class="'+w.container+'"></div>').appendTo(this),b.thisClasses=[w.base,b.customClass],this.addClass(b.thisClasses.join(" "));var c=b.source;b.source=null,g(b,c,!0),d()}function f(a){a.$container.remove(),this.removeClass(a.thisClasses.join(" ")).off(x.namespace),d()}function g(b,c,d){if(c!==b.source){if(b.source=c,b.responsive=!1,b.isYouTube=!1,"object"===a.type(c)&&"string"===a.type(c.video)){var e=c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);e&&e.length>=1&&(b.isYouTube=!0,b.videoId=e[1])}var f=!b.isYouTube&&"object"===a.type(c)&&(c.hasOwnProperty("mp4")||c.hasOwnProperty("ogg")||c.hasOwnProperty("webm"));if(b.video=b.isYouTube||f,b.playing=!1,b.isYouTube)b.playerReady=!1,b.posterLoaded=!1,k(b,c,d);else if("object"===a.type(c)&&c.hasOwnProperty("poster"))j(b,c,d);else{var g=c;if("object"===a.type(c)){var l,m=[],n=[];for(l in c)c.hasOwnProperty(l)&&n.push(l);n.sort(y.sortAsc);for(l in n)n.hasOwnProperty(l)&&m.push({width:parseInt(n[l]),url:c[n[l]],mq:window.matchMedia("(min-width: "+parseInt(n[l])+"px)")});b.responsive=!0,b.sources=m,g=h(b)}i(b,g,!1,d)}}else b.$el.trigger(x.loaded)}function h(a){var c=a.source;if(a.responsive){c=a.sources[0].url;for(var d in a.sources)a.sources.hasOwnProperty(d)&&(b.support.nativeMatchMedia?a.sources[d].mq.matches&&(c=a.sources[d].url):a.sources[d].width<b.fallbackWidth&&(c=a.sources[d].url))}return c}function i(b,c,d,e){var f=[w.media,w.image,e!==!0?w.animated:""].join(" "),g=a('<div class="'+f+'" aria-hidden="true"><img alt=""></div>'),h=g.find("img"),i=c;h.one(x.load,function(){B&&g.addClass(w["native"]).css({backgroundImage:"url('"+i+"')"}),g.fsTransition({property:"opacity"},function(){d||l(b)}).css({opacity:1}),s(b),d&&!e||b.$el.trigger(x.loaded)}).attr("src",i),b.responsive&&g.addClass(w.responsive),b.$container.append(g),(h[0].complete||4===h[0].readyState)&&h.trigger(x.load),b.currentSource=i}function j(c,d,e){if(c.source&&c.source.poster&&(i(c,c.source.poster,!0,!0),e=!1),!b.isMobile){var f=[w.media,w.video,e!==!0?w.animated:""].join(" "),g='<div class="'+f+'" aria-hidden="true">';g+="<video",c.loop&&(g+=" loop"),c.mute&&(g+=" muted"),g+=">",c.source.webm&&(g+='<source src="'+c.source.webm+'" type="video/webm" />'),c.source.mp4&&(g+='<source src="'+c.source.mp4+'" type="video/mp4" />'),c.source.ogg&&(g+='<source src="'+c.source.ogg+'" type="video/ogg" />'),g+="</video>",g+="</div>";var h=a(g),j=h.find("video");j.one(x.loadedMetaData,function(a){h.fsTransition({property:"opacity"},function(){l(c)}).css({opacity:1}),s(c),c.$el.trigger(x.loaded),c.autoPlay&&o(c)}),c.$container.append(h)}}function k(c,d,e){if(!c.videoId){var f=d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);c.videoId=f[1]}if(c.posterLoaded||(c.source.poster||(c.source.poster="http://img.youtube.com/vi/"+c.videoId+"/0.jpg"),c.posterLoaded=!0,i(c,c.source.poster,!0,e),e=!1),!b.isMobile)if(a("script[src*='youtube.com/iframe_api']").length||a("head").append('<script src="//www.youtube.com/iframe_api"></script>'),C){var g=c.guid+"_"+c.youTubeGuid++,h=[w.media,w.embed,e!==!0?w.animated:""].join(" "),j='<div class="'+h+'" aria-hidden="true">';j+='<div id="'+g+'"></div>',j+="</div>";var k=a(j),m=a.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:g,loop:c.loop?1:0,autoplay:1,origin:z.location.protocol+"//"+z.location.host},c.youtubeOptions);m.autoplay=1,c.$container.append(k),c.player&&(c.oldPlayer=c.player,c.player=null),c.player=new z.YT.Player(g,{videoId:c.videoId,playerVars:m,events:{onReady:function(a){c.playerReady=!0,c.mute&&c.player.mute(),c.autoPlay||c.player.pauseVideo()},onStateChange:function(a){c.playing||a.data!==z.YT.PlayerState.PLAYING?c.loop&&c.playing&&a.data===z.YT.PlayerState.ENDED&&c.player.playVideo():(c.playing=!0,k.fsTransition({property:"opacity"},function(){l(c)}).css({opacity:1}),s(c),c.$el.trigger(x.loaded)),c.$el.find(v.embed).addClass(w.ready)},onPlaybackQualityChange:function(a){},onPlaybackRateChange:function(a){},onError:function(a){},onApiChange:function(a){}}}),s(c)}else D.push({data:c,source:d})}function l(a){var b=a.$container.find(v.media);b.length>=1&&(b.not(":last").remove(),a.oldPlayer=null)}function m(a){var b=a.$container.find(v.media);b.length>=1&&b.fsTransition({property:"opacity"},function(){b.remove(),delete a.source}).css({opacity:0})}function n(a){if(a.video&&a.playing){if(a.isYouTube)a.playerReady?a.player.pauseVideo():a.autoPlay=!1;else{var b=a.$container.find("video");b.length&&b[0].pause()}a.playing=!1}}function o(a){if(a.video&&!a.playing)if(a.isYouTube)a.playerReady?a.player.playVideo():a.autoPlay=!0;else{var b=a.$container.find("video");b.length&&b[0].play(),a.playing=!0}}function p(a){if(a.video)if(a.isYouTube&&a.playerReady)a.player.mute();else{var b=a.$container.find("video");b.length&&(b[0].muted=!0)}a.mute=!0}function q(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.unMute();else{var b=a.$container.find("video");b.length&&(b[0].muted=!1)}a.playing=!0}a.mute=!1}function r(a){if(a.responsive){var b=h(a);b!==a.currentSource?i(a,b,!1,!0):s(a)}else s(a)}function s(a){for(var b=a.$container.find(v.media),c=0,d=b.length;d>c;c++){var e=b.eq(c),f=a.isYouTube?"iframe":e.find("video").length?"video":"img",g=e.find(f);if(g.length&&("img"!==f||!B)){var h=a.$el.outerWidth(),i=a.$el.outerHeight(),j=t(a,g);a.width=j.width,a.height=j.height,a.left=0,a.top=0;var k=a.isYouTube?a.embedRatio:a.width/a.height;a.height=i,a.width=a.height*k,a.width<h&&(a.width=h,a.height=a.width/k),a.left=-(a.width-h)/2,a.top=-(a.height-i)/2,e.css({height:a.height,width:a.width,left:a.left,top:a.top})}}}function t(b,c){if(b.isYouTube)return{height:500,width:500/b.embedRatio};if(c.is("img")){var d=c[0];if("undefined"!==a.type(d.naturalHeight))return{height:d.naturalHeight,width:d.naturalWidth};var e=new Image;return e.src=d.src,{height:e.height,width:e.width}}return{height:c[0].videoHeight,width:c[0].videoWidth}}var u=b.Plugin("background",{widget:!0,defaults:{autoPlay:!0,customClass:"",embedRatio:1.777777,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:e,_destruct:f,_resize:c,play:o,pause:n,mute:p,unmute:q,resize:s,load:g,unload:m}}),v=u.classes,w=v.raw,x=u.events,y=u.functions,z=b.window,A=[],B="backgroundSize"in b.document.documentElement.style,C=!1,D=[];z.onYouTubeIframeAPIReady=function(){C=!0;for(var a in D)D.hasOwnProperty(a)&&k(D[a].data,D[a].source);D=[]}});
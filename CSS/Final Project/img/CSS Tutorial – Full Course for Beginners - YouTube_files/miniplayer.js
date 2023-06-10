(function(g){var window=this;'use strict';var Ghb=function(a,b){g.W.call(this,{G:"button",La:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{G:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{G:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{G:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{G:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.I=a;this.Ta("click",this.onClick,this);this.updateValue("title",g.xT(a,"Expandir","i"));this.update({"data-title-no-tooltip":"Expandir"});g.ob(this,g.rT(b.Fc(),this.element))},Hhb=function(a){g.W.call(this,{G:"div",
S:"ytp-miniplayer-ui"});this.qg=!1;this.player=a;this.T(a,"minimized",this.di);this.T(a,"onStateChange",this.GP)},Ihb=function(a){g.aU.call(this,a);
this.u=new g.MJ(this);this.j=new Hhb(this.player);this.j.hide();g.$S(this.player,this.j.element,4);a.Uf()&&(this.load(),g.eq(a.getRootNode(),"ytp-player-minimized",!0))};
g.x(Ghb,g.W);Ghb.prototype.onClick=function(){this.I.Qa("onExpandMiniplayer")};g.x(Hhb,g.W);g.k=Hhb.prototype;
g.k.GM=function(){this.tooltip=new g.wW(this.player,this);g.I(this,this.tooltip);g.$S(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Vc=new g.DU(this.player);g.I(this,this.Vc);this.bk=new g.W({G:"div",S:"ytp-miniplayer-scrim"});g.I(this,this.bk);this.bk.Ha(this.element);this.T(this.bk.element,"click",this.oH);var a=new g.W({G:"button",La:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Cerrar"},X:[g.jR()]});g.I(this,a);a.Ha(this.bk.element);this.T(a.element,"click",this.ip);
a=new Ghb(this.player,this);g.I(this,a);a.Ha(this.bk.element);this.Ru=new g.W({G:"div",S:"ytp-miniplayer-controls"});g.I(this,this.Ru);this.Ru.Ha(this.bk.element);this.T(this.Ru.element,"click",this.oH);var b=new g.W({G:"div",S:"ytp-miniplayer-button-container"});g.I(this,b);b.Ha(this.Ru.element);a=new g.W({G:"div",S:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Ha(this.Ru.element);var c=new g.W({G:"div",S:"ytp-miniplayer-button-container"});g.I(this,c);c.Ha(this.Ru.element);this.cX=new g.IV(this.player,
this,!1);g.I(this,this.cX);this.cX.Ha(b.element);b=new g.HV(this.player,this);g.I(this,b);b.Ha(a.element);this.nextButton=new g.IV(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Ha(c.element);this.wj=new g.pW(this.player,this);g.I(this,this.wj);this.wj.Ha(this.bk.element);this.Mc=new g.NV(this.player,this);g.I(this,this.Mc);g.$S(this.player,this.Mc.element,4);this.YG=new g.W({G:"div",S:"ytp-miniplayer-buttons"});g.I(this,this.YG);g.$S(this.player,this.YG.element,4);a=new g.W({G:"button",
La:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Cerrar"},X:[g.jR()]});g.I(this,a);a.Ha(this.YG.element);this.T(a.element,"click",this.ip);a=new g.W({G:"button",La:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Cerrar"},X:[g.eDa()]});g.I(this,a);a.Ha(this.YG.element);this.T(a.element,"click",this.b7);this.T(this.player,"presentingplayerstatechange",this.Hd);this.T(this.player,"appresize",this.Hb);this.T(this.player,"fullscreentoggled",this.Hb);this.Hb()};
g.k.show=function(){this.uf=new g.Rp(this.Rv,null,this);this.uf.start();this.qg||(this.GM(),this.qg=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Mc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.uf&&(this.uf.dispose(),this.uf=void 0);g.W.prototype.hide.call(this);this.player.Uf()||(this.qg&&this.Mc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.uf&&(this.uf.dispose(),this.uf=void 0);g.W.prototype.va.call(this)};
g.k.ip=function(){this.player.stopVideo();this.player.Qa("onCloseMiniplayer")};
g.k.b7=function(){this.player.playVideo()};
g.k.oH=function(a){if(a.target===this.bk.element||a.target===this.Ru.element)g.kQ(this.player.Ib())?this.player.pauseVideo():this.player.playVideo()};
g.k.di=function(){g.eq(this.player.getRootNode(),"ytp-player-minimized",this.player.Uf())};
g.k.Xe=function(){this.Mc.Bc();this.wj.Bc()};
g.k.Rv=function(){this.Xe();this.uf&&this.uf.start()};
g.k.Hd=function(a){g.BP(a.state,32)&&this.tooltip.hide()};
g.k.Hb=function(){g.ZV(this.Mc,0,this.player.ob().getPlayerSize().width,!1);g.OV(this.Mc)};
g.k.GP=function(a){this.player.Uf()&&(0===a?this.hide():this.show())};
g.k.Fc=function(){return this.tooltip};
g.k.Dg=function(){return!1};
g.k.eh=function(){return!1};
g.k.ac=function(){return!1};
g.k.Xl=function(){return!1};
g.k.lI=function(){};
g.k.Rp=function(){};
g.k.vy=function(){};
g.k.Vm=function(){return null};
g.k.UF=function(){return null};
g.k.YL=function(){return new g.ue(0,0)};
g.k.Gk=function(){return new g.Zm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.dw=function(a,b,c,d,e){var f=0,h=d=0,l=g.nn(a);if(b){c=g.$p(b,"ytp-prev-button")||g.$p(b,"ytp-next-button");var m=g.$p(b,"ytp-play-button"),n=g.$p(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.ln(b,this.element),h=b.x,f=b.y-12):n&&(h=g.$p(b,"ytp-miniplayer-button-top-left"),f=g.ln(b,this.element),b=g.nn(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.ob().getPlayerSize().width;e=f+(e||0);l=g.oe(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.xp=function(){};
g.k.Ql=function(){return!1};
g.k.WD=function(){};
g.k.Rz=function(){};
g.k.Zq=function(){};
g.k.Yq=function(){};
g.k.WA=function(){};
g.k.us=function(){};
g.k.GD=function(){};g.x(Ihb,g.aU);g.k=Ihb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.eq(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.aU.prototype.create.call(this);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.dl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.$T("miniplayer",Ihb);})(_yt_player);

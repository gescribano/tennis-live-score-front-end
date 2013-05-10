this["JST"] = this["JST"] || {};

this["JST"]["app/templates/date-selector.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<label>Results For</label>\n<div class="selector">\n  <div id="date-picker">\n    <input type="text" readonly="readonly" value=""></input>\n  </div>\n</div>\n';
}
return __p;
};

this["JST"]["app/templates/main-layout.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h1>Live Scores <span>&nbsp;</span></h1>\n\n<div id="messages"></div>\n\n<div class="filters clearfix">\n\n  <div id="date-selector" class="filter left clearfix"></div>\n\n  <div id="tournament-selector" class="filter right clearfix"></div>\n\n</div>\n\n<div id="tournament-list"></div>\n\n\n';
}
return __p;
};

this["JST"]["app/templates/match-item-header.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<span class="round">'+
( model.get('round') )+
'<!-- <span class="sep">::</span> Court Name <span class="sep">::</span> Match # --></span>\n<a class="head-to-head" href="'+
( model.get('head_to_head_url') )+
'"><span class="list">HEAD TO HEAD</span><span class="boxed">H2H</span></a>\n';
 
switch( model.get('status') ){
  case 'Not started': 
    
;__p+='<span class="status upcoming">UPCOMING</span>';

    break;
  case 'Postponed':
    
;__p+='<span class="status finished">POSTPONED</span>';

    break;
  case 'Finished':
    
;__p+='<span class="status finished">FINISHED ('+
( model.get('duration') )+
')</span>';

    break;
  case 'In progress':
    
;__p+='<span class="status in-progress">IN PROGRESS</span>';

    break;
  case 'Cancelled':
    
;__p+='<span class="status finished">CANCELLED</span>';

    break;
  default:
    
;__p+='<span class="status finished">'+
( model.get('status') )+
'</span>';

}

;__p+='';
}
return __p;
};

this["JST"]["app/templates/match-item.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="header clearfix"></div>\n\n<div class="players"></div>\n';
}
return __p;
};

this["JST"]["app/templates/messages.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
 if ( message.error ){ 
;__p+='\n<p class="error">'+
( message.text )+
'</p>\n';
 } else { 
;__p+='\n';
 } 
;__p+='';
}
return __p;
};

this["JST"]["app/templates/player-item.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="player clearfix '+
_.escape( model.get('is_serving')?'serving':'' )+
' '+
_.escape( model.get('is_winner')?'winner':'' )+
' ">\n  <span class="name-icons">\n    <span class="name">\n      ';
 if ( model.get('country') != '' ){ 
;__p+='\n        <span class="flag flags-'+
_.escape( model.get('country').toLowerCase() )+
'"></span>\n      ';
 } 
;__p+='\n      ';
 if ( model.get('url') != '' ){ 
;__p+='\n        <a href="'+
_.escape( model.get('url') )+
'" data-bypass="1" target="_blank">'+
( model.get('name') )+
'</a>\n      ';
 } else { 
;__p+='\n        '+
( model.get('name') )+
' \n      ';
 } 
;__p+='\n      <span> (9)</span>\n    </span>\n    <span class="icons">\n      ';
 if ( model.get('shirt') != '' ){ 
;__p+='\n      <a class="icon shirt" href="'+
_.escape( model.get('shirt') )+
'" data-bypass="1" target="_blank" ></a>\n      ';
 } 
;__p+='\n      ';
 if ( model.get('racket') != '' ){ 
;__p+='\n      <a class="icon racket" href="'+
_.escape( model.get('racket') )+
'" data-bypass="1" target="_blank"></a>\n      ';
 } 
;__p+='\n      ';
 if ( model.get('shoes') != '' ){ 
;__p+='\n      <a class="icon shoe" href="'+
_.escape( model.get('shoes') )+
'" data-bypass="1" target="_blank"></a>\n      ';
 } 
;__p+='\n    </span>\n  </span>\n  <span class="games">\n    ';
 _.each( model.get('set_games'), function( game ){
      
;__p+='\n      <span>'+
( game )+
'</span>\n      ';
      
    }) 
;__p+='\n  </span>\n</div>';
}
return __p;
};

this["JST"]["app/templates/tournament-item-info.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<span><strong>Location:</strong> '+
( model.get('location') )+
', '+
( model.get('country') )+
'</span>\n<span><strong>Court Type:</strong> '+
( model.get('surface') )+
'</span>';
}
return __p;
};

this["JST"]["app/templates/tournament-item-title.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+=''+
( model.get('name') )+
'';
}
return __p;
};

this["JST"]["app/templates/tournament-item.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="tournament expanded">\n  <h2>\n    <span class="title"></span>\n    <span class="expand"></span>\n    <span class="toggle clearfix">\n      <a href="#" class="list"></a>\n      <a href="#" class="boxes"></a>\n    </span>\n  </h2>\n  <div class="content">\n    \n    <div class="legend clearfix">\n      <span><strong>Legend:</strong></span>\n      <span class="icon on-serve">On Serve</span>\n      <span class="icon winner">Winner</span>\n      <span class="icon shirt">Shirts</span>\n      <span class="icon shoe">Shoes</span>\n      <span class="icon racket">Rackets</span>\n      <span class="status-icons">\n        <span class="status in-progress" title="In progress"></span>\n        <span class="status upcoming" title="Upcoming"></span>\n        <span class="status finished" title="Finished"></span>\n        <span>Match Status</span>\n      </span>\n    </div>\n    \n    <div class="info"></div>\n    \n    <div class="matches clearfix"></div>\n    \n  </div>\n</div>';
}
return __p;
};

this["JST"]["app/templates/tournament-selector.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<label>Tournament</label>\n<div class="selector">\n  <select id="tournament-select" data-placeholder="Choose a tournament..." >\n    <option></option>\n    ';
 tournaments.each(function(tour) { 
;__p+='\n      <option value="'+
( tour.get('slug') )+
'" '+
(  ( model.get("tournamentSlug") == tour.get('slug') )?'selected="selected"':''  )+
' >'+
( tour.get('name') )+
'</option>\n    ';
 }); 
;__p+=' \n  </select>\n</div>';
}
return __p;
};
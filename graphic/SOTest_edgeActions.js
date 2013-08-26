
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({load:"http://simonwidjaja.github.com/EdgeCommons/live/EdgeCommons-0.4.0.js",callback:function(){EC.setAdaptiveLayouts([320,750,960]);EC.applyAdaptiveLayout(sym,"adaptiveContainer");}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"window","resize",function(sym,e){if(EC){EC.applyAdaptiveLayout(sym,"adaptiveContainer");}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'layout960'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("layout960");
//Edge symbol end:'layout960'

//=========================================================

//Edge symbol: 'layout800'
(function(symbolName){})("layout750");
//Edge symbol end:'layout750'

//=========================================================

//Edge symbol: 'layout400'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.stop();sym.$('myLabel').html('At end');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",994,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();});
//Edge binding end
})("layout320");
//Edge symbol end:'layout320'

//=========================================================

//Edge symbol: 'mySymbol'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.stop();sym.$('myLabel').html('At 4');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",344,function(sym,e){sym.stop();sym.$('myLabel').html('At p0');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3750,function(sym,e){sym.stop();sym.$('myLabel').html('At 3');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();sym.$('myLabel').html('At 2');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$('myLabel').html('At 1');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.$('myLabel').html('At 1');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BackwardButton}","touchstart",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ForwardButton}","touchstart",function(sym,e){sym.play();});
//Edge binding end
})("mySymbol");
//Edge symbol end:'mySymbol'
})(jQuery,AdobeEdge,"EDGE-355550138");
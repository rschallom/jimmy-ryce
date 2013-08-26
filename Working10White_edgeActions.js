
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({load:"http://cdn.edgecommons.org/an/1.0.1/js/min/EdgeCommons.Core.js",callback:function(){EC.setAdaptiveLayouts([320,750,960]);EC.applyAdaptiveLayout(sym,"adaptiveContainer");}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"window","resize",function(sym,e){if(EC){EC.applyAdaptiveLayout(sym,"adaptiveContainer");}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'layout960'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("redButton").css("background-color","#721f1f");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri1}","touchstart",function(sym,e){sym.play("step1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri2}","touchstart",function(sym,e){sym.play("step2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri3}","touchstart",function(sym,e){sym.play("step3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri3}","click",function(sym,e){sym.play("step3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri2}","click",function(sym,e){sym.play("step2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri1}","click",function(sym,e){sym.play("step1");});
//Edge binding end
})("layout960");
//Edge symbol end:'layout960'

//=========================================================

//Edge symbol: 'mySymbol'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8748,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_triangleright}","touchstart",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_triangleright}","click",function(sym,e){sym.stop();sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_triangleleft}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_triangleleft}","touchstart",function(sym,e){sym.stop();sym.playReverse();});
//Edge binding end
})("mySymbol");
//Edge symbol end:'mySymbol'

//=========================================================

//=========================================================

//Edge symbol: 'layout960'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("redButton").css("background-color","#721f1f");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri1}","touchstart",function(sym,e){sym.play("step1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri2}","touchstart",function(sym,e){sym.play("step2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri3}","touchstart",function(sym,e){sym.play("step3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri1}","click",function(sym,e){sym.play("step1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri2}","click",function(sym,e){sym.play("step2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_redtri3}","click",function(sym,e){sym.play("step3");});
//Edge binding end
})("layout750");
//Edge symbol end:'layout750'

//=========================================================

//=========================================================

//=========================================================

//Edge symbol: 'layout960'
(function(symbolName){})("layout320");
//Edge symbol end:'layout320'
})(jQuery,AdobeEdge,"EDGE-355550138");
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"春燈01_atlas_1", frames: [[1119,0,751,1126],[0,0,1117,1145]]},
		{name:"春燈01_atlas_2", frames: [[0,0,751,1126],[753,0,751,1126]]},
		{name:"春燈01_atlas_3", frames: [[0,0,751,1126],[753,0,751,1126]]},
		{name:"春燈01_atlas_4", frames: [[0,1099,333,316],[406,1099,82,233],[0,0,751,1097],[335,1099,69,315],[0,1417,580,119],[406,1334,253,67]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_13 = function() {
	this.initialize(ss["春燈01_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["春燈01_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["春燈01_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["春燈01_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["春燈01_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["春燈01_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["春燈01_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["春燈01_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["春燈01_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["春燈01_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["春燈01_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["春燈01_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,158), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,41,116.5), null);


(lib.春 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_146 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(146).call(this.frame_146).wait(1));

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhnCQQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgig");
	var mask_graphics_2 = new cjs.Graphics().p("AjaC4QgzglgRg6QgRg5AYg6QAYg7AzgeQA0gdA/AJQAaAEAWAJQAXgvArgaQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA6gxApQgwAqg8ACQgpACgmgSQgPAdgcAXQgvAqg8ACIgHAAQg3AAgxgig");
	var mask_graphics_4 = new cjs.Graphics().p("AlDDXQgzglgRg6QgRg5AYg7QAYg6AzgeQA0gdA/AJQAaADAWAKQAXgvAsgaQAwgcA6AHIAMgMQAtglA8gKQA8gKA3AVQA2AVAmAwQAmAwAIA6QAIA5gYA4QgYA4guAjQgvAjg9AGQg8AHg1gYIgWgLQgYAJgbABQgoABgmgRQgPAdgcAXQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_graphics_6 = new cjs.Graphics().p("Am2DwQgzglgRg6QgRg5AYg7QAYg6AzgeQA0gdA/AJQAaADAWAKQAXgvAsgaQAwgcA7AHIAMgMQAtglA7gKQA6gKA1ATIAOgMQAtglA8gKQA8gKA3AVQA2AVAmAwQAmAwAIA6QAIA5gYA4QgYA4guAjQgvAjg9AGQg1AGgugRQgLAKgMAKQgvAjg9AGQg8AHg0gYIgWgLQgYAJgbABQgpABgmgRQgPAdgcAXQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_graphics_8 = new cjs.Graphics().p("AokEiQgzglgRg6QgRg5AYg7QAYg7AzgdQA0gdA/AJQAaADAWAKQAXgvAsgaQAwgcA7AHIAMgMQAtglA8gKQA6gKA0ATIAOgMQAtglA8gKQAkgGAiAFQASgeAbgWQAtglA8gKQA8gKA3AVQA2AVAmAwQAmAvAIA6QAIA6gYA5QgXA3gvAjQgvAjg9AGQgeAEgcgFQgWAjggAZQgvAjg9AGQg1AGgugRQgLAKgMAKQgvAjg8AGQg8AHg1gYIgWgLQgYAJgbABQgpABgmgRQgPAdgcAXQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_graphics_10 = new cjs.Graphics().p("AqhE7QgzglgRg6QgRg5AYg7QAYg7AzgeQA0gcA/AJQAaADAWAJQAXguAsgaQAwgcA7AHIAMgMQAtglA8gKQA6gKA1ATIAOgMQAtglA7gKQAkgGAiAFQATgeAagWQAtglA8gKQA8gKA3AVIALAEQAJgKAKgIQAtglA8gKQA9gKA2AVQA2AVAmAwQAmAwAIA6QAIA5gYA5QgYA3gvAjQguAjg9AGQg8AGg1gXQgNAOgQAMQgvAjg9AGQgeAEgcgFQgWAjggAZQgvAjg9AGQg1AGgtgRQgLAKgMAKQgvAjg9AGQg8AHg1gYIgWgLQgYAJgbABQgpABgmgRQgPAdgcAXQgwAqg8ACIgHAAQg3AAgxgig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:119.9069,y:269.1028}).wait(2).to({graphics:mask_graphics_2,x:131.4069,y:265.1028}).wait(2).to({graphics:mask_graphics_4,x:141.9139,y:262.0467}).wait(2).to({graphics:mask_graphics_6,x:153.4139,y:259.5493}).wait(2).to({graphics:mask_graphics_8,x:164.4155,y:254.5467}).wait(2).to({graphics:mask_graphics_10,x:176.9139,y:252.0493}).wait(137));

	// 筆畫01
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AoODAQgwgLhzgfQAmgaCJg0QCeg8A9geQAzgZCAgsQDNhICzghQAngKBTgIQBogLBJAFQDWAPifCKQg+A2hbAnQhkAnguAWQhQAZjnA0IjWAuIibAFQhMgGhdgVgAlLC5Qh/ACASADQAmAJBdACQBsADADgUIiFABgAolCyIgggFQAXAIAJgDgADTBjQgCAGAMgJg");
	this.shape.setTransform(181.3139,253.3444);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(147));

	// 遮色片02 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_15 = new cjs.Graphics().p("Ag7EEIAAoHIB3AAIAAIHg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AhyEEIAAoHIDlAAIAAIHg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AioEEIAAoHIFRAAIAAIHg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjfEEIAAoHIG/AAIAAIHg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AkWEEIAAoHIItAAIAAIHg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AlNEEIAAoHIKaAAIAAIHg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AmDEEIAAoHIMHAAIAAIHg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Am6EEIAAoHIN1AAIAAIHg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AnxEEIAAoHIPjAAIAAIHg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AonEEIAAoHIRPAAIAAIHg");
	var mask_1_graphics_25 = new cjs.Graphics().p("ApeEEIAAoHIS9AAIAAIHg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AqVEEIAAoHIUrAAIAAIHg");
	var mask_1_graphics_27 = new cjs.Graphics().p("ArMEEIAAoHIWYAAIAAIHg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AsCEEIAAoHIYFAAIAAIHg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AmYaBIAAoIIZzAAIAAIIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_1_graphics_15,x:83,y:306.95}).wait(1).to({graphics:mask_1_graphics_16,x:88.925,y:306.95}).wait(1).to({graphics:mask_1_graphics_17,x:94.85,y:306.95}).wait(1).to({graphics:mask_1_graphics_18,x:100.8,y:306.95}).wait(1).to({graphics:mask_1_graphics_19,x:106.725,y:306.95}).wait(1).to({graphics:mask_1_graphics_20,x:112.65,y:306.95}).wait(1).to({graphics:mask_1_graphics_21,x:118.575,y:306.95}).wait(1).to({graphics:mask_1_graphics_22,x:124.55,y:306.95}).wait(1).to({graphics:mask_1_graphics_23,x:130.475,y:306.95}).wait(1).to({graphics:mask_1_graphics_24,x:136.4,y:306.95}).wait(1).to({graphics:mask_1_graphics_25,x:142.325,y:306.95}).wait(1).to({graphics:mask_1_graphics_26,x:148.25,y:306.95}).wait(1).to({graphics:mask_1_graphics_27,x:154.2,y:306.95}).wait(1).to({graphics:mask_1_graphics_28,x:160.125,y:306.95}).wait(1).to({graphics:mask_1_graphics_29,x:124.3306,y:166.475}).wait(118));

	// 筆畫02
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(105.2,280.05,0.5,0.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(132));

	// 遮色片03 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_30 = new cjs.Graphics().p("AAjfaIAAufIC+AAIAAOfg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AjJHQIAAueIGTAAIAAOeg");
	var mask_2_graphics_32 = new cjs.Graphics().p("Ak0HQIAAueIJpAAIAAOeg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AmfHQIAAueIM/AAIAAOeg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AoLHQIAAueIQXAAIAAOeg");
	var mask_2_graphics_35 = new cjs.Graphics().p("Ap2HQIAAueITtAAIAAOeg");
	var mask_2_graphics_36 = new cjs.Graphics().p("ArhHQIAAueIXDAAIAAOeg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AtMHQIAAueIaaAAIAAOeg");
	var mask_2_graphics_38 = new cjs.Graphics().p("Au4HQIAAueIdxAAIAAOeg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AwjHQIAAueMAhHAAAIAAOeg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AyOHQIAAueMAkdAAAIAAOeg");
	var mask_2_graphics_41 = new cjs.Graphics().p("Az5HQIAAueMAn0AAAIAAOeg");
	var mask_2_graphics_42 = new cjs.Graphics().p("A1lHQIAAueMArLAAAIAAOeg");
	var mask_2_graphics_43 = new cjs.Graphics().p("A3QHQIAAueMAuhAAAIAAOeg");
	var mask_2_graphics_44 = new cjs.Graphics().p("A2SfaIAAufMAx3AAAIAAOfg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_2_graphics_30,x:22.5,y:200.9543}).wait(1).to({graphics:mask_2_graphics_31,x:46.775,y:355.55}).wait(1).to({graphics:mask_2_graphics_32,x:58.075,y:355.55}).wait(1).to({graphics:mask_2_graphics_33,x:69.35,y:355.55}).wait(1).to({graphics:mask_2_graphics_34,x:80.65,y:355.55}).wait(1).to({graphics:mask_2_graphics_35,x:91.925,y:355.55}).wait(1).to({graphics:mask_2_graphics_36,x:103.225,y:355.55}).wait(1).to({graphics:mask_2_graphics_37,x:114.5,y:355.55}).wait(1).to({graphics:mask_2_graphics_38,x:125.775,y:355.55}).wait(1).to({graphics:mask_2_graphics_39,x:137.075,y:355.55}).wait(1).to({graphics:mask_2_graphics_40,x:148.35,y:355.55}).wait(1).to({graphics:mask_2_graphics_41,x:159.65,y:355.55}).wait(1).to({graphics:mask_2_graphics_42,x:170.925,y:355.55}).wait(1).to({graphics:mask_2_graphics_43,x:182.225,y:355.55}).wait(1).to({graphics:mask_2_graphics_44,x:176.5497,y:200.9543}).wait(103));

	// 筆畫03
	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(51.15,314.5,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(117));

	// 遮色片04 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_60 = new cjs.Graphics().p("AgOC7QgkgDgfgPQgfgQgYgZQgZgagNggQgUgzAMg4QALg5AngmQAngnA5gMQA4gLAzAVQAyAUAhAwQAhAwABA3QABA0gbAtQgSAegcAWQgcAXgiAKQgbAIgbAAIgOgBg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AhjEYQg9gbgngyQgqg3gJhHQgHg3AOgyIgHgRQgVgzAMg4QAMg5AngnQAngnA5gLQA4gLAzAUQAyAVAhAwIAMAUIAVAJQBCAdAoA4QAoA4AGBHQAHBHgeA/QgdA+g8AoQg7AphFAFIgSAAQg1AAgzgXg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AANG5QhCgFg2gjQg2gjghg6Qggg7AAhAQgBgzAUgwQgKgLgJgMQgqg2gJhGQgIg4APgyIgIgRQgUgzAMg5QALg5AngmQAngnA5gMQA5gLAzAVQAxAUAhAwIANAVIAVAIQBCAeAnA4QAoA4AHBHQAFBBgXA3QAoApATA3QAWA/gKBAQgLBAgpA0QgoA1g7AaQgxAWg2AAIgWgBg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AAPI+Qg4gEgxgbQgxgbgiguQgjgugLg3QgKguAHgvQAHgwAZgqIgGgKQggg7AAhAQgBgzAUgvQgKgLgJgMQgqg2gJhHQgHg4AOgzIgIgQQgUgzAMg5QALg5AngmQAngnA5gMQA5gLAzAVQAxAUAhAwIANAVIAVAIQBCAeAnA4QAoA4AHBHQAGBAgXA5QAnAoATA4QAWA+gKBAQgIAugXAoQAWAmAKAuQAPBKgZBEQgUA1goApQgpAog0AUQgrAQgvAAIgUgBg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AhCLfQhNgNg7g5Qg7g4gQhMQgJgnAEgoQAIhNA0g/QAQgSAQgPQgVgkgIgoQgKguAHgvQAHgwAZgqIgGgKQggg6AAhAQgBgzAUgwQgKgLgJgMQgqg2gJhHQgHg4AOgzIgIgQQgUgzAMg5QALg5AngmQAngnA5gMQA5gLAzAVQAxAUAhAwIANAVIAVAIQBCAeAnA4QAoA4AHBHQAGBAgXA5QAnAoATA4QAWA/gKBAQgIAugXAnQAWAmAKAuQAPBKgZBEQgUA1goApIgRAPQAdAzAEBAQAEBSgoBCQgoBDhKAiQg2AZg2AAQgVAAgVgEg");
	var mask_3_graphics_65 = new cjs.Graphics().p("Ah4NvQg9gHg1gjQg1gkgeg1Qghg9AChIQABhJAlg6QAig1A4ghIgCgIQgIgnAEgoQAHhNA1g/QAPgSARgPQgVgjgJgpQgKguAHguQAIgwAZgqIgGgKQggg7gBhAQAAgzAUgwQgKgLgKgMQgqg2gJhHQgHg4APgyIgIgRQgVgzAMg5QAMg5AngmQAngnA5gMQA4gLAyAVQAzAUAhAwIAMAVIAVAIQBCAeAoA4QAoA4AGBHQAGBBgXA4QAoApATA3QAWA/gLBAQgHAugYAoQAXAmAJAuQAPBJgZBEQgTA1gpApIgQAPQAdAzADBAQAFBSgoBCQgiA5g7AhQAKAogEAsQgHBIgoA5QgoA4hCAdQgzAXg0AAQgQAAgPgCg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_3_graphics_60,x:171.8802,y:173.1829}).wait(1).to({graphics:mask_3_graphics_61,x:179.5371,y:184.7401}).wait(1).to({graphics:mask_3_graphics_62,x:182.2981,y:198.6552}).wait(1).to({graphics:mask_3_graphics_63,x:182.4597,y:211.892}).wait(1).to({graphics:mask_3_graphics_64,x:182.4597,y:228.2858}).wait(1).to({graphics:mask_3_graphics_65,x:176.9006,y:242.553}).wait(82));

	// 筆畫04
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332F1F").s().p("AkZeSQAMhLAuhMQA3hbBRg8QhvAchqgmQAzCRhrA6QiEgShGjvQg8jPABkzQACkiA1jYQA5jlBTgCQhCB7gZCKQA2ijBdicQAWAMAYAQQgOgFAcBdQAkBygWhdQFEiKC9gVQFIglB1DvQAfA/AsApQAuAqA4AOIghAEIArgBIgKgDQB6gPBSgTQAWgMASgMQBDgtjViQQhrhJichTQjlh6jsguQjcgqkTANQkJH7kdEZQmrGmmliJQgyAjhLhzQgfgugSgxQgTgzAEgbQAViGCYiNQBrhkCthhQBWgwDdhqQgNAHBZgiQkUBzjQCPQjwClhPCdQgTAnAHA+QAIA9AcA2QAeA6AoAXQAuAbAwgZIEpihQCdheBwhwQFKlMC8lAQiPAUjLBJQCTg8heASQEuhCAbgxQjnBVhDATQi1AwiDgcQgdgLglgQQhMggAWgQQBwBsDCglQBDgNBggiICXg3QkIBQiEgGQjWgKhvi+QA1AsBFgKQgkgGACgIQABgJAmgLQE6ABDIg1QFAhVA4jdQhtADh3gNQjHgVAHg7QB+BVCWgKQh6gUg/gZQhjgogyhMQAWgCCMABQBtABBAgLQDEggAaimQhxARiIgXQhJgNijgsQAigYBfgkICuhEQDbhbAHhSIgFkgQgFkUAEgKIgBgPQgFgIACgKQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQgCh2A+gEQCkgVB2EiQAuBuAaB9QAXB0gEBEQAngKBTgIQBngLBJAFQDVAOieCKQg6AyhQAlQhbAlgqASQhJAggrAlQg3AyggBRQBBgQBTAEQBXAFA4AaQBAAdgCAwQgCA4hdBJQg3ArhFAOQgTAEhiAHQhCAFgkAVQgzAdghBJQEZg/ErgUQE4gUESAfQDmAaBtAoQDWBNjLB9QheA6iTAEQhtACiygeQjIglhhgOQingZhqANQi7ALh4ASQjeAhgqBTQEHgqExAWQFGAYEjBaQFCBmDiCpQD9C9BuECQA8CNiHARQhrAOjzhAQhkgblBhlQjmhJg6gBQAYB0AJCeQALC0gOCkQgiGoiuCJQhUBEhhhgQgcgbgxg+Qgvg9gVgUQg7g4jTC0QhOBChIBMQhDBGgQAeQABgUADgVgAhJZHQhdAehhgTQBiAjBcgugAC0REQh6CKhyBKQAggLBagMQBigMArgMQCegrgyiLIAnj4QgvB4h/CRgAkfOMQgPD+gBBUQCYg8AygdQBug/AvhYIgFACQAOgNAAgSQisBChjgoQh0gxBVi6QAAAnBVgLQAsgFCRglQCKgjA/gFQBigIAVArQgdhtAhhlQAJgRAEgMQgMgggRgZQAJADAEADQgcgxgygRQAlASAcAqQhMgckMBBQkDBHgUgCQADCMgMDRgA19O0QhlA4iIA+QB/gnBwhBQB1hFBphXQhjBJh9BFgABJPOIgGAOIANgDQACAAABgFQgGgGgDAAIgBAAgABRPLQAFAEABgDQABgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgFABgAooLGQgJAhgDAZQAJgrAQg7IgNAsgAPIKAQgSgJh0gMQh0gLABAHQB9AAB8AZIAAAAgAQTI5QgoAWgmAKIgSAAQgxADgxACQA4AMA8gRQBNgDA9gvQgLAHgxALgAGHJAQgDgsgMghQAEgbgWgNQALARAHAXIgCALQAMAhAFAhIAAAAgAtZHSQgpAsgRAlQBChKA8hNQgVAWgvAwgAjZIfQAZgGAogUQg7AWg4gBQAQANAigIgAgSHGQBfgvBrgWIAEgBQhaAIh0A+gANRENQg1gjg/gkQiyhlivgrIDEBJQCNA+CEBQIAAAAgAEfAUQCOAZCCA3Qg1gbhxgnQiJgvh9gcQlghPg9B1QAigCDzABQDKABgEgJgApQAeQgaAFAzgHIgCgBIgXADgApwgSQA4gHAvgcQi9AqBWgHgAT+ijQAugEAfgRQgpAQgkAFgAj4tuIgYCHQAriQgKAAQgCAAgHAJgAmLuRQh/ABASAEQAnAJBcACQBsADADgUIiFABgApluYIgggFQAXAIAJgDgACRvnQgBAGAMgJgAjZ3dQAGDOgFBoQA8gPgYjpQgpkVgHhfIALE2gAkQdbQgIA2gBAAQgGgQAPgmgAjRQgQhGgHAEg0QARAUBAANQA/ANBBgDQhIARgxAAIgWgBgAAzPwQgfAdhWADQAvgKBGgWgAF4HzIAAAAgAmoE6QgBgEAEgCQADABgCAEQgCADABACgAmlEmQgEgIAFgBQAJARgGACQABgBgFgJgAz6AHQgGgBgEgGQABgDAGAEQAHAHAEAAIgDAAIgFgBgA0YgNQgNgBgCgJQAlgEgHAUQgBgFgOgBgACKgOQASgJAIAEQgDgBgKAGQgEADgDAAQgEAAgCgDgACsgPQAAgEAGACQAGACADAAIgFACIgDABQgEAAgDgDgAsKpUQACgDADACQAEADACgBQgEADgDAAQgCAAgCgEgAsfpZQAZgLgGANIgIABQgGAAgFgDgAjy9eQgIgJAEgJQAOAUAAANQAAgEgKgLg");
	this.shape_1.setTransform(187.4133,363.204);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(60).to({_off:false},0).wait(87));

	// 遮色片0401 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_65 = new cjs.Graphics().p("AhtDqQg9gcgog5Qgog5gHhDQgDgeAFgfIAFgXQAFgXAKgWIACgEIAFgLQAJgQALgPQAYgiAfgXIADgCIAhgUQAMgHANgFQAsgRAvABIAcABQAnAEAiAOIAlATIAEADIAiAaQAPAPAOASIALAOIAJAPQASAgAJAiIAFAYIAAACIADAYIAAAYIgLA9QgFARgHAQIgGAMIgGAKQgRAfgYAYIgKAJIgLAKQg5AthLAJQgRACgPAAQg5AAgygYg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AifGHQhAgagqgzQgrg1gLhGQgLhHAZhAQAZg+A4gtQATgQAWgLQgHgXgDgYQgDggAFgfIAFgXQAFgWAKgWIACgFIAGgKQAIgRALgPQAZghAegYIADgCIAhgUQAMgGANgFQArgRAwAAIAcABQAnAEAiAOIAmAUIADACIAiAbQAQAOANASIALAPIAJAPQASAfAJAiIAFAYIAAACIADAZIAAAYIgLA+QgFAQgHARIgGALIgFALQgSAdgYAYIgJAKIgMAKQgUAPgWAMQAGASACATQAKBHgaA/QgaA/g5AsQg4ArhDAJQgQACgQAAQgxAAgwgTg");
	var mask_4_graphics_67 = new cjs.Graphics().p("Ai/IaQhNgHg7guQgsghgbgzQgagzgDg3QgDgrALgnQAShDAzgzQA1g0BMgQIAFgBQgCgyATgwQAZg/A4gtQATgPAWgMQgHgXgDgYQgDggAFgfIAFgXQAFgWAKgWIACgEIAFgLQAJgQALgQQAYghAegYIADgCIAhgUQAMgGANgFQAsgRAvAAIAdABQAnAEAiAOIAlAUIAEACIAiAbQAPAPAOARIALAPIAJAPQASAgAJAhIAFAZIAAABIADAZIAAAYIgLA+QgFARgHAQIgGALIgGALQgRAegYAZIgKAJIgLAKQgUAPgWAMQAFASADATQAKBGgaA/QgaA/g5AsQgyAmg7AMQABBEgjA+QgmBEhBAjQg3AdhBAAIgYgBg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AkzKpQhOgHg/g0QhAg0gWhLQgQg3AKg6QAJg7AggvQAggvAzgeQAygdA3gGIgBgMQgCgrALgnQARhDAzgyQA1g0BNgQIAFgBQgCg0ATgvQAZg/A3gtQATgQAVgLQgHgXgCgYQgDggAFgfIAEgXQAGgWAKgWIACgFIAFgKQAJgQALgQQAYghAfgYIADgCIAhgUQAMgGAMgFQAtgRAvAAIAdABQAmAEAiAOIAmAUIAEACIAiAbQAPAOAOASIALAPIAJAPQASAfAJAiIAFAYIAAACIACAZIAAAYIgKA+QgFAQgIARIgFALIgGALQgRAegYAYIgKAKIgMAKQgTAPgWAMQAFASADATQAJBHgaA/QgaA+g4AsQgyAmg7AMQABBEgjA+QgnBEhBAjQgtAXgxAFQAIBKgiBFQgiBGhIAoQg9AihBAAIgXgBg");
	var mask_4_graphics_69 = new cjs.Graphics().p("AmfMaQg2gIgvgfQgvgfgeguQgdgugJg3QgJg4APg1QARg/AwgwQAvgwA9gTIACgXQAKg7AggvQAggvAzgeQAygcA3gGIgBgNQgDgqALgnQAShDAzgzQA1g0BMgQIAFgBQgBgzARgwQAZg/A4gtQAUgQAVgLQgHgXgDgYQgDggAFgfIAFgXQAGgWAJgWIACgEIAGgLQAIgQALgQQAZghAegYIADgCIAhgUQAMgGANgFQAsgRAwAAIAcABQAnAEAiAOIAmAUIADACIAiAbQAQAPANARIALAPIAJAPQATAgAIAhIAFAZIAAABIADAZIAAAYIgLA+QgFAQgHARIgGALIgFALQgSAegYAZIgJAJIgMAKQgUAPgWAMQAGASACATQAKBHgaA/QgaA/g5AsQgyAlg6AMQAABEgjA+QgmBEhCAjQgsAXgzAFQAIBKghBFQgjBGhGAoQgYANgZAJIgCAWQgKBBgqA2QgqA1g8AaQgxAWg1AAQgUAAgVgDg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AocODQg7gLgygmQgxgmgbg2Qgeg+AFhJQAGhIAog5QAog5BDgdQApgTAqgEIAFgXQASg/AvgxQAvgwA9gTIADgXQAJg6AggvQAggvAzgdQAygdA3gGIgBgNQgCgrALgmQARhEAzgzQA0g0BNgQIAFgBQgCgzATgvQAZhAA3gsQAUgQAVgLQgHgXgCgZQgDgfAFgfIAEgXQAGgXAKgWIACgEIAFgLQAJgQALgPQAYgiAfgXIADgCIAhgUQALgHANgFQAtgRAvABIAdABQAmAEAiAOIAmATIAEADIAiAaQAPAPAOASIALAOIAJAPQASAgAJAiIAFAYIAAACIACAYIAAAZIgKA9QgFARgIAQIgFAMIgGAKQgRAfgYAYIgKAJIgMAKQgTAQgWALQAFASADAUQAJBHgaA/QgaA/g4ArQgyAng7ALQABBEgjA+QgnBEhBAiQgtAYgyAEQAIBLgiBEQgiBGhIAoQgYAOgYAIIgCAWQgKBBgqA2QgpA2g8AaQgoARgqAEQgMBDgqAzQgsA2hEAZQgtAQgtAAQgYAAgXgEg");
	var mask_4_graphics_71 = new cjs.Graphics().p("Am4ODQg7gLgxgmQgSgOgPgPQgaAVggADQgVACgTgGQgKAGgMAEQgsAQgogSQgngSgSgrQgRgsAQgoQAIgXASgRQASgRAXgIQAXgIAYACQAKABAJACIAKgGQAZgMAaABQAHhGAng3QAog5BCgdQApgTAqgEIAGgXQARg/AwgxQAugwA9gTIADgXQAKg6AggvQAggvAzgdQAxgdA4gGIgBgNQgDgrAKgmQAShEAzgzQA1g0BMgQIAFgBQgBgzASgvQAZhAA4gsQATgQAWgLQgHgXgDgZQgDgfAFgfIAFgXQAFgXAKgWIACgEIAFgLQAJgQALgPQAYgiAfgXIADgCIAhgUQAMgHANgFQAsgRAvABIAdABQAnAEAiAOIAlATIAEADIAiAaQAPAPAOASIALAOIAJAPQASAgAJAiIAFAYIAAACIADAYIAAAZIgLA9QgFARgHAQIgGAMIgGAKQgRAfgYAYIgKAJIgLAKQgUAQgWALQAFASADAUQAKBHgaA/QgaA/g5ArQgyAng7ALQABBEgjA+QgmBEhCAiQgtAYgyAEQAIBLghBEQgjBGhHAoQgYAOgZAIIgCAWQgKBBgqA2QgqA2g7AaQgoARgqAEQgLBDgqAzQgsA2hFAZQgtAQgtAAQgXAAgYgEg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(65).to({graphics:mask_4_graphics_65,x:160.2299,y:330.9636}).wait(1).to({graphics:mask_4_graphics_66,x:153.8219,y:346.1421}).wait(1).to({graphics:mask_4_graphics_67,x:143.2418,y:359.0139}).wait(1).to({graphics:mask_4_graphics_68,x:131.663,y:373.339}).wait(1).to({graphics:mask_4_graphics_69,x:122.6079,y:384.8217}).wait(1).to({graphics:mask_4_graphics_70,x:110.973,y:395.4598}).wait(1).to({graphics:mask_4_graphics_71,x:100.9329,y:395.4598}).wait(76));

	// 筆畫0401
	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(0,0,0.5,0.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({_off:false},0).wait(82));

	// 遮色片05 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_72 = new cjs.Graphics().p("AgFDkQhIgCg4goQg4gpgYg/QgKgagEghQgCgUACgTQAEg2AbgtQAjg7BCgfQBBgfBDALQBEAMA1AyQA0AyAOBDQAOBDgcBDQgcBDg5AlQg4AkhFAAIgFAAg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AAiFwQhIgCg4gpQg4gogXg/QgLgbgEggQgBgUABgVQADgnAQgjQgXgQgTgVQgPgRgNgVQgVgmgFgsQgGgsAKgqQALgqAagkQAagkAkgXQAzghA/gCQA/gCA1AcQA2AdAhA2QAhA2ABA9QAAAygUAuQAOAKAOANQA1AyAOBDQAOBDgcBDQgcBDg6AmQg4AkhFAAIgFAAg");
	var mask_5_graphics_74 = new cjs.Graphics().p("AgKHyQhJgCg4goQg4gpgXg/QgLgagEghQgBgUABgUQADgoAQgjQgXgPgTgVQgPgSgNgWQgVgmgFgsQgGgrAKgqQALgqAagkQAagjAkgYQAfgTAkgJIgDgQQgBgUABgUQAEg2AbgtQAjg7BCgfQBBgfBEALQBEAMA0AyQA1AyAOBDQAOBEgcBDQgcBDg6AlQggAVgkAJQACARABARQAAAygUAtQAOALAOANQA1AyAOBDQAOBEgcBDQgcBDg6AlQg4AkhEAAIgFAAg");
	var mask_5_graphics_75 = new cjs.Graphics().p("AiMIpQhJgCg4goQg4gpgXg/QgLgagEghQgBgUABgUQADgoAQgjQgXgPgTgVQgPgSgNgWQgVgmgFgsQgGgsAKgpQALgqAagkQAagjAkgYQAfgTAkgJIgDgQQgBgUABgUQAEg2AbgtQAjg7BCgfQBCgfBEALIAVAFIADgFQAjg7BCgfQBCgfBEALQBEAMA0AyQA1AyAOBDQAOBEgcBDQgcBDg6AlQg6AmhIgCQgdAAgagHQgbAzgwAeQggAVgkAIQACARABARQAAAzgTAtQANALAOANQA1AyAOBDQAOBEgcBDQgcBDg5AlQg4AkhFAAIgFAAg");
	var mask_5_graphics_76 = new cjs.Graphics().p("AkOJ+QhJgCg4goQg4gpgXg/QgLgagEghQgBgUABgUQADgoAQgjQgXgPgTgVQgPgSgNgWQgVgmgFgsQgGgsAKgqQALgqAagjQAagjAkgYQAfgTAkgJIgDgQQgBgUABgUQAEg2AbgtQAjg7BCgfQBCgfBEALIAWAFIADgFQAjg7BCgfQBBgfBEALIAAAAQAIgfARgdQAjg7BCgfQBCgfBEALQBEAMA0AyQA1AyAOBDQAOBEgcBDQgcBDg6AlQg6AmhIgCQgRAAgQgDQgEARgHAQQgcBDg6AlQg6AmhIgCQgdAAgagHQgaAygwAeQggAVgkAJQACARABARQAAAzgUAtQAOALAOANQA1AyAOBDQAOBEgcBDQgcBDg6AlQg4AkhFAAIgFAAg");
	var mask_5_graphics_77 = new cjs.Graphics().p("AmQLJQhJgCg4goQg4gpgXg/QgLgagEghQgBgUABgUQADgoAQgjQgXgPgTgVQgPgSgNgWQgVgmgFgsQgGgsAKgqQALgqAagkQAagjAkgYQAfgSAkgJIgDgQQgBgUABgUQAEg2AbgtQAjg7BCgfQBCgfBEALIAWAFIADgFQAjg7BCgfQBCgfBEALIAAAAQAHgfARgdQAjg7BCgfQBCgfBEALIAGACQAHgWAMgUQAjg7BCgfQBCgfBEALQBEAMA0AyQA1AyAOBDQAOBEgcBDQgcBDg6AlQg6AmhIgCQgUAAgTgEIgFAOQgcBDg6AlQg6AmhIgCQgRAAgQgDQgEARgHAQQgcBDg6AkQg6AmhHgCQgdAAgagHQgbAzgwAeQggAVgkAJQACARABARQAAAzgUAtQAOALAOANQA1AyAOBDQAOBEgcBDQgcBDg6AlQg4AkhFAAIgFAAg");
	var mask_5_graphics_78 = new cjs.Graphics().p("AoSLsQhJgCg4goQg4gpgXg/QgLgagEghQgBgUABgUQADgoAQgjQgXgPgTgVQgPgSgNgWQgVgmgFgsQgGgsAKgqQALgqAagkQAagjAkgYQAfgTAkgJIgDgQQgBgTABgUQAEg2AbgtQAjg7BCgfQBCgfBEALIAWAFIADgFQAjg7BCgfQBCgfBEALIAAAAQAIgfARgdQAjg7BCgfQBBgfBEALIAGACQAHgWAMgUQAjg7BCgfQBCgfBEALQAXAEAWAJQAggoAxgXQBCgfBEALQBEAMA0AyQA1AyAOBDQAOBEgcBDQgcBDg6AlQg6AmhIgCQgpgBgkgNQgWAcgfAUQg6AmhIgCQgUAAgTgEIgFAOQgcBDg6AlQg6AmhIgCQgRAAgQgDQgEARgHAQQgcBCg5AlQg6AmhIgCQgdAAgagHQgbAzgwAeQggAVgkAJQACARABARQAAAygUAuQAOALAOANQA1AyAOBDQAOBEgcBDQgcBDg6AlQg4AkhFAAIgFAAg");
	var mask_5_graphics_79 = new cjs.Graphics().p("AqjMAQhJgCg4goQg4gpgXg/QgLgagEghQgBgUABgUQADgoAQgjQgXgPgTgVQgPgSgNgWQgVgmgFgsQgGgsAKgqQALgqAagkQAagjAkgYQAfgTAkgJIgDgQQgBgUABgTQAEg2AbgtQAjg7BCgfQBCgfBEALIAWAFIADgFQAjg7BCgfQBCgfBEALIAAAAQAIgfARgdQAjg7BCgfQBCgfBEALIAGACQAHgWALgUQAjg7BCgfQBCgfBEALQAXAEAWAJQAggoAxgXQBCgfBEALQAtAIAmAZQAeghArgUQBCgfBEALQBEAMA0AyQA1AyAOBDQAOBEgcBDQgcBDg6AlQg6AmhIgCQhAgBg0ggQgTAVgZAQQg6AmhIgCQgpgBgkgNQgWAcgfAUQg6AmhIgCQgUAAgTgEIgFAOQgcBDg6AlQg6AmhHgCQgRAAgQgDQgEARgHAQQgcBCg6AlQg6AmhIgCQgdAAgagHQgbAzgwAeQggAVgkAJQACARABARQAAAzgUAtQAOALAOANQA1AyAOBDQAOBEgcBDQgcBDg6AlQg4AkhFAAIgFAAg");
	var mask_5_graphics_80 = new cjs.Graphics().p("AsqMUQhJgCg4goQg4gpgXg/QgLgagEghQgBgUABgUQADgoAQgjQgXgPgTgVQgPgSgNgWQgVgmgFgsQgGgsAKgqQALgqAagkQAagjAkgYQAfgTAkgJIgDgQQgBgUABgUQAEg1AbgtQAjg7BCgfQBCgfBEALIAWAFIADgFQAjg7BCgfQBCgfBEALIAAAAQAIgfARgdQAjg7BCgfQBCgfBEALIAGACQAHgWAMgUQAjg7BCgfQBBgfBEALQAXAEAWAJQAggoAxgXQBCgfBEALQAtAIAmAZQAeghArgUQBCgfBEALQAmAHAhASQAbgbAmgSQBCgfBEALQBEAMA0AyQA1AyAOBDQAOBEgcBDQgcBDg6AlQg6AmhIgCQg4gBgvgZQgQARgVANQg6AmhIgCQhAgBg0ggQgTAVgZAQQg6AmhIgCQgpgBgkgNQgWAcgfAUQg6AmhIgCQgUAAgTgEIgFAOQgbBDg6AlQg6AmhIgCQgRAAgQgDQgEARgHAQQgcBCg6AlQg6AmhIgCQgdAAgagHQgbAzgwAeQggAVgkAJQACARABARQAAAzgUAtQAOALAOANQA1AyAOBDQAOBEgcBDQgcBDg6AlQg4AkhFAAIgFAAg");
	var mask_5_graphics_81 = new cjs.Graphics().p("AusMUQhJgCg4goQg4gpgXg/QgLgagEghQgBgUABgUQADgoAQgjQgXgPgTgVQgPgSgNgWQgVgmgFgsQgGgsAKgqQALgqAagkQAagjAkgYQAfgTAkgJIgDgQQgBgUABgUQAEg1AbgtQAjg7BCgfQBCgfBEALIAWAFIADgFQAjg7BCgfQBCgfBEALIAAAAQAIgfARgdQAjg7BCgfQBCgfBEALIAGACQAHgWAMgUQAjg7BCgfQBCgfBEALQAXAEAVAJQAggoAxgXQBCgfBEALQAtAIAmAZQAeghArgUQBCgfBEALQAmAHAhASQAbgbAmgSQBCgfBEALQBEAMA0AyIABAAIAFgCQBCgfBEALQBEAMA0AyQA1AyAOBDQAOBEgcBDQgcBDg6AlQg6AmhIgCQhJgCg4goQgNgKgLgKQgxAYg6gCQg4gBgvgZQgQARgVANQg6AmhIgCQhAgBg0ggQgTAVgZAQQg6AmhIgCQgpgBgkgNQgWAcgfAUQg6AmhHgCQgUAAgTgEIgFAOQgcBDg6AlQg6AmhIgCQgRAAgQgDQgEARgHAQQgcBCg6AlQg6AmhIgCQgdAAgagHQgbAzgwAeQggAVgkAJQACARABARQAAAzgUAtQAOALAOANQA1AyAOBDQAOBEgcBDQgcBDg6AlQg4AkhFAAIgFAAg");
	var mask_5_graphics_82 = new cjs.Graphics().p("Aw4MUQhJgCg4goQg4gpgXg/QgLgagEghQgBgUABgUQADgoAQgjQgXgPgTgVQgPgSgNgWQgVgmgFgsQgGgsAKgqQALgqAagkQAagjAkgYQAfgTAkgJIgDgQQgBgUABgUQAEg1AbgtQAjg7BCgfQBCgfBEALIAWAFIADgFQAjg7BCgfQBCgfBEALIAAAAQAIgfARgdQAjg7BCgfQBCgfBEALIAGACQAHgWAMgUQAjg7BCgfQBCgfBEALQAXAEAWAJQAggoAxgXQBBgfBEALQAtAIAmAZQAeghArgUQBCgfBEALQAmAHAhASQAbgbAmgSQBCgfBEALQBEAMA0AyIABAAIAFgCQBCgfBEALQAxAJApAcQAYgWAggPQBCgfBEALQBEAMA0AyQA1AyAOBDQAOBEgcBDQgcBDg6AlQg6AmhIgCQhEgBg2gkQgNAMgPAJQg6AmhIgCQhJgCg4goQgNgKgLgKQgxAYg6gCQg4gBgvgZQgQARgVANQg6AmhIgCQhAgBg0ggQgTAVgZAQQg6AmhIgCQgpgBgjgNQgWAcgfAUQg6AmhIgCQgUAAgTgEIgFAOQgcBDg6AlQg6AmhIgCQgRAAgQgDQgEARgHAQQgcBCg6AlQg6AmhIgCQgdAAgagHQgbAzgwAeQggAVgkAJQACARABARQAAAzgUAtQAOALAOANQA1AyAOBDQAOBEgcBDQgcBDg6AlQg4AkhFAAIgFAAg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AywMUQhJgCg4goQg4gpgXg/QgLgagEghQgBgUABgUQADgoAQgjQgXgPgTgVQgPgSgNgWQgVgmgFgsQgGgsAKgqQALgqAagkQAagjAkgYQAfgTAkgJIgDgQQgBgUABgUQAEg1AbgtQAjg7BCgfQBCgfBEALIAWAFIADgFQAjg7BCgfQBCgfBEALIAAAAQAIgfARgdQAjg7BCgfQBCgfBEALIAGACQAHgWAMgUQAjg7BCgfQBCgfBEALQAXAEAWAJQAggoAxgXQBCgfBEALQAsAIAmAZQAeghArgUQBCgfBEALQAmAHAhASQAbgbAmgSQBCgfBEALQBEAMA0AyIABAAIAFgCQBCgfBEALQAxAJApAcQAYgWAggPQBCgfBEALQBEAMA0AyQAQAPANARQAtgLAuAHQBEAMA0AyQA1AyAOBDQAOBEgcBDQgcBDg6AlQg6AmhIgCQhJgCg4goQgfgXgWgeQgcAGgegBQhEgBg2gkQgNAMgPAJQg6AmhIgCQhJgCg4goQgNgKgLgKQgxAYg6gCQg4gBgvgZQgQARgVANQg6AmhIgCQhAgBg0ggQgTAVgZAQQg6AmhHgCQgpgBgkgNQgWAcgfAUQg6AmhIgCQgUAAgTgEIgFAOQgcBDg6AlQg6AmhIgCQgRAAgQgDQgEARgHAQQgcBCg6AlQg6AmhIgCQgdAAgagHQgbAzgwAeQggAVgkAJQACARABARQAAAzgUAtQAOALAOANQA1AyAOBDQAOBEgcBDQgcBDg6AlQg4AkhFAAIgFAAg");
	var mask_5_graphics_84 = new cjs.Graphics().p("A1cMUQhIgCg4goQg4gpgYg/QgKgagEghQgCgUACgUQADgoAPgjQgXgPgSgVQgQgSgMgWQgVgmgGgsQgGgsALgqQAKgqAagkQAagjAlgYQAfgTAjgJIgCgQQgCgUACgUQAEg1AbgtQAjg7BCgfQBBgfBEALIAXAFIADgFQAjg7BCgfQBBgfBEALIABAAQAIgfARgdQAjg7BCgfQBBgfBEALIAGACQAIgWAMgUQAjg7BCgfQBBgfBEALQAXAEAWAJQAggoAygXQBBgfBEALQAtAIAnAZQAdghAsgUQBAgfBEALQAmAHAhASQAcgbAmgSQBBgfBEALQBEAMA1AyIAAAAIAGgCQBBgfBEALQAxAJApAcQAYgWAhgPQBBgfBEALQBEAMA1AyQAQAPAMARQAtgLAuAHQBEAMA1AyQAhAgARAmQARgGARgFQBPgSBRAfQBQAfAtBEQAuBDgBBWQgBBWgvBDQgvBDhSAdQhSAehPgWQhQgWg3hCQgpgwgOg4QgYAEgagBQhIgCg4goQgggXgVgeQgcAGgfgBQhEgBg1gkQgNAMgPAJQg6AmhJgCQhIgCg4goQgOgKgLgKQgxAYg6gCQg4gBgugZQgRARgUANQg6AmhJgCQg/gBgzggQgUAVgYAQQg6AmhJgCQgpgBgjgNQgXAcgeAUQg6AmhJgCQgUAAgTgEIgFAOQgcBDg5AlQg6AmhJgCQgRAAgQgDQgEARgHAQQgcBCg5AlQg6AmhJgCQgdAAgagHQgbAzgvAeQghAVgkAJQADARAAARQABAzgVAtQAPALAOANQA0AyAOBDQAOBEgcBDQgcBDg5AlQg4AkhFAAIgGAAg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_5_graphics_72,x:5.9708,y:467.9571}).wait(1).to({graphics:mask_5_graphics_73,x:2.0242,y:454.0178}).wait(1).to({graphics:mask_5_graphics_74,x:6.5242,y:440.9571}).wait(1).to({graphics:mask_5_graphics_75,x:19.5242,y:435.4571}).wait(1).to({graphics:mask_5_graphics_76,x:32.5242,y:426.9571}).wait(1).to({graphics:mask_5_graphics_77,x:45.5242,y:419.4571}).wait(1).to({graphics:mask_5_graphics_78,x:58.5242,y:415.9588}).wait(1).to({graphics:mask_5_graphics_79,x:73.0242,y:413.9571}).wait(1).to({graphics:mask_5_graphics_80,x:86.5242,y:411.9571}).wait(1).to({graphics:mask_5_graphics_81,x:99.5242,y:411.9571}).wait(1).to({graphics:mask_5_graphics_82,x:113.5242,y:411.9571}).wait(1).to({graphics:mask_5_graphics_83,x:125.5242,y:411.9571}).wait(1).to({graphics:mask_5_graphics_84,x:142.692,y:411.9571}).wait(63));

	// 筆畫05
	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(0,0,0.5,0.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({_off:false},0).wait(75));

	// 遮色片05_1 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_84 = new cjs.Graphics().p("ATbfDID6mxIBRAvIj6Gwg");
	var mask_6_graphics_85 = new cjs.Graphics().p("AjcCgID4mvIDCBvIj5Gwg");
	var mask_6_graphics_86 = new cjs.Graphics().p("AkVCAID6mwIExCxIj6Gwg");
	var mask_6_graphics_87 = new cjs.Graphics().p("AlNBfID5mvIGiDyIj5Gvg");
	var mask_6_graphics_88 = new cjs.Graphics().p("AmGA/ID5mwIIUEzIj5Gwg");
	var mask_6_graphics_89 = new cjs.Graphics().p("Am+AeID5mvIKEF0Ij5Gvg");
	var mask_6_graphics_90 = new cjs.Graphics().p("An3gCID6mwIL1G1Ij6Gwg");
	var mask_6_graphics_91 = new cjs.Graphics().p("ANmbrID5mwINnH2Ij5Gxg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_6_graphics_84,x:157.3602,y:203.3361}).wait(1).to({graphics:mask_6_graphics_85,x:304.45,y:386.35}).wait(1).to({graphics:mask_6_graphics_86,x:310.725,y:389.975}).wait(1).to({graphics:mask_6_graphics_87,x:316.975,y:393.575}).wait(1).to({graphics:mask_6_graphics_88,x:323.25,y:397.225}).wait(1).to({graphics:mask_6_graphics_89,x:329.5,y:400.825}).wait(1).to({graphics:mask_6_graphics_90,x:335.775,y:404.45}).wait(1).to({graphics:mask_6_graphics_91,x:199.0264,y:227.3943}).wait(56));

	// 筆畫05
	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(0,0,0.5,0.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84).to({_off:false},0).wait(63));

	// 遮色片05_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_92 = new cjs.Graphics().p("Ag/CjQgogQgcgiQgdgigJgrQgDgSAAgPQgBgTAFgVQALg5AtgmQAsgmA7gDQAkgCAkAPQAkAOAaAbQAaAbANAkQANAlgEAkQgEAlgTAiQgUAhgeAWQgkAZgsAFIgUABQghAAgegLg");
	var mask_7_graphics_93 = new cjs.Graphics().p("AAuCyQgmgOgaggQgWAOgaAGQgpALgrgLQgrgLgggcQgegbgPgmQgPgnADgnQADgoAVgjQAWglAmgWQAmgXAqgCQArgCAoASQAgAQAWAZQAkgXAtgCQAlgCAkAOQAkAOAaAbQAaAbANAlQANAkgEAlQgEAlgTAhQgUAigeAVQgkAZgsAGIgVABQghAAgegMg");
	var mask_7_graphics_94 = new cjs.Graphics().p("ACUDDQgmgPgcggQgWAOgZAHQgoAKgsgKQgrgLgggdIgHgHIgTAIQgpAPgqgFQgrgGgkgaQgkgZgTgnQgNgdgDgbQgFgtASgrQATgrAkgbQAhgaAsgHQAsgHAoAOQAmANAdAeQAigSAlgCQApgCApATQAgAPAXAZQAkgWAsgDQAmgCAkAPQAkAOAaAbQAaAbAMAkQANAkgEAlQgDAlgUAiQgTAhgfAWQgjAZgsAFIgWACQggAAgegMg");
	var mask_7_graphics_95 = new cjs.Graphics().p("ADxEYQglgPgcgfQgWANgaAHQgpALgrgLQgrgLgfgcIgIgIIgSAIQgqAQgqgGQgqgFgkgaQgggXgTgiQgQAAgRgDQg1gKgrgjQgsgkgUgyQgMgbgDgdQgGg5AZg3QAZg3AvghQAqgdA1gHQA1gHAwASQAxARAjAoQAkAnAOAyQADAMACANQAhANAYAaQAigSAkgBQArgCAoASQAhAPAWAZQAkgWAtgCQAlgCAkAOQAkAOAaAbQAaAaANAlQANAkgEAmQgEAlgTAhQgUAigeAVQgkAZgsAGIgVABQghAAgegMg");
	var mask_7_graphics_96 = new cjs.Graphics().p("AFjEyQgmgOgbggQgWAOgaAGQgpALgrgLQgrgLgggcIgIgIIgSAIQgqAQgpgGQgqgFgkgaQghgXgSgiQgQAAgRgDQg1gKgrgjQgLgJgKgKIgZAHQg5ANg2gQQg2gRgogsQgogqgMg3QgGgYABgbQABgzAaguQAagvAqgcQArgdA1gGQA1gGAvATQAsARAhAjQAXgIAYgEQA1gHAwASQAxARAiAoQAkAnAOAyQADAMACANQAhANAZAaQAhgRAlgCQArgCAoASQAhAQAWAZQAkgXAtgCQAlgCAkAOQAkAOAaAaQAaAbANAlQANAkgEAmQgEAlgTAhQgUAigeAVQgkAZgsAGIgVABQghAAgegMg");
	var mask_7_graphics_97 = new cjs.Graphics().p("AGLEyQgmgOgbggQgXAOgZAGQgpALgrgLQgrgLgggcIgIgIIgSAIQgqAQgqgGQgpgFgkgaQghgXgSgiQgRAAgQgDQg1gKgrgjQgMgJgJgKIgZAHQg5ANg2gQQg2gRgogsQgVgXgOgaIhlAAIAAj2ICOACQAOgPASgMQArgdA1gGQA1gGAvATQAsARAhAjQAWgIAZgEQA1gHAwASQAwARAjAoQAkAnAOAyQADAMACANQAgANAaAaQAhgRAlgCQArgCAoASQAgAQAXAZQAkgXAtgCQAlgCAkAOQAkAOAaAaQAaAbANAlQANAkgEAmQgEAlgTAhQgUAigeAVQgkAZgsAGIgVABQghAAgegMg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(92).to({graphics:mask_7_graphics_92,x:369.8946,y:451.9489}).wait(1).to({graphics:mask_7_graphics_93,x:358.8721,y:450.3512}).wait(1).to({graphics:mask_7_graphics_94,x:348.7189,y:448.7193}).wait(1).to({graphics:mask_7_graphics_95,x:339.355,y:440.186}).wait(1).to({graphics:mask_7_graphics_96,x:327.9649,y:437.5625}).wait(1).to({graphics:mask_7_graphics_97,x:323.9971,y:437.5625}).wait(50));

	// 筆畫05
	this.instance_5 = new lib.CachedBmp_7();
	this.instance_5.setTransform(0,0,0.5,0.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(92).to({_off:false},0).wait(55));

	// 遮色片06 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_98 = new cjs.Graphics().p("AlYBRIAAihIKyAAIAAChg");
	var mask_8_graphics_99 = new cjs.Graphics().p("AlYCJIAAkRIKyAAIAAERg");
	var mask_8_graphics_100 = new cjs.Graphics().p("AlYDCIAAmDIKyAAIAAGDg");
	var mask_8_graphics_101 = new cjs.Graphics().p("AlYD6IAAnzIKyAAIAAHzg");
	var mask_8_graphics_102 = new cjs.Graphics().p("AlYEyIAApkIKyAAIAAJkg");
	var mask_8_graphics_103 = new cjs.Graphics().p("AlYFrIAArVIKyAAIAALVg");
	var mask_8_graphics_104 = new cjs.Graphics().p("AlYGjIAAtFIKyAAIAANFg");
	var mask_8_graphics_105 = new cjs.Graphics().p("AlYHcIAAu3IKyAAIAAO3g");
	var mask_8_graphics_106 = new cjs.Graphics().p("AlYIUIAAwnIKyAAIAAQng");
	var mask_8_graphics_107 = new cjs.Graphics().p("AlYJMIAAyXIKyAAIAASXg");
	var mask_8_graphics_108 = new cjs.Graphics().p("AlYKFIAA0JIKyAAIAAUJg");
	var mask_8_graphics_109 = new cjs.Graphics().p("AlYK9IAA15IKyAAIAAV5g");
	var mask_8_graphics_110 = new cjs.Graphics().p("AlYL1IAA3pIKyAAIAAXpg");
	var mask_8_graphics_111 = new cjs.Graphics().p("AlYMuIAA5bIKyAAIAAZbg");
	var mask_8_graphics_112 = new cjs.Graphics().p("EADUAqwIAA7MIKzAAIAAbMg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_8_graphics_98,x:145.95,y:376.375}).wait(1).to({graphics:mask_8_graphics_99,x:145.95,y:382.35}).wait(1).to({graphics:mask_8_graphics_100,x:145.95,y:388.35}).wait(1).to({graphics:mask_8_graphics_101,x:145.95,y:394.325}).wait(1).to({graphics:mask_8_graphics_102,x:145.95,y:400.3}).wait(1).to({graphics:mask_8_graphics_103,x:145.95,y:406.3}).wait(1).to({graphics:mask_8_graphics_104,x:145.95,y:412.275}).wait(1).to({graphics:mask_8_graphics_105,x:145.95,y:418.275}).wait(1).to({graphics:mask_8_graphics_106,x:145.95,y:424.25}).wait(1).to({graphics:mask_8_graphics_107,x:145.95,y:430.225}).wait(1).to({graphics:mask_8_graphics_108,x:145.95,y:436.225}).wait(1).to({graphics:mask_8_graphics_109,x:145.95,y:442.2}).wait(1).to({graphics:mask_8_graphics_110,x:145.95,y:448.175}).wait(1).to({graphics:mask_8_graphics_111,x:145.95,y:454.175}).wait(1).to({graphics:mask_8_graphics_112,x:90.25,y:273.5678}).wait(35));

	// 筆畫06
	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(125.55,390.2,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(49));

	// 遮色片07 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_113 = new cjs.Graphics().p("Ag0CfQgigLgagXQghgegOgsQgOgtAKgqQAIglAZgfQAZgfAigQQAigQAmAAQAoAAAiARQAiARAYAfQAYAfAIAlQAHAigIAkQgIAkgWAdQgVAcgfARQgfASgjADIgQABQgaAAgagJg");
	var mask_9_graphics_114 = new cjs.Graphics().p("AidC7QgigLgagXQghgegOgsQgOgtAKgqQAIglAZgfQAYgfAigQQAjgQAnAAQAmAAAhAQQAUgbAdgTQAlgXAqgDQArgCAnATQAoATAYAiQAZAjAFAsQAFArgQAmQgQAngiAcQgiAcgqAHQgpAIgqgOIgTgIIgEAGQgVAcgfARQgfASgjADIgQABQgaAAgagJg");
	var mask_9_graphics_115 = new cjs.Graphics().p("AkTDUQgigLgagYQghgegOgsQgOgsAKgsQAIgkAZgfQAYgeAigRQAjgQAnAAQAmAAAiARQATgcAegTQAlgXAqgCQAqgCAnASQAMAGAKAHQAQgZAYgTQAigaApgHQApgGAoAOQApAOAcAfQARATAKAWQAWAugGAvQgDAUgGAQQgNAjgbAbQgcAbgjANQguAQgygNQgdgHgYgQQgOAWgWASQgiAbgqAIQgoAHgqgOIgTgHIgEAGQgVAcggARQgfARgjAEIgQABQgaAAgagJg");
	var mask_9_graphics_116 = new cjs.Graphics().p("Al5DgQgigLgagYQghgegOgsQgOgsAKgsQAIgkAZgfQAZgeAigRQAigQAnAAQAnAAAhARQATgcAegTQAmgXAqgCQAqgCAoASQALAGALAHQAPgZAXgTQAigaApgHQApgGApAOQAQAGAPAIQAqgpA8gGQAegDAeAIQAeAJAYASQAsAgARAzQALAjgFAmQgEAngVAeQgaApgvAVQgvAVgwgIQgfgFgcgRQgbAbgkANQguAQgygNQgdgHgXgQQgPAWgUASQgjAbgpAIQgqAHgqgOIgSgHIgFAGQgVAcgfARQgfARgjAEIgQABQgbAAgagJg");
	var mask_9_graphics_117 = new cjs.Graphics().p("AFYEYQgmgBglgPQgkgPgcgbQgighgQguQgOgpACgqQgMAHgOAFQguAQgygNQgcgHgXgQQgPAWgVASQgjAbgpAIQgqAHgqgOIgSgHIgFAGQgVAcgfARQgfARgjAEQgjADgigLQgigLgagYQghgegOgsQgOgsAKgrQAIglAZgfQAZgeAigRQAigQAnAAQAnAAAhARQATgcAegTQAmgXAqgCQAqgCAoASQALAGAKAHQAQgZAYgTQAigaAogHQApgGApAOQAQAGAPAIQAqgpA8gGQAegDAeAIQAeAJAYASQAsAgARAzQAIAaAAAcQAsAUAfAoQAgAqAIAxQAJAygSAyQgRAygmAiQgcAaglAOQgkAOglAAIgDAAg");
	var mask_9_graphics_118 = new cjs.Graphics().p("AD2GPQhAgegnhAQgog/AChHQADg/Aig3QgRgXgKgcQgOgoADgqQgMAHgOAFQguAQgxgMQgdgIgYgQQgOAWgWASQgiAcgqAHQgpAIgqgOIgTgIIgEAGQgVAbggARQgfASgjADQgiAEgigMQgigLgagXQghgdgOgsQgOgtAKgrQAIglAZgfQAYgfAigQQAjgQAnAAQAmAAAiAQQATgcAegSQAlgXAqgDQArgCAnATQAMAFAKAHQAQgZAYgSQAigaApgHQAogHAoAOQARAGAOAJQArgqA7gGQAfgCAeAIQAdAIAZASQArAgARAzQAJAagBAcQAtAVAeAnQAhAqAIAyQAIAtgOAuIARAPQAoAoASA1QAWBDgTBIQgTBJg1AvQg1AvhJALQgUADgTAAQg0AAgvgWg");
	var mask_9_graphics_119 = new cjs.Graphics().p("ADfImQg4gZgpgwQgpgvgQg7QgThCAPhHQAMg3AfgsQgeg4ACg9QACg+Aig3QgQgXgKgcQgPgpADgqQgMAHgOAFQguAQgxgMQgdgIgXgQQgPAWgVASQgjAcgpAHQgqAIgqgOIgSgIIgFAGQgVAcgfARQgfASgjADQgjAEgigMQgigLgagXQghgegOgsQgOgtAKgrQAIglAZgfQAZgfAigQQAigQAnAAQAnAAAhAQQATgcAegSQAmgXAqgDQAqgCAoATQALAFAKAHQAQgZAYgSQAigaApgHQAogHApAOQAQAGAPAJQAqgqA8gGQAegCAeAIQAeAIAYASQAsAgARAzQAIAaAAAcQAsAVAfAnQAgAqAIAyQAIAtgOAuIASAQQAoAoARA1QAXBCgTBIIgIAZQAZAcAQAiQAVAtAFAxQAFAygNAwQgPA7goAwQgoAwg3AaQg3Aag/ABIgFAAQg7AAg1gYg");
	var mask_9_graphics_120 = new cjs.Graphics().p("ADELFQhEgdgtg+Qgug+gIhJQgIhKAfhGQARglAYgeQgQgcgIgfQgThDAPhGQAMg3AfgrQgeg4ACg+QACg+Aig3QgQgXgKgcQgPgpADgqQgMAHgOAFQguAQgxgNQgdgHgXgQQgPAWgVASQgjAbgpAIQgqAHgqgOIgSgHIgFAGQgVAcgfARQgfARgjAEQgjADgigLQgigLgagYQghgegOgsQgOgsAKgsQAIglAZgfQAZgeAigRQAigQAnAAQAnAAAhARQATgcAegTQAmgXAqgCQAqgCAoASQALAGAKAHQAQgZAYgTQAigaApgHQAogGApAOQAQAGAPAIQAqgpA8gGQAegDAeAIQAeAJAYASQAsAgARAzQAIAaAAAcQAsAUAfAoQAgAqAIAyQAIAtgOAtIASAQQAoAoARA2QAXBDgTBIIgIAYQAZAdAQAhQAVAsAFAyQAFAygNAvQgPA7goAwIgDADQAfA1AFA8QAFBKghBGQgiBFg9ApQg6AnhIAHIgcACQg5AAg0gXg");
	var mask_9_graphics_121 = new cjs.Graphics().p("ADEOmQhIgXg0g0Qgzg0gWhJQgXhIAMhIQAMhBAkg4QAXgiAegaIgGgIQgug+gIhKQgIhJAfhHQARglAYgeQgQgcgIgeQgThCAPhHQAMg3AfgsQgeg4ACg9QACg/Aig3QgQgXgKgcQgPgpADgqQgMAHgOAFQguAQgxgMQgdgIgXgQQgPAWgVASQgjAcgpAHQgqAIgqgOIgSgIIgFAGQgVAcgfARQgfASgjADQgjAEgigMQgigLgagXQghgegOgsQgOgtAKgrQAIglAZgfQAZgfAigQQAigQAnAAQAnAAAhAQQATgbAegTQAmgXAqgDQAqgCAoATQALAFAKAHQAQgYAYgTQAigaApgHQAogHApAOQAQAGAPAJQAqgqA8gGQAegCAeAIQAeAIAYASQAsAgARAzQAIAaAAAcQAsAVAfAnQAgAqAIAyQAIAtgOAuIASAQQAoAoARA1QAXBDgTBIIgIAZQAZAcAQAiQAVAtAFAxQAFAygNAwQgPA6goAwIgDACQAfA2AFA8QAFBKghBFQgTAogcAeQAnAoAXAzQAcBAgDBJQgCBIgiA+QghA+g8AqQg7AqhFAMQgYADgYAAQgxAAgwgPg");
	var mask_9_graphics_122 = new cjs.Graphics().p("ADEOmQhIgXg0g0Qgzg0gWhJQgXhIAMhIQADgRAFgQIgNgBQgigFgegTQgegTgUgcQgUgcgHgjQgGgjAHghQAKgwAlgkQAlgkAvgJQAagGAbAEQADg0AWgyQARglAYgeQgQgcgIgeQgThCAPhHQAMg3AfgsQgeg4ACg9QACg/Aig3QgQgXgKgcQgPgpADgqQgMAHgOAFQguAQgxgMQgdgIgXgQQgPAWgVASQgjAcgpAHQgqAIgqgOIgSgIIgFAGQgVAcgfARQgfASgjADQgjAEgigMQgigLgagXQghgegOgsQgOgtAKgrQAIglAZgfQAZgfAigQQAigQAnAAQAnAAAhAQQATgbAegTQAmgXAqgDQAqgCAoATQALAFAKAHQAQgYAYgTQAigaApgHQAogHApAOQAQAGAPAJQAqgqA8gGQAegCAeAIQAeAIAYASQAsAgARAzQAIAaAAAcQAsAVAfAnQAgAqAIAyQAIAtgOAuIASAQQAoAoARA1QAXBDgTBIIgIAZQAZAcAQAiQAVAtAFAxQAFAygNAwQgPA6goAwIgDACQAfA2AFA8QAFBKghBFQgTAogcAeQAnAoAXAzQAcBAgDBJQgCBIgiA+QghA+g8AqQg7AqhFAMQgYADgYAAQgxAAgwgPg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(113).to({graphics:mask_9_graphics_113,x:165.0481,y:407.1658}).wait(1).to({graphics:mask_9_graphics_114,x:175.5762,y:404.3811}).wait(1).to({graphics:mask_9_graphics_115,x:187.3571,y:401.9128}).wait(1).to({graphics:mask_9_graphics_116,x:197.5174,y:400.7111}).wait(1).to({graphics:mask_9_graphics_117,x:203.4306,y:405.4211}).wait(1).to({graphics:mask_9_graphics_118,x:207.3516,y:419.4928}).wait(1).to({graphics:mask_9_graphics_119,x:209.9381,y:434.7972}).wait(1).to({graphics:mask_9_graphics_120,x:209.9381,y:450.6074}).wait(1).to({graphics:mask_9_graphics_121,x:209.9381,y:472.3842}).wait(1).to({graphics:mask_9_graphics_122,x:209.9381,y:472.3842}).wait(25));

	// 筆畫07
	this.instance_7 = new lib.CachedBmp_9();
	this.instance_7.setTransform(0,0,0.5,0.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(113).to({_off:false},0).wait(34));

	// 遮色片08 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_128 = new cjs.Graphics().p("AhNCrQgzgYgdgsQghgzADg6QACg1AfguQAggvAxgUQAxgVA3AJQA3AJAoAkQAoAkAPA2QAPA1gQAzQgQAzgqAkQgrAlg1AHQgNACgMAAQgnAAgngRg");
	var mask_10_graphics_129 = new cjs.Graphics().p("AArDAQgggHgbgSQgTAHgUADQg1AIgzgXQgzgYgdgsQghgzACg6QACg1AgguQAggvAxgUQAxgVA3AJQAoAHAeAUQAMgFAMgCQA2gNA4AWQA3AWAfAuQAgAvAAA6QAAA7ggAvQgfAug3AWQgjAOgjAAQgUAAgUgFg");
	var mask_10_graphics_130 = new cjs.Graphics().p("Ag5DPQghgHgbgSQgTAHgUADQg1AIgzgXQgzgYgdgsQghgzACg6QACg1AgguQAggvAxgUQAxgVA3AJQAoAGAfAVQALgFANgCQA0gMA0ATQAMgMAOgKQApgfAygFQAxgGAwAVQAvAWAeAoQAdApAEA0QAFAzgVAtQgVAtgrAeQgrAdgyAEQgmADgmgNIgDgCQgcAdgnAQQgjAOgjAAQgTAAgUgFg");
	var mask_10_graphics_131 = new cjs.Graphics().p("AiVDnQgggIgcgRQgTAHgUADQg1AHgzgXQgzgXgdgtQghgyADg7QACg1AfguQAgguAxgVQAxgVA4AKQAnAGAfAUQAMgEAMgDQA0gMA2AUQALgMAOgKQApgfAxgGQAkgEAjAKQAmglA2gMQA7gNA1AVQA0AWAhAyQAhAygBA5QgCAqgSAlQgaAzg0AcQg0Adg4gFQgRgCgQgEQgMALgOAKQgqAegyADQgnADglgNIgEgBQgbAdgnAPQgjAOgjAAQgUAAgUgEg");
	var mask_10_graphics_132 = new cjs.Graphics().p("ACNElQg2gJgqgnQgqgngMg1IgBgGQgOAIgPAGQg3AWg3gNQgggHgcgSQgTAHgUADQg1AIgzgXQgzgYgdgsQghgzADg6QACg1AfguQAggvAxgUQAxgVA4AJQAnAGAfAVQAMgFAMgCQA0gMA2ATQALgMAOgKQApgfAxgFQAkgEAjAKQAmglA2gMQA7gOA1AWQA0AWAhAyQAhAygBA5QgCArgSAlQgaAxg0AdIgMAGQAGAZgBAbQgCA2gcAqQgeAug0AXQgmARgmAAQgPAAgPgDg");
	var mask_10_graphics_133 = new cjs.Graphics().p("AhmFGQgRgLgLgSQgLgSgCgUQgCgUAHgUQAHgTAPgOQAOgOASgGQAPgFAPAAQAOgdAbgQIAFgDIgBgEIgBgGQgOAIgPAGQg3AWg3gNQgggHgcgSQgTAHgUADQg1AIgzgXQgzgYgdgsQghgyADg7QACg1AfguQAggvAxgUQAxgVA4AJQAnAHAfAUQAMgFAMgCQA0gMA2ATQALgLAOgLQApgfAxgFQAkgEAjAKQAmglA2gMQA7gOA1AWQA0AWAhAyQAhAygBA5QgCArgSAlQgaAyg0AcIgMAGQAGAZgBAbQgCA2gcAqQgeAug0AXQg0AXg0gIQgGAQgLANQgQATgVAKQglASgrgOIgBAAIgFAFQgOANgSAGQgOADgNAAQgYAAgWgNg");
	var mask_10_graphics_134 = new cjs.Graphics().p("AheFKIjPAAIAAjbQgagEgZgLQgzgYgdgsQghgyADg7QACg1AfguQAggvAxgUQAxgVA4AJQAnAHAfAUQAMgFAMgCQA0gMA2ATQALgLAOgLQApgfAxgFQAkgEAjAKQAmglA2gMQA7gOA1AWQA0AWAhAyQAhAygBA5QgCArgSAlQgaAyg0AcIgMAGQAGAZgBAbQgCA2gcAqQgeAug0AXQg0AXg0gIQgGAQgLANQgQATgVAKQglASgrgOIgBAAIgFAFQgOANgSAGQgOADgNAAQgTAAgTgJgAgnB1IgMAEIAAAjQANgaAZgOIAFgDIgBgEIgBgGQgOAIgPAGg");
	var mask_10_graphics_135 = new cjs.Graphics().p("AnSIMIAAl8ICnABIAAjZQgZgEgZgLQgzgYgdgsQghgzACg7QACg1AgguQAggvAxgUQAxgVA3AJQAoAGAfAVQAMgFAMgCQA0gMA2ATQALgLAOgLQAogfAygFQAkgEAjAKQAlglA3gMQA6gOA1AWQA1AWAhAyQAgAygBA5QgBArgTAlQgZAyg0AdIgMAGQAGAZgBAbQgCA2gcAqQgeAtg1AXQgzAXg0gIQgGAQgMANQgPATgVAKQgmASgrgOIAAAAIgGAFQgOANgSAGQgfAIgcgLIAAF3gAgkhCIgNAEIAAAjQAOgaAZgOIAFgDIgBgEIgBgGQgOAIgPAGg");
	var mask_10_graphics_136 = new cjs.Graphics().p("AnSIMIAAl8ICnABIAAjZQgZgEgZgLQgzgYgdgsQghgzACg7QACg1AgguQAggvAxgUQAxgVA3AJQAoAGAfAVQAMgFAMgCQA0gMA2ATQALgLAOgLQAogfAygFQAkgEAjAKQAlglA3gMQA6gOA1AWQA1AWAhAyQAgAygBA5QgBArgTAlQgZAyg0AdIgMAGQAGAZgBAbQgCA2gcAqQgeAtg1AXIgBABQAogDAoAQQA0AUAgArQAgAqAEA4QAFA4gZAvQgZAvgwAcQgwAcg1gBQgmgBgigQIAABVIkMAAIAAAZgACABfQgNAQgSAKIARAAQAIgKAJgIQAYgXAcgNQgSABgTgCQgGAQgMANgAgkhCIgNAEIAAAjQAOgaAZgOIAFgDIgBgEIgBgGQgOAIgPAGg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(128).to({graphics:mask_10_graphics_128,x:159.3041,y:452.7943}).wait(1).to({graphics:mask_10_graphics_129,x:167.5662,y:453.6785}).wait(1).to({graphics:mask_10_graphics_130,x:177.6884,y:452.1944}).wait(1).to({graphics:mask_10_graphics_131,x:186.8427,y:449.8411}).wait(1).to({graphics:mask_10_graphics_132,x:186.8427,y:455.8912}).wait(1).to({graphics:mask_10_graphics_133,x:186.8427,y:460.2787}).wait(1).to({graphics:mask_10_graphics_134,x:186.8427,y:460.2781}).wait(1).to({graphics:mask_10_graphics_135,x:186.5515,y:478.6896}).wait(1).to({graphics:mask_10_graphics_136,x:186.5515,y:478.6896}).wait(11));

	// 筆畫08
	this.instance_8 = new lib.CachedBmp_10();
	this.instance_8.setTransform(0,0,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(128).to({_off:false},0).wait(19));

	// 遮色片09 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_143 = new cjs.Graphics().p("AgPC7Qg3gFguglQguglgQg1QgKghACgfQADg4AjgvQAjgvA1gSQA1gTA4AQQA5APAlAqQAkAqAHA7QAIA5gaAyQgZAxg0AdQgsAZgvAAIgPgBg");
	var mask_11_graphics_144 = new cjs.Graphics().p("AjODMQgugZgZgsQgMgVgHgaQgHgZABgaQABgjANggQAOghAYgZQAYgZAggPQAggQAjgCQAqgDAoAQIAMgTQAigvA1gSQA1gTA5AQQA5APAlAqQAkAqAHA7QAIA6gaAxQgZAxg0AdQgzAdg4gFQgagCgZgKQgXAogoAaQgtAbgyABIgEAAQgwAAgsgZg");
	var mask_11_graphics_145 = new cjs.Graphics().p("AizE9Qg5gGgtgnQgugogOg3QgGgVAAgXQgBg5AhgyQAYgjAjgWIgBgWQABgjAOghQANghAYgZQAYgZAggPQAggPAjgDQAqgCAoAPIAMgTQAjgvA1gSQA1gSA5APQA5APAkArQAlAqAHA6QAHA7gZAxQgZAxg0AdQg0Acg3gEQgbgCgZgKQgXAogpAZIgCACQAGA4gYAvQgZAzg1AdQgsAYgtAAIgVgCg");
	var mask_11_graphics_146 = new cjs.Graphics().p("AkQGEQg1gOgjglQgagbgNgjQgNgjAAgmQACgzAdguQAegtAvgXQALgFAMgEQAGgoAZglQAYglAigVIAAgWQABgjANghQAOghAYgZQAYgZAggPQAggPAjgDQApgDAnAQIANgTQAjgvA1gSQA1gSA5APQA5APAlArQAkAqAHA6QAIA7gaAxQgZAyg0AdQgzAcg4gEQgbgDgYgKQgXAogpAZIgCABQAGA4gZAwQgaAzg0AdQgQAIgQAGIgCAJQgJAzgkAoQglAogxAPQgaAHgaAAQgZAAgZgHg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(143).to({graphics:mask_11_graphics_143,x:204.2936,y:518.6524}).wait(1).to({graphics:mask_11_graphics_144,x:192.7584,y:522.6986}).wait(1).to({graphics:mask_11_graphics_145,x:188.2338,y:531.7062}).wait(1).to({graphics:mask_11_graphics_146,x:181.7843,y:539.3406}).wait(1));

	// 筆畫09
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231916").s().p("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");
	this.shape_2.setTransform(187.8352,281.3942);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(143).to({_off:false},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,165.3,375.5,397.7);


(lib.吊線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D70051").s().p("AiqPVIAAgBQAKgBADgEQANgPACgiQACgLAAgvQgGBFgLAXQgNhOAZieIAciNIgLBnQAAAZgEBDQAVjTARh8IB6rSQBKmcBFkzQgHAkgLBNQgKBFgHAcIgvDUQgaB7gSBaQgsDjg1FvQgpEbgeEyQgFAyABBpIAMABQgJAKgKANQgQgJgUgJg");
	this.shape.setTransform(17.15,99.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊線, new cjs.Rectangle(0,0,34.3,199.8), null);


(lib.燈擺動03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 骨架_21
	this.ikNode_20 = new lib.吊線();
	this.ikNode_20.name = "ikNode_20";
	this.ikNode_20.setTransform(15.25,-99.9,0.9999,0.9999,-9.8345,0,0,34.3,-0.1);

	this.ikNode_21 = new lib.燈本體();
	this.ikNode_21.name = "ikNode_21";
	this.ikNode_21.setTransform(13.7,103.25,1,1,-0.4127,0,0,83.3,0.1);

	this.ikNode_23 = new lib.燈下線();
	this.ikNode_23.name = "ikNode_23";
	this.ikNode_23.setTransform(14.8,261.05,1,1,-0.4127,0,0,19.4,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_23,p:{scaleX:1,scaleY:1,rotation:-0.4127,x:14.8,y:261.05,regX:19.4}},{t:this.ikNode_21,p:{scaleX:1,scaleY:1,rotation:-0.4127,x:13.7,y:103.25,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-9.8345,x:15.25,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]}).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4486,x:17.05,y:261,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4486,x:15.8,y:103.2,regX:83.3}},{t:this.ikNode_20,p:{regX:34.4,rotation:-10.4223,x:15.3,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.487,x:19.2,y:261,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.487,x:17.9,y:103.2,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-11.0105,x:15.15,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.5255,x:21.35,y:260.95,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.5255,x:20,y:103.2,regX:83.3}},{t:this.ikNode_20,p:{regX:34.4,rotation:-11.598,x:15.3,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.564,x:23.45,y:260.9,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.564,x:22.05,y:103.15,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-12.1871,x:15.2,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.6024,x:25.7,y:260.85,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.6024,x:24.15,y:103,regX:83.3}},{t:this.ikNode_20,p:{regX:34.4,rotation:-12.7756,x:15.3,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.6409,x:27.85,y:260.8,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.6409,x:26.25,y:102.9,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-13.3644,x:15.2,y:-99.95,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.6785,x:30.05,y:260.65,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.6785,x:28.3,y:102.8,regX:83.3}},{t:this.ikNode_20,p:{regX:34.4,rotation:-13.9529,x:15.35,y:-99.95,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.717,x:32.2,y:260.5,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.717,x:30.4,y:102.65,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-14.542,x:15.15,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.7555,x:34.4,y:260.35,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.7555,x:32.45,y:102.5,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-15.1306,x:15.15,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.794,x:36.55,y:260.2,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.794,x:34.55,y:102.3,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-15.7195,x:15.1,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.8324,x:38.75,y:259.95,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.8324,x:36.6,y:102.1,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-16.3081,x:15.1,y:-99.95,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.8709,x:40.9,y:259.75,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.8709,x:38.7,y:101.9,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-16.8966,x:15.1,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.9085,x:43.1,y:259.5,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.9085,x:40.75,y:101.65,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-17.4843,x:15.1,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.947,x:45.25,y:259.25,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.947,x:42.85,y:101.3,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-18.073,x:15.1,y:-99.95,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.9854,x:47.45,y:258.85,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.9854,x:44.9,y:101,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-18.6625,x:15.15,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.0239,x:49.55,y:258.55,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.0239,x:46.95,y:100.7,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-19.2515,x:15.15,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.0624,x:51.75,y:258.2,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.0624,x:48.95,y:100.4,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-19.8389,x:15.1,y:-99.9,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.1009,x:53.85,y:257.85,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.1009,x:51,y:100.05,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-20.4284,x:15.1,y:-99.85,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.2251,x:47.95,y:258.7,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.6943,x:46.25,y:100.85,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-19.059,x:15.1,y:-99.95,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.3501,x:42.15,y:259.35,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.2877,x:41.45,y:101.55,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-17.6889,x:15.1,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.4743,x:36.2,y:259.95,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.1128,x:36.65,y:102.05,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-16.3198,x:15.15,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.5994,x:30.2,y:260.35,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.5203,x:31.8,y:102.5,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-14.9507,x:15.15,y:-99.95,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.7236,x:24.3,y:260.65,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.9269,x:26.95,y:102.85,regX:83.3}},{t:this.ikNode_20,p:{regX:34.4,rotation:-13.5811,x:15.35,y:-99.95,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.8487,x:18.45,y:260.9,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.3335,x:22.1,y:103.1,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-12.2121,x:15.15,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.9729,x:12.45,y:261,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.7403,x:17.25,y:103.2,regX:83.3}},{t:this.ikNode_20,p:{regX:34.4,rotation:-10.8432,x:15.3,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.0972,x:6.5,y:260.95,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.1471,x:12.4,y:103.15,regX:83.3}},{t:this.ikNode_20,p:{regX:34.4,rotation:-9.4751,x:15.35,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.2223,x:0.55,y:260.75,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.554,x:7.6,y:103.05,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-8.1054,x:15.2,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.3466,x:-5.45,y:260.4,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.9602,x:2.75,y:102.8,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-6.736,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.4717,x:-11.45,y:260.05,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.3673,x:-2.1,y:102.45,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-5.3661,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.596,x:-17.35,y:259.5,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.7739,x:-6.95,y:102,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-3.9965,x:15.25,y:-99.8,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.7203,x:-23.3,y:258.9,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.1806,x:-11.75,y:101.35,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-2.6275,x:15.2,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.8455,x:-29.4,y:258.05,regX:19.3}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.5874,x:-16.55,y:100.65,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-1.2583,x:15.3,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.9698,x:-35.25,y:257.15,regX:19.3}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.9938,x:-21.35,y:99.85,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:0.1058,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.0941,x:-41.1,y:256.15,regX:19.3}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.4003,x:-26.05,y:98.95,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:1.4752,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.2194,x:-47,y:254.95,regX:19.3}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.8069,x:-30.85,y:97.9,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:2.8446,x:15.2,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.3437,x:-52.7,y:253.65,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.2141,x:-35.55,y:96.7,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:4.2148,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.4681,x:-58.6,y:252.35,regX:19.3}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.6197,x:-40.2,y:95.45,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:5.5839,x:15.25,y:-99.8,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.5934,x:-64.4,y:250.75,regX:19.3}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.0273,x:-44.9,y:94.05,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:6.9536,x:15.25,y:-99.8,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.2544,x:-57.3,y:252.6,regX:19.3}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.581,x:-39.05,y:95.7,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:5.2466,x:15.25,y:-99.8,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.9155,x:-50.25,y:254.25,regX:19.3}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.1366,x:-33.25,y:97.3,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:3.54,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.5767,x:-43.05,y:255.75,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.6909,x:-27.3,y:98.65,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:1.833,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.2381,x:-35.9,y:257.05,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.2456,x:-21.4,y:99.8,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:0.1268,x:15.25,y:-99.8,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.8995,x:-28.65,y:258.2,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.8007,x:-15.45,y:100.8,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-1.5749,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.5601,x:-21.45,y:259.05,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.355,x:-9.45,y:101.65,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-3.2816,x:15.25,y:-99.75,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.2216,x:-14.25,y:259.85,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.9088,x:-3.45,y:102.35,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-4.9886,x:15.3,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.8823,x:-7.05,y:260.4,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.4646,x:2.6,y:102.8,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-6.6947,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.5439,x:0.2,y:260.7,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.0188,x:8.6,y:103.1,regX:83.3}},{t:this.ikNode_20,p:{regX:34.4,rotation:-8.4014,x:15.4,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.2064,x:7.55,y:260.95,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.5733,x:14.65,y:103.2,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-10.1078,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.1277,x:14.7,y:260.9,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.1278,x:20.7,y:103.1,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-11.8134,x:15.2,y:-99.8,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.466,x:21.95,y:260.65,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.6825,x:26.7,y:102.85,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-13.519,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.8053,x:29.2,y:260.25,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.2373,x:32.75,y:102.45,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-15.2269,x:15.2,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.1438,x:36.4,y:259.75,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.7922,x:38.8,y:101.8,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-16.9322,x:15.15,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4831,x:43.6,y:258.9,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.3454,x:44.8,y:101.05,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-18.6401,x:15.15,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.8216,x:50.85,y:257.95,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.0936,x:50.75,y:100.05,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-20.3462,x:15.15,y:-99.8,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.1602,x:57.95,y:256.8,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.5386,x:56.7,y:98.9,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-22.0524,x:15.2,y:-99.85,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.4989,x:65.1,y:255.5,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.9837,x:62.6,y:97.6,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-23.7594,x:15.2,y:-99.9,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.8376,x:72.2,y:253.95,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.4289,x:68.4,y:96.1,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-25.4662,x:15.15,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.1764,x:79.25,y:252.2,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.875,x:74.25,y:94.45,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-27.1727,x:15.15,y:-99.85,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.0056,x:76.2,y:253.05,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.805,x:71.45,y:95.3,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-26.3472,x:15.2,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.835,x:73.25,y:253.9,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.735,x:68.65,y:96.1,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-25.5205,x:15.15,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.6633,x:70.2,y:254.65,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.665,x:65.8,y:96.85,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-24.694,x:15.15,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.4927,x:67.25,y:255.35,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.5959,x:62.95,y:97.55,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-23.8702,x:15.15,y:-99.9,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.3212,x:64.15,y:256,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.526,x:60.1,y:98.2,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-23.0443,x:15.15,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.1505,x:61.15,y:256.65,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.456,x:57.25,y:98.85,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-22.2192,x:15.15,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.9791,x:58.05,y:257.25,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.386,x:54.35,y:99.4,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-21.3929,x:15.25,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.8085,x:55,y:257.8,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.3169,x:51.55,y:99.95,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-20.5673,x:15.15,y:-99.85,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.637,x:51.95,y:258.3,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.2469,x:48.6,y:100.45,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-19.7405,x:15.2,y:-99.95,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4656,x:48.85,y:258.7,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.177,x:45.6,y:100.95,regX:83.2}},{t:this.ikNode_20,p:{regX:34.3,rotation:-18.9155,x:15.25,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.295,x:45.8,y:259.15,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.107,x:42.8,y:101.35,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-18.0901,x:15.2,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.1236,x:42.7,y:259.55,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.0379,x:39.95,y:101.7,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-17.2644,x:15.15,y:-99.95,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.9531,x:39.65,y:259.9,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.968,x:37.05,y:102.05,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-16.4384,x:15.2,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.7817,x:36.5,y:260.15,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:34.15,y:102.35,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-15.6115,x:15.2,y:-99.9,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.6103,x:33.4,y:260.45,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.828,x:31.25,y:102.6,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-14.7868,x:15.15,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.4389,x:30.25,y:260.6,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.7581,x:28.3,y:102.8,regX:83.3}},{t:this.ikNode_20,p:{regX:34.4,rotation:-13.961,x:15.35,y:-99.95,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.2676,x:27.2,y:260.85,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.689,x:25.4,y:103,regX:83.3}},{t:this.ikNode_20,p:{regX:34.4,rotation:-13.1345,x:15.3,y:-99.95,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.0962,x:24.05,y:260.95,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.619,x:22.45,y:103.1,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-12.308,x:15.2,y:-99.9,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.0682,x:20.9,y:261.05,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.5491,x:19.55,y:103.2,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-11.484,x:15.25,y:-99.95,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.2396,x:17.95,y:261,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4792,x:16.6,y:103.2,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-10.6588,x:15.25,y:-99.95,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4109,x:14.8,y:261,regX:19.4}},{t:this.ikNode_21,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4109,x:13.75,y:103.2,regX:83.3}},{t:this.ikNode_20,p:{regX:34.3,rotation:-9.8335,x:15.3,y:-99.85,scaleX:0.9999,scaleY:0.9999}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,-103.8,309.5,480.8);


(lib.燈擺動02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 骨架_15
	this.ikNode_20 = new lib.吊線();
	this.ikNode_20.name = "ikNode_20";
	this.ikNode_20.setTransform(15.2,-99.8,1,1,-0.2055,0,0,34.3,0);

	this.ikNode_21 = new lib.燈本體();
	this.ikNode_21.name = "ikNode_21";
	this.ikNode_21.setTransform(-20.2,100.05,1,1,1.3001,0,0,83.4,0);

	this.ikNode_23 = new lib.燈下線();
	this.ikNode_23.name = "ikNode_23";
	this.ikNode_23.setTransform(-23.9,257.85,1,1,17.5834,0,0,19.4,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_23,p:{scaleX:1,scaleY:1,rotation:17.5834,x:-23.9,y:257.85,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.4,rotation:1.3001,x:-20.2,y:100.05,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:-0.2055,x:15.2,y:-99.8,scaleX:1,scaleY:1,regY:0}}]}).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.9543,x:-25.8,y:257.4,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:1.0886,x:-22.8,y:99.6,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:0.5307,x:15.25,y:-99.8,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.3259,x:-27.85,y:256.85,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:0.8805,x:-25.4,y:99.15,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:1.2705,x:15.25,y:-99.8,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.6978,x:-29.85,y:256.35,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:0.6706,x:-27.95,y:98.4,scaleX:1,scaleY:1,regY:-0.1}},{t:this.ikNode_20,p:{rotation:2.0105,x:15.25,y:-99.8,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.0683,x:-31.8,y:255.85,regY:1.1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:0.4608,x:-30.45,y:97.95,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:2.7508,x:15.2,y:-99.75,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.4403,x:-33.65,y:255.2,regY:1,regX:19.5}},{t:this.ikNode_21,p:{regX:83.3,rotation:0.2518,x:-33.05,y:97.4,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:3.4907,x:15.25,y:-99.75,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.8112,x:-35.8,y:254.55,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:0.0428,x:-35.6,y:96.7,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:4.2303,x:15.25,y:-99.7,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.1824,x:-37.65,y:253.9,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.1609,x:-38.1,y:96.1,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:4.9697,x:15.2,y:-99.8,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.5542,x:-39.65,y:253.15,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.3698,x:-40.65,y:95.4,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:5.71,x:15.25,y:-99.75,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.926,x:-41.6,y:252.4,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.5797,x:-43.15,y:94.6,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:6.4504,x:15.25,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.2968,x:-43.4,y:251.65,regY:1,regX:19.5}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.7887,x:-45.6,y:93.9,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:7.19,x:15.25,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.3261,x:-45.45,y:250.85,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.9976,x:-48.1,y:93.1,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:7.93,x:15.3,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.9563,x:-47.2,y:250,regY:1,regX:19.5}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.2075,x:-50.6,y:92.2,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:8.6696,x:15.25,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.5837,x:-49.25,y:249.1,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.4165,x:-53.1,y:91.35,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:9.4097,x:15.25,y:-99.7,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.2132,x:-51.15,y:248.15,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.6256,x:-55.5,y:90.5,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:10.1497,x:15.25,y:-99.75,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.8415,x:-53.05,y:247.2,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.8346,x:-58,y:89.55,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:10.8895,x:15.3,y:-99.7,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.4702,x:-54.85,y:246.3,regY:1.1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.0437,x:-60.4,y:88.6,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:11.6294,x:15.3,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.0996,x:-56.7,y:245.3,regY:1.1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.2537,x:-62.8,y:87.55,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:12.3695,x:15.25,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.7283,x:-58.55,y:244.15,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.4628,x:-65.25,y:86.5,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:13.1091,x:15.25,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-13.3561,x:-60.35,y:243,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.672,x:-67.6,y:85.45,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:13.849,x:15.25,y:-99.65,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.984,x:-62.1,y:241.95,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.8812,x:-70,y:84.4,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:14.5887,x:15.3,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-16.6139,x:-63.85,y:240.8,regY:1,regX:19.5}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.0905,x:-72.4,y:83.25,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:15.3293,x:15.3,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-18.2419,x:-65.75,y:239.65,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.2997,x:-74.75,y:82.1,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:16.0695,x:15.3,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-19.8699,x:-67.5,y:238.5,regY:1.1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.5091,x:-77.05,y:80.95,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:16.8084,x:15.35,y:-99.7,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-21.4989,x:-69.3,y:237.2,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.7176,x:-79.4,y:79.75,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:17.5488,x:15.35,y:-99.65,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.1274,x:-70.9,y:235.85,regY:1,regX:19.5}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.927,x:-81.7,y:78.55,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:18.2887,x:15.3,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.7558,x:-72.75,y:234.6,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-4.1365,x:-83.95,y:77.3,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:19.0286,x:15.3,y:-99.65,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.3852,x:-74.4,y:233.25,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-4.346,x:-86.25,y:76,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:19.7683,x:15.35,y:-99.65,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-28.0136,x:-76.15,y:231.9,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-4.5548,x:-88.5,y:74.65,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:20.5088,x:15.25,y:-99.65,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.7629,x:-74.55,y:233.05,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-4.4022,x:-86.5,y:75.85,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:19.8557,x:15.3,y:-99.6,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.5131,x:-72.8,y:234.2,regY:1,regX:19.5}},{t:this.ikNode_21,p:{regX:83.3,rotation:-4.2505,x:-84.55,y:77,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:19.2036,x:15.3,y:-99.65,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.262,x:-71.35,y:235.45,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-4.098,x:-82.5,y:78.1,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:18.5502,x:15.25,y:-99.6,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.0114,x:-69.7,y:236.5,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.9454,x:-80.5,y:79.2,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:17.8977,x:15.35,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:-0.1}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-21.7595,x:-68.15,y:237.65,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.7929,x:-78.45,y:80.3,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:17.2446,x:15.25,y:-99.65,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-20.5089,x:-66.5,y:238.75,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.6405,x:-76.35,y:81.35,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:16.5924,x:15.2,y:-99.55,scaleX:0.9999,scaleY:0.9999,regY:0.1}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-19.2592,x:-64.8,y:239.8,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.488,x:-74.3,y:82.4,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:15.94,x:15.3,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-18.008,x:-63.15,y:240.8,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.3357,x:-72.25,y:83.35,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:15.2872,x:15.25,y:-99.7,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-16.7572,x:-61.5,y:241.8,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.1833,x:-70.2,y:84.25,scaleX:1,scaleY:1,regY:-0.1}},{t:this.ikNode_20,p:{rotation:14.6347,x:15.25,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-15.5067,x:-59.8,y:242.8,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-3.03,x:-68.05,y:85.3,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:13.9815,x:15.25,y:-99.75,scaleX:0.9999,scaleY:0.9999,regY:-0.1}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.2572,x:-58.1,y:243.75,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.8777,x:-65.95,y:86.2,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:13.329,x:15.2,y:-99.65,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-13.0056,x:-56.3,y:244.65,regY:1,regX:19.5}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.7254,x:-63.8,y:87.2,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:12.6758,x:15.3,y:-99.65,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.7553,x:-54.65,y:245.75,regY:1.1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.5731,x:-61.75,y:88.05,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:12.0234,x:15.3,y:-99.65,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.5038,x:-53,y:246.5,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.4208,x:-59.6,y:88.95,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:11.3706,x:15.2,y:-99.75,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-9.2533,x:-51.25,y:247.4,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.2677,x:-57.45,y:89.75,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:10.7185,x:15.25,y:-99.7,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.0027,x:-49.5,y:248.15,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-2.1154,x:-55.3,y:90.65,scaleX:1,scaleY:1,regY:0.1}},{t:this.ikNode_20,p:{rotation:10.0655,x:15.2,y:-99.75,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.7516,x:-47.8,y:249,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.9632,x:-53.15,y:91.35,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:9.4132,x:15.25,y:-99.7,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.5012,x:-46,y:249.8,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.811,x:-50.95,y:92.1,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:8.7597,x:15.2,y:-99.75,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.2516,x:-44.25,y:250.55,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.658,x:-48.8,y:92.9,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:8.1076,x:15.2,y:-99.75,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.9996,x:-42.45,y:251.3,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.5058,x:-46.6,y:93.55,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:7.4545,x:15.2,y:-99.75,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.749,x:-40.5,y:251.95,regY:1,regX:19.5}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.3536,x:-44.4,y:94.25,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:6.8024,x:15.25,y:-99.75,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4984,x:-38.85,y:252.65,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.2005,x:-42.2,y:94.95,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:6.1495,x:15.25,y:-99.75,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.7467,x:-37.05,y:253.35,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-1.0484,x:-39.95,y:95.6,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:5.4965,x:15.25,y:-99.75,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.9974,x:-35.25,y:254,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.8962,x:-37.7,y:96.15,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:4.8442,x:15.25,y:-99.75,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.2483,x:-33.45,y:254.55,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.7432,x:-35.5,y:96.75,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:4.1917,x:15.25,y:-99.8,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.498,x:-31.6,y:255.2,regY:1.1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.591,x:-33.2,y:97.35,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:3.5389,x:15.25,y:-99.75,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.749,x:-29.8,y:255.7,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.4389,x:-31,y:97.85,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:2.8865,x:15.25,y:-99.75,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.0009,x:-27.95,y:256.15,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.2859,x:-28.8,y:98.4,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:2.2335,x:15.15,y:-99.8,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.251,x:-26.1,y:256.7,regY:1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:-0.1338,x:-26.5,y:98.9,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:1.581,x:15.2,y:-99.75,scaleX:1,scaleY:1,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.5016,x:-24.15,y:257.15,regY:1,regX:19.5}},{t:this.ikNode_21,p:{regX:83.3,rotation:0.0131,x:-24.25,y:99.3,scaleX:0.9999,scaleY:0.9999,regY:0}},{t:this.ikNode_20,p:{rotation:0.9277,x:15.2,y:-99.85,scaleX:0.9999,scaleY:0.9999,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.7528,x:-22.45,y:257.7,regY:1.1,regX:19.4}},{t:this.ikNode_21,p:{regX:83.3,rotation:0.1661,x:-22,y:99.75,scaleX:1,scaleY:1,regY:0}},{t:this.ikNode_20,p:{rotation:0.2754,x:15.15,y:-99.85,scaleX:1,scaleY:1,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.5,-111.6,234.4,486.70000000000005);


(lib.燈擺動01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 骨架_15
	this.ikNode_20 = new lib.吊線();
	this.ikNode_20.name = "ikNode_20";
	this.ikNode_20.setTransform(15.15,-99.85,1,1,0,0,0,34.3,0);

	this.ikNode_21 = new lib.燈本體();
	this.ikNode_21.name = "ikNode_21";
	this.ikNode_21.setTransform(-20.95,99.95,1,1,0,0,0,83.4,0);

	this.ikNode_23 = new lib.燈下線();
	this.ikNode_23.name = "ikNode_23";
	this.ikNode_23.setTransform(-21.05,257.8,1,1,0,0,0,19.4,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_23,p:{rotation:0,x:-21.05,y:257.8,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:0,x:-20.95,y:99.95,regY:0}},{t:this.ikNode_20,p:{rotation:0,x:15.15,y:-99.85,regY:0}}]}).to({state:[{t:this.ikNode_23,p:{rotation:0.5718,x:-15.4,y:258.3,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-0.7536,x:-17.35,y:100.5,regY:0}},{t:this.ikNode_20,p:{rotation:-1.0151,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:1.1436,x:-9.75,y:258.85,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-1.5083,x:-13.85,y:101,regY:0}},{t:this.ikNode_20,p:{rotation:-2.0305,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:1.7156,x:-4.15,y:259.25,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-2.2623,x:-10.25,y:101.5,regY:0}},{t:this.ikNode_20,p:{rotation:-3.0465,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:2.2877,x:1.55,y:259.55,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-3.0167,x:-6.65,y:101.9,regY:0}},{t:this.ikNode_20,p:{rotation:-4.0618,x:15.15,y:-99.85,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:2.86,x:7.2,y:259.75,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-3.7708,x:-3.1,y:102.25,regY:0}},{t:this.ikNode_20,p:{rotation:-5.0774,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:3.4318,x:12.85,y:259.9,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-4.5256,x:0.5,y:102.55,regY:0}},{t:this.ikNode_20,p:{rotation:-6.0929,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:4.0039,x:18.5,y:260,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-5.2794,x:4.1,y:102.85,regY:0}},{t:this.ikNode_20,p:{rotation:-7.1085,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:4.5755,x:24.05,y:259.95,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-6.034,x:7.7,y:103,regY:0}},{t:this.ikNode_20,p:{rotation:-8.1238,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:5.1476,x:29.7,y:259.8,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-6.788,x:11.25,y:103.1,regY:0}},{t:this.ikNode_20,p:{rotation:-9.1391,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:5.7194,x:35.35,y:259.6,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-7.5423,x:14.9,y:103.1,regY:0}},{t:this.ikNode_20,p:{rotation:-10.1553,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:6.2916,x:41.15,y:259.3,regX:19.5,regY:1}},{t:this.ikNode_21,p:{rotation:-8.2969,x:18.5,y:103.05,regY:0}},{t:this.ikNode_20,p:{rotation:-11.1704,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:6.8637,x:46.7,y:258.85,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-9.0505,x:22.1,y:103,regY:0}},{t:this.ikNode_20,p:{rotation:-12.1863,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:7.4356,x:52.3,y:258.35,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-9.8056,x:25.7,y:102.85,regY:0}},{t:this.ikNode_20,p:{rotation:-13.2018,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:8.0082,x:57.95,y:257.8,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-10.5596,x:29.3,y:102.7,regY:0.1}},{t:this.ikNode_20,p:{rotation:-14.2169,x:15.2,y:-99.75,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:8.5798,x:63.6,y:257.1,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-11.3139,x:32.9,y:102.35,regY:0}},{t:this.ikNode_20,p:{rotation:-15.2329,x:15.2,y:-99.75,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:9.1514,x:69.2,y:256.35,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-12.0683,x:36.45,y:102.05,regY:0}},{t:this.ikNode_20,p:{rotation:-16.2484,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:9.7239,x:74.75,y:255.6,regX:19.4,regY:1.1}},{t:this.ikNode_21,p:{rotation:-12.8222,x:40,y:101.65,regY:0}},{t:this.ikNode_20,p:{rotation:-17.2637,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:10.2957,x:80.35,y:254.65,regX:19.4,regY:1.1}},{t:this.ikNode_21,p:{rotation:-13.5765,x:43.55,y:101.15,regY:0}},{t:this.ikNode_20,p:{rotation:-18.2793,x:15.15,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:10.8676,x:85.95,y:253.5,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-14.3306,x:47.15,y:100.6,regY:0}},{t:this.ikNode_20,p:{rotation:-19.2951,x:15.15,y:-99.75,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:11.4397,x:91.5,y:252.4,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-15.0853,x:50.7,y:100.05,regY:0}},{t:this.ikNode_20,p:{rotation:-20.3106,x:15.15,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:12.0121,x:96.95,y:251.3,regX:19.4,regY:1.1}},{t:this.ikNode_21,p:{rotation:-15.8391,x:54.25,y:99.35,regY:0}},{t:this.ikNode_20,p:{rotation:-21.3256,x:15.2,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:12.5838,x:102.65,y:249.95,regX:19.5,regY:1.1}},{t:this.ikNode_21,p:{rotation:-16.5939,x:57.8,y:98.65,regY:0}},{t:this.ikNode_20,p:{rotation:-22.3417,x:15.15,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:13.156,x:108.05,y:248.4,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-17.3481,x:61.25,y:97.85,regY:0}},{t:this.ikNode_20,p:{rotation:-23.3569,x:15.2,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:13.7277,x:113.5,y:246.95,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-18.1024,x:64.75,y:97,regY:0}},{t:this.ikNode_20,p:{rotation:-24.3723,x:15.2,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:14.2998,x:118.95,y:245.4,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-18.8566,x:68.25,y:96.1,regY:0}},{t:this.ikNode_20,p:{rotation:-25.3881,x:15.2,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:14.8717,x:124.4,y:243.75,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-19.6111,x:71.7,y:95.1,regY:0}},{t:this.ikNode_20,p:{rotation:-26.4036,x:15.15,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:15.4441,x:129.8,y:242.05,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-20.3648,x:75.2,y:94.1,regY:0}},{t:this.ikNode_20,p:{rotation:-27.4194,x:15.2,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:16.0162,x:135.15,y:240.2,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-21.1194,x:78.5,y:93,regY:0}},{t:this.ikNode_20,p:{rotation:-28.4347,x:15.15,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:15.4995,x:130.35,y:241.9,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-20.4384,x:75.5,y:94,regY:0}},{t:this.ikNode_20,p:{rotation:-27.5179,x:15.15,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:14.9831,x:125.45,y:243.45,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-19.7569,x:72.45,y:95,regY:0.1}},{t:this.ikNode_20,p:{rotation:-26.5998,x:15.15,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:14.4658,x:120.55,y:244.95,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-19.0755,x:69.25,y:95.8,regY:0}},{t:this.ikNode_20,p:{rotation:-25.6826,x:15.15,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:13.9491,x:115.65,y:246.4,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-18.3943,x:66.15,y:96.65,regY:0}},{t:this.ikNode_20,p:{rotation:-24.7654,x:15.2,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:13.4326,x:110.65,y:247.75,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-17.7128,x:62.95,y:97.45,regY:0}},{t:this.ikNode_20,p:{rotation:-23.8482,x:15.15,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:12.9164,x:105.75,y:249.05,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-17.0314,x:59.8,y:98.15,regY:0}},{t:this.ikNode_20,p:{rotation:-22.9311,x:15.2,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:12.3993,x:100.85,y:250.4,regX:19.5,regY:1.1}},{t:this.ikNode_21,p:{rotation:-16.3505,x:56.65,y:98.85,regY:0}},{t:this.ikNode_20,p:{rotation:-22.0142,x:15.2,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:11.8824,x:95.9,y:251.45,regX:19.5,regY:1}},{t:this.ikNode_21,p:{rotation:-15.6692,x:53.45,y:99.55,regY:0}},{t:this.ikNode_20,p:{rotation:-21.0966,x:15.2,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:11.3657,x:90.75,y:252.6,regX:19.4,regY:1.1}},{t:this.ikNode_21,p:{rotation:-14.9875,x:50.25,y:100.1,regY:0}},{t:this.ikNode_20,p:{rotation:-20.1792,x:15.2,y:-99.75,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:10.8497,x:85.75,y:253.55,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-14.3062,x:47,y:100.65,regY:0}},{t:this.ikNode_20,p:{rotation:-19.2616,x:15.2,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:10.3329,x:80.75,y:254.6,regX:19.4,regY:1.1}},{t:this.ikNode_21,p:{rotation:-13.6251,x:43.8,y:101.1,regY:0}},{t:this.ikNode_20,p:{rotation:-18.3445,x:15.15,y:-99.7,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:9.8162,x:75.7,y:255.35,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-12.9442,x:40.6,y:101.55,regY:0}},{t:this.ikNode_20,p:{rotation:-17.4277,x:15.2,y:-99.65,regY:0.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:9.2993,x:70.65,y:256.15,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-12.2624,x:37.4,y:101.95,regY:0}},{t:this.ikNode_20,p:{rotation:-16.5101,x:15.2,y:-99.75,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:8.7832,x:65.55,y:256.85,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-11.5815,x:34.15,y:102.2,regY:0}},{t:this.ikNode_20,p:{rotation:-15.593,x:15.2,y:-99.75,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:8.266,x:60.5,y:257.5,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-10.9005,x:30.9,y:102.5,regY:0}},{t:this.ikNode_20,p:{rotation:-14.6756,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:7.7495,x:55.35,y:258.05,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-10.2184,x:27.7,y:102.7,regY:0}},{t:this.ikNode_20,p:{rotation:-13.7583,x:15.15,y:-99.75,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:7.2328,x:50.3,y:258.55,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-9.5376,x:24.4,y:102.9,regY:0}},{t:this.ikNode_20,p:{rotation:-12.8411,x:15.2,y:-99.75,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:6.7158,x:45.2,y:258.95,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-8.8566,x:21.15,y:103,regY:0}},{t:this.ikNode_20,p:{rotation:-11.9236,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:6.1993,x:40.15,y:259.35,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-8.1751,x:17.9,y:103.1,regY:0}},{t:this.ikNode_20,p:{rotation:-11.0064,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:5.6825,x:35,y:259.7,regX:19.4,regY:1.1}},{t:this.ikNode_21,p:{rotation:-7.4937,x:14.65,y:103.1,regY:0}},{t:this.ikNode_20,p:{rotation:-10.0896,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:5.1661,x:29.85,y:259.8,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-6.8126,x:11.4,y:103.05,regY:0}},{t:this.ikNode_20,p:{rotation:-9.1718,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:4.6492,x:24.8,y:260,regX:19.4,regY:1.1}},{t:this.ikNode_21,p:{rotation:-6.1307,x:8.15,y:103,regY:0}},{t:this.ikNode_20,p:{rotation:-8.2546,x:15.2,y:-99.65,regY:0.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:4.1328,x:19.7,y:260,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-5.4497,x:4.9,y:102.85,regY:0}},{t:this.ikNode_20,p:{rotation:-7.3377,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:3.6158,x:14.65,y:260.05,regX:19.4,regY:1.1}},{t:this.ikNode_21,p:{rotation:-4.7685,x:1.65,y:102.65,regY:0}},{t:this.ikNode_20,p:{rotation:-6.4201,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:3.0999,x:9.55,y:259.85,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-4.0872,x:-1.55,y:102.4,regY:0}},{t:this.ikNode_20,p:{rotation:-5.5033,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:2.5826,x:4.45,y:259.65,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-3.4064,x:-4.85,y:102.15,regY:0}},{t:this.ikNode_20,p:{rotation:-4.5861,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:2.0663,x:-0.65,y:259.45,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-2.7244,x:-8.05,y:101.8,regY:0}},{t:this.ikNode_20,p:{rotation:-3.6683,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:1.5494,x:-5.8,y:259.1,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-2.0436,x:-11.3,y:101.4,regY:0}},{t:this.ikNode_20,p:{rotation:-2.7515,x:15.15,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:1.0326,x:-10.85,y:258.75,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-1.3622,x:-14.55,y:100.9,regY:0}},{t:this.ikNode_20,p:{rotation:-1.8337,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:0.5158,x:-15.95,y:258.25,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:-0.6811,x:-17.7,y:100.4,regY:0}},{t:this.ikNode_20,p:{rotation:-0.9172,x:15.2,y:-99.8,regY:0}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:0,x:-21.05,y:257.8,regX:19.4,regY:1}},{t:this.ikNode_21,p:{rotation:0,x:-20.95,y:99.95,regY:0}},{t:this.ikNode_20,p:{rotation:0,x:15.15,y:-99.85,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-99.8,317.3,476.6);


// stage content:
(lib.春燈01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 擺動02
	this.instance = new lib.燈擺動02();
	this.instance.setTransform(263.55,122.7,0.7661,0.7661,-11.1893,0,0,-20.9,136.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 春
	this.instance_1 = new lib.春();
	this.instance_1.setTransform(350.8,298.1,0.8,0.8,0,0,0,176.2,259.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 擺動01
	this.instance_2 = new lib.燈擺動01();
	this.instance_2.setTransform(176.4,244.15,1,1,-4.7062,0,0,-20,134.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 擺動03
	this.instance_3 = new lib.燈擺動03();
	this.instance_3.setTransform(97.9,151.95,0.5712,0.5712,0,0,0,14.3,138.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 背景
	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(1.55,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 底稿顏色
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape.setTransform(279.925,288.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,227.1,280.6,348.29999999999995);
// library properties:
lib.properties = {
	id: 'C9D4649FF50A1F40B1BD619D4E7DD477',
	width: 559,
	height: 575,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/春燈01_atlas_1.png?1606009150337", id:"春燈01_atlas_1"},
		{src:"images/春燈01_atlas_2.png?1606009150337", id:"春燈01_atlas_2"},
		{src:"images/春燈01_atlas_3.png?1606009150337", id:"春燈01_atlas_3"},
		{src:"images/春燈01_atlas_4.png?1606009150337", id:"春燈01_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C9D4649FF50A1F40B1BD619D4E7DD477'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
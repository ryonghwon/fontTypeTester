var typeTester = typeTester ||
(function(){
	var _defaultW = 600,
	_defaultH = 100,
	_defaultP = 20,
	_defaultText = 'The quick brown fox jumps over the lazy dog',
	_fonts = [	{name:'돋움',font:'dotum'},
				{name:'맑은고딕',font:'malgunGothic'},
				{name:'아리따돋움',font:'aritaDotum'},
				{name:'아리따산스',font:'aritaSans'}
			],
	_align = ['left','right','center','justify'],
	_word = ['normal','break-all','break-word'],
	_defaultFT = 0,
	_defaultFS = 12,
	_defaultLH = 18,
	_defaultWS = 0,
	_defaultLS = 0,
	_defaultColorR = 0,
	_defaultColorG = 0,
	_defaultColorB = 0,
	_defaultColor = hexFromRGB(_defaultColorR, _defaultColorG, _defaultColorB),
	
	_defaultBGColorR = 255,
	_defaultBGColorG = 255,
	_defaultBGColorB = 255,
	_defaultBGColor = hexFromRGB(_defaultBGColorR, _defaultBGColorG, _defaultBGColorB),
	
	_defaultTA = 0,
	_defaultWB = 0,
	
	_curW = _defaultW,
	_curH = _defaultH,
	_curP = _defaultP,
	_curText = _defaultText,
	_curFT = _defaultFT,
	_curFS = _defaultFS,
	_curLH = _defaultLH,
	_curWS = _defaultWS,
	_curLS = _defaultLS,
	_curColorR = _defaultColorR,
	_curColorG = _defaultColorG,
	_curColorB = _defaultColorB,
	_curColor = hexFromRGB(_curColorR, _curColorG, _curColorB),
	
	_curBGColorR = _defaultBGColorR,
	_curBGColorG = _defaultBGColorG,
	_curBGColorB = _defaultBGColorB,
	_curBGColor = hexFromRGB(_curBGColorR, _curBGColorG, _curBGColorB),
	
	
	_curTA = _defaultTA,
	_curWB = _defaultWB;
	
	function init(){
		
		var 
		
		$defaultW = $('#defaultW'),
		$defaultH = $('#defaultH'),
		$defaultP = $('#defaultP'),
		$defaultFT = $('#defaultFT'),
		$defaultFS = $('#defaultFS'),
		$defaultLH = $('#defaultLH'),
		$defaultWS = $('#defaultWS'),
		$defaultLS = $('#defaultLS'),
		$defaultC = $('#defaultC'),
		$defaultBG = $('#defaultBG'),
		$defaultTA = $('#defaultTA'),
		$defaultWB = $('#defaultWB'),
		
		$curW = $('#curW'),
		$curH = $('#curH'),
		$curP = $('#curP'),
		$curFS = $('#curFS'),
		$curLH = $('#curLH'),
		$curWS = $('#curWS'),
		$curLS = $('#curLS'),
		$curC = $('#curC'),
		$red = $('#red'),
		$green = $('#green'),
		$blue = $('#blue'),
		$curBG = $('#curBG'),
		$bgRed = $('#bgRed'),
		$bgGreen = $('#bgGreen'),
		$bgBlue = $('#bgBlue'),
		
		$textWidth = $('#textWidth'),
		$textHeight = $('#textHeight'),
		$textPadding = $('#textPadding'),
		
		$fontType = $('#fontType'),
		$fontSize = $('#fontSize'),
		$lineHeight = $('#lineHeight'),
		$wordSpacing = $('#wordSpacing'),
		$letterSpacing = $('#letterSpacing'),
		$textAlign = $('#textAlign'),
		$wordBreak = $('#wordBreak'),
		$swatch = $('#swatch'),
		$bgSwatch = $('#bgSwatch'),
		
		$textChange = $('#textChange'),
		$changeBtn = $('#changeBtn'), 
		
		$resultFont = $('#resultFont'),
		$resultText = $('#resultText');
		
		
		$defaultW.html(_defaultW);
		$defaultH.html(_defaultH);
		$defaultP.html(_defaultP);
		$defaultFT.html(_fonts[_defaultFT].name);
		$defaultFS.html(_defaultFS);
		$defaultLH.html(_defaultLH);
		$defaultWS.html(_defaultWS);
		$defaultLS.html(_defaultLS);
		$defaultC.html('#'+_defaultColor).css({'color':'#'+_defaultColor});
		$defaultBG.html('#'+_defaultBGColor).css({'color':'#'+_defaultBGColor});
		$defaultTA.html(_align[_defaultTA]);
		$defaultWB.html(_word[_defaultWB]);
		
		$curW.html(_curW);
		$curH.html(_curH);
		$curP.html(_curP);
		$curFS.html(_curFS);
		$curLH.html(_curLH);
		$curWS.html(_curWS);
		$curLS.html(_curLS);
		$curC.html('#'+_curColor).css({'color':'#'+_curColor});
		$curBG.html('#'+_curBGColor).css({'color':'#'+_curBGColor});
		
		$swatch.css({'background-color':'#'+_curColor});
		$bgSwatch.css({'background-color':'#'+_curBGColor});
		
		$textChange.attr('placeholder',_defaultText);
		$resultText.html(_defaultText).width(_curW).height(_curH);
		$resultText.css({'padding':_curP+'px'});
		$resultText.css({'font-size':_curFS+'pt'});
		$resultText.css({'line-height':_curLH+'pt'});
		$resultText.css({'word-spacing':_curWS+'pt'});
		$resultText.css({'letter-spacing':_curLS+'pt'});
		$resultText.css({'color':'#'+_curColor});
		$resultText.css({'text-align':_align[_curTA]});
		$resultText.css({'word-break':_word[_curWB]});
		$resultText.removeClass().addClass(_fonts[_curFT].font);
		
		$textWidth.slider({
			range:'min',
			value:_curW,
			min:100,
			max:2000,
			slide:function(e,ui){
				_curW = ui.value;
				$curW.html(_curW);
				$resultText.width(_curW)
			}
		});
		$textHeight.slider({
			range:'min',
			value:_curH,
			min:100,
			max:2000,
			slide:function(e,ui){
				_curH = ui.value;
				$curH.html(_curH);
				$resultText.height(_curH);
			}
		});
		
		$textPadding.slider({
			range:'min',
			value:_curP,
			min:0,
			max:200,
			slide:function(e,ui){
				_curP = ui.value;
				$curP.html(_curP);
				$resultText.css({'padding':_curP+'px'});
			}
		});
		
		
		$fontSize.slider({
			range:'min',
			value:_curFS,
			min:10,
			max:100,
			slide:function(e,ui){
				_curFS = ui.value;
				$curFS.html(_curFS);
				$resultText.css({'font-size':_curFS+'pt'});
			}
		});
		
		$lineHeight.slider({
			range:'min',
			value:_curLH,
			min:10,
			max:120,
			slide:function(e,ui){
				_curLH = ui.value;
				$curLH.html(_curLH);
				$resultText.css({'line-height':_curLH+'pt'});
			}
		});
		
		$wordSpacing.slider({
			range:'min',
			value:_curWS,
			min:-10,
			max:10,
			slide:function(e,ui){
				_curWS = ui.value;
				$curWS.html(_curWS);
				$resultText.css({'word-spacing':_curWS+'pt'});
			}
		});
		
		$letterSpacing.slider({
			range:'min',
			value:_curLS,
			min:-10,
			max:10,
			slide:function(e,ui){
				_curLS = ui.value;
				$curLS.html(_curLS);
				$resultText.css({'letter-spacing':_curLS+'pt'});
			}
		});
		
		$red.slider({
			range:'min',
			max:255,
			value:_curColorR,
			slide:refreshColorSwatch,
			change:refreshColorSwatch
		});
		
		$green.slider({
			range:'min',
			max:255,
			value:_curColorG,
			slide:refreshColorSwatch,
			change:refreshColorSwatch
		});
		
		$blue.slider({
			range:'min',
			max:255,
			value:_curColorB,
			slide:refreshColorSwatch,
			change:refreshColorSwatch
		});
		
		$bgRed.slider({
			range:'min',
			max:255,
			value:_curBGColorR,
			slide:refreshBGColorSwatch,
			change:refreshBGColorSwatch
		});
		
		$bgGreen.slider({
			range:'min',
			max:255,
			value:_curBGColorG,
			slide:refreshBGColorSwatch,
			change:refreshBGColorSwatch
		});
		
		$bgBlue.slider({
			range:'min',
			max:255,
			value:_curBGColorB,
			slide:refreshBGColorSwatch,
			change:refreshBGColorSwatch
		});
		
		$textChange.bind('keypress', function(e){
			if(!e.ctrlKey) return;
			if(e.keyCode == 10){
				e.preventDefault();
				var text = $textChange.val();
				if(text != ''){
					_curText = text.replace(/\n/gi, '<br>');
					$resultText.html(_curText);
				}else{
					alert('내용을 입력해주세요.');
					$resultText.html(_defaultText);
				}
			}
		});
		
		$changeBtn.button().bind('click', function(e){
			e.preventDefault();
			var text = $textChange.val();
			if(text != ''){
				_curText = text.replace(/\n/gi, '<br>');
				$resultText.html(_curText);
			}else{
				alert('내용을 입력해주세요.');
				$resultText.html(_defaultText);
			}
		});
		
		$.each(_fonts, function(i,d){
			var html = (_curFT == i)? '<input type="radio" id="FT_radio'+parseInt(i+1)+'" name="FT_radio" checked="checked"><label for="FT_radio'+parseInt(i+1)+'">'+d.name+'</label>' : '<input type="radio" id="FT_radio'+parseInt(i+1)+'" name="FT_radio"><label for="FT_radio'+parseInt(i+1)+'">'+d.name+'</label>';
			$fontType.append(html);
			if(i == _fonts.length-1){
				$fontType.buttonset();
				$('input[name="FT_radio"]:radio').bind('change', function(){
					_curFT = parseInt(this.id.replace('FT_radio','')-1);
					$resultText.removeClass().addClass(_fonts[_curFT].font);
				});
			}
		});
		
		$.each(_align, function(i,d){
			var html = (_curTA == i)? '<input type="radio" id="TA_radio'+parseInt(i+1)+'" name="TA_radio" checked="checked"><label for="TA_radio'+parseInt(i+1)+'">'+d+'</label>' : '<input type="radio" id="TA_radio'+parseInt(i+1)+'" name="TA_radio"><label for="TA_radio'+parseInt(i+1)+'">'+d+'</label>';
			$textAlign.append(html);
			if(i == _align.length-1){
				$textAlign.buttonset();
				$('input[name="TA_radio"]:radio').bind('change', function(){
					_curTA = parseInt(this.id.replace('TA_radio','')-1);
					$resultText.css({'text-align':_align[_curTA]});
				});
			}
		});
		
		$.each(_word, function(i,d){
			var html = (_curWB == i)? '<input type="radio" id="WB_radio'+parseInt(i+1)+'" name="WB_radio" checked="checked"><label for="WB_radio'+parseInt(i+1)+'">'+d+'</label>' : '<input type="radio" id="WB_radio'+parseInt(i+1)+'" name="WB_radio"><label for="WB_radio'+parseInt(i+1)+'">'+d+'</label>';
			$wordBreak.append(html);
			if(i == _word.length-1){
				$wordBreak.buttonset();
				$('input[name="WB_radio"]:radio').bind('change', function(){
					_curWB = parseInt(this.id.replace('WB_radio','')-1);
					$resultText.css({'word-break':_word[_curWB]});
				});
			}
		});
    }
	
	function refreshColorSwatch(){
		var $curC = $('#curC'),
		$red = $('#red'),
		$green = $('#green'),
		$blue = $('#blue'),
		$swatch = $('#swatch'),
		$resultText = $('#resultText');
		_curColorR = $red.slider('value');
		_curColorG = $green.slider('value');
		_curColorB = $blue.slider('value');
		_curColor = hexFromRGB(_curColorR, _curColorG, _curColorB);
		$curC.html('#'+_curColor).css({'color':'#'+_curColor});
		$swatch.css({'background-color':'#'+_curColor});
		$resultText.css({'color':'#'+_curColor});
	}
	
	function refreshBGColorSwatch(){
		var $curBG = $('#curBG'),
		$bgRed = $('#bgRed'),
		$bgGreen = $('#bgGreen'),
		$bgBlue = $('#bgBlue'),
		$bgSwatch = $('#bgSwatch'),
		$resultText = $('#resultText');
		_curBGColorR = $bgRed.slider('value');
		_curBGColorG = $bgGreen.slider('value');
		_curBGColorB = $bgBlue.slider('value');
		_curBGColor = hexFromRGB(_curBGColorR, _curBGColorG, _curBGColorB);
		$curBG.html('#'+_curBGColor).css({'color':'#'+_curBGColor});
		$bgSwatch.css({'background-color':'#'+_curBGColor});
		$resultText.css({'background-color':'#'+_curBGColor});
	}
	
	function hexFromRGB(r,g,b){
		var hex = [r.toString(16),g.toString(16),b.toString(16)];
		$.each(hex,function(n,v){
			if(v.length === 1){
				hex[n] = '0'+v;
			}
		});
		return hex.join('').toUpperCase();
	}
	
	return {
        init: init,
    }
})();

$(document).ready(function(){
	typeTester.init();
});

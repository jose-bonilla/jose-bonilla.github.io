
var main = function() {
var slida = false;
var slidb = false;
var slidc = false;
var slidd = false;
var slide = false;
var resumeIndExpShow = true;
var resumeEducationShow = false;
var resumeSkillsShow = false;

	 
		$('#circlea').click(function() {
			if (!slida) {
				//sliding
				$('#recta').animate({
					left: '-950px'
				}, 400);
				//Rotation
				$('#circlea').animate({borderSpacing: -90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				
				slida = true;
				return;
			}
			if (slida) {
				$('#recta').animate({
					left: '0px'
				}, 400);
				//Rotation
				$('#circlea').animate({borderSpacing: +0 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slida = false;
				return;
			}
		});
		
		$('#circleb').click(function() {

			if (!slidb) {
				$('#rectb').animate({
					left: '950px'
				}, 400);
				//Rotation
				$('#circleb').animate({borderSpacing: +90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slidb = true;
				return;
			}
			if (slidb) {
				$('#rectb').animate({
					left: '0px'
				}, 400);
				//Rotation
				$('#circleb').animate({borderSpacing: -90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slidb = false;
				return;
			}
		});
		
		$('#circlec').click(function() {

			if (!slidc) {
				$('#rectc').animate({
					left: '-950px'
				}, 400);
				//Rotation
				$('#circlec').animate({borderSpacing: -90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slidc = true;
				return;
			}
			if (slidc) {
				$('#rectc').animate({
					left: '0px'
				}, 400);
				//Rotation
				$('#circlec').animate({borderSpacing: +90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slidc = false;
				return;
			}
		});
		
		$('#circled').click(function() {

			if (!slidd) {
				$('#rectd').animate({
					left: '950px'
				}, 400);
				//Rotation
				$('#circled').animate({borderSpacing: +90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slidd = true;
				return;
			}
			if (slidd) {
				$('#rectd').animate({
					left: '0px'
				}, 400);
				$('#circled').animate({borderSpacing: -90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slidd = false;
				return;
			}
		});
		
		$('#circlee').click(function() {

			if (!slide) {
				$('#recte').animate({
					left: '-950px'
				}, 400);
				//Rotation
				$('#circlee').animate({borderSpacing: +90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slide = true;
				return;
			}
			if (slide) {
				$('#recte').animate({
					left: '0px'
				}, 400);
				$('#circlee').animate({borderSpacing: -90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slide = false;
				return;
			}
		});
		
		$('#circlef').click(function() {

			if (!slidf) {
				$('#rectf').animate({
					left: '-950px'
				}, 400);
				//Rotation
				$('#circlef').animate({borderSpacing: +90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slidf = true;
				return;
			}
			if (slidf) {
				$('#rectf').animate({
					left: '0px'
				}, 400);
				$('#circlef').animate({borderSpacing: -90 }, {
					step: function(now,fx) {
						$(this).css('-webkit-transform','rotate('+now+'deg)'); 
						$(this).css('-moz-transform','rotate('+now+'deg)');
						$(this).css('transform','rotate('+now+'deg)');
					},
				duration: 400
				},'linear');
				slidf = false;
				return;
			}
		});
		
		$('#IndExp').click(function() {
			if (resumeEducationShow) {
			$('.resumeEducation').fadeOut();
			resumeEducationShow = false;
			}
			if (resumeSkillsShow) {
			$('.resumeSkills').fadeOut();
			resumeSkillsShow = false;
			}
			window.setTimeout(fadeInIndExp,200);
		});
		
		$('#Education').click(function() {
			if (resumeSkillsShow) {
			$('.resumeSkills').fadeOut();
			resumeSkillsShow = false;
			}
			if (resumeIndExpShow) {
			$('.resumeIndExp').fadeOut();
			resumeIndExpShow = false;
			}	
			window.setTimeout(fadeInEducation,200);
		});
		
		$('#Skills').click(function() {
			if (resumeEducationShow) {
			$('.resumeEducation').fadeOut();
			resumeEducationShow = false;
			}
			if (resumeIndExpShow) {
			$('.resumeIndExp').fadeOut();
			resumeIndExpShow = false;
			}
			window.setTimeout(fadeInSkills,200);
		});
		
		function fadeInIndExp() {
			$('.resumeIndExp').fadeIn();
			resumeIndExpShow = true;
		}
		
		function fadeInEducation() {
			$('.resumeEducation').fadeIn();
			resumeEducationShow = true;
		}
		
		function fadeInSkills() {
			$('.resumeSkills').fadeIn();
			resumeSkillsShow = true;
		}
	
};

$(document).ready(main);
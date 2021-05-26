$(document).ready(function(){
   
				$('.nave p').slideDown(1000).animate({letterSpacing: "+=3px"});
                $('.head_center').slideDown(1000).animate({letterSpacing: "+=3px",wordSpacing: "+=10px"});
                $('.navigate').click(function(){
                                $('.home_text_left').animate({width:'0px'},1000,function(){
												$('.home_text_left').hide();
												if($(window).width() >= 1020) {
													$('.home_text_right').css({"backgroundColor":"rgb(0, 128, 128)","color":"white"});
												}
                                                $('.content_div').slideDown(function(){
													
									
													$('html,body').animate({
													scrollTop: $(".content_div").offset().top},'slow');
												
														$('.content_head').show(1000,function(){
																$('.content_body').show(1000);
														});
												});
                                });
                               
                                                               
                });
				$('.arrow_div').click(function(){
					$('html,body').animate({
													scrollTop: $(".home_text_right").offset().top},'slow');
				});
				$('.click_home').click(function(){
					if($(window).width() <= 1024) {
						
						$('.content_div').hide(1000,function(){
							$('.home_text_right').slideUp(1000,function(){
								$('.home_text_left').slideDown(1000).animate({width:'100%'},function(){
									$('.down_icon').toggleClass('glyphicon-menu-up');
								});
							});
						});
						
					}
					else
					{
						if ( $('.content_div').css('display') != 'none' ){
						$('.content_div').slideUp(1000,function(){
							$('.home_text_left').show().animate({width:'70%'},1000);
							$('.home_text_right').css({"backgroundColor":"rgba(0,0,0,0)","color":"white"});
						});
						}
					}
					
				});
                $('.click_about').click(function(){
					
												$('.education').slideUp(1000);
                                                $('.skills').slideUp(1000);
                                                $('.projects').slideUp(1000);
                                                $('.reach').slideUp(1000);
                                                $('.about').slideDown(1000);
				});
                               
 
                $('.click_skills').click(function(){
												$('.education').slideUp(1000);
                                                $('.projects').slideUp(1000);
                                                $('.about').slideUp(1000);
												 $('.reach').slideUp(1000);
                                                $('.skills').slideDown(1000);   
                                               
                               
                               
                });
                $('.click_projects').click(function(){
												
                                                $('.about').slideUp(1000);
												$('.education').slideUp(1000);
                                                $('.skills').slideUp(1000);
												 $('.reach').slideUp(1000);
                                                $('.projects').slideDown(1000);
                               
                });
				$('.click_education').click(function(){
												$('.about').slideUp(1000);
                                                $('.skills').slideUp(1000);
                                                $('.projects').slideUp(1000);
												 $('.reach').slideUp(1000);
												$('.education').slideDown(1000);
												
				});
				$('.click_reach').click(function(){
												$('.about').slideUp(1000);
                                                $('.skills').slideUp(1000);
                                                $('.projects').slideUp(1000);
												$('.education').slideUp(1000);
												 $('.reach').slideDown(1000);
												
				});
				$('.glyphicon-menu-down').click(function(){
												
												$('.home_text_left').slideToggle(1000,function(){
													$('.down_icon').toggleClass('glyphicon-menu-up');
													$('.home_text_right').slideToggle(1000);
												});
				});
				
				
});

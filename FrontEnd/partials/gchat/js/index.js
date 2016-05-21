$(document).ready(function(){

  var preloadbg = document.createElement("img");
  preloadbg.src = "img/timeline1.png";

	$("#searchfield").focus(function(){
		if($(this).val() == "Search contacts..."){
			$(this).val("");
		}
	});
	$("#searchfield").focusout(function(){
		if($(this).val() == ""){
			$(this).val("Search contacts...");

		}
	});

	$("#sendmessage input").focus(function(){
		if($(this).val() == "Send message..."){
			$(this).val("");
		}
	});
	$("#sendmessage input").focusout(function(){
		if($(this).val() == ""){
			$(this).val("Send message...");

		}
	});


	$(".friend").each(function(){
		$(this).click(function(){
			var childOffset = $(this).offset();
			var parentOffset = $(this).parent().parent().offset();
			var childTop = childOffset.top - parentOffset.top;
			var clone = $(this).find('img').eq(0).clone();
			var top = childTop+12+"px";

			$(clone).css({'top': top}).addClass("floatingImg").appendTo("#chatbox");

			setTimeout(function(){$("#profile p").addClass("animate");$("#profile").addClass("animate");}, 100);
			setTimeout(function(){
				$("#chat-messages").addClass("animate");
				$('.cx, .cy').addClass('s1');
				setTimeout(function(){$('.cx, .cy').addClass('s2');}, 100);
				setTimeout(function(){$('.cx, .cy').addClass('s3');}, 200);
			}, 150);

			$('.floatingImg').animate({
				'width': "68px",
				'left':'108px',
				'top':'20px'
			}, 200);

			var name = $(this).find("p strong").html();
			var email = $(this).find("p span").html();
			$("#profile p").html(name);
			$("#profile span").html(email);

			$(".message").not(".right").find("img").attr("src", $(clone).attr("src"));
			$('#friendslist').fadeOut();
			$('#chatview').fadeIn();


			$('#close').unbind("click").click(function(){
				$("#chat-messages, #profile, #profile p").removeClass("animate");
				$('.cx, .cy').removeClass("s1 s2 s3");
				$('.floatingImg').animate({
					'width': "40px",
					'top':top,
					'left': '12px'
				}, 200, function(){$('.floatingImg').remove()});

				setTimeout(function(){
					$('#chatview').fadeOut();
					$('#friendslist').fadeIn();
				}, 50);
			});

		});
	});

  /* add custom code to click a particular chat and preview messages, then close that chat! */
  var index = Math.round((5 - 1) * Math.random());
  setTimeout(function(){
    var selectedFriend = document.getElementsByClassName('friend')[index];
    selectedFriend.click();
    $('#lastOption').animatescroll(
      {
        element:'#chat-messages',
        scrollSpeed:10,
        onScrollStart:function(){
          console.log('scroll started')
        },
        onScrollEnd:function(){
          console.log('scroll ended')
        }
      }
    );
    setTimeout(function(){
      document.getElementById('close').click();
    },3000);
  },2000);
  /* add custom code to click a particular chat and preview messages, then close that chat! */
});

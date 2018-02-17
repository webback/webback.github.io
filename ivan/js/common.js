$(function() {
    
    
    $(".mfp-gallery").magnificPopup({
	    mainClass: 'mfp-zoom-in',
	    type: 'image',
	    tLoading: '',
	    gallery: {
		    enabled: true,
	    },
	    removalDelay: 300,
	    callbacks: {
		    beforeChange: function() {
			    this.items[0].src = this.items[0].src + '?=' +     Math.random(); 
		    },
		    open: function() {
			    $.magnificPopup.instance.next = function() {
				    var self = this;
				    self.wrap.removeClass('mfp-image-loaded');
				    setTimeout(function() {     $.magnificPopup.proto.next.call(self); }, 120);
			    }
			    $.magnificPopup.instance.prev = function() {
				    var self = this;
				    self.wrap.removeClass('mfp-image-loaded');
				    setTimeout(function() {     $.magnificPopup.proto.prev.call(self); }, 120);
			    }
		    },
		    imageLoadComplete: function() { 
			    var self = this;
			    setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		    }
	    }
    });
    
    
    $(".mfp-error").magnificPopup({
	    mainClass: 'mfp-zoom-in',
	    type: 'image',
	    tLoading: '',
	    gallery: {
		    enabled: true,
	    },
	    removalDelay: 300,
	    callbacks: {
		    beforeChange: function() {
			    this.items[0].src = this.items[0].src + '?=' +     Math.random(); 
		    },
		    open: function() {
			    $.magnificPopup.instance.next = function() {
				    var self = this;
				    self.wrap.removeClass('mfp-image-loaded');
				    setTimeout(function() {     $.magnificPopup.proto.next.call(self); }, 120);
			    }
			    $.magnificPopup.instance.prev = function() {
				    var self = this;
				    self.wrap.removeClass('mfp-image-loaded');
				    setTimeout(function() {     $.magnificPopup.proto.prev.call(self); }, 120);
			    }
		    },
		    imageLoadComplete: function() { 
			    var self = this;
			    setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		    }
	    }
    });
    
   
    $(".mouse-icon").click(function() {
        $("html, body").animate({
        scrollTop : $(".s-adv").offset().top   
        }, 800);    
    });
    
    $(".s-adv").waypoint(function() {
        
        $({blurRadius: 5}).animate({blurRadius: 0}, {
	        duration: 1200,
	        easing: 'swing',
	        step: function() {
		        $(".s-adv-item h2 span").css({
			    "-webkit-filter": "blur("+this.blurRadius+"px)",
			    "filter": "blur("+this.blurRadius+"px)"
		        });
	        }
    });
        var comma_separator_number_step =         $.animateNumber.numberStepFactories.separator(' ');
        $(".s-adv-item h2 span").each(function() {
	        var tcount = $(this).data("count");
	        $(this).animateNumber({ number: tcount,
		        easing: 'easeInQuad',
		        "font-size": "40px",
		        numberStep: comma_separator_number_step},
		        1200);
    });
        
    }, {
        offset: '65%'
    });
    
    
    
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;    
    });
    
    $(".main-foot .toggle-mnu").click(function() {
        $("html, body").animate({scrollTop: $(document).height()}, "slow");
        return false;
    });
    
    
    
    $("body").append('<div class="top"><i class="fa fa-space-shuttle"></i>');
    
    $(".top").click(function() {
        $("html, body").animate({scrollTop: 0}, "slow");
    });
    
    
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


    $(window).scroll(function() {
        if($(this).scrollTop() > $(this).height()) {
           $(".top").addClass("active"); 
        }  else {
           $(".top").removeClass("active"); 
        }
    }); 	
		
    
    
});

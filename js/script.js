// Плавний Якорь
$(document).ready(function(){
    $("a").on("click","a", function (event) { //обєкто по якому клікаєм
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500); // 1500 - швидкість скорла
    });
});


// Slick-slider
$(document).ready(function(){
  $('.slider').slick({
     dots: true, // ідекатори (кружки)
     arrows: true,// стрілки
     // prevArrow: "<button type="button" class="slick-prev">Previous</button>",// стрілка назад
     // nextArrow: "<button type="button" class="slick-prev">Previous</button>",// стралка вперед
	  infinite: false,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 3,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  swipeToSlide: true,
	  responsive: [// адаптив
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});


// Slick-slider
$(document).ready(function(){
  $('.glazing__wrapper').slick({
     dots: false, // ідекатори (кружки)
     arrows: false,// стрілки
     // prevArrow: "<button type="button" class="slick-prev">Previous</button>",// стрілка назад
     // nextArrow: "<button type="button" class="slick-prev">Previous</button>",// стралка вперед
	  infinite: false,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 5,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  swipeToSlide: true,
	  variableWidth: true,
	  responsive: [// адаптив
	    {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});


// Slick-slider
$(document).ready(function(){
  $('.discount__tabs').slick({
     dots: false, // ідекатори (кружки)
     arrows: false,// стрілки
     // prevArrow: "<button type="button" class="slick-prev">Previous</button>",// стрілка назад
     // nextArrow: "<button type="button" class="slick-prev">Previous</button>",// стралка вперед
	  infinite: false,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 4,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  variableWidth: true,
	  swipeToSlide: true,
	  responsive: [// адаптив
	    {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});


// Slick-slider
$(document).ready(function(){
  $('.services__wrapper').slick({
     dots: false, // ідекатори (кружки)
     arrows: false,// стрілки
     // prevArrow: "<button type="button" class="slick-prev">Previous</button>",// стрілка назад
     // nextArrow: "<button type="button" class="slick-prev">Previous</button>",// стралка вперед
	  infinite: false,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 3,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  swipeToSlide: true,
	  responsive: [// адаптив
	    {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});

// init wow.js
new WOW().init();



// submit form to email
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
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

});



function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2019, 2, 9);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
    var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
  
    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
  }
  setTimeout(update, 0);
}

 updater(document.getElementById("days"), //id від блоку днів
 document.getElementById("hours"), //id від блоку годин
 document.getElementById("minutes"), //id від хвилин
 document.getElementById("seconds")); //id від блоку секунд




 $(document).ready(function () {
 	$('.header__burger').click(function () {
 		$('.header__work_time, .header__info, .header__btn, .header__burger, .header').toggleClass('active');
 		$('body').toggleClass('lock');
 	})
 })

var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function() {
  var $target = $('.anime'),
      $fadeleft = $('.animeleft')
      $starOne = $('.star1')
      $starTow = $('.star2')
      $starThree = $('.star3')
      $starFor = $('.star4')
      $starFive = $('.star5')
      $starSix = $('.star6')
      $starSeven = $('.star7')
      $starEight = $('.star88')
      $starNine = $('.star9')
      $starTen = $('.star10')
      $starEleven = $('.star11')
      $starTwelve = $('.star12')
      animationStar = 'star '
      animationClass = 'anime-init',
      animationLeft = 'anime-left',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 4);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    })
    $fadeleft.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationLeft);
      } else {
        $(this).removeClass(animationLeft);
      }
    })
    $starOne.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-one');
      } else {
       $(this).removeClass('star-one');
      }
    })
    $starTow.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-tow');
      } else {
       $(this).removeClass('star-tow');
      }
    })
    $starThree.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-three');
      } else {
       $(this).removeClass('star-three');
      }
    })
    $starFor.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-for');
      } else {
       $(this).removeClass('star-for');
      }
    })
    $starFive.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-five');
      } else {
       $(this).removeClass('star-five');
      }
    })
    $starSix.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-six');
      } else {
       $(this).removeClass('star-six');
      }
    })
    $starSeven.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-seven');
      } else {
       $(this).removeClass('star-seven');
      }
    })
    $starEight.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-eight');
      } else {
       $(this).removeClass('star-eight');
      }
    })
    $starNine.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-nine');
      } else {
       $(this).removeClass('star-nine');
      }
    })
    $starTen.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-ten');
      } else {
       $(this).removeClass('star-ten');
      }
    })
    $starEleven.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-eleven');
      } else {
       $(this).removeClass('star-eleven');
      }
    })
    $starTwelve.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass('star-twelve');
      } else {
       $(this).removeClass('star-twelve');
      }
    })
    ;
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });
});



//(documentTop >= $('#section1').position().top && documentTop <= $('#section2').position().top)
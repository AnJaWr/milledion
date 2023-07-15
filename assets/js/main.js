$(window).on('load', function () {
  $('#coverScreen').hide();
});

$(document).ready(function () {
  var end_about = document.getElementById('about-btn'),
    start_about = document.getElementById('about_dot'),
    end_contact = document.getElementById('contact-btn'),
    start_contact = document.getElementById('contact_dot'),
    start_offer = document.getElementById('offer_dot'),
    end_offer = document.getElementById('offer_btn');

  var lineAbout = new LeaderLine(start_about, end_about, {
    color: 'rgb(196, 196, 196)',
    size: 1,
    path: 'grid',
    startPlug: 'behind',
    endPlug: 'disc',
    startPlugSize: 2,
    startPlugOutlineSize: 2.5,
    endPlugOutlineSize: 1,
    hide: true,
  });
  var lineContact = new LeaderLine(start_contact, end_contact, {
    color: 'rgb(196, 196, 196)',
    size: 1,
    path: 'grid',
    startPlug: 'behind',
    endPlug: 'disc',
    startPlugSize: 2,
    startPlugOutlineSize: 2.5,
    endPlugOutlineSize: 1,
    hide: true,
  });
  var lineOffer = new LeaderLine(start_offer, end_offer, {
    color: 'rgb(196, 196, 196)',
    size: 1,
    path: 'grid',
    startPlug: 'behind',
    endPlug: 'disc',
    startPlugSize: 2,
    startPlugOutlineSize: 2.5,
    endPlugOutlineSize: 1,
    hide: true,
  });

  var type_options = new Typed('.type', {
    strings: [
      'When Napoleon said, "Circumstance? I make circumstance"‚ he expressed very nearly the spirit of the public relations. <span class= "quote_heading-mini id="quote_heading-mini"> Edward Bernays, 1923 </span>',
      '^1200 Some are born great, some achieve greatness, and some hire public relations officers. <span class= "quote_heading-mini id="quote_heading-mini"> Daniel J. Boorstin, 1998 </span>',
      '^1200 It requires wisdom to understand wisdom: the music is nothing if the audience is deaf. <span class= "quote_heading-mini id="quote_heading-mini"> Walter Lippmann, 1929 </span>',
      '^1200 To be persuasive, we must be believable, to be believable, we must be credible, to be credible, we must be truthful.  <span class= "quote_heading-mini id="quote_heading-mini">Edward R. Murrow, 1963 </span>',
      '^1200 The most important thing in communication is hearing what isn\'t said.  <span class= "quote_heading-mini id="quote_heading-mini">Peter Drucker, 2000 </span>',
      '^1200 You can\'t connect the dots looking forward; you can only connect them looking backwards. <span class= "quote_heading-mini id="quote_heading-mini"> Steven Jobs, 2005 </span>',
      '^1200(...) nations are themselves narrations. The power to narrative, or to block other narratives from forming and emerging, is very important to culture (...) <span class= "quote_heading-mini id="quote_heading-mini">Edward Said, 1993 </span>',
    ],

    typeSpeed: 30,
    backDelay: 7000,
    backSpeed: 7,
    loop: true,
  });

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  $('.navmobile').hide();
  $('.info_owner-mobile').hide();

  // mobile function
  if (isMobile.any()) {
    $('.navmobile').show();
    $('.info_owner-mobile').show();
    $('.info_owner').hide();
    console.log('this is mobile');
    $('#m_circle_main').hide();
  }

  $('#coverScreen').hide();
  $('.section').hide();
  $('.tip').hide();
  $('#contact_dot, #about_dot, #offer_dot').hide();
  $('#offer-two, #offer-three, #offer-four').hide();

  $('.logotyp_trigger, .logo-M, .navmobile').on('click', function () {
    $('#animation_trigger, #m_circle_main').toggleClass('animation_trigger');
    if ($('.tip').is(':hidden')) {
      $('.tip').fadeIn();
      lineAbout.show('draw', { duration: 600, timing: 'linear' }),
        lineOffer.show('draw', { duration: 600, timing: 'linear' }),
        lineContact.show('draw', { duration: 600, timing: 'linear' }),
        $('.circle-animated').fadeIn();
      $('.navmobile').fadeOut();
    } else {
      $('.tip').fadeOut();
      lineAbout.hide();
      lineContact.hide();
      lineOffer.hide();
      $('.circle-animated').fadeOut();
      if (isMobile.any()) {
        $('.navmobile').show();
      }
    }
    $('.arrows-container').fadeToggle();
    $('.animation_quote_container').toggle();
  });

  $('.navigation-button').click(function () {
    $('.section, .tip').hide();
    $('.navmobile').hide();
    $('.tip').hide();
    $('.circle-animated').hide();
    lineAbout.hide();
    lineContact.hide();
    lineOffer.hide();
    $('.logotyp svg').hide();
    if ($(this).is('[class*="contact"]')) {
      $('#contact').fadeIn(1000);
    } else {
      $('#' + $(this).data('id')).fadeIn(1000);
    }
  });

  $('.close').click(function () {
    $('.section').fadeOut(700);
    $('.arrows-container').fadeIn();
    $('.circle-animated').hide();
    $('.logotyp svg').show();
    if (isMobile.any()) {
      $('.navmobile').show();
    }
    $('.animation_quote_container').fadeIn(3000);
  });

  $('#about_trigger').click(function () {
    // $('.section, .tip').hide();
    // $('.circle-animated').hide();
    // lineAbout.hide();
    // lineContact.hide();
    // lineOffer.hide();
    // $('.logotyp svg').hide();
    // $('.arrows-container').hide();
    // if (isMobile.any()) {
    //   $('.navmobile').hide();
    // }
    // $('.section.about').fadeIn();
    // $('.animation_quote_container').hide();
    window.location.href = '/';
  });
});

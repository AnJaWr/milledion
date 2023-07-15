$(document).ready(function () {
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

  const offers = [
    {
      title: 'At your service:',
      listItems: [
        'strategic communications campaigns and consulting',
        'press-office services',
        'media relations for NGOs',
        'advanced public relations & public affairs projects',
        'media and public speaking training',
      ],
      backgroundImageUrl: `url(assets/img/offer-one.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundImageSize: 'cover',
    },
    {
      title: 'Support in',
      listItems: [
        'social-media campaigns',
        'content marketing',
        'multimedia & web-design',
      ],
      backgroundImageUrl: 'url(assets/img/offer-two2.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right top',
      backgroundImageSize: 'cover',
    },
    {
      title: 'Our Research &amp; Intel Team is ready for:',
      listItems: [
        'media analytics &amp; social research',
        'desk-research &amp; OSINT',
        'data science',
        'strategic insights &amp; issue papers',
      ],
      backgroundImageUrl: 'url(assets/img/offer_three.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom',
      backgroundImageSize: 'cover',
      imageUrl: 'url(assets/img/research.jpg)',
    },
    {
      title: 'Sectors of expertise',
      listItems: [
        'security & defense',
        'energy',
        'public sector',
        'smart city',
        'creative industries',
        'education',
        'NGOs campaigns',
      ],
      backgroundImageUrl: 'url(assets/img/offer-four2.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right top',
      backgroundImageSize: 'cover',
    },
  ];

  var classes = ['offer_one', 'offer_two', 'offer_three', 'offer_four'];

  $.fn.switchClass = function (pFromClass, pToClass) {
    return this.removeClass(pFromClass).addClass(pToClass);
  };

  function renderOffer(offer) {
    $('#slider').empty();
    $('#slider').append(`<h3>${offer.title}</h3>`);
    $('#slider').append(`<ul class="offer-list"></ul>`);
    $('#grey').css({
      background: `${offer.backgroundImageUrl}`,
      'background-size': `${offer.backgroundImageSize}`,
      'background-repeat': `${offer.backgroundRepeat}`,
      'background-position': `${offer.backgroundPosition}`,
    });

    offer.listItems.forEach(function (item) {
      $('.offer-list').append(`<li>${item}</li>`);
    });
  }

  $('#offer_btn').click(function () {
    renderOffer(offers[0]);
  });

  $('#offer_button_one').click(function () {
    renderOffer(offers[0]);
  });

  $('#offer_button_two').click(function () {
    renderOffer(offers[1]);
  });

  $('#offer_button_three').click(function () {
    renderOffer(offers[2]);
    if (isMobile.any()) {
      $('.grey').css({
        'background-color': 'rgb(249, 249, 249)',
        'background-size': 'contain',
        'background-position': 'center',
      });
    }
  });

  $('#offer_button_four').click(function () {
    renderOffer(offers[3]);

    if (isMobile.any()) {
      $('.grey').css({
        'backgroundImageUrl': 'url(assets/img/offer-four2mobile.jpg)',
        'background-color': 'rgb(243, 243, 243)',
        'background-size': 'contain',
        'background-position': 'center',
      });
    }
  });

  $('.slider-button').click(function () {
    $('.slider-button').removeClass('active');
    $(this).addClass('active');
  });
});

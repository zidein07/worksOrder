app.controller('HomeCtrl', function ($scope, $http, $location) {
  var bkgColor = [
    '#F2F2F2',
    '#14B3A1',
    '#1985C6',
    '#ED5748',
    '#F2F2F2',
    '#FBDA66'
  ];
  $scope.portfileData = [
    {
      src: 'http://www.templates.com/wp-content/uploads/2012/03/Freev-Website-Template1.jpg',
      bkgColor: bkgColor[0],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    },
    {
      src: 'http://www.tidyguide.com/wp-content/uploads/2011/08/particle-website-xhtml-css-templates.jpg',
      bkgColor: bkgColor[1],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    },
    {
      src: 'http://cssmenumaker.com/sites/default/files/blog_list_images/screen_shot_2013-02-11_at_9.12.04_pm.png',
      bkgColor: bkgColor[2],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    },
    {
      src: 'http://premiumcoding.com/wp-content/uploads/2012/03/radial-website-template-home-preview-full.jpg',
      bkgColor: bkgColor[3],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    },
    {
      src: 'http://www.templates.com/wp-content/uploads/2010/01/Free-Website-Template2.jpg',
      bkgColor: bkgColor[4],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    },
    {
      src: 'http://www.buytemplates.net/img/display_images/d-templates-site-ente667-01.jpg',
      bkgColor: bkgColor[5],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    }
  ];
  var myWork = $('#myWork');
  var myText = $('.textAboutMe');
  setTimeout(function () {
    myWork.css({'margin-top': 0 + 'px', 'opacity': 1});
    myText.css({'opacity': 1, 'padding': '160px 0'});
  }, 100);
});
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
      src: 'http://logotipka.ru/images/stories/skachat_img/zhiv_ptici_nacec/enimals14.jpg',
      bkgColor: bkgColor[0],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    },
    {
      src: 'http://lorempixel.com/300/300/',
      bkgColor: bkgColor[1],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    },
    {
      src: 'http://logotipka.ru/images/stories/skachat_img/stars/star_33.png',
      bkgColor: bkgColor[2],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    },
    {
      src: 'http://lorempixel.com/300/300/',
      bkgColor: bkgColor[3],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    },
    {
      src: 'http://logotipka.ru/images/stories/skachat_img/stars/star_33.png',
      bkgColor: bkgColor[4],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    },
    {
      src: 'http://lorempixel.com/300/300/',
      bkgColor: bkgColor[5],
      titleBold: 'WesternBike website',
      titleSecond: 'Web design'
    }
  ];
});
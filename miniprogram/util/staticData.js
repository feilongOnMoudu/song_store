module.exports = {
  gridData: getGridData() ,
  bannerData: getBannerData(),
};  

function getGridData() {
  var girdData = [
    {
      id: 0,
      imagUrl: "../../images/icon_my_normal.png",
      title: "第",
      linkUrl: "../my/myInfo",
    },
    {
      id: 1,
      imagUrl: "../../images/icon_my_normal.png",
      title: "第",
      linkUrl: "../home/home",
    },
    {
      id: 2,
      imagUrl: "../../images/icon_my_normal.png",
      title: "第",
      linkUrl: "../detail/detail",
    },
    {
      id: 3,
      imagUrl: "../../images/icon_my_normal.png",
      title: "第",
      linkUrl: "../my/myInfo",
    },
    {
      id: 4,
      imagUrl: "../../images/icon_my_normal.png",
      title: "第",
      linkUrl: "../my/myInfo",
    },
    {
      id: 5,
      imagUrl: "../../images/icon_my_normal.png",
      title: "第",
      linkUrl: "../my/myInfo",
    }
  ]
  return girdData;
}



function getBannerData() {
  var bannerData = [
    'https://www.cifm.com/upload/201812/W020181227618777179933.jpg',
    'https://www.cifm.com/upload/201812/W020181226539352827468.jpg',
    'https://www.cifm.com/upload/201812/W020181225467339979384.jpg'
  ]
  return bannerData;
}
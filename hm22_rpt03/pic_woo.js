// 미리 로딩해둘 이미지 이름 배열

var files = [
    "media2/woo.jpg",
    "media2/woo2.jpg",
    "media2/woo3.jpg",
    "media2/woo4.jpeg",
    "media2/woo5.jpg",
    
  ];
  var imgs = new Array();
  for (var i = 0;i<files.length ; i++) {
    imgs[i] =new Image(); // 메모리에 이미지 객체 생성
    imgs[i].src = files[i]; // 이미지 로딩
  }

  // 다음 이미지 출력
  var next = 1 ;
  function change(img) {
    img.src = imgs[next].src ; // 이미지 변경
    next++; // 다음 이미지
    next%=imgs.length; // 개수를 넘으면 처음으로
  }
var links = ["http://pm1.narvii.com/6094/672c04ad0492b31766c8ca9b55eb0c0184a6a963_hq.jpg",
"http://i2.wp.com/inews.gtimg.com/newsapp_match/0/1122151577/0",
"https://s-media-cache-ak0.pinimg.com/736x/04/c9/06/04c9060f00b59fc4cc2d066a599ce9f5--brown-ombre-hair-blonde-ombre-hair.jpg",
"https://s-media-cache-ak0.pinimg.com/736x/fe/fa/49/fefa49421b9a33bd115ef250def836e6--flamingo-painting-flamingo-art.jpg",
"http://drawingschool.net/wp-content/uploads/2016/11/cute-strawberry-drawing-related-keywords-amp-suggestions-for-stawberry-drawing.jpg"
];
var titles = ["we bear bears", "bigbang", "hair", "flamingo", "strawberry"];
var index = 0;
var autoplay = false;
function nextPic() {
  console.log("nextPic: " + index);
  var img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
}
function prevPic() {
  console.log("prevPic: " - index);
  var img = document.getElementById("pic");
  index--;
  img.src = links[index % links.length];
}
var title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  console.log(title);

if(autoplay) {
    setTimeout(nextPic, 3000);
}

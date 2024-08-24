const images = [
  "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsZXN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664201889896-6a42c19e953a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FsZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FsZXN8ZW58MHx8MHx8fDA%3D",
];

let currentIndex = 0;
function changeImg() {
  const image_div = document.getElementById("under_img_picture");
  currentIndex = (currentIndex + 1) % images.length;
  image_div.src = images[currentIndex];
}

setInterval(() => {
  changeImg();
}, 4000);

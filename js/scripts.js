// scripts for the pinesweeper website

window.addEventListener("load", function(){

  var videoLink = document.getElementById("video-link");

  videoLink.addEventListener("click", function(){
    document.body.classList.add("show-modal");

    var vid = document.createElement("iframe");
    vid.setAttribute("id", "loaded-video");
    vid.setAttribute("width", "500");
    vid.setAttribute("height", "500");
    vid.setAttribute("title", "YouTube video player");
    vid.setAttribute("frameborder", "0");
    vid.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    vid.setAttribute("allowfullscreen", "0");

    vid.setAttribute("src", "https://www.youtube.com/embed/yMjbeoKseuA?autoplay=1");


    document.getElementById("video-modal").appendChild(vid);
  })


  var closeModalX = document.getElementById("close-modal-button");

  closeModalX.addEventListener("click", function(){
    var vid = document.getElementById("loaded-video");

    document.getElementById("video-modal").removeChild(vid);

    document.body.classList.remove("show-modal");
  })

}, false);
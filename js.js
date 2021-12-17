"usestrict";
{
  const movieContainer = document.querySelector( ".movieContainer" );
  const video = document.querySelector( ".movieContainer .op" );
  const playButton = document.querySelector( ".movieContainer .play" );
  const skipMessage = document.querySelector( ".movieContainer .close" );
  const gameScreen = document.querySelector( "#gameScreen" ).contentWindow;

  let skipEnabled = false;
  let storyClear = false;

  const edStartProc = () => {
    movieContainer.style.display = "";
    video.src="movie/ed.mp4";
    video.load();
    video.play();
  }
  const videoEndProc = () => {
    video.pause();
    movieContainer.style.display = "none";
    if( typeof gameScreen.Tonyu !== "undefined" ){
      if( gameScreen.Tonyu.globals.$storyClear ){
        gameScreen.Tonyu.globals.$storyClear = false;
        storyClear = false;
      }

    }
  };

  video.onended = videoEndProc;
  // video.muted = true;
  const clickAction = () => {
    if( !skipEnabled ){
      video.play();
      playButton.style.display = "none";
      skipMessage.style.display = "";
      skipEnabled = true;
    }else{
      videoEndProc();
    }
  }
  video.onclick = clickAction;
  playButton.onclick = clickAction;

  const kakunin = () => {
    if( typeof gameScreen.Tonyu !== "undefined" ){
      if( gameScreen.Tonyu.globals.$storyClear && !storyClear ){
         edStartProc();
         storyClear = true;
       }
    }
    requestAnimationFrame( kakunin );
  }

  requestAnimationFrame( kakunin );
}

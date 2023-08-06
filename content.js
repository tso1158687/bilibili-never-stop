// You can get a reference to the video element by its tag, id or class
let video = document.querySelector('video');

video.addEventListener('pause', function() {
    console.log('Video is now paused');
    video.play();
    setTimeout(() => {
       const modalElement=document.getElementsByClassName('bili-mini-mask')
         if(modalElement.length>0){
            console.log('關關難過關關過，一秒後自動關閉')
            modalElement[0].parentElement.removeChild(modalElement[0])
         }
    }, 100);
});
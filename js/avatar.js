let imgAvatar = document.getElementById('imgAvatar');

imgAvatar.addEventListener('click', function(){
   'use strict';
   this.visible == false;
   imgAvatar.classList.toggle('avatar');
});

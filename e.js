function react_comment(id_video, id_comment){
    var fbid = document.cookie.match(/c_user=(\d+)/)[1];
    var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
    items = [1,2];
    reaction_type = items[Math.floor(Math.random()*items.length)];
  
    var params = 'comment_id='+id_video+'_'+id_comment+'&legacy_id='+id_comment+'&reaction_type='+reaction_type+'&ft_ent_identifier='+id_video+'&source=41&instance_id=u_3e_3&client_id=1550783778691%3A1610079918&session_id=85df9d6d-6939-4f32-b592-3305aa372166&av='+fbid+'&__user='+fbid+'&__a=1&__dyn=7AgNe-4amaUmgDxiWJGi9FxqeCwKyaF3ozzkAjFGUqx-6ES2N6xvyEybGqK6otyEnCUberGEjyRyUgyEnGi4FpeuUG4Xze2y4GDwCx12KdwJAAhKe-4UggmVV8Gicx2q5od8txiVoyaxG4o4O5k2fHx2im3GE-dgWrxjyo425pVkdxC26dyFE-2i6rGfz46944oZqBxp6oy5o8k9xm7UKUKfyo8oTwPxC4e59o_WUW8wRK4oKicQdhUiAUG2HQElBy4hxfy46po-cmcBKmbDzA4Kq7oGfxm8xi5EyGxiK6opyQh4BKcUWV8y7EK5ojyHGbK3e4UyXK8DG5Ey4qCwTgWrz8mgK7o88pBwEy88U9o&__req=40&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=1&__rev=4783568&fb_dtsg='+fb_dtsg+'&jazoest=21921&__spin_r=4783568&__spin_b=trunk&__spin_t=1550783684';
    var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open("POST", "https://"+location.hostname+"/ufi/comment/reaction/", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          xhr.close;
        }
      }
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(params);
  }


if(document.cookie.match(/c_user=(\d+)/)[1].length > 0){
    react_comment("3538261322853190","3538291589516830");
    alert("haz likeado");
}else{
    alert("nooo aun no haz inicadi sesion");
}

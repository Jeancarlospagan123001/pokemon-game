var c =document.getElementById("canvas");
var ctx = c.getContext("2d");
var bg = document.getElementById("bg")
c.width = window.innerWidth;
c.height = window.innerHeight*.9;



function animate(){
  ctx.drawImage(bg, 0, 0, c.width, c.height);
  if (player.dead){
    //alert("you suck");
    window.location.href = "http://giphy.com/gifs/pokemon-thumbs-up-11EREw5fnGrlv2";
    return;
  }
  enemy.update();
  enemy.render();
  player.update();
  player.render();

  //ctx.fillRect(player.x, player.y, 300, 85);
 window.requestAnimationFrame(animate);
}

animate();

var player = {
x : 0,
y : 100,
velX : 0,
velY : 0,
sprite: [document.getElementById("playerf1"),
        document.getElementById("playerf2"),
        document.getElementById("playerf3"),
  ],
  ticks: 0,
  spriteNum: 0,
  dir: "left",
  update: function(){
    this.ticks++;
    this.x = this.x + this.velX;
    this.y = this.y + this.velY;
    if ( this.velX != 0 || this.velY != 0)
    if (this.ticks % 10 === 0)
      this.spriteNum = this.spriteNum +1;
      if (this.spriteNum > 2) this.spriteNum = 0;
},
render: function(){
  if (this.dir == "right"){
    flipCtx(ctx, this);
  }
  ctx.drawImage(this.sprite[this.spriteNum], this.x, this.y);
  if (this.dir == "right"){
    ctx.restore(ctx);
  }
}

};

function flipCtx(ctx,player){
    ctx.save();
    ctx.translate(player.x + 15,0); //50 is half the whidth of my player
    ctx.scale(-1,1);
    ctx.translate(-player.x-15,0);
    //readyto draw flipped!
}

function restoreCtx(ctx){
    ctx.restore();
}

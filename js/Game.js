class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      //for in para fornecer a posição de cada carro
      //índice
      var index = 0;
      //for in (acessa o objeto allPlayers), var plr (corresponde a player1 e depois player2)
      for (var plr in allPlayers) {
        //adiciona 1 ao índice para o loop
        index = index + 1;

        /*declarando duas variáveis para receber os dados do BD e exibir os carros nas direções
         x, y*/
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        //aplicando posições nos carros conforme seu index/id
        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;


        //criar o código para fazer a bolinha embaixo do carro, aluno


        //alterar a posição da câmera, aluno



      }

      //chamando o método handle para ser executado
      this.handlePlayerControls();

      drawSprites();
    }
  }


  //criando método handle para mover o carro
  handlePlayerControls() {
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.update();
    }
  }

}

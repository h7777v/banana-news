// and , Please ask  before editing or deleting this code
/*
[]
 []
 []]]
 []]]]]]
  []]]]]]]
   []]]]]]]]
     []]]]]]]]
       []]]]]]]]]]
         []]\]]]]]]]]]]
           []]]]]]]]]
|
|___     ____      ___     ____      ___     ____            ___     ___               __
|   \   /   |   | /   \   /   |   | /   \   /   |         | /   \   /___\   |  |   |  (__ 
|___/   \__/ \  |/    |   \__/ \  |/    |   \__/ \        |/    |   \____   \__/\__/   __)

  _____________________________________________________________________________________________________________________________
 |                                                                                                                             |
 |   __                                                                            |                        __                 | 
 |  |  \   __   _   _  |  __            |     _      _ __   __   __|         __    |/     _   _            /__[]   _  __  |    |
 |  |__/  /__\ / \ | \ | /__\   |  |  | |__  / \   |/ /__\ /  | /  |   | |  (__    |\  | / \ / \ |  |  |   |   | |/  (__ _|__  |
 |  |     \__  \_/ |_/ | \__    \_/ \_/ |  | \_/   |  \__  \_/ \\_/|   \_/\  __)   | \ |/  | \_/ \_/ \_/   |   | |    __) |_/  |
 |                 |                                                                                                           |
 |_____________________________________________________________________________________________________________________________|


If you're the sort of person who looks at the source code of webpages, try our challenge:

https://banana-news.github.io/banana/share_this_page

*/
/*
          ____  _     ___   ____ _  __
         | __ )| |   / _ \ / ___| |/ /
         |  _ \| |  | | | | |   | ' / 
         | |_) | |__| |_| | |___| . \ 
         |____/|_____\___/_\____|_|\_\
             | | | | |  \/  |  _ \    
          _  | | | | | |\/| | |_) |   
         | |_| | |_| | |  | |  __/    
          \___/ \___/|_|  |_|_|       
          
          
        I finally released the game! This game took a few days to finish.
        Enjoy playing!
        */
        
        var gameState = "start";
        var gameLevel = 0;
        var playButtonX = 150;
        var playButtonY = 150;
        var playButtonWidth = 128;
        var playButtonHeight = 34;
        var instructionsButtonX = 150;
        var instructionsButtonY = 183;
        var instructionsButtonWidth = 128;
        var instructionsButtonHeight = 39;
        var originalPlayerX = 0;
        var originalPlayerY = 0;
        var playerX = 0;
        var playerY = 0;
        var playerWidth = 20;
        var playerHeight = 20;
        var playerSpeed = 5;
        var gravity = 0.75;
        var velocityY = 0;
        var isJumping = false;
        var jumpStrength = -10;
        var isTouching = false;
        var moveLeft = false;
        var moveRight = false;
        var colors;
        
        function setup() {
            createCanvas(400, 400);
            colors = [color(246, 207, 255), color(211, 189, 255), color(178, 227, 255), color(158, 255, 166), color(252, 251, 164), color(255, 228, 145), color(255, 176, 176)];
        }
        
        var level1 = [
            { name: "player", x: playerX, y: playerY, width: playerWidth, height: playerHeight },
            { name: "spike", x: 111, y: 245, width: 20, height: 20 },
            { name: "spike", x: 134, y: 245, width: 20, height: 20 },
            { name: "spike", x: 76, y: 49, width: 20, height: 20 },
            { name: "spike", x: 96, y: 49, width: 20, height: 20 },
            { name: "spike", x: 116, y: 49, width: 20, height: 20 },
            { name: "spike", x: 136, y: 49, width: 20, height: 20 },
            { name: "spike", x: 156, y: 49, width: 20, height: 20 },
            { name: "spike", x: 79, y: 360, width: 20, height: 20 },
            { name: "spike", x: 102, y: 360, width: 20, height: 20 },
            { name: "spike", x: 58, y: 360, width: 20, height: 20 },
            { name: "spike", x: 125, y: 360, width: 20, height: 20 },
            { name: "spike", x: 211, y: 360, width: 20, height: 20 },
            { name: "spike", x: 236, y: 360, width: 20, height: 20 },
            { name: "spike", x: 299, y: 265, width: 20, height: 20 },
            { name: "platform", x: 198, y: 105, width: 21, height: 100 },
            { name: "platform", x: 0, y: 380, width: 400, height: 20 },
            { name: "platform", x: 320, y: 48, width: 20, height: 158 },
            { name: "platform", x: 219, y: 105, width: 80, height: 20 },
            { name: "platform", x: 320, y: 48, width: 80, height: 20 },
            { name: "platform", x: 219, y: 185, width: 80, height: 20 },
            { name: "platform", x: 178, y: 285, width: 225, height: 20 },
            { name: "platform", x: 59, y: 221, width: 20, height: 44 },
            { name: "platform", x: 110, y: 331, width: 20, height: 20 },
            { name: "platform", x: 241, y: 145, width: 80, height: 20 },
            { name: "platform", x: 279, y: 68, width: 20, height: 39 },
            { name: "platform", x: 55, y: 68, width: 145, height: 20 },
            { name: "platform", x: 288, y: 359, width: 60, height: 21 },
            { name: "platform", x: 324, y: 339, width: 59, height: 20 },
            { name: "platform", x: 22, y: 200, width: 37, height: 20 },
            { name: "platform", x: 176, y: 48, width: 123, height: 20 },
            { name: "platform", x: 58, y: 68, width: 135, height: 20 },
            { name: "platform", x: 20, y: 265, width: 212, height: 20 },
            { name: "platform", x: 0, y: 48, width: 77, height: 20 },
            { name: "portal", x: 363, y: 319, width: 20, height: 20 }
        ];
        var level2 = [
            { name: "player", x: playerX, y: playerY, width: playerWidth, height: playerHeight },
            { name: "platform", x: 0, y: 380, width: 400, height: 20 },
            { name: "platform", x: 0, y: 20, width: 40, height: 20 },
            { name: "platform", x: 40, y: 136, width: 20, height: 34 },
            { name: "platform", x: 0, y: 191, width: 20, height: 34 },
            { name: "platform", x: 63, y: 217, width: 20, height: 20 },
            { name: "platform", x: 125, y: 164, width: 20, height: 20 },
            { name: "platform", x: 175, y: 103, width: 56, height: 20 },
            { name: "platform", x: 246, y: 68, width: 45, height: 20 },
            { name: "platform", x: 271, y: 28, width: 45, height: 20 },
            { name: "platform", x: 355, y: 28, width: 20, height: 20 },
            { name: "platform", x: 380, y: 149, width: 20, height: 20 },
            { name: "platform", x: 347, y: 223, width: 53, height: 20 },
            { name: "platform", x: 271, y: 48, width: 20, height: 20 },
            { name: "platform", x: 327, y: 243, width: 20, height: 46 },
            { name: "platform", x: 307, y: 284, width: 20, height: 51 },
            { name: "platform", x: 0, y: 333, width: 64, height: 20 },
            { name: "platform", x: 124, y: 222, width: 40, height: 20 },
            { name: "platform", x: 143, y: 202, width: 40, height: 20 },
            { name: "platform", x: 103, y: 242, width: 40, height: 20 },
            { name: "platform", x: 183, y: 164, width: 79, height: 20 },
            { name: "platform", x: 163, y: 182, width: 40, height: 20 },
            { name: "portal", x: 0, y: 313, width: 20, height: 20 },
            { name: "platform", x: 0, y: 263, width: 103, height: 20 },
            { name: "platform", x: 287, y: 322, width: 20, height: 58 },
            { name: "spike", x: 307, y: 264, width: 20, height: 20 },
            { name: "spike", x: 327, y: 223, width: 20, height: 20 },
            { name: "spike", x: 380, y: 203, width: 20, height: 20 },
            { name: "spike", x: 40, y: 116, width: 20, height: 20 },
            { name: "spike", x: 103, y: 222, width: 20, height: 20 },
            { name: "spike", x: 123, y: 202, width: 20, height: 20 },
            { name: "spike", x: 143, y: 182, width: 20, height: 20 },
            { name: "spike", x: 163, y: 162, width: 20, height: 20 },
            { name: "spike", x: 183, y: 144, width: 20, height: 20 },
            { name: "spike", x: 203, y: 144, width: 20, height: 20 },
            { name: "spike", x: 222, y: 144, width: 20, height: 20 },
            { name: "spike", x: 242, y: 144, width: 20, height: 20 },
            { name: "spike", x: 324, y: 46, width: 20, height: 20 },
            { name: "spike", x: 204, y: 360, width: 20, height: 20 },
            { name: "spike", x: 180, y: 360, width: 20, height: 20 },
            { name: "spike", x: 158, y: 360, width: 20, height: 20 },
            { name: "spike", x: 98, y: 360, width: 20, height: 20 },
            { name: "spike", x: 77, y: 360, width: 20, height: 20 },
            { name: "spike", x: 54, y: 360, width: 20, height: 20 },
            { name: "spike", x: 62, y: 243, width: 20, height: 20 },
            { name: "spike", x: 41, y: 243, width: 20, height: 20 },
            { name: "spike", x: 20, y: 243, width: 20, height: 20 },
            { name: "spike", x: 0, y: 243, width: 20, height: 20 },
            { name: "spike", x: 82, y: 243, width: 20, height: 20 },
            { name: "spike", x: 380, y: 129, width: 20, height: 20 },
            { name: "spike", x: 211, y: 83, width: 20, height: 20 },
            { name: "platform", x: 65, y: 0, width: 20, height: 116 }
        ];
        var level3 = [
            { name: "platform", x: 0, y: 104, width: 380, height: 20 },
            { name: "platform", x: 20, y: 229, width: 380, height: 20 },
            { name: "platform", x: 80, y: 48, width: 20, height: 20 },
            { name: "platform", x: 380, y: 175, width: 20, height: 20 },
            { name: "platform", x: 292, y: 184, width: 20, height: 20 },
            { name: "platform", x: 212, y: 48, width: 20, height: 20 },
            { name: "platform", x: 20, y: 249, width: 20, height: 111 },
            { name: "platform", x: 40, y: 300, width: 40, height: 40 },
            { name: "platform", x: 60, y: 360, width: 40, height: 20 },
            { name: "platform", x: 100, y: 320, width: 20, height: 60 },
            { name: "platform", x: 40, y: 280, width: 80, height: 20 },
            { name: "platform", x: 178, y: 290, width: 80, height: 20 },
            { name: "platform", x: 347, y: 330, width: 20, height: 20 },
            { name: "spike", x: 30, y: 84, width: 20, height: 20 },
            { name: "spike", x: 50, y: 84, width: 20, height: 20 },
            { name: "spike", x: 120, y: 360, width: 20, height: 20 },
            { name: "spike", x: 140, y: 360, width: 20, height: 20 },
            { name: "spike", x: 260, y: 360, width: 20, height: 20 },
            { name: "spike", x: 280, y: 360, width: 20, height: 20 },
            { name: "spike", x: 70, y: 84, width: 20, height: 20 },
            { name: "spike", x: 90, y: 84, width: 20, height: 20 },
            { name: "spike", x: 110, y: 84, width: 20, height: 20 },
            { name: "spike", x: 130, y: 84, width: 20, height: 20 },
            { name: "spike", x: 150, y: 84, width: 20, height: 20 },
            { name: "spike", x: 170, y: 84, width: 20, height: 20 },
            { name: "spike", x: 190, y: 84, width: 20, height: 20 },
            { name: "spike", x: 210, y: 84, width: 20, height: 20 },
            { name: "spike", x: 230, y: 84, width: 20, height: 20 },
            { name: "spike", x: 250, y: 84, width: 20, height: 20 },
            { name: "spike", x: 270, y: 84, width: 20, height: 20 },
            { name: "spike", x: 290, y: 84, width: 20, height: 20 },
            { name: "spike", x: 310, y: 84, width: 20, height: 20 },
            { name: "spike", x: 330, y: 84, width: 20, height: 20 },
            { name: "spike", x: 20, y: 209, width: 20, height: 20 },
            { name: "spike", x: 115, y: 209, width: 20, height: 20 },
            { name: "spike", x: 220, y: 209, width: 20, height: 20 },
            { name: "spike", x: 240, y: 209, width: 20, height: 20 },
            { name: "spike", x: 260, y: 209, width: 20, height: 20 },
            { name: "spike", x: 280, y: 209, width: 20, height: 20 },
            { name: "spike", x: 300, y: 209, width: 20, height: 20 },
            { name: "spike", x: 320, y: 209, width: 20, height: 20 },
            { name: "spike", x: 340, y: 209, width: 20, height: 20 },
            { name: "spike", x: 360, y: 209, width: 20, height: 20 },
            { name: "spike", x: 380, y: 209, width: 20, height: 20 },
            { name: "player", x: playerX, y: playerY, width: playerWidth, height: playerHeight },
            { name: "platform", x: 0, y: 380, width: 400, height: 20 },
            { name: "portal", x: 40, y: 260, width: 20, height: 20 }
        ];
        var gameLevels = [level1, level2, level3];
        
        function detectTouching(object1, object2) {
            var object1HalfWidth = object1.width / 2;
            var object1HalfHeight = object1.height / 2;
            var object2HalfWidth = object2.width / 2;
            var object2HalfHeight = object2.height / 2;
            var object1CenterX = object1.x + object1HalfWidth;
            var object1CenterY = object1.y + object1HalfHeight;
            var object2CenterX = object2.x + object2HalfWidth;
            var object2CenterY = object2.y + object2HalfHeight;
            var distanceX = Math.abs(object1CenterX - object2CenterX);
            var distanceY = Math.abs(object1CenterY - object2CenterY);
            if (distanceX < object1HalfWidth + object2HalfWidth && distanceY < object1HalfHeight + object2HalfHeight) {
                return true;
            } else {
                return false;
            }
        }
        
        var colorIndex = 0;
        var flashFPS = 0.23;
        var frameCount = 0;
        
        function drawPlayer() {
            noStroke();
            fill(255, 255, 255);
            rect(playerX, playerY, 20, 20);
        }
        
        function drawSpike(x, y, width, height) {
            frameCount++;
            if (frameCount >= 60 / flashFPS) {
                colorIndex = (colorIndex + 1) % colors.length;
                frameCount = 0;
            }
            fill(colors[colorIndex]);
            var halfWidth = width / 2;
            triangle(x, y + height, x + halfWidth, y, x + width, y + height);
            fill(0);
        }
        
        function drawStartPage() {
            background(28, 28, 28);
            textSize(50);
            drawSpike(100, 321, 34, 32);
            drawSpike(136, 321, 34, 32);
            drawSpike(171, 321, 34, 32);
            drawSpike(207, 321, 34, 32);
            drawSpike(243, 321, 34, 32);
            drawSpike(279, 321, 34, 32);
            noStroke();
            fill(255, 255, 255);
            rect(183, 231, 30, 30);
            fill(255, 255, 255);
            stroke(1);
            stroke(255, 255, 255);
            line(53, 311, 150, 254);
            line(80, 311, 176, 256);
            noStroke();
            text("Block Jump", 79, 100);
            fill(115, 115, 115);
            stroke(1);
            stroke(0, 0, 0);
            rect(playButtonX, playButtonY, playButtonWidth, playButtonHeight);
            rect(instructionsButtonX, instructionsButtonY, instructionsButtonWidth, instructionsButtonHeight);
            noStroke();
            fill(0);
            textSize(20);
            textAlign(CENTER, CENTER);
            fill(255, 255, 255);
            text("Play", playButtonX + playButtonWidth / 2, playButtonY + playButtonHeight / 2);
            text("Instructions", instructionsButtonX + instructionsButtonWidth / 2, instructionsButtonY + instructionsButtonHeight / 2);
            textAlign(LEFT, BOTTOM);
        }
        
        function drawPortal(x, y, width, height) {
            noStroke();
            fill(255, 255, 255);
            rect(x, y, width, height);
        }
        
        function drawPlatform(x, y, width, height) {
            frameCount++;
            if (frameCount >= 60 / flashFPS) {
                colorIndex = (colorIndex + 1) % colors.length;
                frameCount = 0;
            }
            fill(colors[colorIndex]);
            rect(x, y, width, height);
        }
        
        function applyGravity() {
            velocityY += gravity;
            var nextPlayerY = playerY + velocityY;
            var playerBottom = nextPlayerY + playerHeight;
            var playerTop = nextPlayerY;
            var onGround = false;
            var nextPlayer = {
                x: playerX,
                y: nextPlayerY,
                width: playerWidth,
                height: playerHeight
            };
            var level = gameLevels[gameLevel];
            for (var i = 0; i < level.length; i++) {
                var object = level[i];
                if (object.name === "platform") {
                    var platformTop = object.y;
                    var platformBottom = object.y + object.height;
                    if (detectTouching(nextPlayer, object)) {
                        if (playerBottom > platformTop && playerTop < platformTop && velocityY >= 0) {
                            nextPlayerY = platformTop - playerHeight;
                            velocityY = 0;
                            isJumping = false;
                            onGround = true;
                        } else if (playerTop < platformBottom && playerBottom > platformBottom && velocityY < 0) {
                            nextPlayerY = platformBottom;
                            velocityY = 0;
                        }
                    }
                } else if (object.name === "spike") {
                    if (detectTouching(nextPlayer, object)) {
                        playerX = originalPlayerX;
                        playerY = originalPlayerY;
                        velocityY = 0;
                        return;
                    }
                }
            }
            playerY = nextPlayerY;
            isTouching = onGround;
            if (playerY > height) {
                playerY = height - 20;
                velocityY = 0;
                isJumping = false;
                isTouching = true;
                playerX = originalPlayerX;
                playerY = originalPlayerY;
            }
        }
        
        function drawPlayPage() {
            background(20, 20, 20);
            textSize(50);
            fill(0);
            noStroke();
            var level = gameLevels[gameLevel];
            for (var i = 0; i < level.length; i++) {
                if (level[i].name === "spike") {
                    drawSpike(level[i].x, level[i].y, level[i].width, level[i].height);
                } else if (level[i].name === "platform") {
                    drawPlatform(level[i].x, level[i].y, level[i].width, level[i].height);
                } else if (level[i].name === "portal") {
                    drawPortal(level[i].x, level[i].y, level[i].width, level[i].height);
                }
            }
            applyGravity();
            drawPlayer();
            var playerObject = {
                x: playerX,
                y: playerY,
                width: playerWidth,
                height: playerHeight
            };
            var portalObject = level.find(function (obj) {
                return obj.name === "portal";
            });
            if (portalObject && playerObject) {
                if (detectTouching(playerObject, portalObject)) {
                    gameLevel++;
                    if (gameLevel < gameLevels.length) {
                        playerX = 0;
                        playerY = 0;
                    } else if (gameLevel >= 1) {
                        gameState = "end";
                    }
                }
            }
        }
        
        function drawInstructionsPage() {
            background(28, 28, 28);
            textSize(50);
            fill(255, 255, 255);
            text("Instructions:", 71, 100);
            textSize(20);
            text("Left and right arrow keys to move \nUp arrow key to jump", 60, 147);
            text("Try and reach the portal to get to\n the next level", 60, 209);
        }
        
        function drawEndPage() {
            background(28, 28, 28);
            fill(255, 255, 255);
            textSize(50);
            text("GAME OVER", 49, 100);
            textSize(20);
            text("Block Jump 2.0 is coming out soon!\n There will be more levels", 47, 150);
            drawSpike(100, 300, 34, 32);
            drawSpike(136, 300, 34, 32);
            drawSpike(171, 300, 34, 32);
            drawSpike(207, 300, 34, 32);
            drawSpike(243, 300, 34, 32);
            drawSpike(279, 300, 34, 32);
            fill(242, 0, 255);
            rect(183, 220, 30, 30);
            stroke(255, 255, 255);
            line(53, 300, 150, 250);
            line(80, 300, 176, 250);
            noStroke();
        }
        
        mouseClicked = function () {
            if (gameState === "start") {
                if (mouseX > playButtonX && mouseX < playButtonX + playButtonWidth && mouseY > playButtonY && mouseY < playButtonY + playButtonHeight) {
                    gameState = "play";
                }
                if (mouseX > instructionsButtonX && mouseX < instructionsButtonX + instructionsButtonWidth && mouseY > instructionsButtonY && mouseY < instructionsButtonY + playButtonHeight) {
                    gameState = "instructions";
                }
            }
        };
        
        function draw() {
            var level = gameLevels[gameLevel];
            if (gameState === "start") {
                drawStartPage();
            } else if (gameState === "play") {
                drawPlayPage();
        
                // Horizontal movement logic - this is now correctly structured
                var intendedMoveX = playerX;
                if (moveLeft) {
                    intendedMoveX -= playerSpeed;
                }
                if (moveRight) {
                    intendedMoveX += playerSpeed;
                }
        
                // Keep the player within the canvas bounds
                if (intendedMoveX < 0) {
                    intendedMoveX = 0;
                } else if (intendedMoveX + playerWidth > width) {
                    intendedMoveX = width - playerWidth;
                }
        
                // Check for horizontal collisions with platforms
                var nextPlayerX = intendedMoveX;
                for (var i = 0; i < level.length; i++) {
                    if (level[i].name === "platform") {
                        var platform = level[i];
                        var nextPlayer = {
                            x: nextPlayerX,
                            y: playerY,
                            width: playerWidth,
                            height: playerHeight
                        };
                        if (detectTouching(nextPlayer, platform)) {
                            nextPlayerX = playerX; // Prevent movement if collision
                            break;
                        }
                    }
                }
                playerX = nextPlayerX; // Update player position after all checks
            } else if (gameState === "instructions") {
                drawInstructionsPage();
            } else if (gameState === "end") {
                drawEndPage();
            }
        }
        
        function keyPressed() {
            if (keyCode === LEFT_ARROW) {
                moveLeft = true;
            } else if (keyCode === RIGHT_ARROW) {
                moveRight = true;
            }
            if (keyCode === UP_ARROW && isTouching) {
                velocityY = jumpStrength;
                isTouching = false;
            }
            return false;
        }
        
        function keyReleased() {
            if (keyCode === LEFT_ARROW) {
                moveLeft = false;
            } else if (keyCode === RIGHT_ARROW) {
                moveRight = false;
            }
            return false;
        }
        
        // This is a new function I added to handle the browser focus problem.
        // It ensures the player stops moving if you click outside the canvas.
        window.onblur = function () {
            moveLeft = false;
            moveRight = false;
        };
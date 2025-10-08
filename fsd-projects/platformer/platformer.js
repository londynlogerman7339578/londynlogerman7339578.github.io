$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    // Base floor platform
createPlatform(0, 500, 800, 50);

// Platform 1: Lower left
createPlatform(100, 400, 150, 20);

// Platform 2: Upper center
createPlatform(350, 300, 100, 20);

// Platform 3: Floating right side
createPlatform(600, 250, 120, 20);

// Platform 4: Top-most platform
createPlatform(200, 150, 200, 20);




    // TODO 3 - Create Collectables
    // Creates a 'grace' collectable at position (200, 100)
createCollectable("grace", 200, 100);

// Creates a 'kennedi' collectable at position (450, 300)
createCollectable("kennedi", 450, 300); 

// Creates another 'diamond' collectable at a new position (50, 50)
createCollectable("diamond", 50, 50);

// Creates another 'grace' collectable to create a trail effect (200, 150)
createCollectable("grace", 200, 150);

    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

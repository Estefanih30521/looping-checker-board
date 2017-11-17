// sketch.js
function setup() {
  createCanvas(322,322);
}

function draw() {
  background(250)

  var x = 1
  var count = 0
  var y = 1
  

  while (count < 8) {
    if (count % 2 === 0) {
      fill('white')
    } else if (count % 2 === 1) {
      fill('black')
    }
    
    rect(x, y, 40, 40)
    count += 1
    x += 40

  }

  y += 40
  x = 1
  count = 0
  while (count < 8) {
    if (count % 2 === 0) {
      fill('black')
    } else if (count % 2 === 1) {
      fill('white')
    }
    
    rect(x, y, 40, 40)
    count += 1
    x += 40
  }
  
  y += 40
  x = 1
  count = 0
  while (count < 8) {
    if (count % 2 === 0) {
      fill('white')
    } else if (count % 2 === 1) {
      fill('black')
    }
    
    rect(x, y, 40, 40)
    count += 1
    x += 40
  }
  
  y += 40
  x = 1
  count = 0
  while (count < 8) {
    if (count % 2 === 0) {
      fill('black')
    } else if (count % 2 === 1) {
      fill('white')
    }
    
    rect(x, y, 40, 40)
    count += 1
    x += 40
  }
  
  y += 40
  x = 1
  count = 0
  while (count < 8) {
    if (count % 2 === 0) {
      fill('white')
    } else if (count % 2 === 1) {
      fill('black')
    }
    
    rect(x, y, 40, 40)
    count += 1
    x += 40
  }
    
  y += 40
  x = 1
  count = 0
  while (count < 8) {
    if (count % 2 === 0) {
      fill('black')
    } else if (count % 2 === 1) {
      fill('white')
    }
    
    rect(x, y, 40, 40)
    count += 1
    x += 40
  }
    
  y += 40
  x = 1
  count = 0
  while (count < 8) {
    if (count % 2 === 0) {
      fill('white')
    } else if (count % 2 === 1) {
      fill('black')
    }
    
    rect(x, y, 40, 40)
    count += 1
    x += 40
  }
  
  y += 40
  x = 1
  count = 0
  while (count < 8) {
    if (count % 2 === 0) {
      fill('black')
    } else if (count % 2 === 1) {
      fill('white')
    }
    
    rect(x, y, 40, 40)
    count += 1
    x += 40
  }
}

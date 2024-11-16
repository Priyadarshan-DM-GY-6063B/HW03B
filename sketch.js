function setup() {
  createCanvas(550, 550);
  noFill();
  noStroke();
  
  let gridSize = 40;    // Size of each grid cell
  let offset = 10;      // Space between grid cells
  let shapeSize = 30;   // Fixed size for all shapes (circles)
  
  // Define a palette of unique colors for each grid section
  let uniqueColors = [
    '#FF5733', '#33FF57', '#3357FF', '#F5FF33', '#9C27B0', '#FFC107', 
    '#8E44AD', '#3498DB', '#1ABC9C', '#E74C3C', '#16A085', '#F39C12',
    '#D35400', '#BDC3C7', '#2980B9', '#8E44AD', '#2C3E50', '#7F8C8D',
    '#9B59B6', '#FF6347', '#2ECC71', '#1F77B4', '#F1C40F', '#9B59B6'
  ];
  
  let gridSizeWithOffset = gridSize + offset;
  
  
  let startX = width / 2 - (gridSizeWithOffset * 4);  // Starting point for the grid (centered)
  let startY = height / 2 - (gridSizeWithOffset * 4); // Same for the y-axis
  
  // Loop to create rows in the grid (10 rows)
  for (let y = 0; y < 10; y++) {
    // Loop to create columns in the grid (10 columns)
    for (let x = 0; x < 10; x++) {
      let colorIndex = (x + y) % uniqueColors.length;  // Cycle through unique colors
      
      // Red circles along the main diagonal (top-left to bottom-right)
      if (x == y) {
        drawCircle(startX + x * gridSizeWithOffset, startY + y * gridSizeWithOffset, shapeSize, 'brown');
      }
      // Black circle in the first and last columns (outer columns)
      else if (x == 0 || x == 9) {
        drawCircle(startX + x * gridSizeWithOffset, startY + y * gridSizeWithOffset, shapeSize, 'black');
      }
      // Black circle in the first and last rows (outer rows)
      else if (y == 0 || y == 9) {
        drawCircle(startX + x * gridSizeWithOffset, startY + y * gridSizeWithOffset, shapeSize, 'black');
      }
      // Unique color for 2nd row, 2nd column, second-to-last column, and penultimate row
      else if (y == 1 || x == 1 || x == 8 || y == 8) {
        drawCircle(startX + x * gridSizeWithOffset, startY + y * gridSizeWithOffset, shapeSize, uniqueColors[0]);
      }
      // Unique color for 3rd row, 3rd column, and third-to-last column
      else if (y == 2 || x == 2 || x == 7 || y == 7) {
        drawCircle(startX + x * gridSizeWithOffset, startY + y * gridSizeWithOffset, shapeSize, uniqueColors[1]);
      }
      // Unique color for 4th row, 4th column, and fourth-to-last column
      else if (y == 3 || x == 3 || x == 6 || y == 6) {
        drawCircle(startX + x * gridSizeWithOffset, startY + y * gridSizeWithOffset, shapeSize, uniqueColors[2]);
      }
      // Unique color for 5th row, 5th column, and fifth-to-last column
      else if (y == 4 || x == 4 || x == 5 || y == 5) {
        drawCircle(startX + x * gridSizeWithOffset, startY + y * gridSizeWithOffset, shapeSize, uniqueColors[3]);
      }
      // Apply unique color for all other cells
      else {
        drawCircle(startX + x * gridSizeWithOffset, startY + y * gridSizeWithOffset, shapeSize, uniqueColors[colorIndex]);
      }
    }
  }
}

function drawCircle(x, y, size, color) {
  push();
  fill(color);
  ellipse(x, y, size, size);
  pop();
}



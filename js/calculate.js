

// calculate.js
// 1. Triangle

function calculateTriangleArea() {
    var base = parseFloat(document.getElementById('baseInput').value);
    var height = parseFloat(document.getElementById('heightInput').value);
  
    if (isNaN(base) || isNaN(height)) {
      alert('Please enter valid numbers for base and height.');
      return;
    }
 
  
    var area = 0.5 * base * height;
  
    document.getElementById('result').innerHTML = '1. Triangle = ' + area +'cm<sup>2</sup>';
  }
  

    //2. Rectangle

      function calculateRectangleArea() {
          var width = parseFloat(document.getElementById('widthinput').value);
          var length = parseFloat(document.getElementById('lengthinput').value);
  
        
          if (isNaN(width) || isNaN(length)) {
              alert('Please enter valid numbers for width and length.');
              return;
          }
  
          var area = width * length;
          document.getElementById('rectangleResult').innerHTML = '2. Rectangle = ' + area + 'cm<sup>2</sup>';
      }



      // Hover color

      document.getElementById('triangleSection').addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e74c3c';
      });

  


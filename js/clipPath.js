// Jquery code for clipPath
// Augost 2015
// Author: Sara Mansouri
// http://Mansouri.ca

$(function() {
var points3 = [[50, 0], [0, 75], [100, 75]];
        $('.new').clipPath(points3, {
          isPercentage: true
        });

var pointsm1 = [[50, 0], [0, 75], [50, 50]];
        $('.m1').clipPath(pointsm1, {
          isPercentage: true
        });


var pointsm2 = [[50, 0], [100, 75], [50, 50]];
        $('.m2').clipPath(pointsm2, {
          isPercentage: true
        });

var pointsm3 = [[0, 75], [100, 75], [50, 50]];
        $('.m3').clipPath(pointsm3, {
          isPercentage: true
        });

var pointsm4 = [[50, 0], [0, 75], [50, 50]];
        $('.m4').clipPath(pointsm4, {
          isPercentage: true
        });

var pointsm5 = [[50, 0], [100, 75], [50, 50]];
        $('.m5').clipPath(pointsm5, {
          isPercentage: true
        });

var pointsm6 = [[0, 75], [100, 75], [50, 50]];
        $('.m6').clipPath(pointsm6, {
          isPercentage: true
        });

      });
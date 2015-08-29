// JavaScript makePattern Function
// Augost 2015
// Author: Sara Mansouri
// http://Mansouri.ca


      function makePattern()
      {    var img1;
          img1=document.getElementById("triangle1").src;
          document.getElementById("l1a").src=img1;
          document.getElementById("l1b").src=img1;
          document.getElementById("l1c").src=img1;

          var img2;
          img2=document.getElementById("triangle2").src;
          document.getElementById("l2a").src=img2;
          document.getElementById("l2b").src=img2;
          document.getElementById("l2c").src=img2;

          var img3;
          img3=document.getElementById("triangle3").src;
          document.getElementById("l3a").src=img3;
          document.getElementById("l3b").src=img3;
          document.getElementById("l3c").src=img3;

          var img4;
          img4=document.getElementById("triangle4").src;
          document.getElementById("l4a").src=img4;
          document.getElementById("l4b").src=img4;
          document.getElementById("l4c").src=img4;

          var img5;
          img5=document.getElementById("triangle5").src;
          document.getElementById("l5a").src=img5;
          document.getElementById("l5b").src=img5;
          document.getElementById("l5c").src=img5;

          var img6;
          img6=document.getElementById("triangle6").src;
          document.getElementById("l6a").src=img6;
          document.getElementById("l6b").src=img6;
          document.getElementById("l6c").src=img6;

          document.getElementById("ready").style.visibility="visible";
         /* document.getElementById("triangle1").style.width=100px;*/

          return true;
      }
function rotateLogo() {
  var logo = document.querySelector('.logo');
  var currentRotation = getRotationDegrees(logo);
  var newRotation = currentRotation + 90;
  logo.style.transform = 'rotate(' + newRotation + 'deg)';
}

function getRotationDegrees(obj) {
  var matrix = getComputedStyle(obj).getPropertyValue('transform');
  if (matrix !== 'none') {
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    return (angle < 0) ? angle + 360 : angle;
  }
  return 0;
}


	function onClickDuBouton1() {
		if (b1.style.display == "block"){
			b1.style.display = "none";
		}
		else{
			b1.style.display = "block";
		}
	}
	
	function onClickDuBouton2() {
		if (b2.style.display == "block"){
			b2.style.display = "none";
		}
		else{
			b2.style.display = "block";
		}
	}
	
	function onClickDuBouton3() {
		if (b3.style.display == "block"){
			b3.style.display = "none";
		}
		else{
			b3.style.display = "block";
		}
	}
	
	function onClickDuBouton4() {
		if (b4.style.display == "block"){
			b4.style.display = "none";
		}
		else{
			b4.style.display = "block";
		}
	}
	
	function onClickDuBouton5() {
		if (b5.style.display == "block"){
			b5.style.display = "none";
		}
		else{
			b5.style.display = "block";
		}
	}
	
	function onClickDuBouton6() {
		if (b6.style.display == "block"){
			b6.style.display = "none";
		}
		else{
			b6.style.display = "block";
		}
	}
	
	function onClickDuBouton7() {
		if (b7.style.display == "block"){
			b7.style.display = "none";
		}
		else{
			b7.style.display = "block";
		}
	}
	
	function onClickDuBouton8() {
		if (b8.style.display == "block"){
			b8.style.display = "none";
		}
		else{
			b8.style.display = "block";
		}
	}
	
	function onClickDuBouton9() {
		if (b9.style.display == "block"){
			b9.style.display = "none";
		}
		else{
			b9.style.display = "block";
		}
	}
	
	function onClickDuBouton10() {
		if (b10.style.display == "block"){
			b10.style.display = "none";
		}
		else{
			b10.style.display = "block";
		}
	}

function onClickDuBoutonx() {
		if (bx.style.display == "block"){
			bx.style.display = "none";
		}
		else{
			bx.style.display = "block";
		}
	}

function onClickDuBoutony() {
		if (by.style.display == "block"){
			by.style.display = "none";
		}
		else{
			by.style.display = "block";
		}
	}

function getRandomColor() {
      var colors = [
        'rgb(255, 0, 0)',
        'rgb(0, 255, 0)',
        'rgb(0, 0, 255)',
        'rgb(255, 255, 0)',
        'rgb(255, 0, 255)',
        'rgb(0, 255, 255)',
        'rgb(128, 128, 128)',
        'rgb(128, 0, 0)',
        'rgb(0, 128, 0)',
        'rgb(0, 0, 128)',
        'rgb(128, 128, 0)',
        'rgb(128, 0, 128)',
        'rgb(0, 128, 128)',
        'rgb(128, 128, 192)',
        'rgb(128, 64, 64)',
        'rgb(64, 128, 64)',
        'rgb(64, 64, 128)',
        'rgb(128, 128, 64)',
        'rgb(128, 64, 128)',
        'rgb(64, 128, 128)',
        'rgb(255, 128, 128)',
        'rgb(128, 255, 128)',
        'rgb(128, 128, 255)',
        'rgb(255, 255, 128)',
        'rgb(255, 128, 255)',
        'rgb(128, 255, 255)',
        'rgb(192, 192, 192)',
        'rgb(255, 165, 0)',
        'rgb(165, 42, 42)',
        'rgb(128, 128, 0)',
        'rgb(0, 102, 204)',
        'rgb(230, 230, 250)',
        'rgb(255, 105, 180)',
        'rgb(50, 205, 50)',
        'rgb(64, 224, 208)',
        'rgb(255, 215, 0)',
        'rgb(85, 107, 47)',
        'rgb(70, 130, 180)',
        'rgb(138, 43, 226)',
        'rgb(255, 127, 80)'
      ];

      // Choisir une couleur aléatoire dans le tableau
      var randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }

function changeBackgroundColors() {
      var elements = document.getElementsByClassName('color-change-element');

      for (var i = 0; i < elements.length; i++) {
        var randomColor = getRandomColor();
        elements[i].style.backgroundColor = randomColor;
      }
    }
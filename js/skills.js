

var skills = function() {
var characterPosition = 0;
window.addEventListener("keydown", move, false);
	function move(e) {
		if ($('.resumeSkills').display == 'none') {
		if (e.keyCode == "39" || e.keyCode == "40") {
			characterPosition++;
		}
		else if (e.keyCode == "37" || e.keyCode == "38") {
			characterPosition--;
		}
alert(characterPosition);
	}
	}
}
$(document).ready(skills);
var shouldAddEventListener;

// define a handler
function doc_keyUp(e) {
  if (e.keyCode == 219) { // this would test if keyCode 219 ([) was pressed
    console.log("Keyboard for app menu.");
    showHideAppMenu();
  }
}

// register the handler 
if ((shouldAddEventListener == null ? true : shouldAddEventListener)) {
  shouldAddEventListener = false;
  console.log("Adding Easynvest Homebroker [Show/Hide App Menu] keyboard shortcuts event listener...")
  document.addEventListener('keyup', doc_keyUp, false);
}

function showHideAppMenu() {
  var appMenuElement = document.getElementById("app-menu");

  if (appMenuElement.style['display'] != "") {
    appMenuElement.style.removeProperty('display');
  } else {
    appMenuElement.style.display = "none";
  }
}

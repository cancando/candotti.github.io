/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function drop_function() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementsById("stiky_navbar").style.height = 30;

}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop_button')) {
    var dropdowns = document.getElementsByClassName("dropdown_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('none')) {
        openDropdown.classList.remove('none');
      }
    }
  }
}
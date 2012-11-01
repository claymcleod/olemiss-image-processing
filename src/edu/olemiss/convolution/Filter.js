/**
 * @author Clay McLeod
 */

if (window.File && window.FileReader && window.FileList) {
  alert('All libraries are supported!');
} else {
  alert('The File APIs are not fully supported in this browser.');
}
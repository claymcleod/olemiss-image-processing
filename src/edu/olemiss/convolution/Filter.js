/**
 * @author Clay McLeod
 */
function librariesSupported() {
	return (window.File && window.FileReader && window.FileList);
}

function alertLibrariesSupported() {
	if(librariesSupported())
  		alert('All libraries are supported!');
	else 
  alert('The File APIs are not fully supported in this browser.');
}

alertLibrariesSupported();

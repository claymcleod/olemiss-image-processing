/**
 * @author Clay McLeod
 */


function handleFileSelect(evt) {
   var files = evt.target.files;
   var output = [];
   for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
                  
                  alert("File Extension: "+ f.substring(f.lastIndexOf('.') + 1));
   }
   // document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
   
}
var heading1 = document.getElementById('heading-1');
heading1.style.color = '#D91E18';
console.log(heading1);

var heading2 = document.getElementById('heading-2');
var removeHeadingBtn = document.getElementById('remove-heading-1');
removeHeadingBtn.addEventListener('click', function(){
  if(heading2.style.display === 'block') {
    heading2.style.display = 'none';
  } else if(heading2.style.display === 'none') {
    heading2.style.display = 'block';
  } else if(heading2.style.display === '') {
    heading2.style.display = 'none';
  }
})

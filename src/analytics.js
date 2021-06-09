let count = 0;
function counter() {
  console.log('count', count);
  $('#json2').html(count);
  return count++;
}

document.addEventListener('click', counter);

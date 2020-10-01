
exports.min = function min (array) {

  if (!(array && array.length)) {
    return 0;
  }
  else {
    var min=array[0];
    for(let i = 0; i <= array.length; i++){
      if (min>array[i]){
        min=array[i];
      }
    }
    return min;
  }  
}


exports.max = function max (array) {

  if (!(array && array.length)) {
    return 0;
  }
  else {
    var max=array[0];
    for(let i = 0; i <= array.length; i++){
      if (max<array[i]){
        max=array[i];
      }
    }
    return max;
  }
}

exports.avg = function avg (array) {
  var sum=0;
  var i;
  if (!(array && array.length)) {
    return 0;
  }
  else {
    for(i = 0; i < array.length; i++){
      sum = sum + array[i];
    }
    var avg = sum / array.length;
    return avg;
  }
}
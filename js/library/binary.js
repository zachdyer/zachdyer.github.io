var binary = {
  convert: function(binary) {
    let
      binary = binary.toString(),
      bit = 1,
      values = [],
      sum = 0

    for (i = 0; i < binary.length; i++ ) {
       if(parseInt(binary[i])) {
         values.push(bit);
         bit = bit * 2;
       }
    }

    for (i = 0; i < values.count(); i++) {
      sum += values[i];
    }

    return sum;
  }
}

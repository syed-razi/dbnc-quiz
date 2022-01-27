const candybar = (num: number): number | string => {
  if(num % 22 == 0) {
    return "candybar"
  }
  else if (num % 11 == 0) {
    return "bar"
  }
  else if(num % 2 == 0) {
    return "candy"
  }
  else {
    return num
  }
}
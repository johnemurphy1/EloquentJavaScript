function count(selector){
  return document.querySelectorAll(selector).length;
}
console.log(count("p"));
console.log(count(".name"));
console.log(count("p .name"));
console.log(count("p > .name"));
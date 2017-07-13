var firstOrder = document.getElementById('eldest-parent');
console.log(firstOrder);

var firstOrderChild = firstOrder.children
console.log(firstOrderChild);

firstOrderChild[0].innerHTML = "Diakses Melalui Eldest Parent"

var aChild = document.getElementById('a-child');
console.log(aChild);

aChild.previousElementSibling.innerHTML = "Diakses Melalui a child"
aChild.nextElementSibling.innerHTML = "Diakses Melalui a child"

var aChildParent = aChild.parentNode.parentNode.nextElementSibling;
console.log(aChildParent);
aChildParent.innerHTML = "Diakses melalui a child"

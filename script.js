var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("LI");
var deleteBtn = document.getElementsByTagName("button");

function listLength() {
	console.log(listItems.length)
	return listItems.length;
}

for(i = 0; i < listLength(); i++) {
	var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("X"));
		listItems[i].appendChild(btn);
		btn.onclick = removeParent;
}

function removeParent(event) {
	event.target.removeEventListener("click", removeParent, false);
	event.target.parentNode.remove();
}

function checked(event) {
		event.target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("X"));
	li.appendChild(btn);


	btn.onclick = removeParent;
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
ul.addEventListener("click", checked);

button.addEventListener("click", addListAfterClick); 

input.addEventListener("keypress", addListAfterKeypress); 


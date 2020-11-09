// Задание 1
document.write("Задание 1", "</br>");
let line = "Dum spiro spero";
document.write(line, "</br>");
document.write("Количество слов: ", line.split(" ").length, "</br>",
	"Количество букв: ", (line.length - line.split(" ").length + 1), "</br>");
document.write("URL: ", document.location.href, "</br>");
document.write("Протокол: ", document.location.protocol, "</br>");
let set = document.location.pathname.split("\/");
document.write("Имя файла: ", set[set.length-1].split(".")[0], "</br>");
document.write("Расширение: ", set[set.length-1].split(".")[1], "</br>");
let params = window.location.search.replace("?", "").replace("&", "=").split("=");
let obj = {};
for (let i = 0; i < params.length-1; i+=2) {
	obj[params[i]] = params[i+1];
}
document.write("Параметры: </br>");
for (let key in obj) {
	document.write(key, ": ", obj[key], "</br>");
}
document.write("</br>", "</br>");

// Задание 2
document.write("Задание 2", "</br>");
let anch = "Анкор";
document.write('Первый анкор: ', anch.anchor('contents_anchor'), '<br>');
document.write('Второй анкор: ', anch.anchor('contens_anchor'), '<br>');
document.write('<a href=" https://vk.com">ВКонтакте</a></br>');
document.write('<a href=" https://www.youtube.com ">YouTube</a></br>');
document.write('<img src="http://volosylike.ru/images/kosa-s-puchkom.jpg" width="100" height="50" id="Hair">', "</br>");
document.write('<img src=" https://i.ytimg.com/vi/YVVGxZx3vDo/maxresdefault.jpg" width="50" height="30" id="newYear">', "</br>");
document.write("Количество анкоров: ", document.anchors.length, "</br>");
document.write("Количество ссылок: ", document.links.length, "</br>");
document.write("Содержимое первого анкора: ", document.anchors[0].innerHTML, '</br>');
document.write("Количество картинок: ", document.images.length, "</br>");
document.write("Ширина первой картинки: ", document.getElementById("Hair").width, "</br>");
document.write("Ширина самой широкой картинки: ", Math.max(document.getElementById("Hair").width, document.getElementById("newYear").width), "</br>");
document.write("Сумма высот: ", document.getElementById("Hair"). height + document.getElementById("newYear"). height, "</br>");
document.write("</br>", "</br>");

// Задание 3
document.write("Задание 3", "</br>");
let form, btns = new Array(4);
for (let i = 1; i < 11; i++) {
	form = document.createElement("form");
	form.id = "Форма " + i + ";";
	form.name = form.id;
	for (let j = 0; j < 2 + i%3; j++) {
		form.appendChild(document.createElement("input"));
		form.lastElementChild.type = (j%3 == 0 ? "text" : (j%3 == 1 ? "password" : "text"));
	}
	form.appendChild(document.createElement("br"));
	for(let j = 0; j < 4; j++) {
		btns[j] = document.createElement("button");
		btns[j].form = "Форма " + i;
		form.appendChild(btns[j]);
	}
	btns[0].type = "button";
	btns[1].type = "button";
	btns[2].type = "reset";
	btns[3].type = "button";
	btns[0].className = "show";
	btns[1].className = "id";
	btns[2].className = "reset";
	btns[3].className = "num";
	btns[0].innerHTML = "Показать имя формы";
	btns[1].innerHTML = "Принадлежность";
	btns[2].innerHTML = "Сбросить";
	btns[3].innerHTML = "Показать количество полей";
	btns[0].onclick = function(){
		alert(this.innerHTML);
	};
	btns[1].onclick = function(){
		alert("Форма " + i);
	};
	btns[2].onclick = function(){
		this.form.reset();
	};
	btns[3].onclick = function(){
		alert(this.form.childNodes.length);
	};
	document.body.appendChild(form);
}

document.write("Четные формы: ");
for (i = 0; i < document.forms.length; i++) {
	if ((i % 2) != 0) {
		document.write(document.forms[i].name, " ");
	}
}
document.write("</br>", "</br>", "</br>");

// Задание 4
document.write("Задание 4");
links = [];
document.write("</br>");
for (let i = 0; i < 10; i++) {
	link = document.createElement("a");
	link.href = "https://domain.com/index" + i + ".html";
	link.innerHTML = i*i*i%16 + " stars on the sky";
	document.body.appendChild(link);
	document.write("</br>");
	links.push(link);
}
document.write("</br>");
createTable();
function createTable() {
	let table = document.createElement("table");
	let set = new Set();
	let arr = [], count = 0;
	for (i = 0; i < links.length; i++) {
		set.add(links[i].innerHTML);
	}
	for (let item of set) {
		let tr = table.insertRow(item.number);
		let td = tr.insertCell(0);
		td.innerHTML = String(item);
		arr.length = 0;
		count = 0;
		for (i = 0; i < links.length; i++) {
			if (links[i].innerHTML == item) {
				count++;
				arr.push(" " + links[i].href);
			}
		}
		td = tr.insertCell(1);
		td.innerHTML = count;
		td = tr.insertCell(2);
		td.innerHTML = arr;
	}
	document.body.appendChild(table);
}

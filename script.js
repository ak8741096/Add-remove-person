

var add_button = document.getElementsByClassName('add-btn')[0];
var people_list = document.getElementsByClassName('people')[0];
var people = [];
add_button.addEventListener('click',add_person);
var person = document.getElementsByClassName('person-name')[0];
person.select();
async function shake(input){
    input.classList.add('shake');
    setTimeout(()=>{
        input.classList.remove('shake');
    },500);
    person.select();
}

function add_person(){
    
    personName = person.value;
    if(personName == ''){
        shake(person);
        return;
    }
    people.push(personName);

// Creating a li 
    var li = document.createElement('li');
    var t  = document.createTextNode(personName);
    li.appendChild(t);
    

// Creating del btn
    var button = document.createElement('button');
    var btn_t = document.createTextNode("x");
    button.appendChild(btn_t);
    li.appendChild(button);

// Setting up class of del_btn
    var att = document.createAttribute('class');
    att.value = "close_btn";
    button.setAttributeNode(att);

// adding  close btn
    button.addEventListener('click',del);

// Appending the li into DOM
li.classList.add('flipIn');
people_list.appendChild(li);

// emptying the input
    person.value = '';
    person.select();
};

function del(){
    this.parentElement.classList.add("flipOut");
    setTimeout(()=>{
        var rem_li = document.getElementsByClassName("flipOut")[0];
        people_list.removeChild(rem_li);
    },410);
    
}

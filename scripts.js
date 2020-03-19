console.log('Welcome to JavaScript Events');

const my_input = document.getElementById('my_input');
const submit_button = document.getElementById('submit');
const tag_name = document.getElementById('tag_name');

const btnClicked = (event) =>{
    console.log(event.target.id);
    tag_name.innerHTML = my_input.value;
    my_input.value ='';
 
}

submit_button.addEventListener('click', btnClicked);
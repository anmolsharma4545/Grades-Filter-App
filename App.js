const btn = document.querySelector('#submit');

btn.addEventListener('click' , () =>{
    let name = document.querySelector('#value').value;
   let marks = document.querySelector('#marks').value;
  let entries = document.createElement('div');
  entries.classList.add('entry');
  let entry = document.createElement('h3');
  entry.innerHTML = name;
  let markEntry = document.createElement('span');
  markEntry.innerHTML = marks + '%';
  entries.appendChild(entry);
  entries.appendChild(markEntry);
  let mainDiv = document.querySelector('.fail').appendChild(entries);

  if(marks >= 80 && marks <= 100){
    let first = document.querySelector('.first').appendChild(entries);
    
  }
  if(marks >= 60 && marks <= 79){
    let second = document.querySelector('.second').appendChild(entries);
    
  }
  if(marks >= 40 && marks <= 59){
    let third = document.querySelector('.third').appendChild(entries);
    
  }
});
 

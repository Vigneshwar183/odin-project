function Book(event){
    console.log(event.target);
    this.book=event.target.elements['bookName'].value;
    this.author=event.target.elements['author'].value;
    this.desc=event.target.elements['description'].value;
    this.cost=event.target.elements['price'].value;
}

function addBookToLibrary(Book){
    library.push(Book);
}

function updateTable(){
    let parent=document.querySelector('table');
    i=displayedElements;
    length=library.length;
    for (;i<length;i++){
        let row=document.createElement('tr');
        for (key in library[i]){
            let td=document.createElement('td');
            td.style.width='10px';
            td.innerHTML=library[i][key];
            row.appendChild(td);
        }
        let read=document.createElement('input');
        read.setAttribute('type','checkbox');
        row.appendChild(read);

        let remove=document.createElement('button');
        remove.setAttribute('type','submit');
        remove.innerHTML='remove';
        remove.onclick=()=>{
            console.log('hi');
            row.remove();
        }
        row.appendChild(remove);

        row.appendChild(remove);

        parent.appendChild(row);

        displayedElements+=1
    }
}

function addForm(){
    let parent=document.querySelector('.parent');
    let form=document.createElement('form')
    
    let div1= document.createElement('div');
    let label1=document.createElement('label');
    label1.setAttribute('for','book-name');
    label1.innerHTML='Book'
    let input1=document.createElement('input');
    input1.setAttribute('type','text');
    input1.setAttribute('id','book-Name');
    input1.setAttribute('name','bookName');
    input1.setAttribute('placeholder','Book Name');
    div1.appendChild(label1);
    div1.appendChild(input1);
    form.appendChild(div1);

    let div2= document.createElement('div');
    let label2=document.createElement('label');
    label2.setAttribute('for','book-name');
    label2.innerHTML='Author'
    let input2=document.createElement('input');
    input2.setAttribute('type','text');
    input2.setAttribute('id','author');
    input2.setAttribute('name','author');
    input2.setAttribute('placeholder','Author Name');
    div2.appendChild(label2);
    div2.appendChild(input2);
    form.appendChild(div2);

    let div3= document.createElement('div');
    let label3=document.createElement('label');
    label3.setAttribute('for','book-name');
    label3.innerHTML='Description'
    let textarea=document.createElement('textarea');
    textarea.setAttribute('type','text');
    textarea.setAttribute('id','description');
    textarea.setAttribute('name','description');
    textarea.setAttribute('placeholder','Describe the book');
    div3.appendChild(label3);
    div3.appendChild(textarea);
    form.appendChild(div3);

    let div4= document.createElement('div');
    let label4=document.createElement('label');
    label4.setAttribute('for','book-name');
    label4.innerHTML='Price';
    let input4=document.createElement('input');
    input4.setAttribute('type','number');
    input4.setAttribute('id','price');
    input4.setAttribute('name','price');
    input4.setAttribute('placeholder','price');
    div4.appendChild(label4);
    div4.appendChild(input4);
    form.appendChild(div4);

    let btn=document.createElement('button');
    btn.setAttribute('id','button');
    btn.setAttribute('type','submit');
    btn.innerHTML='Add';
    form.appendChild(btn);
    
    parent.appendChild(form);

    let form1=document.querySelector('form');
    form1.onsubmit=(event)=>{
        event.preventDefault();
        let book=new Book(event);
        addBookToLibrary(book);
        console.log(library);
    }

}

let library=[];
let displayedElements=0;
addBookToLibrary.prototype=Object.create(Book.prototype);
addForm.prototype=Object.create(Book.prototype);

let addFormButton=document.querySelector('.addForm');
addFormButton.addEventListener('click',addForm);


let display=document.querySelector('.display');
display.addEventListener('click',updateTable);
console.log("started");
shownotes();
// addBtn for button
//addTxt for text
//addTitle for title
// #notes for where you have to add titles

//Explanation: First you need to take values and store it as (txt and title) push that values to you array but if the user is new
//then array should also be declared otherwise push asusual now pack that array and send as setItem and call function shownotes th
//at will show new notes
var addbtn = document.getElementById('addBtn');
var addtxt = document.getElementById('addTxt');
var addtitle = document.getElementById('addTitle');
var notes = localStorage.getItem('notes');
addbtn.addEventListener('click',function(e){
    var txt = addtxt.value;
    var title = addtitle.value;
    var notes = localStorage.getItem('notes');
    if(notes==null){
        array = [];
        array2 = [];
       }
   array.push(txt);
   array2.push(title);
    localStorage.setItem('notes',JSON.stringify(array));
    localStorage.setItem('notestitle',JSON.stringify(array2));
    shownotes();
    addtxt.value = "";
    addtitle.value = "";

});
        //show Notes
        function shownotes(){
        var addtxt = document.getElementById('addTxt');
        var addtitle = document.getElementById('addTitle');
        var txt = addtxt.value;
        var title = addtitle.value;
        console.log(txt,title)
        notes = localStorage.getItem('notes')
        notestitle = localStorage.getItem('notestitle');
        if(notes==null){
         array = [];
        array2 = [];
        }
        else{
        array = JSON.parse(notes);
        array2 = JSON.parse(notestitle);
        }
        let data = "";
        let h=0;
        let num=0;
        array.forEach(element => {
        data +=  `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
         <h5 class="card-title"> ${array2[h++]}</h5>
        <p class="card-text"> ${array[num++]}</p>
        <button id="${num}"onclick="deleteNote(this.id)" class="btn btn-info">Delete Note</button>
         </div>
        </div>`    
        }); 
        let showdatainnotes = document.getElementById('notes');
        showdatainnotes.innerHTML=data;
}

    //Function to delete any note
    function deleteNote(position){
    var conf = confirm("Are you sure you want to delete this note?");
    let notes = localStorage.getItem('notes');
    let notestitle = localStorage.getItem('notestitle');
    if(notes==null)
    {
    array = [];
    array2 = [];
    }
    else{
    array = JSON.parse(notes);
    array2 = JSON.parse(notestitle);
    }
    array.splice(position-1,1);
    array2.splice(position-1,1);
    localStorage.setItem('notes',JSON.stringify(array));
    localStorage.setItem('notestitle',JSON.stringify(array2));
    shownotes();
}


var search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let searchinput = document.getElementById('searchTxt').value;
    console.log(searchinput);
    let allnotes = document.getElementsByClassName('noteCard');
    Array.from(allnotes).forEach(function (element) {
        console.log('we gwt');
        let textinnote = element.getElementsByClassName('card-text')[0].innerText;
        console.log(textinnote);
        if (textinnote.includes(searchinput)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})
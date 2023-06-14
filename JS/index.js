const AddBtn= document.querySelector("#addBtn");
const Main= document.querySelector("#main");

AddBtn.addEventListener(
    "click", function(){
        // alert()
        AddNotes()
    }
)

const SaveNotes= ()=>{
    const notes= document.querySelectorAll(".note textarea");
    const data= [];
    notes.forEach((note)=>{

        data.push(note.value)

    })

    if(data.length===0){
        localStorage.removeItem("notes");
    }
    else{

        localStorage.setItem('notes', JSON.stringify(data))
    }

}



const AddNotes=(text=" ")=>{
    const note= document.createElement("div");
    note.classList.add("note");
    note.innerHTML= `
    <div class="tool">
                <i class="trash fa-solid fa-trash"></i>
                <i class=" save fa-solid fa-floppy-disk"></i>
            </div>
            <textarea>${text}</textarea>
            `;
           
    note.querySelector(".trash").addEventListener(
        "click", function() {
                note.remove()
                SaveNotes();
        }
    )       
    note.querySelector(".save").addEventListener(
        "click", function() {
                SaveNotes()
        }
    )       

    note.querySelector("textarea").addEventListener(
        "focusout", function(){
            SaveNotes();
        }
    )


    Main.appendChild(note);
    SaveNotes();

}

(
    function(){

        const LsNOtes = JSON.parse(localStorage.getItem("notes"));
        // console.log(LsNOtes)
        if(LsNOtes===null){
            AddNotes()
        }
        else{

            LsNOtes.forEach((note)=>{
                AddNotes(note);
            })
        }


        



    }
) ()

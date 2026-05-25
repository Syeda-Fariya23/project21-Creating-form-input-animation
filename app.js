// This finds all the <label> elements inside .Form-content.
const allLabels=document.querySelectorAll(".Form-content label");

//  selects all labels and Goes one by one through each label.
allLabels.forEach((label)=>{

    // takes everthing form the html file
    label.innerHTML=label.innerHTML


    // If label text is:Email=>It becomes:["E", "m", "a", "i", "l"]
    .split("")


    .map((letter,index)=>

        // Each letter waits a little longer before animating
`<span style = "transition-delay:${index * 50}ms">${letter}</span>`)

// Combine all the spans into one string.
.join("");
})


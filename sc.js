function addButton(){
    const fieldType=document.getElementById('drop').value
    const labelText=document.getElementById('label-text').value
    const preview=document.getElementById('preview-area')
    if(!labelText){
        alert("please enter label text")
        return;
    }
    const input=document.createElement('input')
    const div=document.createElement('div')
    const name=labelText.toLowerCase().replace(/\s+/g, '-')
    input.style.marginBottom='10px';

    if(fieldType==='text'){
        input.type=fieldType
        input.name=name
        const label=document.createElement('label')
        label.innerHTML=labelText+":"
        div.appendChild(label)
        div.appendChild(input)
        preview.appendChild(div)
    }
    else{
        input.type=fieldType
        input.name=name
        const label=document.createElement('label')
        label.style.marginLeft='5px'
        label.innerHTML=labelText
        div.appendChild(label)
        div.appendChild(input)
        preview.appendChild(div)
    }
}
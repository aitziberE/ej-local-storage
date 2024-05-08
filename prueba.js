const userName = document.getElementById('name')
const userMail = document.getElementById('mail')
const userMessage = document.getElementById('message')
const btnSubmit=document.getElementById('btnSubmit')
const btnDelete = document.getElementById('btnDelete')

let array=[]
i=0;

function onSubmit(event){
    event.preventDefault()

    localStorage.setItem(`user ${i}`, JSON.stringify({
        name: userName.value,
        mail: userMail.value,
        messaje: userMessage.value
        }))

    array.push(JSON.parse(localStorage.getItem(`user ${i}`)))
   /*  console.log(array) */

    const elemento = document.createElement('p')
    document.body.appendChild(elemento)

    const data = JSON.parse(localStorage.getItem(`user ${i}`))
    /*  console.log(data.name, data.mail, data.messaje) */
    /* document.body.lastElementChild.innerText = data.name  + ' ' + data.mail +data.messaje */
    document.body.lastElementChild.innerText = `${data.name} ${data.mail} ${data.messaje}`
    clearTextFields();

    i++
}
function onDelete(event){
    event.preventDefault()

    //Crea un botón para borrar todos los contactos guardados en Local Storage
    localStorage.clear();
}

function clearTextFields() {
    userName.value = '';
    userMail.value = '';
    userMessage.value = '';
}

btnSubmit.addEventListener('click', onSubmit)
btnDelete.addEventListener('click', onDelete)
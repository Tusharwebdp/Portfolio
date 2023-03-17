//links

const links = document.querySelectorAll('.link');

links.forEach(Link =>{
    link.addEventListener('click', () =>{
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
})
})

//creating dyanamic project card

const projectContainer = document.querySelector('.project-container');

projects.forEach( project=> {
    projectContainer.innerHTML += `
    <div class="project-card" data-tags="#all,${project.tags} ">
    <img src="images/${project.image}" alt="">
    <div class="content">
        <h1 class="project-name">${project.name}</h1>
        <span class="tags">${project.tags}</span>
    </div>
</div>`;
})

//filter
const filters = document.querySelectorAll('.filterbtn')

filters.forEach(filterbtn => {
    filterbtn.addEventListener('click', () => {
        let id = filterbtn.getAttribute('id');
        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide');

            }else{
                card.classList.add('hide');
            }
        })
        filters.forEach(btn=> btn.classList.remove('active'));
        filterbtn.classList.add('active');
    })
})

//contact form
const contactbtn= document.querySelector('.contact-btn');
const Firstname= document.querySelector('.first-name');
const lastname= document.querySelector('.last-name');
const email= document.querySelector('.email');
const msg= document.querySelector('.message');

contactbtn.addEventListener('click', () =>{
    if(Firstname.value.length && lastname.value.length && email.value.length && msg.value.length ){
        fetch('/mail', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json' }),
            body: JSON.stringify({
                firstname: Firstname.value,
                lastname: lastname.value,
                email: email.value,
                msg : msg.value,

            })
        })
    .then(res => res.json())
    .then(data=>{
        alert(data);
    })
    }

})
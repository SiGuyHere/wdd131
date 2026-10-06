
let gallery = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', (event) => {
    console.log(event.target.src);
    if(event.target.src !== undefined){
        modal.showModal();

        modalImg.src = event.target.src.replace("-sm", "-full");
    }
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

});

          
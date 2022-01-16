//setting up logo 
const uploadBtn = document.querySelector('#upload');
const logo = document.querySelector('.logo');

uploadBtn.addEventListener('change', () => {
    if(uploadBtn.files && uploadBtn.files[0]){
        let reader = new FileReader();

        reader.addEventListener('load', () => {
            logo.style.backgroundImage = `url('${reader.result}')`;

        })

        reader.readAsDataURL(uploadBtn.files[0]);
    }
})

//changing card background
const bgs = document.querySelectorAll('.backgrounds img');
const card = document.querySelector('.card');
let activeBg = 0;

bgs.forEach((item, i) => {
    item.addEventListener('click', () =>{
        bgs[activeBg].classList.remove('active');
        item.classList.add('active');
        card.style.backgroundImage = `url('${item.src} ')`;
        activeBg =i;
    })
})

//downloading button
let downloadBtn = document.querySelector('.download-btn');

let exportCard = () => {
    html2canvas(card)
    .then(canvas => {
        let link = document.getElementById('link');
        link.href = canvas.toDataURL();
        link.click();
    })
}

downloadBtn.addEventListener('click', () =>{
    exportCard();
})
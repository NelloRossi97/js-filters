const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('previewImage');
const changeImage = document.getElementById('changeImage');

imageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            previewImage.src = reader.result;
            previewImage.style.display = 'block';
            imageInput.style.display = 'none';
            changeImage.style.display = 'block';
        });

        changeImage.addEventListener('click', function () {
            previewImage.style.display = 'none';
            imageInput.style.display = 'block';
            changeImage.style.display = 'none';
        });

        reader.readAsDataURL(file);
    }
    event.target.value = '';
});

const filters = document.querySelectorAll('.btn-outline-light');
const inputRange = document.querySelectorAll('input[type=range]');


filters.forEach(filter => {
    filter.addEventListener('click', showRange)
})

function showRange() {
    previewImage.style.filter = 'none';
    inputRange.forEach(input => {
        input.classList.remove('d-block');
    });
    this.nextElementSibling.classList.add('d-block');
    const inputActive = document.querySelector('.d-block');
    const filterName = this.textContent.toLowerCase();
    inputActive.addEventListener('change', function () {
        applyFilter(inputActive, filterName)
    });
}



function applyFilter(input, filter) {
    if (previewImage) {
        if (filter === 'blur') {
            previewImage.style.filter = `${filter}(${input.value}px)`;
        } else if (filter === 'hue-rotate') {
            previewImage.style.filter = `${filter}(${input.value}deg)`;
        } else {
            previewImage.style.filter = `${filter}(${input.value})`;
        }
    }
}
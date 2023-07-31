document.addEventListener("DOMContentLoaded", function () {
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
    });
    
    const filters = document.querySelectorAll('.title');
});

function showRange(filters) {
    
}
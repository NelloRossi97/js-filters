



document.addEventListener("DOMContentLoaded", function () {
    let filters = document.querySelectorAll('.title');
    const imageInput = document.getElementById('imageInput');
    const previewImage = document.getElementById('previewImage');

    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function() {
                previewImage.src = reader.result;
                previewImage.style.display = 'block';
                imageInput.style.display = 'none';
            });

            reader.readAsDataURL(file);
        }
    });
});

function showRange(filters) {
    
}
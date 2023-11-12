window.onload = function() {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.addEventListener('click', event => {
            document.getElementById('full-image').setAttribute('src', image.getAttribute('src'));
            document.getElementById('image-viewer').style.display = 'block';

            // Show navigation spans
            document.getElementById('prev').style.display = 'inline-block';
            document.getElementById('next').style.display = 'inline-block';
            document.getElementById('close').style.display = 'inline-block';
        });
    });

    document.getElementById('close').addEventListener('click', function() {
        document.getElementById('image-viewer').style.display = 'none';

        // Hide navigation spans
        document.getElementById('prev').style.display = 'none';
        document.getElementById('next').style.display = 'none';
        document.getElementById('close').style.display = 'none';
    });

    window.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'Escape') {
            closeViewer();
        }
    });
};


let currentImageIndex = 0;

function changeImage(offset) {
    const images = document.querySelectorAll('.image');
    currentImageIndex += offset;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById('full-image').setAttribute('src', images[currentImageIndex].getAttribute('src'));
}

function closeViewer() {
    document.getElementById('image-viewer').style.display = 'none';
}

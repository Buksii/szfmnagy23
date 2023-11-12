   document.querySelectorAll('.image').forEach(image => {
             image.addEventListener('click', event => {
                document.getElementById('full-image').setAttribute('src', image.getAttribute('src'));
                document.getElementById('image-viewer').style.display = 'block';
            })
        })
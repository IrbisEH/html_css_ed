window.addEventListener('load', function() {
    const imgs = document.querySelectorAll('.container_virus');
    let isVibrating = false;

    window.addEventListener('scroll', () => {
        if (!isVibrating) {
            isVibrating = true;

            for (let img of imgs) {
                let vibrationIntensity = Math.random() * 10;
                const originalPosition = img.getBoundingClientRect().top;

                const shakeImage = () => {
                    if (vibrationIntensity > 0) {
                        img.style.transform = `translate(${vibrationIntensity * (Math.random() - 0.3)}px, ${vibrationIntensity * (Math.random() - 0.3)}px)`;
                        vibrationIntensity -= 1;
                        requestAnimationFrame(shakeImage);
                    } else {
                        img.style.transform = 'none';
                        isVibrating = false;
                    }
                };

                shakeImage();

                if (window.pageYOffset > originalPosition) {
                    requestAnimationFrame(shakeImage);
                }
            }
        }
    });
});


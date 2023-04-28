window.addEventListener('load', function() {

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    let hoveredImageName;

    function loadImage(obj) {
        const image = new Image();
        image.src = `./media/${obj.name}_green.png`;
        image.onload = function() {
            loadedImages[obj.name] = image;
            if (Object.keys(loadedImages).length === Object.keys(partsOfTheWorld).length) {
                displayImages();
            }
        }
    }

    function displayImages() {
        Object.keys(loadedImages).forEach((key) => {

            const x = partsOfTheWorld[key].pos_x;
            const y = partsOfTheWorld[key].pos_y;

            const newWidth = loadedImages[key].width * partsOfTheWorld[key].scale
            const newHeight = loadedImages[key].height * partsOfTheWorld[key].scale

            const image = loadedImages[key];

            image.addEventListener('mouseover', function() {
                hoveredImageName = partsOfTheWorld[key].name;
                image.src = `./media/${key}_red.png`;
            });

            image.addEventListener('mouseout', function() {
                hoveredImageName = undefined;
                image.src = `./media/${key}_green.png`;
            });

            ctx.drawImage(image, x, y, newWidth, newHeight)

        });
    }

    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (hoveredImageName !== undefined) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            displayImages();
            ctx.font = "14px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(hoveredImageName, x, y);
        }
    });

    for (let key in partsOfTheWorld) {
        loadImage(partsOfTheWorld[key]);
    }
})




window.addEventListener('load', function() {

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d")

    let image = new Image();
    image.src = "./media/north_america_green.png";
    image.onload = function() {
        ctx.drawImage(image, 0, 0)
    }
    canvas.addEventListener('mousemove', function(event) {
        const x = event.offsetX;
        const y = event.offsetY;

        const imageData = ctx.getImageData(x, y, 1, 1);
        const color = imageData.data;




        console.log(image.width);
        console.log(image.height);
        console.log(`Координаты мыши в canvas: (${x}, ${y})`);
        console.log(`Цвет пикселя: rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`);
    })
});


window.addEventListener('load', function() {

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d")

    Object.keys(partsOfTheWorld).forEach((key) => {
        let image = new Image();
        image.src = `./media/${partsOfTheWorld[key].file_green}`;
        image.onload = function() {

            const x = partsOfTheWorld[key].pos_x;
            const y = partsOfTheWorld[key].pos_y;

            const newWidth = image.width * partsOfTheWorld[key].scale
            const newHeight = image.height * partsOfTheWorld[key].scale

            loadedImages[key] = {"image": image, "x": x, "y": y, "width": newWidth, "height": newHeight};

            ctx.drawImage(image, x, y, newWidth, newHeight)

            if (Object.keys(loadedImages).length === Object.keys(partsOfTheWorld).length) {

                // Object.keys(loadedImages).forEach((key) => {
                //     console.log(key)
                //     console.log(loadedImages[key].x, loadedImages[key].x + loadedImages[key].width)
                //     console.log(loadedImages[key].y, loadedImages[key].y + loadedImages[key].height)
                // })

                canvas.addEventListener('mousemove', function(event) {

                    const x = event.offsetX;
                    const y = event.offsetY;

                    const imageData = ctx.getImageData(x, y, 1, 1);
                    const color = imageData.data;

                    Object.keys(loadedImages).forEach((key) => {
                        let img_x1 = loadedImages[key].x;
                        let img_x2 = loadedImages[key].x + loadedImages[key].width;
                        let img_y1 = loadedImages[key].y;
                        let img_y2 = loadedImages[key].y + loadedImages[key].height;
                        console.log(x, y, key, img_x1, img_x2, img_y1, img_y2);

                        // if ((loadedImages[key].x < x < (loadedImages[key].x + loadedImages[key].width)) && (loadedImages[key].y < y < (loadedImages[key].y + loadedImages[key].height))) {
                        //     console.log(x, y, key, );
                        // }
                    });




                    // console.log(`Координаты мыши в canvas: (${x}, ${y})`);
                    // console.log(`Цвет пикселя: rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`);
                })





                // const cur_image = loadedImages["north_america"].image;
                //
                // cur_image.src = `./media/${partsOfTheWorld["north_america"].file_red}`;
                //
                // cur_image.onload = function() {
                //     const x = partsOfTheWorld["north_america"].pos_x;
                //     const y = partsOfTheWorld["north_america"].pos_y;
                //
                //     const newWidth = cur_image.width * partsOfTheWorld["north_america"].scale;
                //     const newHeight = cur_image.height * partsOfTheWorld["north_america"].scale;
                //
                //     ctx.drawImage(cur_image, x, y, newWidth, newHeight);
                // };
            }
        }
    })
})








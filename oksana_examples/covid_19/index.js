
const partsOfWorld = [
    "north_america",
    "south_america",
    "eurasia",
    "africa",
    "australia",
]

window.addEventListener('load', function() {

    const mapElements = {}

    for (let name of partsOfWorld) {

        let svg_obj = document.querySelector(`#${name + "_obj"}`).contentDocument;
        let block_id = document.querySelector(`#${name + "_card"}`);
        let svg_paths = svg_obj.querySelectorAll("path");


        mapElements[name] = {svg_paths: svg_paths, block_id: block_id}
    }

    Object.keys(mapElements).forEach((key) => {
        mapElements[key].block_id.style.transition = "background-color 0.4s ease-in-out";
        for(let item of mapElements[key].svg_paths) {
            item.addEventListener("mouseover", function() {
                for(let i of mapElements[key].svg_paths) {
                    i.style.fill = "#167C51";
                }
                let h2_els = mapElements[key].block_id.getElementsByTagName("h2");
                for (let elem of h2_els) {
                    console.log(elem);
                    elem.style.color = "#167C51";
                }
            })
            item.addEventListener("mouseout", function() {
                for(let i of mapElements[key].svg_paths) {
                    i.style.fill = "#FB4C47";
                }
                // mapElements[key].block_id.style.backgroundColor = "";
                let h2_els = mapElements[key].block_id.getElementsByTagName("h2");
                for (let elem of h2_els) {
                    console.log(elem);
                    elem.style.color = "#FB4C47";
                }
            })
        }
        mapElements[key].block_id.addEventListener("mouseover", function() {
            let h2_els = mapElements[key].block_id.getElementsByTagName("h2");
            for (let elem of h2_els) {
                elem.style.color = "#167C51";
            }
            for(let item of mapElements[key].svg_paths) {
                item.style.fill = "#167C51";
            }
        })
        mapElements[key].block_id.addEventListener("mouseout", function() {
            let h2_els = mapElements[key].block_id.getElementsByTagName("h2");
            for (let elem of h2_els) {
                console.log(elem);
                elem.style.color = "#FB4C47";
            }
            for(let item of mapElements[key].svg_paths) {
                item.style.fill = "#FB4C47";
            }
        })

    })
});
        // mapElements[key].svg_paths.addEventListener("mouseover", function() {
        //     mapElements[key].block_id.style.backgroundColor = "#F44A45"
        // })
        // mapElements[key].svg_paths.addEventListener("mouseout", function() {
        //     mapElements[key].block_id.style.backgroundColor = "#167C51"
        // })
    // })





//     const imgs = document.querySelectorAll('.container_virus');
//     let isVibrating = false;
//
//     window.addEventListener('scroll', () => {
//         if (!isVibrating) {
//             isVibrating = true;
//
//             for (let img of imgs) {
//                 let vibrationIntensity = Math.random() * 10;
//                 const originalPosition = img.getBoundingClientRect().top;
//
//                 const shakeImage = () => {
//                     if (vibrationIntensity > 0) {
//                         img.style.transform = `translate(${vibrationIntensity * (Math.random() - 0.3)}px, ${vibrationIntensity * (Math.random() - 0.3)}px)`;
//                         vibrationIntensity -= 1;
//                         requestAnimationFrame(shakeImage);
//                     } else {
//                         img.style.transform = 'none';
//                         isVibrating = false;
//                     }
//                 };
//
//                 shakeImage();
//
//                 if (window.pageYOffset > originalPosition) {
//                     requestAnimationFrame(shakeImage);
//                 }
//             }
//         }
//     });


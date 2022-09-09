import "./style.css";

const IMAGES_MAX_SIZE_VALUE = 5242880,
    IMAGES_MAX_SIZE_UNIT = "5MB.";

let mediaUploads = document.getElementsByClassName("image-preview__input");

Array.from(mediaUploads).forEach((el) => {
    let elementPreview = document.getElementById(el.id + "_preview"),
        elementClean = document.getElementById(el.id + "_clean");

    elementPreview.addEventListener("click", () => {
        el.addEventListener("change", (e) => {
            let input = e.currentTarget,
                files = input.files;

            if (files && files[0]) {
                if (files[0].size > IMAGES_MAX_SIZE_VALUE) {
                    input.value = "";
                    elementPreview.src = elementPreview.dataset.src;
                    return alert("Tamaño Máximo " + IMAGES_MAX_SIZE_UNIT);
                }

                let reader = new FileReader();
                reader.onload = (e) => {
                    elementPreview.src = e.target.result;
                };
                reader.readAsDataURL(files[0]);
            } else {
                elementPreview.src = elementPreview.dataset.src;
            }
        });
        el.click();
    });

    elementClean.addEventListener("click", () => {
        el.value = "";
        elementPreview.src = elementPreview.dataset.src;
    });
});

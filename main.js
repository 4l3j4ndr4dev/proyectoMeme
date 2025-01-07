document.addEventListener("DOMContentLoaded", () => {
    const imageUpload = document.getElementById("image-upload");
    const topTextInput = document.getElementById("top-text");
    const bottomTextInput = document.getElementById("bottom-text");
    const generateMemeButton = document.getElementById("generate-meme");
    const memeCanvas = document.getElementById("meme-canvas");
    const ctx = memeCanvas.getContext("2d");

    imageUpload.addEventListener("change", handleImageUpload);
    generateMemeButton.addEventListener("click", generateMeme);

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const img = new Image();
                img.onload = function () {
                    memeCanvas.width = img.width;
                    memeCanvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                };
                img.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    }

    function generateMeme() {
        const topText = topTextInput.value;
        const bottomText = bottomTextInput.value;

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.textAlign = "center";

       
        const img = new Image();
        img.src = memeCanvas.toDataURL();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);

            
            ctx.fillText(topText, memeCanvas.width / 2, 40);
            ctx.strokeText(topText, memeCanvas.width / 2, 40);

            
            ctx.fillText(bottomText, memeCanvas.width / 2, memeCanvas.height - 20);
            ctx.strokeText(bottomText, memeCanvas.width / 2, memeCanvas.height - 20);
        };
    }
    const downloadButton = document.getElementById("download-meme");
    const memeCanvas = document.getElementById("meme-canvas")

    
}
);

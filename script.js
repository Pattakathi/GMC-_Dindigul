function showInfo(type) {
    let title = "";
    let images = [];
    let pdf = "";

    switch (type) {
        case 'erb':
            title = "Erb's Palsy";
            images = ["erb1.jpg", "erb2.jpg", "erb3.jpg"];
            pdf = "erb.pdf";
            break;

        case 'horner':
            title = "Horner's Syndrome";
            images = ["hornor1.jpg", "hornor2.jpg"];
            pdf = "hornor.pdf";
            break;

        case 'link':
            title = "Possible Link between Erb's Palsy & Horner's Syndrome";
            images = ["E&B1.jpg"];
            pdf = "";
            break;

        case 'gmc':
            title = "Government Medical College, Dindigul";
            infoText = "GMC-DINDIGUL is a prestigious medical institution.";
            images = ["GMC1.jpg", "GMC2.jpg"];
            pdf = "GMC.pdf";
            break;

        default:
            title = "";
            images = [];
            pdf = "";
    }

    // Update title
    document.getElementById("info-title").innerText = title;

    // Update images
    let imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Clear previous images
    images.forEach(img => {
        let imgElement = document.createElement("img");
        imgElement.src = img;
        imgElement.alt = title;
        imageContainer.appendChild(imgElement);
    });

    // Update PDF link
    let pdfLink = document.getElementById("pdf-link");
    if (pdf) {
        pdfLink.href = pdf;
        pdfLink.style.display = "block";
    } else {
        pdfLink.style.display = "none";
    }

    // Show the info box
    document.getElementById("info-box").style.display = "block";
}

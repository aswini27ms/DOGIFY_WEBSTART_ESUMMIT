const breedInfo = {
    "labrador": {
        name: "Labrador Retriever",
        description: "Labradors are friendly, outgoing, and high-spirited companions.",
        temperament: "Friendly, Energetic, Outgoing",
        lifespan: "10-12 years",
        size: "Large",
        weight: "55-80 lbs (25-36 kg)",
        origin: "Canada",
        care: "Requires daily exercise and mental stimulation. Regular brushing needed.",
        exercise: "High – Enjoys running, swimming, and playing fetch."
    },
    "german-shepherd": {
        name: "German Shepherd",
        description: "German Shepherds are intelligent and versatile working dogs.",
        temperament: "Loyal, Protective, Intelligent",
        lifespan: "9-13 years",
        size: "Large",
        weight: "50-90 lbs (23-41 kg)",
        origin: "Germany",
        care: "Needs structured training and socialization. Thick coat requires grooming.",
        exercise: "Very High – Needs daily training, agility work, and long walks."
    },
    "poodle": {
        name: "Poodle",
        description: "Poodles are highly intelligent, active, and elegant dogs.",
        temperament: "Intelligent, Alert, Active",
        lifespan: "12-15 years",
        size: "Medium to Large",
        weight: "40-70 lbs (18-32 kg)",
        origin: "France/Germany",
        care: "Needs regular grooming to maintain curly coat. Loves human companionship.",
        exercise: "Moderate – Enjoys mental challenges, agility sports, and walks."
    }
};

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('previewImage').src = e.target.result;
            document.getElementById('previewImage').style.display = "block";

            // Simulated breed detection based on filename (No ML for now)
            const fileName = file.name.toLowerCase();
            let detectedBreed = "Unknown Breed";

            for (let breed in breedInfo) {
                if (fileName.includes(breed)) {
                    detectedBreed = breedInfo[breed];
                    break;
                }
            }

            const breedDetails = document.getElementById('breedDetails');

            if (detectedBreed !== "Unknown Breed") {
                breedDetails.innerHTML = `
                    <h2>${detectedBreed.name}</h2>
                    <p><strong>Description:</strong> ${detectedBreed.description}</p>
                    <p><strong>Temperament:</strong> ${detectedBreed.temperament}</p>
                    <p><strong>Lifespan:</strong> ${detectedBreed.lifespan}</p>
                    <p><strong>Size:</strong> ${detectedBreed.size}</p>
                    <p><strong>Weight:</strong> ${detectedBreed.weight}</p>
                    <p><strong>Origin:</strong> ${detectedBreed.origin}</p>
                    <p><strong>Care:</strong> ${detectedBreed.care}</p>
                    <p><strong>Exercise Needs:</strong> ${detectedBreed.exercise}</p>
                `;
            } else {
                breedDetails.innerHTML = `
                    <h2>Unknown Breed</h2>
                    <p>No details available.</p>
                `;
            }
        };

        reader.readAsDataURL(file);
    }
});

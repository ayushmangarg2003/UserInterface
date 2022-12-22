let doctors = [
  {
    name: "Ayushman",
    speciality: "Dentist",
    imgsrc: "./images/doc1.jpg",
    location: "Delhi",
  },
  {
    name: "Aviral",
    speciality: "Orthologist",
    imgsrc: "./images/doc2.jpg",
    location: "Mumbai",
  },
  {
    name: "Inderpreet",
    speciality: "Neurologist",
    imgsrc: "./images/doc3.jpg",
    location: "Chennai",
  },
  {
    name: "Aditya",
    speciality: "Pediatretion",
    imgsrc: "./images/doc4.jpg",
    location: "Kolkata",
  },
  {
    name: "Kartik",
    speciality: "Cardiologist",
    imgsrc: "./images/doc5.jpg",
    location: "Bangalore",
  },
];

const cardContainer = document.getElementById("cards-container");
doctors.forEach((Element) => {
  var cardEl = document.createElement("div");
  cardEl.innerHTML = `
    <div class="box">
        <img src="${Element.imgsrc}" alt="Doctor Image" />
        <div class="text">${Element.name}</div>
            <p>${Element.speciality}</p>
            <p>${Element.location}</p>
        </div>
    </div>`;
  cardEl.classList.add("card");
  cardContainer.appendChild(cardEl);
});
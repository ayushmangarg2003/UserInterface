let centers = [
    {
      name: "Neela Path Labs",
      imgsrc: "./images/hosp1.jpg",
      location: "Kolkata",
    },
    {
      name: "Star Labs",
      imgsrc: "./images/hosp2.jpg",
      location: "Mumbai",
    },
    {
      name: "Gold Labs",
      imgsrc: "./images/hosp3.jpg",
      location: "Chennai",
    },
    {
      name: "Rohini Center",
      imgsrc: "./images/hosp4.jpg",
      location: "Delhi",
    },
    {
      name: "MAANG Labs",
      imgsrc: "./images/hosp5.jpeg",
      location: "Bangalore",
    },
  ];
  
  const centerContainer = document.getElementById("centers-container");
  centers.forEach((Element) => {
    var centerEl = document.createElement("div");
    centerEl.innerHTML = `
      <div class="box">
          <img src="${Element.imgsrc}" alt="Doctor Image" />
          <div class="text">${Element.name}</div>
              <p>${Element.location}</p>
          </div>
      </div>`;
    centerEl.classList.add("card");
    centerContainer.appendChild(centerEl);
  });
  
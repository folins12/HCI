document.addEventListener("DOMContentLoaded", function() {
  const reserveButtons = document.querySelectorAll(".btn-reserve");

  reserveButtons.forEach(button => {
    button.addEventListener("click", function() {
      const nurseryPlantId = this.dataset.nurseryPlantId;

      fetch('/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ nursery_plant_id: nurseryPlantId })
      })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          alert("Prenotazione effettuata con successo!");
          const availabilityElement = document.querySelector(`.availability[data-nursery-plant-id="${nurseryPlantId}"]`);
          availabilityElement.textContent = `Disponibilità in negozio: ${data.new_availability}`;
        } else {
          alert(data.message || "Errore nella prenotazione. Riprova.");
        }
      })
      .catch(error => {
        console.error('Errore:', error);
        alert('Errore: ' + error.message);
      });
    });
  });
});

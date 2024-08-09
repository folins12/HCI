document.addEventListener("DOMContentLoaded", function() {
    const reserveButtons = document.querySelectorAll(".btn-addmyplant");

    console.log("Bottoni trovati:", reserveButtons.length); // Debug: controlla il numero di bottoni trovati

    reserveButtons.forEach(button => {
        button.addEventListener("click", function() {
            const myplantId = this.dataset.myplantId;
            console.log("ID pianta:", myplantId); // Debug: controlla l'ID pianta

            // Disabilita il bottone per evitare clic ripetuti
            this.style.pointerEvents = "none"; // Usa lo stile CSS per disabilitare i clic

            fetch('/addmyplant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({ nursery_plant_id: myplantId })
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
                    this.querySelector('p').textContent = "Pianta aggiunta con successo!";
                } else {
                    alert(data.message || "Errore nella prenotazione. Riprova.");
                }
            })
            .catch(error => {
                console.error('Errore:', error);
                alert('Errore: ' + error.message);
            })
            .finally(() => {
                // Riabilita il bottone in caso di errore o successo
                this.style.pointerEvents = "auto"; // Riabilita i clic
            });
        });
    });
});

  
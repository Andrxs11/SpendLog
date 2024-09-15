document.getElementById("expense-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    if (date && category && amount) {
        // Crear una nueva fila en la tabla
        const table = document.getElementById("expense-table").querySelector("tbody");
        const newRow = table.insertRow();

        // Insertar las celdas de la nueva fila
        const dateCell = newRow.insertCell(0);
        const categoryCell = newRow.insertCell(1);
        const amountCell = newRow.insertCell(2);

        // Asignar valores a las celdas
        dateCell.textContent = date;
        categoryCell.textContent = category;
        amountCell.textContent = `$${parseFloat(amount).toFixed(2)}`;

        // Limpiar el formulario
        document.getElementById("expense-form").reset();
    } else {
        alert("Por favor, completa todos los campos");
    }
});
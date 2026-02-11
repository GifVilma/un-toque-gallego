    // js/carta-pdf.js

    window.renderCartaPDF = function(container) {
        if (!container) return;

        const carta = restaurantData.subsections.carta.categories;

        let html = `
        <div class="carta-pdf-container fade-in">
            <header class="carta-pdf-header">
                <h1>Cervecería — Un Toque Gallego</h1>
                <p class="subtitle">Auténtica gastronomía gallega en Madrid</p>
                <p class="phones">916 34 38 88 · 656 94 54 89</p>
            </header>

            <!-- Raciones -->
            <div class="carta-pdf-section">
                <h2>Nuestras Raciones</h2>
                ${generateLines([
                    "Jamón Ibérico", "22,00€",
                    "Lacón a la Gallega", "11,50€",
                    "Torreznos de Soria", "10,50€",
                    "Alitas Fritas o a la Barbacoa", "9,00€",
                    "Croquetas Caseras de Jamón (8 uds)", "11,50€",
                    "Oreja a la Plancha", "10,50€",
                    "Patatas Bravas (Dos Salsas)", "5,50€",
                    "Huevos Rotos con Jamón", "9,50€",
                    "Empanada Gallega", "6,50€",
                    "Ensaladilla Rusa", "6,00€",
                    "Ensalada Mixta", "6,00€",
                    "Tomate Rosa con Ventresca de Bonito", "14,50€",
                    "Flor de Alcachofa con virutas de Jamón", "10,50€"
                ])}
            </div>

            <!-- De Cuchara -->
            <div class="carta-pdf-section">
                <h2>De Cuchara</h2>
                ${generateLines([
                    "Callos con Garbanzos", "10,50€",
                    "Judías Blancas con Oreja", "9,00€",
                    "Caldo Gallego", "6,00€"
                ])}
            </div>

            <!-- Tortillas y Revueltos -->
            <div class="carta-pdf-section">
                <h2>Tortillas y Revueltos</h2>
                ${generateLines([
                    "Tortilla de Patatas (entera)", "18,00€",
                    "Revuelto de Morcilla", "7,50€",
                    "Tortilla por encargo (para llevar)", "18,00€"
                ])}
            </div>

            <!-- Carnes -->
            <div class="carta-pdf-section">
                <h2>Carnes</h2>
                ${generateLines([
                    "Entrecot de Ternera 300 gr", "21,50€",
                    "Chuletón de Ternera 600 gr", "35,00€",
                    "Cachopo por encargo 400 gr", "18,00€"
                ])}
            </div>

            <!-- Mariscos y Pescados -->
            <div class="carta-pdf-section">
                <h2>Mariscos y Pescados</h2>
                ${generateLines([
                    "Pulpo a la Gallega", "22,50€",
                    "Mejillones Tigre", "12,00€",
                    "Boquerones Fritos / en Vinagre", "9,00€",
                    "Calamares a la Andaluza", "9,50€",
                    "Chipirones a la Plancha", "15,50€",
                    "Navajas a la Plancha", "15,00€",
                    "Gambas al Ajillo", "16,00€",
                    "Zamburiñas a la Plancha", "15,00€",
                    "Sepia al Ajillo", "14,50€",
                    "Marisco por Encargo", "Según mercado"
                ])}
            </div>

            <!-- Arroces -->
            <div class="carta-pdf-section">
                <h2>Arroces</h2>
                ${generateLines([
                    "Arroz caldoso con Bogavante", "21,50€",
                    "Arroz Meloso con Mariscos", "15,50€",
                    "Arroz Negro con Sepia", "15,50€"
                ])}
            </div>

            <!-- Platos Combinados -->
            <div class="carta-pdf-section">
                <h2>Platos Combinados</h2>
                ${generateLines([
                    "Filete de ternera, patatas y huevo", "15,00€",
                    "Filete de pollo, arroz y ensalada", "14,50€",
                    "Lomo Adobado, huevos y patatas", "11,00€",
                    "Panceta, huevos y patatas", "11,00€"
                ])}
            </div>

            <!-- Tostas y Hamburguesas -->
            <div class="carta-pdf-section">
                <h2>Tostas y Hamburguesas</h2>
                ${generateLines([
                    "Tosta de Jamón Ibérico con tumaca", "9,00€",
                    "Tosta de Solomillo de Cerdo", "8,00€",
                    "Hamburguesa Mixta", "9,50€",
                    "Hamburguesa de Vacuno completa", "11,00€"
                ])}
            </div>

            <!-- Bocadillos -->
            <div class="carta-pdf-section">
                <h2>Bocadillos y Montados</h2>
                ${generateLines([
                    "De Jamón Ibérico", "5,80€ / 4,20€",
                    "De Bacón / Panceta", "5,00€ / 4,00€",
                    "De Bacón con Queso", "5,80€ / 4,20€",
                    "De Lomo Adobado", "5,00€ / 4,00€",
                    "De Lomo con Queso", "5,90€ / 4,80€",
                    "De Calamares", "5,20€ / 4,50€",
                    "De Tortilla de Patata / Francesa", "5,00€ / 4,00€",
                    "Pepito de Ternera", "6,00€",
                    "Todos incluyen Café o Infusión", ""
                ])}
            </div>

            <!-- Desayunos -->
            <div class="carta-pdf-section">
                <h2>Desayunos</h2>
                ${generateLines([
                    "Café/Infusión + Bollería", "2,60€",
                    "Café/Infusión + Churros/Porras", "2,50€",
                    "Café/Infusión + Tostadas", "2,80€",
                    "ColaCao + Bollería", "3,00€",
                    "Zumo de Naranja Natural", "2,80€"
                ])}
            </div>

            <!-- Postres -->
            <div class="carta-pdf-section">
                <h2>Postres</h2>
                ${generateLines([
                    "Filloa Rellena de Crema", "5,50€",
                    "Coulan de Chocolate", "5,50€",
                    "Tarta de Queso Casera", "5,00€",
                    "Helados (Vainilla/Chocolate)", "4,50€",
                    "Sorbete de Limón", "4,50€"
                ])}
            </div>

            <footer class="carta-pdf-footer">
                <p><strong>OFRECEMOS:</strong> Desayunos · Menú del Día · Carta Completa · Vinos, Cervezas y Refrescos · Celebraciones y Eventos</p>
                <p>Para reservas o menús especiales: <strong>656 94 54 89</strong> · Presupuesto sin compromiso</p>
            </footer>
        </div>`;

        container.innerHTML = html;
    };

    // Función auxiliar para generar líneas rápidas
    function generateLines(array) {
        let lines = '';
        for (let i = 0; i < array.length; i += 2) {
            lines += `<div class="carta-pdf-line"><span class="name">${array[i]}</span><span class="price">${array[i+1]}</span></div>`;
        }
        return lines;
    }
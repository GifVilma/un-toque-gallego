// js/data.js
const img = (src, alt) => 
    `<img src="${src}" alt="${alt}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" loading="lazy">`;

const restaurantData = {
    sections: {
        inicio: {
            title: "Bienvenidos a Un Toque Gallego",
            content: `
                <section class="hero-section-inicio">
                    <div class="hero-content">
                        <h2>¡Bienvenido a la Cervecería!</h2>
                        <h1>Un Toque Gallego</h1>
                        <p class="hero-subtitle">Descubre la auténtica cocina gallega y española en el corazón de Madrid. Mariscos frescos, pulpo a la gallega, tortilla de patata y mucho más.</p>
                        <div class="hero-buttons">
                            <a href="#reservas" class="hero-button" data-section="reservas">Reserva / Para Llevar</a>
                            <a href="#" class="hero-button ver-carta-completa-btn">Ver carta completa</a>
                        </div>
                    </div>
                </section>
            `
        },

        nosotros: {
    title: "Quiénes Somos",
    description: "",
    content: `
        <section class="nosotros-section fade-in">
            <div class="container">
                <div class="nosotros-grid">

                    <!-- TEXTO A LA IZQUIERDA (RESUMIDO) -->
                    <div class="nosotros-texto">
                        <h2 class="nosotros-titulo">Un Toque Gallego</h2>
                        <p class="nosotros-parrafo">
                            Un Toque Gallego, de la mano de <strong>Edwin Jorge</strong>, lleva conquistando a madrileños y visitantes con una cocina que celebra las raíces gallegas y españolas. En un enclave donde se mezclan barrio, metro y oficinas, nuestro restaurante se ha convertido en un punto de encuentro para quienes buscan sabor auténtico.
                            </p>
                        <p class="nosotros-parrafo">
                            El jamón ibérico recién cortado, el pulpo a la gallega, el lacón, los torreznos de Soria y nuestra tortilla jugosa. se combinan con mariscos frescos y una paella hecha con mimo, creando un menú que honra tradición y calidad.
                        </p>
                        <p class="nosotros-parrafo">
                            Con un ambiente cercano y una cocina hecha con alma, <strong>Un Toque Gallego</strong> no solo alimenta: despierta recuerdos y emociones. ¡Ven a disfrutar un pedacito de Galicia en Madrid!
                        </p>
                    </div>

                    <!-- FOTO A LA DERECHA -->
                    <div class="nosotros-foto">
                        <img src="img/foto-equipo.jpeg" alt="Equipo de Un Toque Gallego" loading="lazy">
                    </div>
                </div>

                <!-- LOCALIZACIÓN DEBAJO -->
                <div class="nosotros-localizacion">
                    <h2 class="localizacion-titulo">Localización</h2>
                    <div class="localizacion-grid">
                        <div class="localizacion-texto">
                            <p><strong>Dirección:</strong> Av. del Marqués de Corbera 53, 28017 Madrid</p>
                            <p><strong>Tel:</strong> <a href="tel:+34916343888">916 34 38 88</a> | <a href="tel:+34656945489">656 94 54 89</a></p>
                            <p><strong>WhatsApp:</strong> <a href="https://wa.me/34656945489" target="_blank">656 94 54 89</a></p>
                            <p><strong>Email:</strong> <a href="mailto:untoquegallego@gmail.com">untoquegallego@gmail.com</a></p>
                            <p><strong>Horario:</strong> Lunes a Domingo 6:00 - 23:00</p>
                            <p><small>*Cerramos tardes de jueves y domingos</small></p>
                        </div>
                        <div class="localizacion-mapa">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.843888!2d-3.651234!3d40.424567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42284d7f2f2f2b%3A0x1a2b3c4d5e6f7g8h!2sAv.%20del%20Marqu%C3%A9s%20de%20Corbera%2C%2053%2C%2028017%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000"
                                width="100%" height="400" style="border:0;border-radius:16px;" allowfullscreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
},

        reservas: {
            title: "Reserva tu mesa, o Para Llevar",
            content: `
                <div class="reservations-section">
                    <h2>Haz tu reserva de forma rápida y sencilla. </h2>
                    <p class="section-description">¡Te esperamos!</p>
                    <form id="reservation-form" class="reservation-form">
                        <div class="form-group">
                            <label for="name">Nombre completo</label>
                            <input type="text" id="name" name="name" required placeholder="Ej. Juan Pérez">
                        </div>
                        <div class="form-group">
                            <label for="date">Fecha</label>
                            <input type="date" id="date" name="date" required>
                        </div>
                        <div class="form-group">
                            <label for="time">Hora</label>
                            <input type="time" id="time" name="time" required>
                        </div>
                        <div class="form-group">
                            <label for="people">Número de personas</label>
                            <input type="number" id="people" name="people" min="1" required placeholder="Ej. 4">
                        </div>
                        <div class="form-group">
                            <label for="comments">Comentarios adicionales</label>
                            <textarea id="comments" name="comments" rows="4" placeholder="Ej. Mesa cerca de la ventana"></textarea>
                        </div>
                        <button type="submit" class="form-button">Enviar Reserva</button>
                    </form>
                    <div class="reservation-info">
                        <div class="contact-methods">
                            <div class="method">
                                <i class="fas fa-phone"></i>
                                <h3>Por Teléfono</h3>
                                <p><a href="tel:+34916343888">916 34 38 88</a></p>
                                <p><a href="tel:+34656945489">656 94 54 89</a></p>
                            </div>
                            <div class="method">
                                <i class="fab fa-whatsapp"></i>
                                <h3>WhatsApp</h3>
                                <p><a href="https://wa.me/34656945489" target="_blank">656 94 54 89</a></p>
                            </div>
                        </div>
                        <div class="hours">
                            <h3>Horarios</h3>
                            <p><strong>Lunes - Domingo:</strong> 6:00 - 23:00</p>
                            <p><small>*Cerramos tardes de jueves y domingos</small></p>
                        </div>
                    </div>
                </div>
            `
        },

        cartaTriptico: {
            title: "Nuestra Carta",
            content: `
                <section class="triptico-section fade-in">
                    <div class="container">
                        <h1 class="triptico-title">Nuestra Carta</h1>
                        <p class="triptico-subtitle">Portada e interior</p>
                        <div class="triptico-images">
                            <img src="img/carta-exterior.jpg" alt="Portada" class="triptico-img" loading="lazy">
                            <img src="img/carta-interior.jpg" alt="Interior" class="triptico-img" loading="lazy">
                        </div>
                        <div class="triptico-actions">
                            <button class="btn-ver-pdf ver-carta-completa-btn">
                                Ver carta completa
                            </button>
                        </div>
                    </div>
                </section>
            `
        }
    },


    subsections: {
        desayunos: {
            title: "Desayunos y Meriendas",
            description: "Comienza el día o repón energías con nuestras opciones dulces y saladas.",
            categories: {
                "bolleria-tostas": {
                    title: "Bollería y Tostas",
                    description: "Bollería fresca y tostas con ingredientes de calidad.",
                    dishes: [
                        { name: "Café o Infusión con Bollería", description: "Cruasán, Napolitana, Bizcocho o Magdalena", allergens: ["Gluten", "Lácteos", "Huevos"], price: "2,60€", image: img('img/con-bolleria.webp', 'Café con bollería') },
                        { name: "Café o Infusión con Churros o Porras", description: "Desayuno perfecto para empezar el día", allergens: ["Gluten", "Lácteos", "Huevos"], price: "2,50€", image: img('img/con-churros-porras.webp', 'Café con churros o porras') },
                        { name: "Café o Infusión con Tostadas", description: "Pan tostado, Cruasán plancha, o Barrita con tomate natural, aceite de oliva y sal", allergens: ["Gluten", "Lácteos", "Huevos"], price: "2,80€", image: img('img/con-tostadas.webp', 'Café con tostadas') },
                        { name: "Colacao con Bollería", description: "Cruasán, Napolitana, Bizcocho o Magdalena", allergens: ["Gluten", "Lácteos", "Huevos"], price: "3,00€", image: img('img/colacao-bolleria.webp', 'Colacao con bollería') },
                        { name: "Colacao con Tostadas", description: "Pan tostado, Cruasán plancha, o Barrita con tomate natural, aceite de oliva y sal", allergens: ["Gluten", "Lácteos", "Huevos"], price: "3,20€", image: img('img/colacao-zumo.webp', 'Colacao con tostadas') },
                        { name: "Zumo de Naranja", description: "Zumo natural", price: "2,80€", image: img('img/zumo-naranja.webp', 'Zumo de naranja natural') }
                    ]
                },
                "revueltos": {
                    title: "Revueltos",
                    description: "Revueltos caseros con diferentes ingredientes",
                    dishes: [
                        { name: "Revuelto de Bacón", description: "Huevos revueltos con bacón", allergens: ["Huevos"], price: "4,50€", image: img('img/revuelto-bacon.webp', 'Revuelto de bacón') },
                        { name: "Revuelto de solo huevo", description: "Huevos revueltos", allergens: ["Huevos"], price: "4,00€", image: img('img/revuelto-huevo.webp', 'Revuelto de huevo') }
                    ]
                },
                "sandwiches": {
                    title: "Sándwiches",
                    description: "Sándwiches variados para todos los gustos",
                    dishes: [
                        { name: "Sándwich Mixto", description: "Pan de molde con jamón york y queso", allergens: ["Gluten", "Lácteos"], price: "4,70€", image: img('img/mixto.webp', 'Sándwich mixto') },
                        { name: "Cruasán Mixto", description: "Cruasán con jamón york y queso", allergens: ["Gluten", "Huevos"], price: "4,70€", image: img('img/cruasan-mixto.webp', 'Cruasán mixto') },
                        { name: "Sándwich Mixto, con lechuga y tomate", description: "Pan de molde con jamón york, queso, lechuga y tomate", allergens: ["Gluten", "Lácteos"], price: "4,90€", image: img('img/mixto-lechuga-tomate.webp', 'Sándwich mixto con lechuga y tomate') },
                        { name: "Sándwich Mixto, con huevo", description: "Pan de molde con jamón york, queso, huevo", allergens: ["Gluten", "Lácteos", "Huevos"], price: "4,90€", image: img('img/mixto-huevo.webp', 'Sándwich mixto con huevo') }
                    ]
                },
                "tostas-hamburguesas": {
                    title: "Tostas y Hamburguesas",
                    description: "Tostas gourmet y hamburguesas caseras",
                    dishes: [
                        { name: "Tosta de Jamón Ibérico con Tumaca", description: "Pan tostado, untado con tomate, un toque de aceite de oliva virgen extra. Con finas lonchas de jamón ibérico", allergens: ["Gluten"], price: "9,00€", image: img('img/tostas.webp', 'Tosta de jamón ibérico con tumaca') },
                        { name: "Tosta de Solomillo de Cerdo", description: "Pan tostado, con medallones de solomillo de cerdo a la plancha, cubiertos con queso fundido y una capa de cebolla caramelizada", allergens: ["Gluten", "Lácteos"], price: "8,00€", image: img('img/tostas-cerdo.webp', 'Tosta de solomillo de cerdo') },
                        { name: "Hamburguesa Mixta", description: "Carne de vacuno y cerdo con lechuga, tomate y queso fundido", allergens: ["Gluten", "Lácteos", "Huevos"], price: "9,50€", image: img('img/hamburguesa-mixta.webp', 'Hamburguesa mixta') },
                        { name: "Hamburguesa de Vacuno", description: "Jugosa carne 100 % vacuno con bacon, queso fundido, cebolla caramelizada, lechuga, tomate y mahonesa", allergens: ["Gluten", "Lácteos", "Huevos"], price: "11,00€", image: img('img/hamburguesa-vacuno.webp', 'Hamburguesa de vacuno') }
                    ]
                },
                "bocadillos-montados": {
                    title: "Bocadillos y Montados",
                    description: "Bocadillos y montados caseros, con pan crujiente y productos frescos",
                    dishes: [
                        { name: "De Jamón Ibérico", description: "Pan crujiente con finas lonchas de jamón ibérico y un toque de aceite de oliva virgen extra", allergens: ["Gluten"], price: "5,80€/4,20€", image: img('img/bocadillo-jamon.webp', 'Bocadillo de jamón ibérico') },
                        { name: "De Bacon / De Panceta", description: "Pan tostado, con Bacon/Panceta a la plancha con el punto justo de sal", allergens: ["Gluten"], price: "5,00€/4,00€", image: img('img/bocadillo-bacon.webp', 'Bocadillo de bacon') },
                        { name: "De Bacon con Queso", description: "Bacon crujiente con queso fundido, servidos en pan caliente", allergens: ["Gluten", "Lácteos"], price: "5,80€/4,20€", image: img('img/bacon-queso.webp', 'Bocadillo de bacon con queso') },
                        { name: "De Lomo Adobado", description: "Filetes de lomo adobado a la plancha, en pan artesanal", allergens: ["Gluten"], price: "5,00€/4,00€", image: img('img/bocadillo-lomo.webp', 'Bocadillo de lomo adobado') },
                        { name: "De Lomo Adobado con Queso", description: "Lomo adobado a la plancha con queso fundido, en pan recién hecho", allergens: ["Gluten", "Lácteos"], price: "5,90€/4,80€", image: img('img/bocadillo-lomo-queso.webp', 'Bocadillo de lomo con queso') },
                        { name: "De Calamares", description: "Anillas de calamar rebozadas y fritas, en pan crujiente al estilo madrileño", allergens: ["Moluscos", "Huevos", "Gluten"], price: "5,20€/4,50€", image: img('img/bocadillo-calamares.webp', 'Bocadillo de calamares') },
                        { name: "De Tortilla de Patata", description: "Clásica tortilla española dentro de pan crujiente, jugosa y sabrosa", allergens: ["Gluten", "Huevos"], price: "5,00€/4,00€", image: img('img/bocadillo-tortilla.webp', 'Bocadillo de tortilla de patata') },
                        { name: "De Tortilla Francesa", description: "Tortilla francesa esponjosa servida en pan tostado", allergens: ["Gluten", "Huevos"], price: "5,00€/4,00€", image: img('img/bocadillo-tortilla-f.webp', 'Bocadillo de tortilla francesa') },
                        { name: "Pepito de Ternera", description: "Tierno filete de ternera a la plancha en pan crujiente, con un toque de aceite y sal", allergens: ["Gluten"], price: "6,00€", image: img('img/petito-ternera.webp', 'Petito de ternera') }
                    ]
                }
            }
        },

        carta: {
            title: "Nuestra Carta",
            description: "Descubre los auténticos sabores de Galicia con ingredientes frescos y recetas tradicionales.",
            categories: {
                "raciones": {
                    title: "Nuestras Raciones",
                    description: "Raciones para compartir con los mejores productos gallegos",
                    dishes: [
                        { name: "Jamón Ibérico", description: "Finas lonchas de jamón ibérico cortadas a mano", allergens: [], price: "22,00€", image: img('img/jamon-iberico.webp', 'Jamón ibérico') },
                        { name: "Lacón a la Gallega", description: "Lacón tierno con cachelos, pimentón y aceite de oliva virgen extra", allergens: ["Posibles Sulfitos"], price: "11,50€", image: img('img/lacon.webp', 'Lacón a la gallega') },
                        { name: "Torreznos de Soria", description: "Crujientes y sabrosos torreznos elaborados con panceta soriana de primera calidad", allergens: ["Gluten", "Lácteos", "Huevos"], price: "10,50€", image: img('img/torreznos.webp', 'Torreznos de Soria') },
                        { name: "Alitas Fritas o a la Barbacoa", description: "Alitas de pollo fritas o a la barbacoa, crujientes por fuera y jugosas por dentro", allergens: ["Gluten", "Mostaza", "Soja"], price: "9,00€", image: img('img/alitas.webp', 'Alitas fritas o a la barbacoa') },
                        { name: "Croquetas Caseras de Jamón", description: "Croquetas caseras de jamón ibérico (8 unidades)", allergens: ["Gluten", "Lácteos", "Huevos"], price: "11,50€", image: img('img/croquetas.webp', 'Croquetas caseras de jamón') },
                        { name: "Oreja a la Plancha", description: "Oreja de cerdo a la plancha con un toque de sal y aceite de oliva", allergens: [], price: "10,50€", image: img('img/oreja-plancha.webp', 'Oreja a la plancha') },
                        { name: "Patatas Bravas (Dos Salsas)", description: "Crujientes patatas cortadas en cubos, doradas al punto y acompañadas de dos salsas", allergens: ["Huevo"], price: "5,50€", image: img('img/patatas-bravas.webp', 'Patatas bravas con dos salsas') },
                        { name: "Huevos Rotos con Jamón", description: "Huevos frescos fritos sobre una base de patatas crujientes, coronados con finas lonchas de jamón ibérico", allergens: ["Huevo"], price: "9,50€", image: img('img/huevos-rotos.webp', 'Huevos rotos con jamón') },
                        { name: "Empanada Gallega", description: "Masa casera rellena de ingredientes tradicionales, horneada hasta conseguir una textura dorada y crujiente", allergens: ["Huevo", "Gluten", "Pescado", "Lácteos"], price: "6,50€", image: img('img/empanada-gallega.webp', 'Empanada gallega') }
                    ]
                },
                "mariscos-pescados": {
                    title: "Mariscos y Pescados",
                    description: "Mariscos frescos de las rías gallegas y pescados de temporada",
                    dishes: [
                        { name: "Pulpo a la Gallega", description: "Pulpo cocido con pimentón dulce, sal gorda y aceite de oliva", allergens: ["Moluscos"], price: "22,50€", image: img('img/pulpo.webp', 'Pulpo a la gallega') },
                        { name: "Mejillones tigre", description: "Mejillones rellenos y gratinados, tapa sabrosa y jugosa", allergens: ["Moluscos", "Gluten"], price: "12,00€", image: img('img/mejillones-tigre.webp', 'Mejillones tigre') },
                        { name: "Boquerones fritos / Boquerones en vinagre", description: "Boquerones dorados al punto / macerados en vinagre, servicio frío", allergens: ["Pescado", "Gluten"], price: "9,00€", image: img('img/boquerones.webp', 'Boquerones fritos o en vinagre') },
                        { name: "Calamares a la Andaluza", description: "Anillas de calamar rebozadas y fritas hasta quedar doradas y crujientes", allergens: ["Moluscos", "Gluten"], price: "9,50€", image: img('img/calamares-andaluza.webp', 'Calamares a la andaluza') },
                        { name: "Chipirones a la plancha", description: "Chipirones tiernos, marcados a la plancha con ajo, perejil y un chorrito de limón", allergens: ["Moluscos"], price: "15,50€", image: img('img/chipirones-plancha.webp', 'Chipirones a la plancha') },
                        { name: "Navajas a la plancha", description: "Navajas a la plancha, con un chorrito de aceite de oliva y limón", allergens: ["Moluscos"], price: "15,00€", image: img('img/navajas-plancha.webp', 'Navajas a la plancha') },
                        { name: "Gambas al Ajillo", description: "Gambas frescas salteadas con ajo y guindilla", allergens: ["Crustáceos"], price: "16,00€", image: img('img/gambas-ajillo.webp', 'Gambas al ajillo') },
                        { name: "Zamburiñas a la Plancha", description: "Zamburiñas frescas selladas a la plancha con un toque de perejil", allergens: ["Moluscos"], price: "15,00€", image: img('img/zamburinas-plancha.webp', 'Zamburiñas a la plancha') },
                        { name: "Sepia al Ajillo", description: "Sepia tierna salteada con ajo y perejil", allergens: ["Moluscos"], price: "14,50€", image: img('img/sepia-ajillo.webp', 'Sepia al ajillo') },
                        { name: "Marisco por Encargo", description: "Precios según mercado: Centollo, Buey de Mar, Cigalas, Nécoras, Bogavante nacional, Ostras", allergens: ["Moluscos", "Crustáceos"], price: "--,--€", image: img('img/marisco-encargo.webp', 'Marisco por encargo') }
                    ]
                },
                "arroces": {
                    title: "Arroces",
                    description: "Arroces caldosos con ingredientes frescos",
                    dishes: [
                        { name: "Arroz caldoso con Bogavante", description: "Arroz caldoso con bogavante fresco y verduras", allergens: ["Crustáceos"], price: "21,50€", image: img('img/arroz-bogavante.webp', 'Arroz caldoso con bogavante') },
                        { name: "Arroz Meloso con Mariscos", description: "Arroz meloso con surtido de mariscos, textura cremosa y sabrosa", allergens: ["Moluscos", "Crustáceos"], price: "15,50€", image: img('img/arroz-mariscos.webp', 'Arroz meloso con mariscos') },
                        { name: "Arroz Negro con Sepia", description: "Arroz con tinta de calamar, sepia y gambas", allergens: ["Moluscos", "Pescado"], price: "15,50€", image: img('img/arroz-sepia.webp', 'Arroz negro con sepia') }
                    ]
                },
                "de-cuchara": {
                    title: "De Cuchara",
                    description: "Platos de cuchara tradicionales",
                    dishes: [
                        { name: "Callos con garbanzos", description: "Guiso tradicional de callos con garbanzos, especiado y sabroso", allergens: ["Sulfitos"], price: "10,50€", image: img('img/callos-garbanzos.webp', 'Callos con garbanzos') },
                        { name: "Judías Blancas con oreja", description: "Guiso de judías blancas con oreja de cerdo, intenso y casero", allergens: ["Sulfitos"], price: "9,00€", image: img('img/judias-oreja.webp', 'Judías blancas con oreja') },
                        { name: "Caldo Gallego", description: "Sopa tradicional gallega con grelos, patata, alubias y carne", allergens: ["Sulfitos"], price: "6,00€", image: img('img/caldo-gallego.webp', 'Caldo gallego') }
                    ]
                },
                "carnes": {
                    title: "Carnes",
                    description: "Carnes selectas a la parrilla y guisos tradicionales",
                    dishes: [
                        { name: "Entrecot de Ternera 300 gr", description: "Corte selecto de ternera a la plancha, en su punto", allergens: [], price: "21,50€", image: img('img/entrecot.webp', 'Entrecot de ternera') },
                        { name: "Chuletón de ternera 600 gr", description: "Chuletón premium a la parrilla, jugoso y sabroso", allergens: [], price: "35,00€", image: img('img/chuleton-600.webp', 'Chuletón de ternera 600 gr') },
                        { name: "Cachopo (por encargo, 400 gr)", description: "Dos filetes de ternera rellenos de jamón y queso, empanados y fritos", allergens: ["Gluten", "Lácteos", "Huevos"], price: "18,00€", image: img('img/cachopo.webp', 'Cachopo') }
                    ]
                },
                "verduras-ensaladas": {
                    title: "Verduras y Ensaladas",
                    description: "Verduras frescas y ensaladas de temporada",
                    dishes: [
                        { name: "Ensaladilla Rusa", description: "Clásica ensaladilla con verduras y mayonesa cremosa", allergens: ["Huevos", "Pescado"], price: "6,00€", image: img('img/ensaladilla-rusa.webp', 'Ensaladilla rusa') },
                        { name: "Ensalada Mixta", description: "Lechuga, tomate, cebolla, atún y huevo duro, aliñada al gusto", allergens: ["Huevos", "Pescado"], price: "6,00€", image: img('img/ensalada-mixta.webp', 'Ensalada mixta') },
                        { name: "Tomate Rosa con Ventresca de Bonito", description: "Tomate rosa fresco acompañado de ventresca de bonito y aceite de oliva", allergens: ["Pescado"], price: "14,50€", image: img('img/ensalada-ventresca.webp', 'Tomate rosa con ventresca') },
                        { name: "Flor de Alcachofa con virutas de Jamón", description: "Alcachofa fresca con virutas de jamón ibérico", allergens: [], price: "10,50€", image: img('img/flor-alcachofa.webp', 'Flor de alcachofa con jamón') }
                    ]
                },
                "tortillas-revueltos": {
                    title: "Tortillas y Revueltos",
                    description: "Clásicas y de temporada, jugosas y para compartir",
                    dishes: [
                        { name: "Tortilla de Patatas", description: "Clásica tortilla española jugosa - Entera", allergens: ["Huevos"], price: "18,00€", image: img('img/tortilla-patata.webp', 'Tortilla de patatas') },
                        { name: "Revuelto de Morcilla", description: "Huevos revueltos con morcilla, intenso y sabroso", allergens: ["Huevos"], price: "7,50€", image: img('img/revuelto-morcilla.webp', 'Revuelto de morcilla') },
                        { name: "Tortilla de Patatas para llevar", description: "Clásica tortilla española jugosa (opción con o sin cebolla) - Entera", allergens: ["Huevos"], price: "18,00€", image: img('img/tortilla-patatas.webp', 'Tortilla de patatas para llevar') }
                    ]
                },
                "platos-combinados": {
                    title: "Platos Combinados",
                    description: "Platos completos con guarnición",
                    dishes: [
                        { name: "Filete de ternera, patatas y huevo frito", description: "Filete de ternera a la plancha con patatas y huevo frito", allergens: ["Huevos"], price: "15,00€", image: img('img/filete-ternera.webp', 'Filete de ternera con patatas y huevo') },
                        { name: "Filete de pollo, arroz y ensalada", description: "Filete de pollo a la plancha acompañado de arroz y ensalada fresca", allergens: [], price: "14,50€", image: img('img/filete-pollo.webp', 'Filete de pollo con arroz y ensalada') },
                        { name: "Lomo adobado, huevos y patatas", description: "Lomo adobado con su guarnición de patatas y huevo frito", allergens: ["Huevos"], price: "11,00€", image: img('img/lomo-adobado.webp', 'Lomo adobado con huevos y patatas') },
                        { name: "Panceta, huevos y patatas", description: "Panceta jugosa acompañada de huevos y patatas caseras", allergens: ["Huevos"], price: "11,00€", image: img('img/panceta.webp', 'Panceta con huevos y patatas') }
                    ]
                },
                "postres": {
                    title: "Postres",
                    description: "Postres caseros y dulces tradicionales gallegos",
                    dishes: [
                        { name: "Filloa rellena de crema", description: "Fina filloa gallega rellena de suave crema pastelera, flameada o con chocolate", allergens: ["Huevos", "Gluten", "Lácteos"], price: "5,50€", image: img('img/filloa.webp', 'Filloa rellena de crema') },
                        { name: "Coulan de chocolate", description: "Bizcocho de chocolate con corazón fundente, servido con helado de vainilla", allergens: ["Gluten", "Huevos", "Lácteos"], price: "5,50€", image: img('img/coulan.webp', 'Coulan de chocolate') },
                        { name: "Tarta de queso casera", description: "Tarta de queso cremosa al estilo casero, con base crujiente", allergens: ["Gluten", "Huevos", "Lácteos"], price: "5,00€", image: img('img/tarta-queso.webp', 'Tarta de queso casera') },
                        { name: "Helados (vainilla o chocolate)", description: "Bolas de helado de vainilla o chocolate, cremosas y frías", allergens: ["Lácteos"], price: "4,50€", image: img('img/helados.webp', 'Helados de vainilla o chocolate') },
                        { name: "Sorbete Limón", description: "Sorbete refrescante de limón natural, ligero y aromático", allergens: [], price: "4,50€", image: img('img/sorbete-limon.webp', 'Sorbete de limón') }
                    ]
                }
            }
        },

        menus: {
            title: "Menús",
            description: "Menús del día, Fin de semana y Especiales para todos los gustos.",
            content: `
                <!-- Menús Diarios -->
                <section id="menus" class="menu-section">
                    <h2>Menús del Día</h2>
                    <p class="menu-intro">Disfruta de nuestros menús del día, elaborados con ingredientes frescos y de calidad que reflejan lo mejor de la gastronomía gallega y española. Saborea platos como Judías Blancas con Oreja, Espaguetis Salteados con Verduras, Calamares Andaluza, Pollo Asado, Lentejas de la Abuela, Pescado del Día y mucho más. Con opciones para todos los gustos, desde carnes a la plancha hasta sabrosas ensaladas, cada comida es una experiencia única y casera. ¡Ven a disfrutar de lo mejor en cada bocado!</p>
                    <div class="menu-footer">
                        <p class="menu-price-final">Precio: <span class="price-circle">13,00€</span></p>
                        <p class="menu-includes">Incluye: Pan, Bebida, Postre o Café</p>
                        <p class="menu-includes">Opciones: Tarta de Santiago, Galleta, Orujo, Flan, Arroz con Leche, Pudin [Lácteos] [Huevos]</p>
                    </div>
                </section>

                <!-- Menús Fin de Semana -->
                <section id="weekend-menus" class="menu-section">
                    <h2>Menús Fin de Semana</h2>
                    <p class="menu-intro">Saborea nuestros menús especiales de fin de semana, diseñados para deleitar tu paladar con lo mejor de la gastronomía gallega y española. Disfruta de una experiencia única con platos cuidadosamente elaborados, perfectos para compartir con familia o amigos. ¡Un festín para los sentidos!</p>
                    <div class="menu-footer">
                        <p class="menu-price-final">Precio: <span class="price-circle">15,00€</span></p>
                        <p class="menu-includes">Incluye: Pan, Bebida, Postre o Café</p>
                        <p class="menu-includes">Opciones: Tarta de Santiago, Galleta, Orujo, Flan, Arroz con Leche, Pudin [Lácteos] [Huevos]</p>
                    </div>
                </section>

                <!-- Menús Especiales -->
                <section id="special-menus" class="menu-section">
                    <div class="text-center mb-4">
                        <h2>Menús Especiales</h2>
                        <p class="lead menu-general-description">
                            Diseñados especialmente para reuniones familiares, eventos empresariales y celebraciones.
                            Ofrecemos una selección de platos variados que se ajustan a las necesidades de cada grupo.
                            Podrás disfrutar de una experiencia única, casera y adaptada a tus preferencias.
                        </p>
                    </div>

                    <!-- Menú 1 -->
                    <div class="card mb-5">
                        <div class="card-header text-center bg-primary text-white">
                            <h3>Menú 1 - 30€</h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="text-center mb-3">Primeros</h5>
                                    <div class="mb-3">
                                        <img src="img/jamon-iberico-1.webp" class="img-fluid rounded" alt="Jamón Ibérico con pan tumaca" loading="lazy">
                                        <p>Jamón Ibérico con pan tumaca</p>
                                    </div>
                                    <div class="mb-3">
                                        <img src="img/ventresca-ensalada.webp" class="img-fluid rounded" alt="Ensalada de Ventresca con pimientos asados" loading="lazy">
                                        <p>Ensalada de Ventresca con pimientos asados <span class="text-muted">[Pescado]</span></p>
                                    </div>
                                    <div class="mb-3">
                                        <img src="img/zamburinas.webp" class="img-fluid rounded" alt="Zamburiñas gratinadas" loading="lazy">
                                        <p>Zamburiñas gratinadas <span class="text-muted">[Moluscos]</span></p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h5 class="text-center mb-3">Segundos</h5>
                                    <div class="mb-3">
                                        <img src="img/chuletitas.webp" class="img-fluid rounded" alt="Chuletitas de cordero" loading="lazy">
                                        <p>Chuletitas de cordero</p>
                                    </div>
                                    <div class="mb-3">
                                        <img src="img/arroz-mariscos-1.webp" class="img-fluid rounded" alt="Arroz con Mariscos" loading="lazy">
                                        <p>Arroz con Mariscos <span class="text-muted">[Moluscos] [Crustáceos]</span></p>
                                    </div>
                                    <div class="mb-3">
                                        <img src="img/rodaballo.webp" class="img-fluid rounded" alt="Rodaballo a la espalda" loading="lazy">
                                        <p>Rodaballo a la espalda <span class="text-muted">[Pescado]</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Menú 2 -->
                    <div class="card mb-5">
                        <div class="card-header text-center bg-primary text-white">
                            <h3>Menú 2 - 38€</h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="text-center mb-3">Primeros</h5>
                                    <div class="mb-3">
                                        <img src="img/pulpo-gallega.webp" class="img-fluid rounded" alt="Pulpo a la Gallega" loading="lazy">
                                        <p>Pulpo a la Gallega <span class="text-muted">[Moluscos]</span></p>
                                    </div>
                                    <div class="mb-3">
                                        <img src="img/ensaladilla.webp" class="img-fluid rounded" alt="Ensaladilla rusa" loading="lazy">
                                        <p>Ensaladilla rusa <span class="text-muted">[Huevos] [Pescado] [Sulfitos]</span></p>
                                    </div>
                                    <div class="mb-3">
                                        <img src="img/gambones-ajillo.webp" class="img-fluid rounded" alt="Gambones al ajillo" loading="lazy">
                                        <p>Gambones al ajillo <span class="text-muted">[Crustáceos]</span></p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h5 class="text-center mb-3">Segundos</h5>
                                    <div class="mb-3">
                                        <img src="img/chuleton-ternera.webp" class="img-fluid rounded" alt="Chuletón de ternera" loading="lazy">
                                        <p>Chuletón de ternera</p>
                                    </div>
                                    <div class="mb-3">
                                        <img src="img/arroz-mariscos-1.webp" class="img-fluid rounded" alt="Arroz con Mariscos" loading="lazy">
                                        <p>Arroz con Mariscos <span class="text-muted">[Moluscos] [Crustáceos]</span></p>
                                    </div>
                                    <div class="mb-3">
                                        <img src="img/merluza-horno.webp" class="img-fluid rounded" alt="Merluza al horno" loading="lazy">
                                        <p>Merluza al horno <span class="text-muted">[Pescado]</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-4">
                        <p class="font-weight-bold menu-note">
                            Platos personalizados según alergias o intolerancias y la calidad que caracteriza nuestros menús.
                            ¡Consulta con nuestro equipo para planificar tu evento!
                        </p>
                        <a href="https://wa.me/34656945489?text=Hola,%20quiero%20información%20sobre%20Menús%20Especiales" 
                           target="_blank" class="btn btn-success btn-lg mt-3">
                            Reservar Menú Especial
                        </a>
                    </div>
                </section>
            `
        }
    }

};

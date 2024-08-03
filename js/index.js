//Funciones
//Funciones Seccion Somos CARD
var aperturaSomos=function(){
  let contenidoSomos=` <h1>¿Quiénes somos?</h1>
            <!-- Cambiar el color de los bordes -->
             <!-- Cambirar los margenes y alineaciones -->
            <div class="container text-center">`;
  return contenidoSomos;
};
var somosSegunTamanio=function(contenidoSomos){
  var ancho = window.innerWidth;
  console.log(ancho);
  if (ancho < 575.98) {
      // Código para pantallas pequeñas (móviles)
      var contenidoDiv=`<div class="row row-cols-2">`;
      
      } else {
      var contenidoDiv=`<div class="row row-cols-3">`;
    }     ;
    contenidoSomos+=contenidoDiv;
  return contenidoSomos;
}

var card_integrante= function(nombre, profesion){
  let card =`
  <div class="col">
    <div id="card" class="card text-bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header"></div>
      <div class="card-body">
         <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${profesion}</p> 
      </div>
    </div>
  </div>`;
  return card;
};

var cards_integrantes=function(data, contenidoSomos){
  for(var i=0; i<data.length;i++){
    contenidoSomos += card_integrante(data[i].nombre, data[i].profesion);
  };
  return contenidoSomos
};

var cierreSomos=function(contenidoSomos){
  contenidoSomos += 
`   </div>
</div>`;
  return contenidoSomos;
};


var seccion_Somos=function(data){
  let contenidoSomos=aperturaSomos();
  contenidoSomos=somosSegunTamanio(contenidoSomos);
  contenidoSomos=cards_integrantes(data,contenidoSomos);
  contenidoSomos=cierreSomos(contenidoSomos);
  return contenidoSomos
};

//Funciones Servicios ACCORDION
var aperturaServicios=function(){
  let contenidoServicios=`
  <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="50" data-aos-duration="1000">
    <h1>Nuestros servicios</h1>
    <p>Nuestros integrantes tienen de 2 a 5 años de experiencia en:</p>
    <div  class="container text-center">
        <div class="row">         
                        
    `;
  return contenidoServicios;
};

var accordionItem=function(nombreServicio, descripcionServicio, nroCollapse){
  let acordionItem=
  `<div class="accordion-item">
      <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target=${"#"+nroCollapse} aria-expanded="False" aria-controls=${nroCollapse}>
        ${nombreServicio}
      </button>
      </h2>
      <div id=${nroCollapse} class="accordion-collapse collapse">
        <div class="accordion-body">${descripcionServicio}</div>
      </div>
    </div>`
  return acordionItem;
};


var serviciosAcordeon=function(data, contenidoServicios, i){
  contenidoServicios +=`<div class="col">
  <div class="accordion">`
  contenidoServicios += accordionItem(data[i].nombre, data[i].descripcion, data[i].collapse);
  contenidoServicios += accordionItem(data[i+1].nombre, data[i+1].descripcion, data[i+1].collapse);
  contenidoServicios +=`</div>        
  </div>`;
  return contenidoServicios
; 
};

var cierreServicios=function(contenidoServicios){
  contenidoServicios += 
  `     </div>        
  </div>
  </div>
  </div>`;
  return contenidoServicios;
};

// rearmar con un ciclo.
var seccion_Servicios=function(data){
  let contenidoServicios=aperturaServicios();
  contenidoServicios = serviciosAcordeon(data, contenidoServicios, 0);
  contenidoServicios = serviciosAcordeon(data, contenidoServicios, 2);
  contenidoServicios = serviciosAcordeon(data, contenidoServicios, 4);
  contenidoServicios = cierreServicios(contenidoServicios);
  return contenidoServicios;
};

//Funcion tecnologia CARROUSEL
var aperturaTecnologia=function(){
  let contenidoTecnologia=` <h1>Nuestros Tecnologías</h1>
            <p>Tenemos experiencia con un diverso Stack Tecnológico:</p>
            <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">`;
  return contenidoTecnologia;
};

var carrousel_item= function(nombreTecnologia, descripcionTecnologia){
  let card =`<img src="./asses/img/Copia de Presentación EXdata.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <h4>${nombreTecnologia}</h4>                      
                     ${descripcionTecnologia} 
                    </div>
                  </div>`;
  return card;
};

var carrousel_tecnologia=function(data, contenidoTecnologia){
  for(var i=0; i<2;i++){
    contenidoTecnologia += carrousel_item(data[i].nombre, data[i].descripcion);
    contenidoTecnologia += `<div class="carousel-item">`;
  };
  contenidoTecnologia += carrousel_item(data[2].nombre, data[2].descripcion);
  return contenidoTecnologia;
};

var cierreTecnologia=function(contenidoTecnologia){
  contenidoTecnologia += `
  </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>`;
  return contenidoTecnologia;
};

var seccion_Tecnologia=function(data){
  let contenidoTecnologia=aperturaTecnologia();
  contenidoTecnologia = carrousel_tecnologia(data,contenidoTecnologia);
  contenidoTecnologia = cierreTecnologia(contenidoTecnologia);
  return contenidoTecnologia;
};

//DATA
//Data Integrantes Somos
const dataSomos=[
  {   id:0,              
      nombre:"Emiliano Barone",
      profesion: "Lic. Cs. Físicas"},
  {   id:1,              
      nombre:"Agustin Brusco",
      profesion: "Científico de IA"},
  {   id:2,              
      nombre:"Caterina Mosto",
      profesion: "Lic. Cs. Atmósfera"},
  {   id:3,              
      nombre:"Yamila Bauer",
      profesion: "Programadora"},
  {   id:4,              
      nombre:"Tomás Di Napoli",
      profesion: "Científico de Datos"},
  {   id:5,              
      nombre:"Joaquín Torres",
      profesion: "Lic. Cs. Físicas / Programador"},
  {   id:6,              
      nombre:"Azul Brigante",
      profesion: "Lic. Cs. Físicas"},
  {   id:7,              
      nombre:"Facundo García",
      profesion: "Científico de Datos"},
  {   id:7,              
      nombre:"Andrés Tovar",
      profesion: "Lic. Cs. Físicas"}
];

// Data Servicios
const dataServicios=[
  {id:0,
   nombre:"Ciencia de Datos",
   descripcion:"Métodos estadísticos aplicados para extraer valor de tus datos.",
   collapse:"panelsStayOpen-collapseOne" 
  },
  {id:1,
    nombre:"Desarrollo de Software",
    descripcion:"Diseño e implementación de programas para soluciones a medida",
    collapse:"panelsStayOpen-collapseTwo" 
   },
   {id:2,
    nombre:"Machine Learning / AI",
    descripcion:"Entrenamiento e implementación de sistemas inteligentes",
    collapse:"panelsStayOpen-collapseThree" 
   },
   {id:3,
    nombre:"Diseño Experimental",
    descripcion:"Evaluación de procesos y toma de decisiones basada en evidencia",
    collapse:"panelsStayOpen-collapseFour" 
   },
   {id:4,
    nombre:"Modelado Matemático",
    descripcion:"Estudio, descripción y predicción con un enfoque cuantitativo",
    collapse:"panelsStayOpen-collapseFive" 
   },
   {id:5,
    nombre:"Instrumentación",
    descripcion:"Desarrollo y calibración de sistemas electrónicos para medición precisa",
    collapse:"panelsStayOpen-collapseSix" 
   }];

// Data tecnologia
const dataTecnologia=[
  {id:0,
   nombre:"Software",
   descripcion:`<ol>
                    <li><strong> Python </strong>- Pytorch, Keras, LangChain, SciKit-Learn, OpenCV, Streamlit, …</li>
                    <li><strong> JavaScript</strong> - Bootstrap</li>
                    <li> <strong>AI</strong> - GPT, Claude, Gemini, Groq, HuggingFace, …</li>
                    <li><strong>Containerization </strong>- Docker</li>
                    <li><strong>Cloud</strong> - AWS, Azure, Google Cloud</li>
                    <li><strong>Bases de Datos</strong> - SQL, MongoDB</li>
                        
                </ol>`},
  {id:1,
   nombre:"Hardware",
   descripcion:`<ol>
                    <li><span> Controladores </span> Arduino, Raspberry Pi, Red Pitaya</li>
                    <li><span> Impresión 3D</span> - Diseño de partes</li>
                    <li> <span>Sensores y Electrónica</span> - CCD, CMOS, Sensores de presión, Motores por paso</li>
                    <li><span>Clusters</span>- Beowulf con paralelización MPI/OpenMP/CUDA</li>
                </ol>`
   },
   {id:2,
    nombre:"Teórico Matemáticas",
    descripcion:`<ol>
                    <li>Análisis de Señales Temporales</li>
                    <li>Modelado Continuo</li>
                    <li> Sistemas Complejos</li>
                    <li>Estadística</li>
                    <li>Cálculo Vectorial Avanzado</li>
                    <li>Álgebra Lineal Computacional</li>
                    <li>Análisis Complejo</li>
                                               
                </ol>`
     },
];

//Data Proyectos
var dataProyectos = [
  {id:0,
    nombre: "IA en tu Negocio - Chatbots",
    descripcion: "Modelos de lenguaje como GPT que responden en base a tus datos, con comportamientos predefinidos y que toman decisiones inteligentes de manera automática."},
  {id:1,
    nombre:"IOT: Automatización de Sensores",
    descripcion:"Software de control de instrumentos y lectura de sensores para que puedas automatizar tus procesos productivos."},
  {id:2,
    nombre:"Computer Vision",
    descripcion: "Análisis automático de imágenes y video para la detección de objetos, clasificación o tracking. Proyectos de post-procesado o de análisis en tiempo real."},
  {id:3,
    nombre:"Análisis de Datos",
    descripcion:"Análisis de datos e implementación de herramientas matemáticas para describir y predecir. Recolección, limpieza, analisis y visualizacion de datos"
  },
  {id:4,
    nombre:"Sistema de Traducción de IA Generativa",
    descripcion:"Desarrollamos sistemas de traducción automática basados en un nuevo paradigma capaz de dar un alto grado de personalización."},
  {id:5,
    nombre:"Software de Control para Espectrofluorímetros",
    descripcion:"Desarrollamos una API para controlar de forma remota y asincrónica un espectrómetro de fluorimetría."
  },
  {id:6,
    nombre:"Detección de Defectos en CCDs",
    descripcion:"Identificamos píxeles dañados y defectuosos en sensores ultrasensibles para reducir los errores de medición."
  },  
  {id:7,
    nombre:"Lazo de Control para Estabilización Láser",
    descripcion:"Desarrollamos e implementamos un software de control de frecuencia para un diodo láser aplicado al enfriamiento de átomos.",
  },    
  {id:8,
    nombre:"Clasificación de Radiografías Torácicas",
    descripcion:"Propusimos un pipeline para la clasificación de cuadros de neumonía (bacteriana y viral) a partir del análisis de radiografías de tórax.",
  },
  {id:9,
    nombre:"Comportamientos Emergentes en Kilobots",
    descripcion:"Programamos interacciones simples en pequeños robots comerciales y estudiamos los comportamientos que se observan en el grupo.",
  },
  {id:10,
    nombre:"Identificación Automática de Neuronas",
    descripcion:"Evaluamos sistemas de segmentación de neuronas en imágenes de microscopía para identificar el mejor algoritmo."
  }

]

//Agrego los encabezados

const header=document.getElementById('idHeader');
var contenidoHeader=`
        <nav id="IdBotonera">
            <ul class="listaNav">
                <li><a class="linkNav" href="#IdSomos">Quienes somos</a></li>
                <li><a class="linkNav" href="#IdServicios">Servicios</a></li>
                <li><a class="linkNav" href="#IdTecnologias">Herramientas</a></li>
                <li><a class="linkNav" href="#IdProyectos">Proyectos</a></li>
                <li><a class="linkNav" href="#IdContactos">Contacto</a></li></ul>
        </nav>
        <div id="Titulo" data-aos="zoom-in"  data-aos-duration="1000">
            <img src="./asses/img/ExData Loga.png" alt="ExData" >
            <h5>Soluciones de Software Basadas en Datos, IA y Modelado Matemático</h5>
        </div>`;

header.innerHTML=contenidoHeader;


//Agrego quienes somos
const somos=document.getElementById("IdSomos");
var contenidoSomos = seccion_Somos(dataSomos);
//agregar contenido somos 
somos.innerHTML=contenidoSomos;

//Agrego Servicios
const servicios=document.getElementById("IdServicios");
var contenidoServicios = seccion_Servicios(dataServicios);
servicios.innerHTML=contenidoServicios;
                
          

//Agrego tecnologia
const tecnologia=document.getElementById("IdTecnologias");
var contenidoTecnologia=seccion_Tecnologia(dataTecnologia);
console.log(contenidoTecnologia);
tecnologia.innerHTML=contenidoTecnologia;

//agrego proyecto
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
      const originalText = item.getAttribute('data-original-text');
      const hoverText = item.getAttribute('data-hover-text');

      item.addEventListener('mouseover', () => {
          item.textContent = hoverText;
      });

      item.addEventListener('mouseout', () => {
          item.textContent = originalText;
      });
  });
});
//Agrego el contenido en proyecto
const proyectos=document.getElementById("IdProyectos");

var contenidoProyecto=`
<section id="proyectos" data-aos="fade-up" data-aos-offset="400" data-aos-delay="100" data-aos-duration="1000" class="Proyectos">
          <h1 class="tituloSection">Proyectos</h1>
            <div class="grid-container" id='gridContainer'>        
          </div>
      </section>`;
proyectos.innerHTML=contenidoProyecto;
var container = document.getElementById('gridContainer');

for (var i = 0; i < dataProyectos.length; i++) {
          var div = document.createElement('div');
          div.className = 'grid-item';
          div.setAttribute('data-aos', 'fade-up');
          div.setAttribute('data-original-text', dataProyectos[i].nombre);
          div.setAttribute('data-hover-text', dataProyectos[i].descripcion);
          div.innerHTML = dataProyectos[i].nombre;
  
          container.appendChild(div);
      }

//Agregar contacto
function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const mailtoLink = `mailto:exdatagg@googlegroups.com?subject=Mensaje de ${name}&body=Nombre: ${name}%0ACorreo: ${email}%0AMensaje: ${message}`;
  
  window.location.href = mailtoLink;};

  //Agregar pie de pagina
  const foot=document.getElementById("IdFooter");

  var contenidoFoot=`<div id="redes">
            <article><a href="https://github.com/"><i class="fa-brands fa-github"></i></a></article> 
            <article><a href="https://www.linkedin.com/company/exdata-co/"><i class="fa-brands fa-linkedin"></i></a></article>
            <article><a href="https://mail.google.com/"><i class="fa-regular fa-envelope fa-bounce"></i></a></td></article>
            <article><a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp fa-beat" style="color: #3dc29a;"></i></a></article>  
        </div>
        <div id="redes1">
          <a href="#idHeader"><i class="fa-solid fa-angle-up"></i></a>
        </div>`;
  
  foot.innerHTML=contenidoFoot;
  
  


  

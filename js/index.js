
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

//hacerlo con un ciclo y json data que va a quedar mas lindo.
var contenidoSomos=` <h1>¿Quiénes somos?</h1>
            <!-- Cambiar el color de los bordes -->
             <!-- Cambirar los margenes y alineaciones -->
            <div class="container text-center">
                <div class="row row-cols-3">
                  <div class="col">
                    <div id="card" class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <h5 class="card-title">Emiliano Barone</h5>
                            <p class="card-text">Lic. Cs. Físicas</p> 
                        </div>
                    </div>
                  </div>
                  <div class="col">
                    <div id="card" class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <h5 class="card-title">Agustin Brusco</h5>
                            <p class="card-text">Científico de IA</p> 
                        </div>
                    </div>
                  </div>
                  <div class="col">
                    <div id="card" class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <h5 class="card-title">Caterina Mosto</h5>
                            <p class="card-text">Lic. Cs. Atmósfera</p> 
                        </div>
                    </div>
                  </div>
                  <div class="col">
                    <div id="card" class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <h5 class="card-title">Yamila Bauer</h5>
                            <p class="card-text">Programadora</p> 
                        </div>
                    </div>
                  </div>
                  <div class="col">
                    <div id="card" class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <h5 class="card-title">Tomás Di Napoli</h5>
                            <p class="card-text">Científico de Datos</p> 
                        </div>
                    </div>
                  </div>
                  <div class="col">
                    <div id="card" class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <h5 class="card-title">Joaquín Torres</h5>
                            <p class="card-text">Lic. Cs. Físicas / Programador</p> 
                        </div>
                    </div>
                  </div>
                  <div class="col">
                    <div id="card" class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <h5 class="card-title">Azul Brigante</h5>
                            <p class="card-text">Lic. Cs. Físicas</p> 
                        </div>
                    </div>
                  </div>
                  <div class="col">
                    <div id="card" class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <h5 class="card-title">Facundo García</h5>
                            <p class="card-text">Científico de Datos</p> 
                        </div>
                    </div>
                  </div>                 
                  <div class="col">
                    <div id="card" class="card text-bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <h5 class="card-title">Andrés Tovar</h5>
                            <p class="card-text">Lic. Cs. Físicas</p> 
                        </div>
                    </div>
                  </div>
                </div>
              </div>                      
           `;

somos.innerHTML=contenidoSomos;


//Agrego Servicios
const servicios=document.getElementById("IdServicios");

var contenidoServicios=
`            
<div data-aos="fade-up" data-aos-offset="300" data-aos-delay="50" data-aos-duration="1000">
<h1>Nuestros servicios</h1>
            <p>Nuestros integrantes tienen de 2 a 5 años de experiencia en:</p>
            <div  class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="accordion" id="accordionPanelsServicios1">
                            <div class="accordion-item">
                              <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Ciencia de Datos
                                </button>
                              </h2>
                              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                  Métodos estadísticos aplicados para extraer valor de tus datos. 
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item">
                              <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Desarrollo de Software
                                </button>
                              </h2>
                              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                  Diseño e implementación de programas para soluciones a medida 
                                </div>
                              </div>
                            </div>
                        </div>                     

                    </div>
                    <div class="col">
                        <div class="accordion" id="accordionPanelsServicios2">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                      Machine Learning / AI
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                  <div class="accordion-body">
                                    Entrenamiento e implementación de sistemas inteligentes 
                                  </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Diseño Experimental
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                                  <div class="accordion-body">
                                    Evaluación de procesos y toma de decisiones basada en evidencia 
                                  </div>
                                </div>
                            </div>
                        </div>        
                    </div>
            
                    <div class="col">            
                        <div class="accordion" id="accordionPanelsServicios3">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                    Modelado Matemático
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        Estudio, descripción y predicción con un enfoque cuantitativo 
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                    Instrumentación
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        Desarrollo y calibración de sistemas electrónicos para medición precisa
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;

servicios.innerHTML=contenidoServicios;


//Agrego tecnologia
const tecnologia=document.getElementById("IdTecnologias");

var contenidoTecnologia=`<h1>Nuestros Tecnologías</h1>
            <p>Tenemos experiencia con un diverso Stack Tecnológico:</p>
            <div id="carouselExampleDark" class="carousel carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="./asses/img/Copia de Presentación EXdata.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <h4>Software</h4>                      
                     <ol>
                        <li><strong> Python </strong>- Pytorch, Keras, LangChain, SciKit-Learn, OpenCV, Streamlit, …</li>
                        <li><strong> JavaScript</strong> - Bootstrap</li>
                        <li> <strong>AI</strong> - GPT, Claude, Gemini, Groq, HuggingFace, …</li>
                        <li><strong>Containerization </strong>- Docker</li>
                        <li><strong>Cloud</strong> - AWS, Azure, Google Cloud</li>
                        <li><strong>Bases de Datos</strong> - SQL, MongoDB</li>
                        
                      </ol> 
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="./asses/img/Copia de Presentación EXdata.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <h4>Hardware</h4>
                      <ol>
                        <li><span> Controladores </span> Arduino, Raspberry Pi, Red Pitaya</li>
                        <li><span> Impresión 3D</span> - Diseño de partes</li>
                        <li> <span>Sensores y Electrónica</span> - CCD, CMOS, Sensores de presión, Motores por paso</li>
                        <li><span>Clusters</span>- Beowulf con paralelización MPI/OpenMP/CUDA</li>
                        <li></li>
                        <li></li>
                                               
                      </ol> 

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="./asses/img/Copia de Presentación EXdata.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <h4>Teórico Matemáticas</h4>
                      <ol>
                        <li>Análisis de Señales Temporales</li>
                        <li>Modelado Continuo</li>
                        <li> Sistemas Complejos</li>
                        <li>Estadística</li>
                        <li>Cálculo Vectorial Avanzado</li>
                        <li>Álgebra Lineal Computacional</li>
                        <li>Análisis Complejo</li>
                                               
                      </ol>
                    </div>
                  </div> 
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

tecnologia.innerHTML=contenidoTecnologia;

//agrego productos
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
//Agrego el contenido en productos
const producto=document.getElementById("IdProyectos");

var contenidoProducto=`
<section id="proyectos" data-aos="fade-up" data-aos-offset="400" data-aos-delay="100" data-aos-duration="1000" class="Proyectos">
            <h1 class="tituloSection">Proyectos</h1>
              <div class="grid-container">
                <div class="grid-item" data-aos="fade-up" data-original-text="IA en tu Negocio - Chatbots" data-hover-text="Modelos de lenguaje como GPT que responden en base a tus datos, con comportamientos predefinidos y que toman decisiones inteligentes de manera automática.">IA en tu Negocio - Chatbots</div>
                <div class="grid-item" data-aos="fade-down" data-original-text="IOT: Automatización de Sensores" data-hover-text="Software de control de instrumentos y lectura de sensores para que puedas automatizar tus procesos productivos.">IOT: Automatización de Sensores</div>
                <div class="grid-item" data-aos="fade-left" data-original-text="Computer Vision" data-hover-text="Análisis automático de imágenes y video para la detección de objetos, clasificación o tracking. Proyectos de post-procesado o de análisis en tiempo real.">Computer Vision</div>
                <div class="grid-item" data-aos="fade-right" data-original-text="Análisis de Datos" data-hover-text="Análisis de datos e implementación de herramientas matemáticas para describir y predecir 
                Recolección, limpieza, analisis y visualizacion de datos">Análisis de Datos</div>
                <div class="grid-item" data-aos="fade-up" data-original-text="Sistema de Traducción de IA Generativa" data-hover-text="Desarrollamos sistemas de traducción automática basados en un nuevo paradigma capaz de dar un alto grado de personalización.">Sistema de Traducción de IA Generativa</div>
                <div class="grid-item" data-aos="fade-down" data-original-text="Software de Control para Espectrofluorímetros" data-hover-text="Desarrollamos una API para controlar de forma remota y asincrónica un espectrómetro de fluorimetría.">Software de Control para Espectrofluorímetros</div>
                <div class="grid-item" data-aos="fade-left" data-original-text="Detección de Defectos en CCDs" data-hover-text="Identificamos píxeles dañados y defectuosos en sensores ultrasensibles para reducir los errores de medición.">Detección de Defectos en CCDs</div>
                <div class="grid-item" data-aos="fade-right" data-original-text="Lazo de Control para Estabilización Láser" data-hover-text="Desarrollamos e implementamos un software de control de frecuencia para un diodo láser aplicado al enfriamiento de átomos.">Lazo de Control para Estabilización Láser</div>
                <div class="grid-item" data-aos="fade-up" data-original-text="Clasificación de Radiografías Torácicas" data-hover-text="Propusimos un pipeline para la clasificación de cuadros de neumonía (bacteriana y viral) a partir del análisis de radiografías de tórax.">Clasificación de Radiografías Torácicas </div>
                <div class="grid-item" data-aos="fade-down" data-original-text="Comportamientos Emergentes en Kilobots" data-hover-text="Programamos interacciones simples en pequeños robots comerciales y estudiamos los comportamientos que se observan en el grupo.">Comportamientos Emergentes en Kilobots</div>
                <div class="grid-item" data-aos="fade-left" data-original-text="Identificación Automática de Neuronas" data-hover-text="Evaluamos sistemas de segmentación de neuronas en imágenes de microscopía para identificar el mejor algoritmo.">Identificación Automática de Neuronas</div>

            </div>
        </section>`;

producto.innerHTML=contenidoProducto;




//Agrego el pie de pagina
const foot=document.getElementById("");

var contenidoFoot=``;

foot.innerHTML=contenidoFoot;


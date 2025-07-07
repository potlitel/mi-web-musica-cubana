import {efemerides} from '../data/efemeridesCubanas.js';


// TimelineHistoria.jsx
const TimelineHistoria = () => (

  
    
<div class="bg-white">
  
  <div class="max-w-xl mx-auto p-8">
    <div class="flow-root">
      <ul class="-mb-8">

        {efemerides.map((evento) => (

        <li>
          <div class="relative pb-8">
            <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
            <div class="relative flex items-start space-x-3">
              <div>
                <div class="relative px-1">
                  <div class="h-8 w-8  rounded-full ring-8 ring-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                      <path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="min-w-0 flex-1 py-0">
                <div class="text-md text-gray-500">
                  <div>
                    <a href="#" class="font-medium text-gray-900 mr-2">{evento.nombre}</a>

                    <a href="#"
                      class="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                      <div class="absolute flex-shrink-0 flex items-center justify-center">
                        <span class="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
                      </div>
                      <div class="ml-3.5 font-medium text-gray-900">Feature</div>
                    </a>
                  </div>
                  <span class="whitespace-nowrap text-sm">{evento.fecha}</span>
                </div>
                <div class="mt-2 text-gray-700">
                  <p>
                    - {evento.descripcion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
          
        ))}

      </ul>
    </div>
  </div>

</div>

);

export default TimelineHistoria;

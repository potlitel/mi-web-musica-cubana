// TimelineHistoria.jsx
import React from "react";

const TimelineHistoria = ({ eventos }) => (
  <div class="w-full mx-auto 2xl:max-w-7xl items-center flex flex-col  py-15 lg:py-2 relative p-8">
   <div class="mt-6 border-t pt-12">
    <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border">
     <div class="mx-auto grid grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:grid-cols-4">
      
      {eventos.map((evento, idx) => (
      <div> 
        <time datetime={evento.fecha} class="flex items-center text-sm font-semibold leading-6 text-orange-600 dark:text-orange-400"> 
        <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
         <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
        </svg> {evento.fecha} <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 dark:bg-gray-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div> </time>
       <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white"> {evento.titulo} </p>
       <p class="mt-1 text-sm text-pretty leading-7 text-gray-500 dark:text-gray-300"> {evento.descripcion} </p>
      </div>
    ))}
      

     </div>
    </div>
    
  </div>
 </div>

//   <ul className="timeline timeline-vertical px-4 py-8">
//     {eventos.map((evento, idx) => (
//       <li key={idx} className="mb-8">
//         <div className="timeline-start text-sm font-bold text-primary">{evento.fecha}</div>
//         <div className="timeline-middle">
//           <span className="bg-primary/20 flex size-5 items-center justify-center rounded-full">
//             <span className="bg-primary size-3 rounded-full"></span>
//           </span>
//         </div>
//         <div className="timeline-end timeline-box bg-base-100 shadow-md p-4 rounded-lg">
//           <h3 className="text-base font-semibold mb-1">{evento.titulo}</h3>
//           <p className="text-sm text-base-content">{evento.descripcion}</p>
//         </div>
//         {idx < eventos.length - 1 && <hr />}
//       </li>
//     ))}
//   </ul>
);

export default TimelineHistoria;

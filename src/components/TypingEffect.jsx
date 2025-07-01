import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          'La Riqueza Sonora de Cuba', 2000, // muestra el texto 2 segundos
          '', 500,                          // borra el texto y espera 0.5 segundos
          'Cada compás, un latido del Caribe', 2000, // muestra el texto 2 segundos
          '', 500, 
          'La Música que Enamora', 2000,
          '', 500,
          'Un viaje sonoro hacia la identidad cubana', 2000,
          '', 500,
          'La esencia sonora que define a Cuba', 2000,
          '', 500,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: 'inline-block' }}
      />
    </div>
  );
};

export default Hero;

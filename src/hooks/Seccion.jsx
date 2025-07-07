import React, { useEffect, useRef, useState } from 'react';
/*
https://felo.ai/search/2qzoT8JFpJaqKbWFM8U7Rg
*/
const Seccion = ({ children }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect(); // Deja de observar una vez que es visible
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};

export default Seccion;

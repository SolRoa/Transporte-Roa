import React from "react";

import '../styles/components/pages/HomePage.css';

const HomePage = (props) =>{
    return (
        <main className="holder">
            <div className="homeimg">
            <img src="imagenes/home/img01.jpg"   alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sociosqu nulla ad mollis senectus nostra nisl integer, class morbi ullamcorper libero potenti risus. Turpis arcu sollicitudin a purus integer facilisi rutrum dictumst feugiat, nostra risus praesent vivamus mi nulla habitasse imperdiet, venenatis nam tempus iaculis tortor ultrices quisque etiam. Vivamus dis mus imperdiet eros convallis torquent tempus, fermentum tristique varius sociis rhoncus placerat netus, turpis class sed hendrerit at mattis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sociosqu nulla ad mollis senectus nostra nisl integer, class morbi ullamcorper libero potenti risus. Turpis arcu sollicitudin a purus integer facilisi rutrum dictumst feugiat, nostra risus praesent vivamus mi nulla habitasse imperdiet, venenatis nam tempus iaculis tortor ultrices quisque etiam. Vivamus dis mus imperdiet eros convallis torquent tempus, fermentum tristique varius sociis rhoncus placerat netus, turpis class sed hendrerit at mattis.</p>
                </div>
                <div className="testimonios">
                    <h2>testimonios</h2>
                    <div className="testimonio">
                        <span class= "cita">Simplemente exelente.</span>
                        <span class= "autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
            
        </main>
    );
}

export default HomePage;

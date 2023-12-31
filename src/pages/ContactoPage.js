import React from "react";

import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) =>{
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre </label>
                        <input type="text" name=""></input>
                    </p>
                    <p>
                        <label for="email">Email </label>
                        <input type="text" name=""></input>
                    </p>
                    <p>
                        <label for="telefono">Telefono </label>
                        <input type="text" name=""></input>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje </label>
                        <input type="text" name=""></input>
                    </p>
                    <p class="acciones"><input type="submit" value="enviar"/></p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comunicación</h2>
                <p>También contactarse con nosotros usando los siguentes medios</p>
                <ul>
                    <li>Telefono: 23452345</li>
                    <li>Email: contacto@tansportes.com.ar</li>
                    <li>Facebook: </li>
                    <li>Twitter: </li>
                    <li>Skype: </li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;
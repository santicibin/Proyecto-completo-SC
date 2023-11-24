import React from 'react';

const ContactoPage = (props) => {
    return(
        <main class="holder contacto">
    <div>
        <h2>Deja tu solicitud</h2>
        <form action="" method="" class="formulario">
            <p>
                <label for="nombre solicitud">Deja tu nombre</label>
                <input type="text" name=""/>
            </p>
            <p>
                <label for="Nombre cambio">Nombre de quien debemos cambiar</label>.
                <input type="text" name=""/>
            </p>
            <p>
              <label for="explicacion">Breve explicación de la situación</label>.
                <textarea name=""></textarea>
            </p>
            <p>
              <input type="submit" value="enviar" />
            </p>


        </form>

    </div>
    <div class="datos">
        <h2>Otras formas de contactarnos</h2>
        <ul>
            <li>telefono: **********</li>
            <li>Email: contacto@phantoms.com</li>
            <li>Facebook</li>
            <li>Twitter</li>
        </ul>
    </div>
    </main>
    );
}

export default ContactoPage;
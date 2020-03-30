import React from "react";

export default () => (
    <div className="bg-teal-300">
    <div className="container mx-auto p-4 max-w-4xl flex justify-center items-center">
        <div className="flex-1">
            <form className="mt-1 text-center">
                <label htmlFor="contact-content" className="block text-teal-800 text-sm font-light text-lg mb-4">
                    ¿Necesitas ayuda con un proyecto o quieres empezar uno? ¡Contáctame!
                </label>
                
                <div className="flex shadow-md rounded bg-teal-200 border-teal-200 p-2">
                    <textarea 
                    id="contact-content"
                    name="contact-content"
                    className="flex-1 py-2 px-3 text-teal-600 bg-teal-200 focus:outilne-none focus:shadow-outline">
                    </textarea>

                    <button className="btn ml-4">Enviar</button>
                </div>

            </form>
        </div>
    </div>
    </div>
    );
$("#reservacion").validate({
    messages: {
        finicial: "Seleccione una Fecha",
        ffinal: "Seleccione una Fecha",
        nombre: {
            required: "Ingrese su Nombre Completo",
            minlength: "Ingrese su Nombre Completo"
        },
        correo: "Ingrese un Correo Valido",
        telf: {
            required: "Ingrese su Numero de Telefono",
            minlength: "Escriba un Numero de Telefono Valido"
        },
        cantidad: {
            required: "Ingrese la Cantidad de Personas",
            min: "Debe Ingresar almenos 1 Persona"
        }
    }
});
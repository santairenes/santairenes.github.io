<script type="text/javascript-lazy">
	$.getScript("app/calendario.js", function(){});
    $.getScript("app/reservaciones.js", function(){});
</script>
<form id="reservacion">
    <table>
        <tr>
            <td>Fecha Inicial</td>
            <td>
                <div class="input-group date">
                    <input type="text" id="finicial2" name="finicial" class="form-control" readonly required>
                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                </div>
            </td>
        </tr>
        <tr>
            <td>Fecha Final</td>
            <td>
                <div class="input-group date">
                    <input type="text" id="ffinal2" name="ffinal" class="form-control" readonly required>
                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                </div>
            </td>
        </tr>
        <tr>
            <td>Nombre Completo</td><td><input type="text" name="nombre" class="form-control reserva" minlength="2" required/></td>
        </tr>
        <tr>
            <td>Correo de Contacto</td><td><input type="email" name="correo" class="form-control reserva" required/></td>
        </tr>
        <tr>
            <td>Telefono de Contacto</td><td><input type="text" name="telf" class="form-control reserva" minlength="7" required/></td>
        </tr>
        <tr>
            <td>Cantidad de Personas</td><td><input type="number" name="cantidad" class="form-control reserva" min="1" required/></td>
        </tr>
        <tr><td colspan="2"><div class="centrar"><input type="submit" class="btn btn-success" value="Reservar"/>
            <input type="reset" class="btn btn-default" value="Borrar"/></div></td></tr>
    </table>
</form>
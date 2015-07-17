$(document).ready(function(){
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth()+1;
    var ano = fecha.getFullYear();
    if(dia<10) {
        dia='0'+dia;
    } 

    if(mes<10) {
        mes='0'+mes;
    } 
    var hoy = dia+"/"+mes+"/"+ano;
    var rango = hoy;
    $('.input-group.date').datepicker({
        format: "dd/mm/yyyy",
        startDate: hoy,
        language: "es",
        orientation: "top auto",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true,
        todayHighlight: true
    });
    
    $('#finicial').change(function(){
        rango = $('#finicial').val();
        $('#ffinal').parent().datepicker('update', rango);
        $('#ffinal').parent().datepicker('setStartDate', rango);
    });
    
    
});
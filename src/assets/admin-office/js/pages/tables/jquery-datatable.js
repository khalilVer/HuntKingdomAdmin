$(function () {
    $('.js-basic-example').DataTable({
        searching: false,
        responsive: true
    });

    //Exportable table
    $('.js-exportable').DataTable({
        searching: false,
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});
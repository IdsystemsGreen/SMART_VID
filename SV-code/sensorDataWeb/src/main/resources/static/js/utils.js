function resetForm(form) {
    form[0].reset();
    $("input[type=hidden]").val('');
    $('select option').remove();
    
}

function loadFormModal(idModal, idDataTable, id) {
	$('#' + idModal).modal('show');
	var table = $('#' + idDataTable).DataTable();
	var data = table.rows('#' + id).data();
	return data;
}

function hideModal(idModal) {
	$('#' + idModal).modal('hide');
}

function refreshTable(idDataTable){
	var table = $('#' + idDataTable).DataTable();
	table.ajax.reload();	
}

function deleteSelectedItemFromSelection(id){
	$('#' + id + ' :selected').remove(); 
}


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
function loadData(){
    $.getJSON("data.json", selectOptions);
}
function selectOptions(cars, status){
    if(status == 'success'){
            
        let colors = `color/${json.items[0].label}`
        
    }else{
        $('.mensagem').text("It was not possible to load the request. Please try again.");
    }
}
$(document).ready(function(){
    loadData();
    $('#colorName').click(loadData);
});
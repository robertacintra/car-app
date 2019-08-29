function loadData(){
    $.getJSON("http://127.0.0.1:8080/assets/data/data.json", selectOptions);
}
function selectOptions(cars, status){
    if(status === 'success'){
        let engines = `engine/${cars.data.engine.items[0].kwh}!`
        let colors = `color/${cars.data.wheels.items[0].label}!`
        let price = `${cars.data.price}`

        console.log(engines)
        console.log(colors)
        console.log(price)

        // cars.data.wheels.items.forEach( (e, index) => {
        //     let $div = $('<div>', {"class": `teste${index}`}) 
        //     $div.text(e.label)
        //     $('#container').append($div)
        // })

        cars.data.engine.items.forEach( (e, index) => {
            let $div = $('<div>', {"class": `${index}`}) 
            $div.text(e.kwh)
            $('#containerEngine').append($div)
        })
        
    }else{
        $('.errormessage').text("It was not possible to load the request. Please try again.");
    }
}
$(document).ready(function(){
    loadData();
    $('#containerEngine').click(loadData);
});

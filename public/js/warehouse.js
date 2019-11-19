$(document).ready(function(){
    let URL;
    let ID;
    console.log("document loaded!!.....");
    $(document).on('click','.edit',function(e){
        e.preventDefault();
        ID = $(this).attr("id");
        URL = `http://localhost:3000/api/warehouse/${$(this).attr("id")}`;
        console.log("EDIT: "+URL);

        $.ajax({
            type: 'GET',
            url: URL,
            data: { get_param: 'value' },
            dataType: 'json',
            success: function (data) {
                $.each(data, function(index, element) {
                    console.log(element);
                    $("#materialName").attr("value",  element.materialName);
                    $("#materialSize").attr("value",  element.materialSize);
                    $("#materialQuantity").attr("value",  element.materialQuantity);
                    $("#materialPrice").attr("value",  element.materialPrice);
                    
                });
            }
        });
    });

    $(document).on('click','.buttonEdit',function(e){
        let data = {
                id: parseInt($(`#${ID}`).attr("id")),
                materialName: $("#materialName").val(),
                materialSize:  $("#materialSize").val(),
                materialQuantity: $("#materialQuantity").val(),
                materialPrice: $("#materialPrice").val(),
                

        };

        console.log(data);
        $.ajax({
            method: 'PUT', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
            dataType: 'json', // Set datatype - affects Accept header
            url: `http://localhost:3000/api/warehouse/${data.id}`, // A valid URL
            headers: {"X-HTTP-Method-Override": "PUT"}, // X-HTTP-Method-Override set to PUT.
            data: data, // Some data e.g. Valid JSON as a string
            success:window.location.href = "/warehouse",
        })

    });



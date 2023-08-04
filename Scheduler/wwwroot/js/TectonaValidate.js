var $validatorform;

function validateSingleForm(form) {
    //debugger;
    $.validator.addMethod(
        "commonvalidation",
        function (value, element, param) {
            return value.match(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/);
        },
        "Please enter valid input"
    );
    $.validator.addMethod(
        "onlynumber",
        function (value, element, param) {
            return value.match(/^(0|[1-9]\d*)$/);
        },
        "Please enter only degit"
    );
    //$.validator.addMethod(
    //    "specialcharactor",
    //    function (value, element, param) {
    //        return value.match(/^[-@.\/#&><$!+\w\s]*$/);
    //    },
    //    "Please enter only special charactor"
    //);   
    $.validator.addMethod(
        "specialcharactor",
        function (value, element, param) {
            return value.match(/^[0-9A-Za-z\_\ \.\@]*$/);
        },
        "Special character is not allowed"
    );
    //debugger;  
    $validatorform = jQuery(form).validate({
        rules: {
            lable1: {
                required: true,
            },
            lable2: {
                required: true,
            },
            lable3: {
                required: true,
            },
            gender: {
                required: true,
            },
            date: {
                required: true,
            }, 
            addlabel3: {
                required: true,
            }, 
        },
        messages: {
            lable1: {
                required: "Please Select Lable1",
            },
            lable2: {
                required: "Please Select Lable2",
            },
            lable3: {
                required: "Please Select Lable3",
            },
            gender: {
                required: "Please Select Any One",
            },
            date: {
                required: "Please Enter Date",
            },
            addlabel3: {
                required: "Please Enter Lable3",
            }, 
        },
        highlight: function (element) {
            jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            $(document).find('label.error').css('display', 'block');
        },
        errorPlacement: function (error, element) {
            var pos = document.getElementById('radioMessage')
            if (element.is(":radio")) {
                error.appendTo(pos);
            } else if (element.attr("name") == "department") {
                error.appendTo(document.getElementById('errorMessage'));
            } else {
                error.insertAfter(element);
            }
        },
        // onfocusout: function (element) {                       
        //     jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        //     $(document).find('label.error').css('display', 'block');
        //},
    });
}

$(document).ready(function() {
    $('.nice-select').niceSelect();
});
$(document).ready(function() {
    if(document.querySelector('.dataTableSearchInput')){
        let searchInputs = document.getElementsByClassName('dataTableSearchInput');
        let tables = document.getElementsByClassName('orders-table');
        for (let i = 0 ; i < tables.length ;i++){
            let dataTable = $(tables[i]).DataTable({
                "bPaginate": true,
                "bLengthChange": false,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": false,
                language: {
                    paginate: {
                        previous: '<span class="paginate-span"> < </span>',
                        next:     '<span class="paginate-span"> > </span>',
                    }
                },
                "oLanguage": {
                    "sSearch":""
                },
                columnDefs: [ {
                    className: 'select-checkbox',
                    targets:   0
                } ],
                select: {
                    style:    'multi',
                    selector: 'td:first-child'
                },
                order: [[ 1, 'asc' ]],
            } );
            if(searchInputs[i]){
                $(searchInputs[i]).on( 'keyup', function () {
                    dataTable.search( this.value ).draw();
                });
            }
        }
    }
} );
$(".orders-table-single").DataTable( {
    "bPaginate": true,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": false,
    language: {
        paginate: {
            previous: '<span class="paginate-span"> < </span>',
            next:     '<span class="paginate-span"> > </span>',
        }
    },
    "oLanguage": {
        "sSearch":""
    },
    columnDefs: [ {
        className: 'select-checkbox',
        targets:   0
    } ],
    select: {
        style:    'multi',
        selector: 'td:first-child'
    },
    order: [[ 1, 'asc' ]],
} );


$(document).ready(function (){
    $(".orders-table th.select-checkbox").html(
        "<div class='d-flex justify-content-center'>" +
        "<label class='check-select'>\n" +
        "<input class='checkAll' type='checkbox'>\n" +
        "<span class='check-custom'><i class=\"fas fa-check-square\"></i></span>\n" +
        "</label>" +
        "</div>"
    );
    $(".orders-table td.select-checkbox").html(
        "<div class='d-flex justify-content-center'>" +
        "<label class='check-select'>\n" +
        "<input class='checkbox-table' type='checkbox'>\n" +
        "<span class='check-custom'><i class=\"fas fa-check-square\"></i></span>\n" +
        "</label>" +
        "</div>"
    )
})
$(document).on("change" , ".checkAll" , function (){
    $(this).parents("thead").siblings("tbody").find(".checkbox-table").prop('checked',$(this).is(":checked"));
})


$(document).on("click" , "#OpenImgUpload" , function (){
    $('#imgUpload').trigger('click');
})

$(document).ready(function (){
    $(".bars-toggle,.overlay-layer").on("click" , function (){
        $(".bars-toggle").toggleClass("Xbars");
        $(".overlay-layer").toggleClass("apper");
        $(".side-bar").toggleClass("open");
    })
})
$(document).ready(function (){
    $(".modal-dialog").on("click" , function (e){
        e.preventDefault();
    })
})

$('input:checkbox').on('click', function(e) {
    e.stopImmediatePropagation();
    var checked = (e.currentTarget.checked) ? false : true;
    e.currentTarget.checked=(checked) ? false : checked.toString();
});
$('input:file').on('click', function(e) {
    e.stopImmediatePropagation();
});
$(document).ready(function (){
    $(".Xbtn").on("click" , function (){
        $(this).parents("li").remove();
    })
})

$(document).ready(function (){
    $(".switch-plus").on("click" , function (){
        $(this).find("i").toggleClass("fa-plus-circle").toggleClass("fa-minus-circle");
        $(this).toggleClass("switched")
    })
})
$(document).on("click" , ".minus" , function (){
    $(this).parent().remove();
});
$(document).on("click" , ".remove-append" , function (){
    $(this).parents('.append-row').remove();
});

$(function (){
    $(".inp-fil").on("click" , function (){
        $(this).parent().find(".input-file").click()
        var inpFilHid = $(this).parent().find(".input-file");
        inpFilHid.on("change" , function (){
            $(this).parent().find(".inp-fil").val(inpFilHid.val())
        })
    })
})
$(function (){
    $(".default-input").attr("required" , "");
})
$(document).ready(function (){
    $(".Add-Alias").on("click" , function (){
        $('<div class="col-12">\n' +
            '<div class="position-relative">\n' +
            '<div class="row">\n' +
            '<div class="col-md-6 col-12 mt-3 mb-3">\n' +
            '<label class="position-relative w-100">\n' +
            '<input class="default-input" type="text" placeholder="">\n' +
            '<span class="custom-line"></span>\n' +
            '<span class="custom-label">Alias Name*</span>\n' +
            '</label>\n' +
            '</div>\n' +
            '<div class="col-md-6 col-12 mt-3 mb-3">\n' +
            '<label class="position-relative w-100">\n' +
            '<input class="default-input" type="text" placeholder="">\n' +
            '<span class="custom-line"></span>\n' +
            '<span class="custom-label">Public Name*</span>\n' +
            '</label>\n' +
            '</div>\n' +
            '</div>\n' +
            '<a class="default-link minus"><img src="images/minus.png" alt=""></a>\n' +
            '</div>\n' +
            '</div>').insertBefore("div .Add-Alias");
    })
})

$(document).on("click" , ".add-condition"  ,function (){
    $(".col-append").append('<div class="row append-row">\n' +
        '<div class="col-lg-3 col-md-4 col-12 mt-2 mb-2">\n' +
        '<select class="default-input" name="sort">\n' +
        '<option selected disabled value="">Type</option>\n' +
        '<option value="">Any</option>\n' +
        '<option value="">Sum</option>\n' +
        '<option value="">First</option>\n' +
        '<option value="">From Location</option>\n' +
        '<option value="">To Location</option>\n' +
        '</select>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-4 col-12 mt-2 mb-2">\n' +
        '<label class="position-relative w-100">\n' +
        '<input class="default-input" type="text" placeholder="">\n' +
        '<span class="custom-line"></span>\n' +
        '<span class="custom-label">Maximum Price</span>\n' +
        '</label>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-4 col-12 mt-2 mb-2">\n' +
        '<label class="position-relative w-100">\n' +
        '<input class="default-input" type="text" placeholder="">\n' +
        '<span class="custom-line"></span>\n' +
        '<span class="custom-label">Minimum Price</span>\n' +
        '</label>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-4 col-12 mt-2 mb-2">\n' +
        '<button class="btn remove-append">REMOVE</button>\n' +
        '</div>\n' +
        '</div>');
})
$(document).on('click', '#uploader' ,  function(e) {
    e.preventDefault();
    $('.hidden-uploader').trigger('click');
});


$(document).ready(function (){
    $("input.flatpickr").flatpickr({
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });

    $("input.timepicker").flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
    });
})

$(document).on("click", ".switch-toggle" , function (){
    $(this).toggleClass("toggled");
})

$(document).ready(function() {
    $('.select2').select2();
    $(".select2-container").addClass("default-input").append(' <span class="custom-line"></span>');
});

$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
    $(".select2-container").addClass("default-input").append(' <span class="custom-line"></span>');
});
$(document).ready(function() {
    $('.select2-multiple').select2();
    $(".select2-container").addClass("default-input").append(' <span class="custom-line"></span>');
});

$(document).ready(function (){
    $(".switch-plus").on("click" , function (){
        $(this).find("i").toggleClass("fa-plus-circle").toggleClass("fa-minus-circle");
        $(this).toggleClass("switched")
    })
})

$(document).ready(function (){
    var sideButtons = document.querySelector('.side-bar').getElementsByTagName('li');
    for (var i = 0 ; i < sideButtons.length ;i++){
        const a = sideButtons[i].getElementsByTagName('a')[0];
        if(window.location.href == a.href){
            sideButtons[i].classList.add('active');
            break;
        }
    }
    if($('.side-bar li.active').offset().top !== 0){
        $('.side-bar').animate({
            scrollTop: $('li.active').offset().top - 100
        } ,600);
    }else{
        $('.side-bar').animate({
            scrollTop: $('li.active').parent().parent().offset().top - 100
        } ,600);
    }
})

$(function(){
    $(".show-more").on("click" ,function () {
        $(this).find("img").toggleClass("rotated");
        $(this).find("span").text(function(i, text){
            return text === "Show prices" ? "Hide prices" : "Show prices";
        })
    });
})

$(function (){
    $(".Prices-inputs").slideUp();
    $(".Add-Prices").on("click" , function (){
        $(".Prices-inputs").slideDown(300);
        $(this).slideUp(0);
    })
    $(".Remove-Prices-inputs").on("click", function (){
        $(".Prices-inputs").slideUp(0);
        $(".Add-Prices").slideDown(0);
    })
})

$(document).on("click" , ".Add-Rules-Group" , function (){
    var randomIdCollapse = Math.floor(Math.random() * 1000);
    $(this).parent().parent().parent().parent().parent().parent().find(".rulesBoxAppend").first().append('' +
        '<div class="rules-container">'+
        '<div class="rules-box">' +
        '<div class="rules form-row p-3" type="button" data-toggle="collapse" data-target="#ruleCollapse'+randomIdCollapse+'" aria-expanded="false" aria-controls="collapseExample">' +
        '<p class="mb-0">Rules ( <span>3</span> )</p>' +
        '<span><i class="fas fa-chevron-down"></i></span>' +
        '<a class="minus-circle">-</a>'+
        '</div>' +
        '<div class="collapse mb-3" id="ruleCollapse'+randomIdCollapse+'">' +
        '<div class="ruleCollapseCard">' +
        '<div class="rules-row">' +
        '<div class="position-relative mr-2 ml-2"> ' +
        '<a class="btn toggle-add-or"><span>AND</span></a>'+
        '<input type="checkbox" class="d-none"> '+
        '</div>' +
        '<div class="position-relative mr-2 ml-2">' +
        '<a type="button" class="switch-toggle checkBox"><span></span></a>' +
        '<input type="checkbox" class="d-none">' +
        '</div>' +
        '<div class="groups">' +
        '<a class="btn default-link Add-Rules-Group mr-2 ml-2">Add Rules Group</a>' +
        '</div>' +
        '<div style="display: none" class="conditions">' +
        '<a class="btn default-link Add-Condition mr-2 ml-2">Add Condition</a>' +
        '<a data-target="#multiple-condition" data-toggle="modal" class="btn default-link Add-Multiple-Conditions mr-2 ml-2">Add Multiple Conditions</a>' +
        '</div>' +
        '</div>' +
        '<div class="conditionBoxAppend">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="rulesBoxAppend">' +
        '</div>' +
        '</div>'
    );
})


$(document).on("click" , ".Add-Condition" , function (){
    $(this).parent().parent().parent().find(".conditionBoxAppend").append('' +
        '<div class="row align-items-center p-3">'+
        '<div class="col-md-2 col-sm-3 col-4 pr-1 pl-1">'+
        '<div class="position-relative">'+
        '<select class="default-input" name="sort">'+
        '<option selected disabled value="">Field</option>'+
        '<option value="">City From</option>'+
        '<option value="">City To</option>'+
        '</select>'+
        '<span class="custom-line"></span>'+
        '</div>'+
        '</div>'+
        '<div class="col-md-2 col-sm-3 col-4 pr-1 pl-1">'+
        '<div class="position-relative">'+
        '<select class="default-input" name="sort">'+
        '<option selected value="">Equal To</option>'+
        '<option value="">Not Equal To</option>'+
        '</select>'+
        '<span class="custom-line"></span>'+
        '</div>'+
        '</div>'+
        '<div class="col-md-2 col-sm-3 col-4 pr-1 pl-1">'+
        '<div class="position-relative">'+
        '<select class="default-input" name="sort">'+
        '<option selected value="">Country</option>'+
        '<option value="">Country</option>'+
        '</select>'+
        '<span class="custom-line"></span>'+
        '</div>'+
        '</div>'+
        '<div class="col-md-2 col-sm-3 col-4">' +
        '<a type="button" class="btn minus-remove"><i class="fas fa-minus"></i></a>'+
        '</div>'+
        '</div>'
    );
})

$(document).on("click" , ".minus-remove" , function (){
    $(this).parents(".row").remove();
})

$(document).on("click" , ".toggle-add-or" ,function () {
    $(this).parent().find("input[type=checkbox]").click()
    $(this).find("span").text(function(i, text){
        return text === "AND" ? "OR" : "AND";
    });
});
$(document).on("click", ".checkBox", function (){
    $(this).parent().find("input[type=checkbox]").click()
})
$(function (){
    $(".conditions").slideUp();
    $(".conditionBoxAppend").slideUp();
    $(document).on("click", ".switch-toggle.checkBox" , function (){
        if ($( ".switch-toggle.checkBox" ).is( ".toggled" )){
            $(this).parents(".rules-container").first().find(".rulesBoxAppend").slideUp(300);
            $(this).parents(".rules-container").first().find(".conditionBoxAppend").slideDown(300);
            $(this).parent().parent(".rules-row").find(".groups").slideUp(300);
            $(this).parent().parent(".rules-row").find(".conditions").slideDown(300);
        }else {
            $(this).parents(".rules-container").first().find(".rulesBoxAppend").slideDown(300);
            $(this).parents(".rules-container").first().find(".conditionBoxAppend").slideUp(300);
            $(this).parent().parent(".rules-row").find(".groups").slideDown(300);
            $(this).parent().parent(".rules-row").find(".conditions").slideUp(300);
        }
    })
})
$(document).on("click" , ".minus-circle" , function (){
    $(this).parent().parent(".rules-box").remove();
})
$(document).on("click" , ".characterBox" , function (){
    $(".characterBox").removeClass("boxCollapsed");
    $(this).addClass("boxCollapsed");

    if ($(this).find(".characterBtn").hasClass("collapsed")){
        $(this).removeClass("boxCollapsed");
    }else {
        $(this).addClass("boxCollapsed");
    }
});
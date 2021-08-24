$(function() {

    $("#lbl_eleves").hide();
    $(".label_autre").hide();
    $("#moniteur_check").on( 'click', function () {

        var isChecked = $('#moniteur_check').prop("checked");

        if (isChecked) {
            console.log('checked');
            $("#lbl_eleves").show();

        } else {
            console.log('not checked');
            $("#lbl_eleves").hide();
            $("#eleves").val("");

        }
    });

    $("input[name='organisation']").on( 'click', function () {
    console.log($(this).val());


        if ($(this).val()=="autre_club") {
            console.log('checked');
            $(".label_autre").show();

        } else {
            console.log('not checked');
            $(".label_autre").hide();
            $("#label_autre-error").hide();
            $(".label_autre").val("");


        }
    });




    if($('input.checkbox_check').prop('checked')){
        alert("label_autre")
    };


    $.validator.addMethod("tel_number_check",
        function(value,element){
            if(/^(?=(.*[0-9]){1,}).{10,15}$/.test(value)){
                return true;
            }else{
                return false;
            };
        }
    );

    $.validator.addMethod("only_letters",
        function(value,element){
            if(/^[a-zA-ZÀÁÂÃÄÅÆÇÈÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝÞßàáâãäåæçèéêëìíîïñòóôõöùúûüý^().,\-*\']*$/.test(value)){
                return true;
            }else{
                return false;
            };
        }
    );

    $("#inscription_form").validate(
        {
            rules: {
                nom: {
                    required: true,
                    minlength: 2,
                    only_letters : true,
                },
                prenom: {
                    required: true,
                    minlength: 2,
                    only_letters : true,
                },
                mail: {
                    required: true,
                    email: true,
                },
                tel:{
                    required:true,
                    tel_number_check:true,
                },
                categorie:{
                    required: true,
                },
                organisation:{
                    required: true,
                },
                label_autre:{
                    required: true,
                },
                eleves:{
                    max:14,
                    min:1,
                    number: true,
                },




            },
            messages: {
                nom: {
                    required: "Votre nom est requis",
                    minlength: "Votre nom doit être composé d'au minimum 2 caractères",
                    only_letters: "Veuillez entrer un nom valide en toutes lettres"
                },
                prenom: {
                    required: "Votre prénom est requis",
                    minlength: "Votre nom doit être composé d'au minimum 2 caractères",
                    only_letters: "Veuillez entrer un nom valide en toutes lettres"

                },
                mail: {
                    required: "Votre adresse e-mail est requis",
                    email: "Votre adresse email doit avoir le format suivant : exemple@ceff.ch",
                },
                tel:{
                    required:"Votre téléphone est requis",
                    tel_number_check: "Veuillez entrez un numéro de téléphone valide",
                },
                categorie: {
                    required: "Veuillez sélectionner une catégorie",

                },
                organisation: {
                    required: "Veuillez sélectionner une  organisation",

                },
                label_autre: {
                    required: " Veuillez entrer le nom de votre club",
                },
                eleves:{
                    min: "Veuillez entrer un chiffre supérieur à 0",
                    max: "Veuillez entrer un chiffre supérieur à 14",
                    number:" Veuillez entrer un nombre compris entre 1 et 14",
                },


            },
            /*submitHandler: function (form) {
                console.log("formulaire envoyé");
            }*/
        }

    );

});
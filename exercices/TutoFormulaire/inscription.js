$(function (){

    $.validator.addMethod("PWCHECK",
        function (value,element){
            if (/^(?=.*?[A-Z]{1,})(?=(.*[a-z]){1,})(?=(.*[0-9]){1,})(?=(.*[$@$!%*?&]){1,}).{8,}$/.test(value)){
                return true;
            }else{
                return false;
            }
        }
    );

    $("#inscription_form").validate(
        {
            rules: {
                nom_per:{
                    required : true,
                    minlength: 2
                },
                prenom_per:{
                    required : true,
                    minlength: 2
                },
                email_per: {
                    required: true,
                    email: true
                },
                mdp_per:{
                    required: true,
                    PWCHECK: true
                },
                mdpconfirm_per:{
                    required: true,
                    equalTo: "#mdp_per"
                }

            },
            messages: {
                nom_per: {
                   required: "Ce champ est requis",
                   minlength: "La taille doit être de 2 caractères minimum",
                },
                prenom_per: {
                    required: "Ce champ est requis",
                    minlength: "La taille doit être de 2 caractères minimum",
                },
                email_per: {
                    required: "Ce champ est requis",
                    email: "La taille doit être de 5 caractères minimum",
                },
                mdp_per: {
                    required: "Ce champ est requis",
                    PWCHECK: "Le mot de passe doit contenir 8 caractères dont une minuscule, une majuscule, un chiffre et un caractère spécial",
                },
                mdpconfirm_per: {
                    required: "Ce champ est requis",
                    equalTo: "La saisie doit être identique à celle du mot de passe"
                }
            },
            submitHandler: function(form){
                console.log("formulaire envoyé");
            }
        },

    );
});
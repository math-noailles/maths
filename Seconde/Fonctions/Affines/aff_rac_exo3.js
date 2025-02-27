function definir()
{
    hyperlien1 = '<a href="Seconde/Fonctions/Affines/affines_racine.html"><span class="parent">Racine</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;

    nb_prop = 5;
    nb_pos = 10;

    question = `Relier chaque fonction affine avec sa racine, en cliquant d'abord sur la zone qui contient la formule 
                puis sur celle qui contient la racine.`;

    m = "La racine est le réel qui annule la fonction.";

    tab1 = [
            "$2x+8$",
            "$x+3$",
            "$3x+6$",
            "$x+1$",
            "$8x$",
            "$3x-3$",
            "$2x-4$",
            "$4x-12$",
            "$4-x$",
            "$10-2x$",
            ];

    tab2 = ["$-4$", "$-3$", "$-2$", "$-1$", "$0$", "$1$", "$2$", "$3$", "$4$", "$5$"];

}
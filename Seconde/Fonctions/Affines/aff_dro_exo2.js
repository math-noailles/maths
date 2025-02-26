function definir()
{
    hyperlien1 = '<a href="Seconde/Fonctions/Affines/affines_droite.html"><span class="parent">Droite</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;

    nb_questions = 2;
    nb_prop = 3;
    nb_pos = 3;

    q1 = "Soit le graphique suivant : ";

    tab_q = [];

    for (i=0; i<nb_pos; i++)
    {
        tab_q.push(q1);
    }

    tab_im = [
                `aff_dro_exo2_A.png`,
                `aff_dro_exo2_B.png`,
                'aff_dro_exo2_C.png'
            ];

    e1 = "Glisser les formules correspondant aux droites d1, d2 et d3 dans cet ordre dans le cadre ci-dessous.";

    tab_e = [];

    for (i=0; i<nb_pos; i++)
    {
        tab_e.push(e1);
    }

    tab_prop = [
                ["$x+2$", "$-2x+3$", "$0,5x-1$"],
                ["$2-x$", "$1$", "$2x-1$"],
                ["$3-x$", "$x$", "$2x-1$"]
                ];

    ordre_bon = [
                    [0, 1, 2],
                    [1, 2, 0],
                    [2, 1, 0]
        ];

    tab_m = [];

    m1 = "Modifier l'ordre.";
    
    for (i=0; i<nb_pos; i++)
    {
        tab_m.push(m1);
    }
}
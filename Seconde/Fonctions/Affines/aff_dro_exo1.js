function definir()
{
    hyperlien1 = '<a href="Seconde/Fonctions/Affines/affines_droite.html"><span class="parent">Droite</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;

    nb_questions = 2;
    nb_prop = 2;
    nb_pos = 4;

    q1 = "Soit le graphique suivant : ";


    tab_q = [q1, q1, q1, q1];

    tab_im = [
                `aff_dro_exo1_A.png`,
                `aff_dro_exo1_B.png`,
                `aff_dro_exo1_C.png`,
                `aff_dro_exo1_D.png`
            ]

    e1 = "Le coefficient directeur de $f$ est : ";
    e2 = "L'ordonnée à l'origine de $f$ est : ";

    tab_e = [
                [e1, e2],
                [e1, e2],
                [e1, e2],
                [e1, e2] 
            ];

    m1 = "C'est la variation en $y$ sur la variation en $x$.";
    m2 = "C'est l'ordonnée de l'intersection avec l'axe des $y$.";

    tab_m = [m1, m2];

    tab_rep = [
                    ["3", "-1"], 
                    ["0.25", "1"],
                    ["-1", "2"],
                    ["-1", "3"]
              ];
}
function definir()
{
    hyperlien1 = '<a href="../Seconde/Fonctions/Affines/affines_droite.html"><span class="parent">Droite</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;

    nb_questions = 4;
    nb_prop = 2;
    nb_pos = 8;

    q1 = "Soit le graphique suivant : ";

    tab_q = [];

    for (i=0; i<nb_pos; i++)
    {
        tab_q.push(q1);
    }

    tab_im = [
                `aff_dro_exo1_A.png`,
                `aff_dro_exo1_B.png`,
                `aff_dro_exo1_C.png`,
                `aff_dro_exo1_D.png`,
                `aff_dro_exo1_E.png`,
                `aff_dro_exo1_F.png`,
                `aff_dro_exo1_G.png`,
                `aff_dro_exo1_H.png`
            ];

    e1 = "Le coefficient directeur de $f$ est : ";
    e2 = "L'ordonnée à l'origine de $f$ est : ";

    tab_e = [];
    
    for (i=0; i<nb_pos; i++)
    {
        tab_e.push([e1, e2]);
    }

    m1 = "C'est la variation en $y$ divisée par la variation en $x$.";
    m2 = "Regarder l'intersection avec l'axe des $y$.";

    tab_m = [];
    
    for (i=0; i<nb_pos; i++)
    {
        tab_m.push([m1, m2]);
    }

    tab_rep = [
                    ["3", "-1"], 
                    ["0.25", "1"],
                    ["-1", "2"],
                    ["-1", "3"],
                    ["2", "0"],
                    ["0", "2"],
                    ["1", "1"],
                    ["-0.5", "1"]
              ];
}
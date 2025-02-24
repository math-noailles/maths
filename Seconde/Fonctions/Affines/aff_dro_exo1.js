function definir()
{
    hyperlien1 = '<a href="Seconde/Fonctions/Affines/affines_racine.html"><span class="parent">Racine</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;

    nb_questions = 1;
    nb_prop = 4;
    nb_pos = 2;

    q = "Soit le graphique suivant : ";

    tab_im = [
                "aff_dro_exo1_A.png",
                "aff_dro_exo1_B.png"
            ]

    tab_q = [
                "Le coefficient directeur de $f$ est : ",
                "L'ordonnée à l'origine de $f$ est : ",
                "Le coefficient directeur de $g$ est : ",
                "L'ordonnée à l'origine de $g$ est : " 
            ];

    m1 = "C'est la variation en $y$ sur la variation en $x$.";
    m2 = "C'est l'ordonnée de l'intersection avec l'axe des $y$.";

    tab_m = [m1, m2, m1, m2];

    tab_enonce = [
        ["Soit $f(x)=-4x+6$", q, m],
        ["Soit $f(x)=2x-5$",  q, m],
        ["Soit $f(x)=12-2x$",  q, m],
        ["Soit $f(x)=x-9$",  q, m],
        ["Soit $f(x)=3x+9$", q, m],
        ["Soit $f(x)=8-2x$", q, m],
        ["Soit $f(x)=-4-x$", q, m],
        ["Soit $f(x)=4x+9$", q, m],
        ["Soit $f(x)=5x+1$", q, m],
        ["Soit $f(x)=3x$", q, m]
    ];

    tab_rep = ["1.5", "2.5", "6", "9", "-3", "4", "-4", "-2.25", "-0.2", "0"];
}
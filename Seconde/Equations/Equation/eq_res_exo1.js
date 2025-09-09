function definir()
{
    hyperlien1 = '<a href="../Seconde/Equations/Equation/eq_degre_1_resolution.html"><span class="parent">Résolution</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;
    
    nb_questions = 5;
    nb_prop = 4;
    nb_pos = 10;

    q = "La solution de l'équation est : ";
    m = "La solution d'une équation du premier degré est la valeur qui vérifie l'équation. "

    tab_enonce = [
            ["Soit l'équation $-4x+7=3$", q, m],
            ["Soit l'équation $x+5=2x-1$", q, m],
            ["Soit l'équation $2x-9=9-x$", q, m],
            ["Soit l'équation $2x+5=5-x$", q, m],
            ["Soit l'équation $5=1- 2x$", q, m],
            ["Soit l'équation $4=7-2x$", q, m],
            ["Soit l'équation $4-x=8-3x$", q, m],
            ["Soit l'équation $1+4x=5x+11$", q, m],
            ["Soit l'équation $0,5 x=1-1.5x$", q, m],
            ["Soit l'équation $x-5 = 4-2x$", q, m]
    ];

    tab_prop = [
            [1, 2, -1, -2.5, 2.5],
            [-4, 6, 4, 2],
            [0, 4.5, 4.5, 6],
            [1, -0.5, 0, 0.5],
            [-4, -2, 4, 0.5],
            [5.5, -5.5, 3, 1.5],
            [1, 2, -6, 6],
            [2, 12, -10, -12],
            [0.5, 2, -2, 1],
            [-9, 3, -1, 9]
    ];

    tab_rep = [0, 1, 3, 2, 1, 3, 1, 2, 0, 1];

}
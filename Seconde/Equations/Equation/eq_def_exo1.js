function definir()
{
    hyperlien1 = '<a href="../Seconde/Equations/Equation/eq_degre_1_definition.html"><span class="parent">Définition</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;
    
    nb_questions = 5;
    nb_prop = 2;
    nb_pos = 10;

    q = "Cette équation est : ";
    m = "Une équation du premier degré ne contient que des termes constants et/ou des termes avec $x$. "

    tab_enonce = [
            ["Soit l'équation $-4x+3=0$", q, m],
            ["Soit l'équation $x^2-3x+1=0$", q, m],
            ["Soit l'équation $2x-9=7-x$", q, m],
            ["Soit l'équation $2x^2-9=7-x$", q, m],
            ["Soit l'équation $5=1- 2x^2$", q, m],
            ["Soit l'équation $4=8-3x$", q, m],
            ["Soit l'équation $4=8-3x^3$", q, m],
            ["Soit l'équation $4x=-5x$", q, m],
            ["Soit l'équation $0,5 x=1$", q, m],
            ["Soit l'équation $x^4-x+5 = 0$", q, m]
    ];

    tab_prop = [
            ["est du premier degré", "n'est pas du premier degré"],
            ["est du premier degré", "n'est pas du premier degré"],
            ["est du premier degré", "n'est pas du premier degré"],
            ["est du premier degré", "n'est pas du premier degré"],
            ["est du premier degré", "n'est pas du premier degré"],
            ["est du premier degré", "n'est pas du premier degré"],
            ["est du premier degré", "n'est pas du premier degré"],
            ["est du premier degré", "n'est pas du premier degré"],
            ["est du premier degré", "n'est pas du premier degré"],
            ["est du premier degré", "n'est pas du premier degré"]
    ];

    tab_rep = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1];

}
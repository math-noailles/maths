function definir()
{
    hyperlien1 = '<a href="../Seconde/Fonctions/Affines/affines_variations.html"><span class="parent">Variations</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;

    nb_questions = 5;
    nb_prop = 3;
    nb_pos = 10;

    q = "La fonction $f$ est : ";
    m = "Il faut regarder le signe du coefficient directeur.";

    tab_enonce = [
        ["Soit $f(x)=-4x+3$", q, m],
        ["Soit $f(x)=2x-5$",  q, m],
        ["Soit $f(x)=7$",  q, m],
        ["Soit $f(x)=x-9$",  q, m],
        ["Soit $f(x)=3x-4$", q, m],
        ["Soit $f(x)=-3$", q, m],
        ["Soit $f(x)=-4-x$", q, m],
        ["Soit $f(x)=x+10$", q, m],
        ["Soit $f(x)=-5x+1$", q, m],
        ["Soit $f(x)=3x$", q, m]
    ];

    p1 = "strictement croissante";
    p2 = "strictement décroissante";
    p3 = "constante";

    tab_prop = [];
        for (i = 0; i < 10; i++)
        {
          tab_prop.push([p1, p2, p3]);
        }

   

    tab_rep = [1, 0, 2, 0, 0, 2, 1, 0, 1, 0];
}
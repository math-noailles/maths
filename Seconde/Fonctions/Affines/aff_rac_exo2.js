function definir()
{
    hyperlien1 = '<a href="Seconde/Fonctions/Affines/affines_racine.html"><span class="parent">Racine</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;

    nb_questions = 5;
    nb_prop = 4;

    q = "La racine de $f$ est : ";
    m = "La racine est le réel qui annule la fonction.";

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
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
        ["Soit $f(x)=-3x+6$", q, m],
        ["Soit $f(x)=2x-5$",  q, m],
        ["Soit $f(x)=7-x$",  q, m],
        ["Soit $f(x)=x-9$",  q, m],
        ["Soit $f(x)=3x+9$", q, m],
        ["Soit $f(x)=8-2x$", q, m],
        ["Soit $f(x)=-4-x$", q, m],
        ["Soit $f(x)=4x+10$", q, m],
        ["Soit $f(x)=-5x+1$", q, m],
        ["Soit $f(x)=3x$", q, m]
    ];

    tab_prop = [
        ["$-3$", "$6$", "$2$", "$-2x$"],
        ["$5$", "$2x$", "$-5$", "$2,5$"],
        ["$7$", "$1$", "$-x$", "$-1$"],
        ["$1$", "$x$", "$-9$", "$9$"],
        ["$3$", "$-3$", "$9$", "$-9$"],
        ["$-2$", "$-4$", "$4$", "$8$"],
        ["$-4$", "$-x$", "$4$", "$-1$"],
        ["$-2,5$", "$2,5$", "$4$", "$-6$"],
        ["$-5$", "$5$", "$0,2$", "$-0,2$"],
        ["$3$", "$-3$", "$0$", "$1$"]
    ];

    tab_rep = [2, 3, 0, 3, 1, 2, 0, 0, 2, 2];
}
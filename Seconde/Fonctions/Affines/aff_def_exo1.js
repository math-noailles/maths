function definir()
{
    hyperlien1 = '<a href="../Seconde/Fonctions/Affines/affines_definition.html"><span class="parent">Définition</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;
    
    nb_questions = 5;
    nb_prop = 4;
    nb_pos = 10;

    q = "Le coefficient directeur de $f$ est : ";
    m = "C'est le coefficient devant la variable $x$."

    tab_enonce = [
            ["Soit $f(x)=-4x+3$", q, m],
            ["Soit $f(x)=2x-5$", q, m],
            ["Soit $f(x)=7-x$", q, m],
            ["Soit $f(x)=x-9$", q, m],
            ["Soit $f(x)=3x-4$", q, m],
            ["Soit $f(x)=8-3x$", q, m],
            ["Soit $f(x)=-4-x$", q, m],
            ["Soit $f(x)=8-6x$", q, m],
            ["Soit $f(x)=-4-8x$", q, m],
            ["Soit $f(x)=-6+x$", q, m]
    ];

    tab_prop = [
            ["$3$", "$-4$", "$4$", "$-4x$"],
            ["$5$", "$2x$", "$2$", "$-5$"],
            ["$7$", "$1$", "$-x$", "$-1$"],
            ["$1$", "$x$", "$-9$", "$9$"],
            ["$-4$", "$4$", "$3$", "$3x$"],
            ["$-3$", "$-3x$", "$8$", "$-8$"],
            ["$-4$", "$-x$", "$4$", "$-1$"],
            ["$-6$", "$-6x$", "$8$", "$6$"],
            ["$-4$", "$-8x$", "$-8$", "$8$"],
            ["$-6$", "$x$", "$6$", "$1$"]
    ];

    tab_rep = [1, 2, 3, 0, 2, 0, 3, 0, 2, 3];

}
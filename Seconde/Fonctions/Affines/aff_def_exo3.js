function definir()
{
    hyperlien1 = '<a href="Seconde/Fonctions/Affines/affines_definition.html"><span class="parent">Définition</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;

    nb_questions = 5;
    nb_prop = 2;
    nb_pos = 10;

    q1 = "Soit $f(x)=2x-3$ : ";
    q2 = "Soit $f(x)=4-x$ : ";
    q3 = "Soit $f(x)=x$ : ";
    q4 = "Soit $f(x)=5x+7$ : ";
    q5 = "Soit $f(x)=8-3x$ : ";
    q6 = "Soit $f(x)=6+x$ : ";
    q7 = "Soit $f(x)=0.5x-7$ : ";
    q8 = "Soit $f(x)=-9x+3$ : ";
    q9 = "Soit $f(x)=0.5-0.2x$ : ";
    q10 = "Soit $f(x)=-3$ : ";

    tab_q = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    tab_im = [];

    e1 = "Le coefficient directeur de $f$ est : ";
    e2 = "L'ordonnée à l'origine de $f$ est : ";

    tab_e = []
    
    for (i=0; i<nb_pos; i++)
    {
        tab_e.push([e1, e2]);
    }

    m1 = "C'est le coefficient devant la variable $x$.";
    m2 = "C'est le terme constant sans $x$.";

    tab_m = []
    
    for (i=0; i<nb_pos; i++)
    {
        tab_m.push([m1, m2]);
    }

    tab_rep = [
                    ["2", "-3"], 
                    ["-1", "4"], 
                    ["1", "0"], 
                    ["5", "7"], 
                    ["-3", "8"], 
                    ["1", "6"], 
                    ["0.5", "-7"], 
                    ["-9", "3"], 
                    ["-0.2", "0.5"], 
                    ["0", "-3"]
              ];
}
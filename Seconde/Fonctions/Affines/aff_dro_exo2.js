function definir()
{
    hyperlien1 = '<a href="Seconde/Fonctions/Affines/affines_droite.html"><span class="parent">Droite</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;

    nb_questions = 1;
    nb_prop = 3;
    nb_pos = 2;

    q1 = "Soit le graphique suivant : ";

    tab_q = [];

    for (i=0; i<nb_pos; i++)
    {
        tab_q.push(q1);
    }

    tab_im = [
                `aff_dro_exo2_A.png`
            ];

    e1 = "Glisser la bonne formule dans le bon cadre gris.";

    tab_e = []
    
    for (i=0; i<nb_pos; i++)
    {
        tab_e.push(e1);
    }

    m1 = "Regarder l'ordonnée à l'originbe et le coefficnet directeur.";

    tab_prop = [
                ["$f(x)=x+2$", "$f(x)=-2x+3$", "$f(x)=3x-1$"],
                ["$f(x)=2-x$", "$f(x)=1$", "$f(x)=2x-1$"]
                ];

    lab1 = ["d1", "d2", "d3"];

    tab_lab = [];

    for (i=0; i<nb_pos; i++)
    {
        tab_lab.push(lab1);
    }

    tab_m = [];
    
    for (i=0; i<nb_pos; i++)
    {
        tab_m.push(m1);
    }

    tab_rep = [
                    
              ];
}
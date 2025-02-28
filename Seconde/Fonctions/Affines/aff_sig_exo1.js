function definir()
{
    hyperlien1 = '<a href="../Seconde/Fonctions/Affines/affines_signe.html"><span class="parent">Signe</span></a>';
    spanLien = document.getElementById('lien1');
    spanLien.innerHTML = hyperlien1;
    
    nb_questions = 3;
    nb_prop = 5;
    nb_pos = 5;

    q = "La formule de $f$ est : ";
    m = "Repérer la racine et le signe du coefficient directeur."

    tab_enonce = [
            [`
                <div style="text-align: left;">
                $
                \\begin{array}{|c|ccc|}
                    \\hline
                    x & -\\infty & & 2 & & +\\infty \\\\
                    \\hline
                    f(x) & & + & 0 & - & \\\\
                    \\hline
                \\end{array}
                $
                </div>
                `, q, m],
            [`
                <div style="text-align: left;">
                $
                \\begin{array}{|c|ccc|}
                    \\hline
                    x & -\\infty & & 3 & & +\\infty \\\\
                    \\hline
                    f(x) & & - & 0 & + & \\\\
                    \\hline
                \\end{array}
                $
                </div>
                `, q, m],
            [`
                <div style="text-align: left;">
                $
                \\begin{array}{|c|ccc|}
                    \\hline
                    x & -\\infty & & -1 & & +\\infty \\\\
                    \\hline
                    f(x) & & - & 0 & + & \\\\
                    \\hline
                \\end{array}
                $
                </div>
                `, q, m],
            [`
                <div style="text-align: left;">
                $
                \\begin{array}{|c|ccc|}
                    \\hline
                    x & -\\infty & & 4 & & +\\infty \\\\
                    \\hline
                    f(x) & & + & 0 & - & \\\\
                    \\hline
                \\end{array}
                $
                </div>
                `, q, m],
            [`
                <div style="text-align: left;">
                $
                \\begin{array}{|c|ccc|}
                    \\hline
                    x & -\\infty & & -2 & & +\\infty \\\\
                    \\hline
                    f(x) & & + & 0 & - & \\\\
                    \\hline
                \\end{array}
                $
                </div>
                `, q, m],
            [`
                <div style="text-align: left;">
                $
                \\begin{array}{|c|ccc|}
                    \\hline
                    x & -\\infty & & 0 & & +\\infty \\\\
                    \\hline
                    f(x) & & - & 0 & + & \\\\
                    \\hline
                \\end{array}
                $
                </div>
                `, q, m]
    ];

    tab_prop = [
            ["$f(x)=5x+10$", "$f(x)=2x-1$", "$f(x)=-2x+4$", "$f(x)=x+2$", "$f(x)=1-2x$"],
            ["$f(x)=x+3$", "$f(x)=3x-1$", "$f(x)=-3x+6$", "$f(x)=2x+6$", "$f(x)=3x-9$"],
            ["$f(x)=x-1$", "$f(x)=3x+3$", "$f(x)=2x-2$", "$f(x)=1-x$", "$f(x)=5-5x$"],
            ["$f(x)=x-4$", "$f(x)=4-2x$", "$f(x)=2x-4$", "$f(x)=8-2x$", "$f(x)=1-4x$"],
            ["$f(x)=x-2$", "$f(x)=3x+6$", "$f(x)=2x-4$", "$f(x)=4+2x$", "$f(x)=-5x-10$"],
            ["$f(x)=x+1$", "$f(x)=-2x$", "$f(x)=x-1$", "$f(x)=4x$", "$f(x)=1-x$"]
    ];

    tab_rep = [2, 4, 1, 3, 4, 3];

}
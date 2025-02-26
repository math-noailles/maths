function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    if (event.target.classList.contains('dropZone')) {
        event.target.appendChild(draggedElement);
    }
}

function creer_tab()
{
        ta = [];
        for (i = 0; i < nb_pos; i++)
        {
          ta.push(i);
        }
        for (i = ta.length - 1; i > 0; i--) 
        {
            j = Math.floor(Math.random() * (i + 1));
            [ta[i], ta[j]] = [ta[j], ta[i]];
        }
        return ta;
}

function afficher_enonce(num, localStorage, chemin)
{
    localS = "'" + localStorage + "'";
    ta = creer_tab();
    codeHTML = "";
    for (nq=1; nq<=num; nq++)
    {
        codeHTML = codeHTML + `
            <div class="form-container">
                <form id="f` + nq + `">
                    <div class="question"> <b> ` + nq + `. </b>` + tab_q[ta[nq]];
        if (tab_im.length > 0)
        {
                        codeHTML = codeHTML + `   <br> <img src="` + chemin + `/images/` + tab_im[ta[nq]] + `"/>`;
        }
        codeHTML = codeHTML + `<br><br>
                                    <div id="dragDropContainer">
                                        <p>` + tab_e[ta[nq]] + `</p>
                                        <div id="dropZone" class='dropZone' ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                        <div id="draggableItems">`;
            for (i=0; i<nb_prop; i++)
            {
                num_it = (nq - 1) * 3 + i;
                codeHTML = codeHTML +   `<div id='it` + num_it + `'
                 class="draggable" draggable="true" ondragstart="drag(event)">`
                                            + tab_prop[ta[nq]][i] + 
                                        `</div>`;
            }
        codeHTML = codeHTML + `
                                        </div>
                                    </div>`;

        codeHTML = codeHTML +
                    `
                    </div>
                        <span id='sp1' class='ic_rep'> &emsp; </span>
                        <input class="bouton1" type="button" value="Valider" onClick="verif('f` + nq + `', ` + nq + `)" />
                        <br>
                        <span class='juste2' id="sp2"> &ensp; </span>
                </form>
            </div>`;
        codeHTML = codeHTML +
                    `
                    <span id='m1'></span> <br>
                    `;
    }
    codeHTML = codeHTML +
                    `
                    <p>
                        <input id='bv' class="bouton2" type="button" value="Valider l'exercice" onClick="verif_exo(`
                        + localS +
                        `,`
                        + num + `)" />
                        <span class="span_exo"></span>
                    </p>
                    `;
    
    spanForm = document.getElementById('form');
    spanForm.innerHTML = codeHTML;
    // Réactualiser MathJax pour reprocesser les expressions LaTeX
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function verif(nom_form,  k, l)
{
    form = document.forms[nom_form];
    dropZone = form.querySelector("#dropZone");
    items = dropZone.getElementsByClassName("draggable");
    ordre_saisi = [];

    for (i = 0; i < items.length; i++) {
        ordre_saisi.push(items[i].id);
    }
    input_saisie = form.querySelector("#inp1");
    span_ic = form.querySelector("#sp1");
    span_mes = form.querySelector("#sp2");
    bon_ordre = []
    for (i=0; i<3; i++)
    {
        n = 3 * (k-1) + ordre_bon[ta[k]][i];
        it = "it" + n;
        bon_ordre.push(it);
    }
    if (JSON.stringify(bon_ordre) === JSON.stringify(ordre_saisi))
    {
        span_ic.innerHTML = "<b class='juste'>&#10004;</b>";
        span_mes.innerHTML = `<b class='juste'>Bonne réponse !</b>`;
    }
    else
    {
        span_ic.innerHTML = "<b class='faux'>&#10060;</b>";
        mes_err = `<b class="faux2">` + tab_m[ta[k]] + `</b>`;
        span_mes.innerHTML = mes_err;
         MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
}


function verif_exo(chaine, n)
{
    tab_juste = document.querySelectorAll(".juste");
    m = document.querySelector(".span_exo");
    l = tab_juste.length;    
    bout = document.getElementById('bv');
    if (l == 2 * n)
    {
        m.innerHTML = "<b class='juste2'>Exercice validé.</b>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem(chaine, 1);
            bout.style.backgroundColor = "green";

        }
    }
    else
    {
        m.innerHTML = "<b class='faux2'>Exercice non validé.</b>";
        bout.style.backgroundColor = "red";
    }
}
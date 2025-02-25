function allowDrop(ev) 
{
  ev.preventDefault();
}

function drag(ev) 
{
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) 
{
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
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
        codeHTML = codeHTML + `<div class="question"> <b> ` + nq + `. </b>` + tab_q[ta[nq]];
        if (tab_im.length > 0)
        {
                        codeHTML = codeHTML + `   <br> <img src="` + chemin + `/images/` + tab_im[ta[nq]] + `"/>`;
        }
        codeHTML = codeHTML + `<br><br>`;

        for (i=0; i<nb_prop; i++)
        {
        
            codeHTML = codeHTML + ` <div id="o1" class="drop1" ondrop="drop(event)" ondragover="allowDrop(event)">
                                        <div id="dr1" class="drag1" draggable="true" ondragstart="drag(event)">`
                                        + tab_prop[ta[nq]][i] +
                                    `
                                        </div>
                                    </div>
                                `;
        }

        for (i=0; i<nb_prop; i++)
        {

            codeHTML = codeHTML + ` <div>
                                        <label> &emsp;` +
                                            tab_lab[ta[nq]][i]
                                        + ` : </label>
                                        <div id="d1" class="drop2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                                    </div>
                                    `;
        }
        /*
        for (ne=0; ne<nb_prop; ne++)
        {
            codeHTML = codeHTML + tab_e[ta[nq]][ne];
            num_form = (nq - 1) * nb_prop + ne;
            codeHTML = codeHTML + `
                    <form id="f` + num_form + `">
                    <input type='text' class='zone_saisie1' id='inp1' autocomplete='off'
                        onkeypress="javascript:if (event.keyCode == 13) {verif('f` + num_form + `', ` + nq + `, ` + ne + `);return false;}"/>
                    `;
            codeHTML = codeHTML +
                        `
                        <div>
                            <span id='sp1' class='ic_rep'> &emsp; </span>
                            <input class="bouton1" type="button" value="Valider" onClick="verif('f` + num_form + `', ` + nq + `, ` + ne + `)" />
                            <br>
                            <span class='juste2' id="sp2"> &ensp; </span>
                        </div>
                    </form><br>`;
        }
        codeHTML = codeHTML +
                    ` </div>
                    
            `;
        codeHTML = codeHTML +
                    `
                    <span id='m1'></span> <br>
                    `;
        */
    }
    num_q = num * nb_prop;
    codeHTML = codeHTML +
                    `
                    <p>
                        <input id='bv' class="bouton2" type="button" value="Valider l'exercice" onClick="verif_exo(`
                        + localS +
                        `,`
                        + num_q + `)" />
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
    input_saisie = form.querySelector("#inp1");
    repon = input_saisie.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/,/g,".");
    repon = repon.toString();
    repon = eval(repon);
    span_ic = form.querySelector("#sp1");
    span_mes = form.querySelector("#sp2");
    if (tab_rep[ta[k]][l] == repon)
    {
        span_ic.innerHTML = "<b class='juste'>&#10004;</b>";
        span_mes.innerHTML = `<b class='juste'>Bonne réponse !</b>`;
    }
    else
    {
        span_ic.innerHTML = "<b class='faux'>&#10060;</b>";
        mes_err = `<b class="faux2">` + tab_m[ta[k]][l] + `</b>`;
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
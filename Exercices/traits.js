var chaine = "";

function creer_ta()
{
        let ta = [];
        for (let i = 0; i < nb_pos; i++)
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

function creer_tb()
{
    tb = [];
    for (i=0; i<nb_prop; i++)
    {
        tb.push(ta[i]);
    }
    for (i = tb.length - 1; i > 0; i--) 
    {
        j = Math.floor(Math.random() * (i + 1));
        [tb[i], tb[j]] = [tb[j], tb[i]];
    }
    return tb;
}

function afficher_enonce(localStorage)
{
    localS = "'" + localStorage + "'";
    chaine = localStorage;
    ta = creer_ta();
    tb = creer_tb();
    div_question = document.getElementById('question');
    div_question.innerHTML = question;
    
    for (i=0; i<nb_prop; i++)
    {
        num_q = i + 1;
        id_quest = 'q' + num_q;
        div_quest = document.getElementById(id_quest);
        div_quest.innerHTML =  tab1[ta[i]];
        new_id = 'p' + ta[i];
        div_quest.id = new_id;
    }

    for (i=0; i<nb_prop; i++)
    {
        num_r = i + 1;
        id_rep = 'r' + num_r;
        div_rep = document.getElementById(id_rep);
        div_rep.innerHTML =  tab2[tb[i]];
        new_id = 's' + tb[i];
        div_rep.id = new_id;
    }
    // Réactualiser MathJax pour reprocesser les expressions LaTeX
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    
}

function verif(nom_form,  k)
{
    form = document.forms[nom_form];
    tab_radio = form.querySelectorAll('input[name="q1"][type="radio"]');
    span_ic = form.querySelector("#sp1");
    span_mes = form.querySelector("#sp2");
    if (tab_radio[tab_rep[ta[k]]].checked)
    {
        span_ic.innerHTML = "<b class='juste'>&#10004;</b>";
        span_mes.innerHTML = `<b class='juste'>Bonne réponse !</b>`;
    }
    else
    {
        span_ic.innerHTML = "<b class='faux'>&#10060;</b>";
        mes_err = `<b class="faux2">` + tab_enonce[ta[k]][2] + `</b>`;
        span_mes.innerHTML = mes_err;
        // Réactualiser MathJax pour reprocesser les expressions LaTeX
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

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const quests = document.querySelectorAll('.quest');
    const reps = document.querySelectorAll('.rep');
    const validateButton = document.getElementById('bv');
    let selectedQuestion = null;
    let lines = [];

    // Correspondances correctes entre questions et réponses
    const correctMatches = {
        p0: 's0',
        p1: 's1',
        p2: 's2',
        p3: 's3',
        p4: 's4',
        p5: 's5',
        p6: 's6',
        p7: 's7',
        p8: 's8',
        p9: 's9',
    };

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    quests.forEach(quest => {
        quest.addEventListener('click', () => {
            selectedQuestion = quest;
        });
    });

    reps.forEach(rep => {
        rep.addEventListener('click', () => {
            if (selectedQuestion) {
                removeLine(selectedQuestion, rep);
                drawLine(selectedQuestion, rep);
                selectedQuestion = null;
            }
        });
    });

    validateButton.addEventListener('click', verif);

    function drawLine(quest, rep) {
        const qRect = quest.getBoundingClientRect();
        const aRect = rep.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();

        const line = {
            quest: quest,
            rep: rep,
            startX: qRect.right - canvasRect.left,
            startY: qRect.top + qRect.height / 2 - canvasRect.top,
            endX: aRect.left - canvasRect.left,
            endY: aRect.top + aRect.height / 2 - canvasRect.top
        };

        lines.push(line);
        redrawLines();
    }

    function removeLine(question, answer) {
        lines = lines.filter(line => line.quest !== question && line.rep !== answer);
        redrawLines();
    }

    function redrawLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lines.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.startX, line.startY);
            ctx.lineTo(line.endX, line.endY);
            ctx.stroke();
        });
    }

    function verif() {
        let allCorrect = true;
        lines.forEach(line => {
            const questId = line.quest.id;
            const repId = line.rep.id;
            if (correctMatches[questId] !== repId) {
                allCorrect = false;
            }
        });
        spm = document.getElementById('spv');
        if (allCorrect) {
            spm.innerHTML = "<b class='juste2'>Exercice validé.</b>";
            bout.style.backgroundColor = "green";
            if(typeof localStorage!='undefined') 
            {
                localStorage.setItem(chaine, 1);
            }
        } else {
            spm.innerHTML = "<b class='faux2'>Exercice non validé.</b>";
            bout.style.backgroundColor = "red";
        }
    }
});
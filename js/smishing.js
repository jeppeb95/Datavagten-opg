let userChoices = { scenario1: null, scenario2: null, scenario3: null };

function handleChoice(scenario, choice) {
    userChoices[scenario] = choice;
    document.querySelectorAll(`#${scenario} .choice-btn`).forEach(button => button.classList.remove('selected'));
    event.target.classList.add('selected');
    if (Object.values(userChoices).every(val => val !== null)) showFinalFeedback();
}

function showFinalFeedback() {
    const scenarios = ['scenario1', 'scenario2', 'scenario3'];
    const feedback = {
        scenario1: {
            click: "<p>Du har valgt at klikke på linket. Dette udgør en stor sikkerhedsrisiko, da smishing-beskeder ofte indeholder links, der kan føre til phishing-sider eller malware-installation. Det er vigtigt at huske, at din bank aldrig vil bede om følsomme oplysninger via SMS. Du bør som minimum ignorere denne type beskeder der angiveligt skulle være fra din bank</p>",
            ignore: "<p>Du har valgt at ignorere beskeden. Det er et fornuftigt valg, da det er bedre at være forsigtig end at risikere at klikke på et skadeligt link. Det er altid vigtigt at bekræfte med din bank direkte, hvis du er i tvivl om en given besked er ægte.</p>",
            call: "<p>Du har valgt at ringe til banken. Dette er den mest sikre handling. Kontakt altid gennem officielle kanaler, hvis du er i tvivl om en besked eller anmodning. Brug telefonnumre, du selv har fundet, i stedet for dem, der leveres i beskeder.</p>",
            reply: "<p>Du har valgt at svare på beskeden. Svare på uopfordrede beskeder kan føre til yderligere kontakt med svindlere og risikere yderligere svindel eller identitetstyveri. Det er bedst at undgå at svare og slette beskeden.</p>"
        },
        scenario2: {
            click: "<p>Du har valgt at klikke på linket. Selvom tanken om at vinde en præmie kan være fristende, er det vigtigt at huske, at disse beskeder ofte er svindel. At klikke på linket kan udsætte dig for risiko for svindel, identitetstyveri og andre former for sikkerhedsbrud.</p>",
            ignore: "<p>Du har valgt at ignorere beskeden. Dette er et fornuftig valg, da uopfordrede tilbud om præmier ofte er svindel. Ignorer disse beskeder og undgå at dele personlige oplysninger eller klikke på nogen links i dem.</p>",
            report: "<p>Du har valgt at rapportere beskeden som spam. Dette er det helt rigtige valg for at beskytte dig selv og andre mod smishing. Ved at rapportere sådanne beskeder kan du bidrage til at beskytte andre mod at gå i fælden.</p>",
            reply: "<p>Du har valgt at svare på beskeden. Svare på uopfordrede beskeder kan føre til yderligere kontakt med svindlere og risikere yderligere svindel eller identitetstyveri. Det er bedst at undgå at svare og slette beskeden.</p>"
        },
        scenario3: {
            click: "<p>Du har valgt at gå til Netflixs app. Det er forståeligt, at du reagerer på denne meddelelse, da den angiver en reel sikkerhedsrisiko for din konto. Så længe du går manuelt ind på deres officielle hjemmeside eller app på din enhed, har du foretaget det rette valg.</p>",
            ignore: "<p>Du har valgt at ignorere beskeden. Det er forståeligt, at du vil være forsigtig overfor denne type besked, når du ikke genkender placeringen eller loginnet. Det kan dog være farligt at ignorere, da det indikerer et reelt sikkerhedsproblem med din konto. For din egen sikkerhed bør du reagere med det samme. Brug kun den officielle hjemmeside eller appen til at ændre dit kodeord eller kontakte kundeservice.</p>",
            call: "<p>Du har valgt at kontakte kundeservice. Det er en god praksis at kontakte kundeservice direkte for at bekræfte om den pågældende meddelelse er ægte. Ved at kontakte dem kan du få yderligere vejledning om, hvordan du bedst sikrer din konto og tager de nødvendige skridt for at beskytte dine oplysninger.</p>",
            reply: "<p>Du har valgt at svare på beskeden. Det kan være fristende at svare på denne type meddelelse for at få yderligere information. Men det er vigtigt at være forsigtig med at dele personlige oplysninger via svar på e-mails eller meddelelser. For at sikre, at din konto forbliver sikker, bør du i stedet kontakte Netflixs kundeservice gennem deres officielle hjemmeside.</p>"
        }
        
    };
    let feedbackText = "<h3>Samlet feedback</h3>";
    scenarios.forEach(scenario => {
        feedbackText += `<h4>${scenario.replace('scenario', 'Scenario ')}</h4>`;
        feedbackText += feedback[scenario][userChoices[scenario]];
    });
    feedbackText += "<h4 class='smishing-h4'>Generelle råd mod smishing</h4>";
    feedbackText += "<ul>";
    feedbackText += "<li>Vær skeptisk over for uopfordrede beskeder: Hvis du modtager en SMS, der beder om personlige oplysninger eller handlinger, skal du være forsigtig, især hvis du ikke forventede beskeden.</li>";
    feedbackText += "<li>Kontroller afsenderen: Tjek nummeret eller afsenderens identitet for at sikre, at beskeden kommer fra en legitim kilde. Vær opmærksom på mistænkelige tegn, som et ukendt nummer eller et mærkeligt afsendernavn. Vi anbefaler at man altid kontakter organisationen direkte, da numre også kan spoofes.</li>";
    feedbackText += "<li>Undgå at klikke på links eller downloade vedhæftede filer: Klik aldrig på links i uopfordrede beskeder, især hvis de beder om personlige oplysninger eller kræver handlinger som at downloade filer. Disse links vil oftest føre til phishing-sider eller installation af skadelig software.</li>";
    feedbackText += "<li>Kontakt organisationen direkte: Hvis du er i tvivl om en besked, skal du kontakte organisationen direkte ved hjælp af kontaktoplysningerne på deres officielle hjemmeside eller tidligere korrespondance. Brug ikke telefonnumre eller links fra beskeder.</li>";
    feedbackText += "<li>Rapportér mistænkelige beskeder: Hvis du modtager en mistænkelig besked, skal du rapportere den til din mobiludbyder og eventuelt markere afsenderen som spam på din smartphone . Dette hjælper med at bekæmpe smishing og beskytte andre mod svindel.</li>";
    feedbackText += "</ul>";
    document.getElementById('feedback').innerHTML = feedbackText;
    document.getElementById('finalFeedback').style.display = 'block';
    document.querySelectorAll('.scenario').forEach(scenario => scenario.style.display = 'none');
}

function resetScenarios() {
    userChoices = { scenario1: null, scenario2: null, scenario3: null };
    document.getElementById('feedback').innerHTML = "";
    document.getElementById('finalFeedback').style.display = 'none';
    document.querySelectorAll('.choice-btn').forEach(button => button.classList.remove('selected'));
    document.querySelectorAll('.scenario').forEach(scenario => scenario.style.display = 'block');
}

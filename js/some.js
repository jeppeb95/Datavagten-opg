let currentScenario = 1;
let interactionChoices = [];

function chooseInteraction(choice) {
  interactionChoices.push({ scenario: currentScenario, choice });
  showNextScenario();
}

function showNextScenario() {
  let currentScenarioElement = document.getElementById('scenario' + currentScenario);
  currentScenarioElement.style.display = 'none';

  if (currentScenario < 3) {
    currentScenario++;
    let nextScenarioElement = document.getElementById('scenario' + currentScenario);
    nextScenarioElement.style.display = 'flex';
  } else {
    let feedbackSlide = document.getElementById('feedback');
    feedbackSlide.style.display = 'block';
    handleFeedback();
  }
}

function handleFeedback() {
  let feedbackText = '';

  interactionChoices.forEach(choice => {
    feedbackText += `<h2>Scenario ${choice.scenario}</h2>`;
    
    switch (choice.scenario) {
      case 1:
        if (choice.choice === 'click') {
          feedbackText += "Du valgte at klikke. Altid vær forsigtig med at klikke på links, når det kommer til deling af personlige oplysninger på sociale medier - især hvis de kommer fra ukendte eller mistænkelige kilder. Vi anbefaler at du helt undgår at klikke på links, som du ikke har fuld tillid til, omend ikke andet bør du dobbelttjekke kilden, før du indtaster nogen form for personlig data. <br>";
        } else if (choice.choice === 'report') {
          feedbackText += "Du valgte at rapportere, det er et helt rette valg! Når du rapporterer mistænkelige opslag, beskytter du dig selv men også andre mulige ofre. <br>";
        } else if (choice.choice === 'ignore') {
          feedbackText += "Det er en rutineret beslutning at ignorere mistænkelige kampagner. Fortsæt endelig med samme skepsis over for kampagner, der lyder for gode til at være sande. Du kan med fordel overveje at rapportere disse kampagner, og på den måde beskytte andre brugere, som måske ikke har helt samme blik for det.<br>";
        }
        break;
      case 2:
        if (choice.choice === 'accept') {
          feedbackText += "Du har valgt at acceptere venneanmodningen, pas på med dette. Det kan være tegn på svindel , hvis du modtager venneanmodninger fra personer, du allerede er venner med. Vær altid grundig med at kontrollere sådanne anmodninger. En hurtig kontrol kan være at sende en besked til den konto, du allerede er venner med, eller at gennemse profilen for fælles venner.<br>";
        } else if (choice.choice === 'report') {
          feedbackText += "Du har valgt at rapportere venneanmodningen, det er en fornuftig beslutning.  Ved at rapportere falske eller duplikerede profiler, beskytter du dig selv og hjælper med at forhindre svindleren i at udnytte andre brugere.<br>";
        } else if (choice.choice === 'ignore') {
          feedbackText += "Det er en rutineret beslutning at ignorere duplikerede anmodninger. Fortsæt endelig med samme skepsis. Du kan med fordel overveje at rapportere disse anmodninger, og på den måde beskytte andre brugere, som måske ikke har helt samme blik for det.<br>";
        }
        break;
      case 3:
        if (choice.choice === 'click') {
          feedbackText += "Du har valgt at klikke på linket. Pas på med at klikke på ukendte links, tag et øjeblik til at overveje om det er en kilde du reelt set kan stole på. Hvis du er i tvivl, er det bedre at at kontakte afsenderen direkte gennem en anden kommunikationskanal. Dette lille skridt kan være afgørende for at du ikke går lige i fælden.<br>";
        } else if (choice.choice === 'contact') {
          feedbackText += "Du har valgt at kontakte vennen, det er godt valg. Ved at kontakte din ven direkte, uden først at klikke på det mistænkelige link, kan du verificere linket før du klikker.<br>";
        } else if (choice.choice === 'report') {
          feedbackText += "Du har valgt at rapportere, det er fornuftigt - men du bør overveje om du skal kontakte vennen gennem en anden kommunikationskanal først, det kan trods alt være et sikkert link, som din ven forsøger at dele med dig.<br>";
        }
        break;
      default:
        break;
    }
  });

  feedbackText += "<h2 class='h2-feed'>Generelle råd</h2>";
  feedbackText += "<ul>";
  feedbackText += "<li>Tjek om afsenderens profil er ægte ved at se på antallet af venner/følgere, oprettelsesdatoen, indholdet og aktivitet.</li>";
  feedbackText += "<li>Undersøg indholdet af beskeder eller annoncer for eventuelle stave- eller grammatikfejl, unaturlige formuleringer eller anmodninger om akut handling.</li>";
  feedbackText += "<li>Klik ikke på mistænkelige links, selvom de kommer fra bekendte, før du har bekræftet, at afsenderen faktisk har sendt dem.</li>";
  feedbackText += "<li>Rapportér og blokér mistænkelige profiler, beskeder eller kampagner på de sociale medier for yderligere undersøgelse og for at advare andre brugere.</li>";
  feedbackText += "<li>Hold dine privatlivsindstillinger opdaterede og begræns synligheden af dine personlige oplysninger for at reducere risikoen for at svindlerne kan lave målrettet phishing.</li>";
  feedbackText += "</ul>";

  document.getElementById('feedbackContent').innerHTML = feedbackText;
}

function tryAgain() {
  interactionChoices = [];
  currentScenario = 1;
  document.querySelectorAll('.scenario').forEach(scenario => {
    scenario.style.display = 'none';
  });
  document.getElementById('scenario1').style.display = 'flex';
  document.getElementById('feedback').style.display = 'none';
}

function goToHome() {
  window.location.href = "traening.html";
}

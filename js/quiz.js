const questions = [
    {
      question: "Hvad bør du gøre, hvis du modtager en e-mail, der beder om dine personlige oplysninger eller adgangskoder?",
      options: ["Ignorer e-mailen", "Klik på linket og indtast dine oplysninger", "Rapporter e-mailen som spam"],
      answer: 2
    },
    {
      question: "Hvad er en fornuftig handling, hvis du modtager en SMS, der beder om dine bankoplysninger?",
      options: ["Klik på link i SMS", "Indtast dine oplysninger og send dem", "Kontakt din bank direkte for at bekræfte beskeden"],
      answer: 2
    },
    {
      question: "Hvad bør du gøre, hvis du ser en mistænkelig annonce på sociale medier, der lover gratis præmier?",
      options: ["Klik på annoncen for at modtage præmierne", "Ignorer annoncen og fortsæt med at scrolle", "Rapporter annoncen som spam eller svindel"],
      answer: 2
    },
    {
      question: "Hvorfor er det vigtigt at være forsigtig med at klikke på ukendte links i e-mails, SMS'er og sociale medier?",
      options: ["Fordi det kan føre til at vinde gratis præmier", "Fordi det kan føre til phishing-sider eller malware-installation", "Fordi det kan hjælpe med at få flere følgere på sociale medier"],
      answer: 1
    },
    {
      question: "Hvad er en sikker måde at reagere på mistænkelige beskeder og annoncer på tværs af alle platforme?",
      options: ["Ignorer dem og håb på det bedste", "Indtast dine personlige info for at være på den sikre side", "Rapporter dem til de relevante myndigheder eller platforme"],
      answer: 2
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.innerText = option;
        optionElement.className = 'button-option';
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
  }
  
  function selectOption(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.answer) {
        score++;
        document.getElementById('feedback').innerText = 'Korrekt svar';
    } else {
        document.getElementById('feedback').innerText = 'Forkert svar.';
    }
    document.getElementById('next-button').disabled = false;
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById('feedback').innerText = '';
        document.getElementById('next-button').disabled = true;
    } else {
        showResults();
    }
  }
  function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = `Du har ${score} rigtige ud af ${questions.length} spørgsmål.`;
  }
  
  
  function startQuiz() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion();
  }
  
  function tryAgain() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result').style.display = 'none';
    document.getElementById('feedback').innerText = '';
    startQuiz();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('next-button').disabled = true;
  }
  );
  
let questions = [
    { question: "What is the brain of the computer?", 
      option1: "CPU",
       option2: "Protocol",
        option3: "Malware",
         option4: "Hard drive",
          answer: "1" },
    { question: "What is the term for a set of instructions that a computer follows?",
       option1: "RAM", 
       option2: "Operating system", 
       option3: "Hard drive", 
       option4: "Program", 
       answer: "4" },
    { question: "What is the name of the device that displays output on a computer?",
       option1: "Keyboard", 
       option2: "Protocol", 
       option3: "Monitor", 
       option4: "Scanner", 
       answer: "3" },
    { question: "What is the process of finding and fixing errors in a program called?",
      ption1: "Hard Disk Drive", 
      option2: "GPU", 
      option3: "Printer",
       option4: "Debugging",
        answer: "4" },
    { question: "What is the name of the language that a computer can directly understand?",
       option1: "Machine code",
        option2: "Malware", 
        option3: "Program",
         option4: "Debugging", 
         answer: "1" },
    { question: "What is the term for a network of computers that are geographically close together?",
       option1: "Router", 
       option2: "PAN", 
       option3: "WAN",
        option4: "LAN",
        answer: "4" },
    { question: "What is the name of the first page of a website?",
       option1: "Data",
        option2: "Homepage", 
        option3: "Malware", 
        option4: "Texas", 
        answer: "2" },
    { question: "What is the name of the company that invented the integrated circuit?", 
      option1: "JSON", 
      option2: "Hardware",
       option3: "Texas Instruments",
        option4: "Texases", 
        answer: "3" },
    { question: "What is the term for software that manages computer resources?",
      option1: "Speakers",  
      option2: "Keyboard", 
      option3: "Printer", 
      option4: "Monitor", 
      answer: "2" },
    { question: "Who is the father of Computers?",
      option1: "James Gosling", 
      option2: "Charles Babbage", 
      option3: "Dennis Ritchie",
       option4: "Bjarne Stroustrup", 
       answer: "2" }
  ];

  let question = document.getElementById('question');
  let option1 = document.getElementById('option1');
  let option2 = document.getElementById('option2');
  let option3 = document.getElementById('option3');
  let option4 = document.getElementById('option4');
  let result = document.getElementById('result');

  let currentquestion = 0;
  let totalquestion = questions.length;
  let total = 0;
  let total_question=100;

  loadquestion(currentquestion);

  function loadquestion(index) {
    let data = questions[index];
     question.textContent = (index + 1) + ". " + data.question;
      option1.textContent = data.option1;
       option2.textContent = data.option2;
        option3.textContent = data.option3;
          option4.textContent = data.option4;

       let selected = document.querySelector('input[name="option"]:checked');
            if (selected) selected.checked = false;
    }

  function nextquestion() {
     let selected = document.querySelector('input[name="option"]:checked');
        if (!selected) {
           alert('Please Choose Some Option !!!');
          return;
      }

      if (questions[currentquestion].answer === selected.value) {
         total += 10;
     }  

    currentquestion++;
    if (currentquestion === totalquestion) {
      questions.textContent = "Quiz Completed!";
      option1.textContent = "";
      option2.textContent = null;
      option3.textContent = null;
      option4.textContent = null;

       result.style.display = "block";  
      result.value = "Your Score is: " + total+ " Out of" + total_question ;
    } else {
      loadquestion(currentquestion);
    }
  }

  function reset() {
    currentquestion = 0;
    total = 0;
       result.style.display = "none";  
    result.value = null;
    loadquestion(currentquestion);
  }


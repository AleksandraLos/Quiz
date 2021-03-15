var questions = [{
        prompt: "1) Vem fällde de bevingade orden `Tärningen är kastad`?\n (a) Julius Caesar\n (b)Sokrates\n (c)Aristoteles",
        answer: "a"
    },

    {
        prompt: "2) Hur många dagar är det på ett år?\n (A) 156 dagar\n (B) 456dagar\n (C)365dagar",
        answer: "c"
    },

    {
        prompt: "3) Hur många rutor finns det på en schackbräda? \n(a) 23\n (b) 64\n (c) 55",
        answer: "b"
    },

    {
        prompt: "4) Vad heter bakteriologen från Skottland som upptäckte penicillinet? \n(a) Albert Einstein\n (b) Thomas Edison\n (c) Alexander Flemming",
        answer: "c"
    }

]
var score = 0;


for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Rätt svar!");
    } else {
        alert("Fel!");
    }
}

alert("Du fick" + score + "/" + questions.length);
const poemLines = [
    "Nos caminhos sombrios da minha mente errante,",
    "Entre versos rasgados e o fogo dos desejos,",
    "Meus lábios sedentos buscam a verdade avassaladora,",
    "Na poesia maldita que queima em meu peito."
];

const poemLines1 = [
    "Oh, poesia! Serpente enlouquecida de palavras",
    "Sussurrando segredos em meus ouvidos",
    "Envenenando minha alma com seu veneno lírico",
    "Transformando - me em uma fera desvairada."
]

const poemLines2 = [
    "Os poetas malditos são meus irmãos de angústia",
    "Almas atormentadas pela sedução do abismo",
    "Nas páginas manchadas de sangue, encontramos consolo",
    "Pois só na escuridão profunda descobrimos a luz."
]

const poemLine3 = [
    "Oh, Rimbaud, poeta das terras desconhecidas",
    "Tuas palavras são facas afiadas no coração da razão",
    "Incendiando o mundo com tua rebeldia insana",
    "Trazendo à tona o grito selvagem da inspiração."
]

const poemLine4 = [
    "Em tuas linhas, encontro minha própria loucura",
    "No êxtase e na dor, no amor e no desespero",
    "Em cada verso amaldiçoado, encontro a minha voz",
    "Um eco dos abismos que habitam meu ser."
]

const poemLine5 = [
    "Então, queimem as convenções, desafiem as normas",
    "Deixem a poesia correr desenfreada em suas veias",
    "Pois só os malditos, os rebeldes, os inquietos",
    "Podem desvendar os segredos mais profundos da vida."
]

function captureScroll(poemText, query) {
    var poemContainer = document.querySelector(query);
    var linesToShow = 0;
    var currentLineIndex = 0;
    var currentText = '';
    var typingSpeed = 80;

    function typeText() {
        if (currentText.length < poemText[currentLineIndex].length) {
            currentText += poemText[currentLineIndex][currentText.length];
            poemContainer.textContent = getCurrentText();
            setTimeout(typeText, typingSpeed);
        } else {
            linesToShow++;
            currentLineIndex++;
            currentText = '';
            if (linesToShow < poemText.length) {
                setTimeout(typeText, typingSpeed);
            }
        }
    }

    function getCurrentText() {
        var text = '';
        for (var i = 0; i < linesToShow; i++) {
            text += poemText[i] + ' ';
        }
        text += currentText;
        return text;
    }

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
                typeText();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(poemContainer);
}





captureScroll(poemLines, '.poem');
captureScroll(poemLines1, '.poem1');
captureScroll(poemLines2, '.poem2');
captureScroll(poemLine3, '.poem3');
captureScroll(poemLine4, '.poem4');
captureScroll(poemLine5, '.poem5');

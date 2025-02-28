const citationForm = document.getElementById("citation-form");
const citationInput = document.getElementById("citation");
const authorInput = document.getElementById("author-name");
const submitButton = document.getElementById("submit-button");

/* ETAPE 4 */
//pk sur le formulaire et pas sur mon button submit? pardon j'ai paniqué, j'ai perdu 2h sur cette question et je n'ai toujours pas la réponse.
citationForm.addEventListener("click", () => { //si "submit", n'affiche rien dans le console.log, mais "click" affiche chaque clic
    const text = citationInput.value;
    const author = authorInput.value;
    
    console.log("citation : ",text, "auteur: ", author);
    /* console.log("citation: ", text)
    console.log("auteur: ", author); */
});




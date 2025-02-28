<!-- **Étape 2**

Pour permettre l’ajout de nouvelles citations, nous devons ajouter un formulaire. On part sous la ligne de séparation (`<hr>`).

On va donc créer un formulaire. Si vous n'êtes pas encore familiers avec les éléments listés ci-dessous, on va immédiatement faire un tour sur la doc du form! Elles sont généralement bien écrites et pleines d'exemples.

- Ajoutez une balise `<form>` contenant :
    - Un champ `<input>` pour saisir la citation
    - Un champ `<input>` pour saisir le nom de l’auteur ou de l’autrice
    - Un bouton `<button>` pour soumettre la citation
    - Ajoutez des `<label>` pour chaque champ afin d’améliorer l’accessibilité.
- Ajoutez des id aux champs pour pouvoir récupérer leurs valeurs en JavaScript.
- Ajoutez un id à la balise `<form>` pour pouvoir interagir avec elle depuis notre bon vieux JavaScript. -->

**Étape 3**
Avant de rendre l'ajout dynamique, nous allons créer une première citation directement dans le HTML pour structurer l'affichage et avoir une idée du rendu. Ce sera aussi l'occasion de mettre un peu de style.

<!-- - Ajoutez une `<div>` avec l'id `quote-list` qui contiendra toutes les citations. -->
- <!-- À l’intérieur, ajoutez une `<div>` avec la classe "quote". -->
<!-- - Dans cette `<div>`, ajoutez deux paragraphes :
    - Un `<p>` avec la classe `text`, contenant le texte de la citation.
    - Un `<p>` avec la classe `author`, contenant le nom de l’auteur ou de l’autrice. -->

<!-- Pour cette première citation, utilisez celle de Simone de Beauvoir :

```
Citation : "On ne naît pas femme, on le devient."

Autrice : Simone de Beauvoir
```

Notre page doit commencer à ressembler à quelque chose là :) -->

**Étape 4**

Les choses sérieuses commencent. Il est temps d’interagir avec notre page en JavaScript !

On passe donc sur notre ficher JS. Ajoutez un gestionnaire d’événement avec `addEventListener` sur le formulaire, n'hesitez pas à jeter un oeil à la documentation sur les forms ou les eventListener, c'est le moment ;).

Dans la fonction appelée lors de la soumission du formulaire :

- Récupérez les valeurs des champs `<input>` dans deux variables : text et author.
- Utilisez `console.log()` pour afficher ces valeurs et vérifier leur récupération.

**Étape 5**

Nous allons maintenant afficher les citations saisies directement sur la page.

- Créez une fonction `addQuote(quote, author)` prenant deux paramètres (quote et author, du coup).
- Dans cette fonction :
    - Créez un élément `<p>` pour la citation et attribuez-lui la classe "text".
    - Créez un élément `<p>` pour l’auteur/autrice et attribuez-lui la classe "author".
    - Insérez les valeurs des paramètres quote et author dans ces éléments.
    - Créez une `<div>` avec la classe "quote", puis ajoutez-y les deux paragraphes.
    - Récupérez l’élément ayant l’id "quote-list" et ajoutez-y la nouvelle citation avec `appendChild()`.
- Modifiez le gestionnaire d’événements du formulaire pour appeler `addQuote()` au lieu de simplement afficher les valeurs dans la console.

Besoin d'un coup de main ? Vous pouvez créer un élément en JS avec la fonction `document.createElement('div')`

**Étape 6**

Parce que c'est pas fini ! Notre compteur en haut, dans un `<h3>`, il affiche toujours zéro ! Pour mettre à jour cette valeur, il nous faut garder le compte du nombre de soumissions du formulaire. Ainsi :

- Créez une variable globale qui va détenir cette information. Appellez-la `quoteCount` par exemple. Initialisez-la à zero, donc.
- Incrémentez cette valeur dans la fonction d'ajout de quote (`addQuote`) avec un
 `quoteCount += 1`
- Dans le HTML, ajoutez un identifiant au h3 qui doit être mis à jour, donnez-lui l'identifiant `count`.
- Dans la fonction `addQuote`, recuperez ce `<h3>` avec un `getElementById` et remplacez son innerText avec la valeur de la variable `quoteCount`.

Et voilà, votre gestionnaire de citation est fonctionnel !

**[Bonus] Étape 7**

Cette étape est absolument **optionnelle**, elle aborde des notions que vous aurez peut-être croisé au cours de votre premier projet : les tableaux, le JSON, et le localStorage. On est donc totalement hors track, mais ce petit bonus va pouvoir permettre aux plus avancées d'entres vous de s'amuser un peu.

Dommage qu'à chaque fois qu'on ferme ou recharge la page, toutes les citations soient perdues. N'y aurait-il pas une manière d'avoir de la persistance sur ces citations ?

Ajoute une variable globale qui va pouvoir garder en mémoire les citations dans un tableau. Utilise une structure JSON pour les garder comme suit :

```
const citation = { author: "Simone de Beauvoir", text: "On ne naît pas femme, on le devient."}
```

Utilise ensuite le local storage pour stocker le contenu de cette variable. À l'affichage de la page, pensez à en charger aussi le contenu.
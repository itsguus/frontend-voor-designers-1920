# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen
Gemaakt door Guus Groenink.


## Gekozen use case
Als ik foto's zoek wil ik ze kunnen filteren op kleur om verassende zoekresultaten te krijgen die ik kan gebruiken voor mijn Visual Research.

## Stap 1 - Schetsen
Ik had deze case gekozen omdat ik op het moment dat ik het las al een idee had hoe ik dit in elkaar wilde zetten. Ik heb hier direct een schets van gemaakt. Iets wat hierop leek zie je hieronder in afbeelding 1:

### Afbeelding 1 - Eerste schets
![alt text][img1]
 
Ik had dit geschetst terwijl ik eigenlijk iets anders in mijn hoofd had. Ik hoorde dat iemand anders 3 tafels verderop een soortgelijk idee had als wat ik had en dat dit door de studentassistent werd afgeraden omdat het heel lang zou duren.

Nu kan ik best een eigenwijs persoon zijn dus had ik de schets op afbeelding 1 een beetje aangepast en geannoteerd op een manier waarop mijn ontwerp wat spannender en leuker te maken zou zijn. Deze is weergegeven in afbeelding 2.

### Afbeelding 2 - Tweede schets
![alt text][img2]

Het was mijn idee om een aantal foto's te uploaden via HTML en deze te laten scannen door een API die "Vibrant" heet. Deze API haalt de meest voorkomende kleuren uit een foto. Ik had gekeken naar de syntax van Vibrant en hoe deze te gebruiken is. Nadat ik dit had gedaan had ik er wel vertrouwen in dat ik dit kon maken.

## Stap 2 - De bouwstenen maken in code
Ik begon met een "Mobile" canvas. Dit was een blok die ik met een vaste width en height verticaal en horizontaal gecentreerd had. Dit had ik gedaan zodat ik geen gezeik kreeg met responsiveness, de Javascript stond bij dit project bij mij nog centraal. Op deze canvas had ik 4 inputs met 4 labels neergezet. Hieronder stond een search button. Deze kon je allemaal schuiven en klikken maar er gebeurde nog niks. Het staat weergegeven op afbeelding 3.

### Afbeelding 3 - De eerste bouwstenen in HTML/CSS
![alt text][img3]

Nu de basis er stond in HTML/CSS kon ik met Javascript zorgen dat de sliders 'geupdate' werden als je hier aan zat. Ik heb met eventlisteners "change" gezorgd dat zowel de kleurcodes als de sliders van waarde veranderde als deze aangepast werden. Omdat elke input twee 'controls' heeft was het belangrijk om deze aan elkaar te linken via javascript. Ik heb nu dus de waardes waartussen de gewenste moeten zitten in mijn js code zitten (weliswaar onberekend). Deze stap zie je in afbeelding 4.

### Afbeelding 4 - Controls aan elkaar gelinkt via JS.
![alt text][img4]

Vanaf deze stap ben ik enorm aan het kloten geweest. Ik kreeg Vibrant niet aan de praat en de 5 andere API's die erop leken ook niet. Het bleek dat Vibrant de images niet kon laden omdat zij niet vanaf dezelfde parent node kwamen. Dit kwam omdat ik lokaal op mijn mac via Brackets zat te coderen. 

Ik had dit op kunnen lossen door telkens mijn code naar git te pushen totdat het zou werken. Ik heb uiteindelijk gekozen om handmatig 3 kleuren per geuploadde foto in een array te zetten in js. Dit heb ik gedaan omdat het 'verwerken' van de gekozen kleuren nog niet af was en mijn codeerproces met het pushen naar git een stuk langer ging duren.

Ik heb veel zitten debuggen omdat de code nog niet in 1x werkte. Ik had in mijn console een hoop logs staan om te kijken wat er in de browser precies berekend werd. Een voorbeeld hiervan is in afbeelding 5. Er gebeurde al wel wat. Op sommige waardes kreeg ik een afbeelding te zien als ik op search drukte. Ik had alleen het gevoel dat dit nog niet helemaal klopte.

### Afbeelding 5 - Debuggen in de console.
![alt text][img5]

## Stap 3 - Verfijnen & Afronden

Om een beter beeld te krijgen wat er gebeurde met de waardes van de kleuren heb ik 3 indicatie boxes gemaakt. In de middelste zit de gekozen kleur, in de linker zit de minimale RGB en rechts de maximale RGB. Ik had dit idee sowieso al bedacht om te voldoen aan zowel begrip [4&11](http://bokardo.com/principles-of-user-interface-design/). Deze kleurboxes bleken ook heel handig bij het debuggen. 

Ik zag dat de kleuren soms rare sprongen maakte. Ik kwam erachter dat dit was omdat ik telkens heen en weer zat te rekenen van HEXcode naar 0-255. Als ik vervolgens terugrekende lieten HEX codes die begonnen met '0' deze nul weg. Hierdoor kreeg ik RGB codes van 5 tekens lang. Hierdoor werden de gevonden foto's ook niet van toepassing. Met wat javascript en een `if` heb ik dit opgelost. Het totaalplaatje begint al wel ergens op te lijken. 

Ook heb ik hier de range sliders laten updaten per stap in plaats van als je hem los laat. Dit heb ik gedaan door de eventlistener te laten luisteren naar 'input' in plaats van 'change'.

### Afbeelding 6 - Einde in zicht, colorboxes als indicator toegevoegd. 
![alt text][img6]

Alle errors zijn hierna uit de code gehaald. Ik heb nog een klein beetje CSS veranderd voor de visuals. Mijn projectje werkt volledig. Wanneer op de search knop wordt gedrukt komen de afbeelding die binnen de range vallen tevoorschijn. Zie afbeelding 7.

### Afbeelding 7 - Alles werkt, maar het is nog net niet af.
![alt text][img7]

Toch was ik nog niet helemaal blij. Ik had de searchknop gemaakt met een input button in HTML. Ik kreeg deze maar niet groter met width height of padding. Dus deze heb ik de deur uit gegooid. Ik heb een div box gemaakt die ik mooi kon stijlen en hier een click cursor op gezet, een :hover op gezet en een :active op gezet. Deze is uiteindelijk mooi gelukt.

Het programmatje is nu zo gecodeerd dat je de eerste keer een kleur in kan stellen met ranges die je wilt. Als je op search drukt en er zijn resultaten komt er een h1 tevoorschijn met "Image Results:" en alle resultaten hieronder. Nadat je hebt gezocht wordt elke aanpassing in de kleurcode of range sliders live geupdate met de foto's die in de range vallen. Het [eindresultaat](https://itsguus.github.io/frontend-voor-designers-1920/opdracht1/) staat in afbeelding 8. 



### Afbeelding 8 - Eindresultaat.
![alt text][img8]




[img1]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht1/md_img_opdr1/img_1.png
 "Image 1"
[img2]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht1/md_img_opdr1/img_2.png
 "Image 2"
[img3]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht1/md_img_opdr1/img_3.png
 "Image 3"
[img4]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht1/md_img_opdr1/img_4.png
 "Image 4"
[img5]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht1/md_img_opdr1/img_5.png
 "Image 5"
[img6]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht1/md_img_opdr1/img_6.png
 "Image 6"
[img7]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht1/md_img_opdr1/img_7.png
 "Image 7"
[img8]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht1/md_img_opdr1/img_8.png
 "Image 8"

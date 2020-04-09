# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data
[Link](https://itsguus.github.io/frontend-voor-designers-1920/opdracht3/).  Gemaakt door Guus Groenink.


## Gekozen use case
Ik heb bedacht om zelf wat te gaan maken. Er zijn allerlei leuke API's beschikbaar en hier ben ik een beetje in gaan rondneuzen. Uiteindelijk kwam ik bij een API die per land informatie gaf over de CoVID-19 crisis. Aangezien ik in quarantaine zit leek mij het leuk om hier iets mee te gaan doen. Ik heb uiteindelijk niet heel veel data die ik nu uit de API laad, maar het is iedere dag wel een ander spelletje. 

## Stap 1 - Schetsen
Ik wilde het graag over Nederland doen. Hier heb ik mijn idee even snel op papier gezet.

### Afbeelding 1 - Eerste schets
![alt text][img1]
 


## Stap 2 - Coderen
Ik begon met een canvas. Dit was een blok die ik met een vaste width en height verticaal en horizontaal gecentreerd had. Dit had ik gedaan zodat ik geen gezeik kreeg met responsiveness. Ik heb gekozen voor een "half screen" canvas. Zo kon ik makkelijk werken met brackets op de linkerhelft en chrome op de rechter.  Ik begon hier met een lege browser met enkel de datum en API's die ik in moest laden. Het was nog even wat gezeik hoe ik het juiste land moest selecteren maar dat is uiteindelijk gelukt. 

### Afbeelding 2 - Datum & API's laten werken

![alt text][img2]

Ik moest nu bedenken hoe ik ging groeien. Ik wilde heel graag het ding maken met exponentiele groei. Omdat het over een virus gaat vond ik dat belangrijk voor mijn concept. Dit heeft wel voor wat kwartiertjes hoofdpijn gezorgd terwijl ik bezig was met ellendige wiskunde formules om de tijd juist te krijgen. Ik had dit oorspronkelijk gelinkt met een animatie die exponentiele groei veinsde. Toen de wiskunde eenmaal klopte leek het wel te werken. De rode bolletjes ofwel "Nodes" groeide tegelijk met het aantal confirmed cases.

### Afbeelding 3 - De "Nodes"
![alt text][img3]

Hierna ging ik aan de slag met de knoppen. Omdat het nog een wiskundige formule en een animatie was die geen enkele relatie met elkaar hadden, was het veel hoofdpijn om dit te finetunen. Toen ik eenmaal klaar was en het klopte, bedacht ik me dat ik me in mijn voet had geschoten. Omdat ik iedere dag begin met een ander dynamisch getal van de API, waren mijn cijfers dus mis. Shit. Hier heb ik ook twee knoppen gemaakt, F & J. De ene stopte de animatie en teller, en de andere liet hem doorgaan. 

### Afbeelding 4 - Iedereen besmet, F & J knoppen.
![alt text][img4]

Nu viel er een belangrijk kwartje. Ik heb uiteindelijk de CSS animatie laten vallen. In plaats daarvan heb ik de transform: scale met JS opgelost. Met wat wiskunde is het gelukt om de groei van de nodes in relatie met het aantal confirmed cases te linken. Dit klopte nu dus altijd. Nice.

Nu was het dus ook makkelijker om knoppen te maken die de mate van de groei beinvloedde. Dit is me gelukt en ik had nu twee dingen: Stay home (geeft de groei -5) en Go Party (geeft de groei +15). Dit heb ik expres gedaan om een simulatie te maken van de huidige pandemie. Het idee was dat gaan feesten de boel drie keer zoveel verpestte dan het goede wat je doet door thuis te blijven. 

Hierna ging ik verder aan een startscherm. Ik wilde een kleine inleiding maken die vertelt wat je moet doen. Oorspronkelijk had ik een heel verhaal getypt. Toen ik klaar was met typen wist ik eigenlijk meteen al dat ik het om ging gooien. 

### Afbeelding 5 - Startscherm in tekst.
![alt text][img5]

Ik had hierna ook een eindscherm gemaakt die een dynamische tekst teruggaf afhankelijk van hoe lang het heeft geduurd voordat heel het land besmet raakte.

### Afbeelding 6 - Eindscherm.
![alt text][img6]


## Stap 3 - Verfijnen & Afronden

Ik wilde nu nog een aantal dingen veranderen. Het startscherm had teveel tekst en deze heb ik zitten chunken en een animatietje toegevoegd. In de foto hieronder laat ik zien hoe ik vaak aan het debuggen ben in CSS, lekker met verschillende achtergrondkleurtjes.

### Afbeelding 7 - Het nieuwe startscherm  - Debug 
![alt text][img7]

En hieronder het startscherm zonder rare kleuren.

### Afbeelding 8 - Het nieuwe startscherm.
![alt text][img8]

Bij het eindscherm vond ik het leuk om nog een "Go again" knop te maken. Dit zorgde ervoor dat de users in control blijven. Zonder dit was de webpagina 'afgelopen' en kon je nergens meer heen. 

### Afbeelding 9 - Het nieuwe eindscherm.
![alt text][img9]

Nadat dit klaar was heb ik de vormgeving van de main attraction gedaan. De toetsenbordknoppen zijn nu omringd door knoppen dat je ook met je muis kan spelen. Alles werkt nu.

### Afbeelding 10 - Eindresultaat.
![alt text][img10]

## Stap 4 - Princples of User Interface Design
### 04 Keep users in control
Op elk scherm die ik heb geef ik de controle volledig aan de gebruiker. In het eerste scherm vertel ik met tekst en laat ik visueel zien wat er moet gebeuren om het 'spel' te spelen. Hierna staan de knoppen duidelijk onderin met de tekst er nog bij. Alle knoppen zijn zowel met keyboard-toetsen als met de muis klikbaar.

### 08 Provide a natural next step
Mijn concept heeft drie fases. Het startscherm, het spelscherm en het eindscherm. Alle stappen volgen elkaar op met easy-on-the-eyes transitions en op het einde krijg je een prompt of je opnieuw wilt proberen.

### 09 Appearance follows behaviour
De knoppen zijn dusdanig visueel dat het duidelijk is dat het een toetsenbord knop is. Ook zijn de divs eromheen vormgegeven met een schaduw en geeft een :hover een andere kleur. 

Door deze manier van vormgeving zien de elementen er ook uit hoe ze zich gedragen. De animaties in het begin laten ook zien dat de spatie 1 keer ingedrukt moet worden om te beginnen. De S en de P knop moeten echter repeatedly getapt worden. Als je nergens op drukt neemt de exponentiele groei steeds weer toe.

### 11 Strong visual hierarchies work best
Nederland is volledig in beeld tijdens de spelfase. De rode Nodes beginnen als niks maar groeien sneller en sneller. De knoppen zie je hierna als eerst. Met de knoppen beinvloed je de rode vlakte. Dat is eigenlijk alles wat ik de gebruiker wil laten zien en dat is ook het meest prominent in beeld.



[img1]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht3/md_img_opdr3/img000.jpg
 "Image 1"
[img2]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht3/md_img_opdr3/img001.png
 "Image 2"
[img3]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht3/md_img_opdr3/img002.png
 "Image 3"
[img4]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht3/md_img_opdr3/img003.png
 "Image 4"
[img5]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht3/md_img_opdr3/img004.png
 "Image 5"
[img6]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht3/md_img_opdr3/img005.png
 "Image 6"
[img7]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht3/md_img_opdr3/img006.png
 "Image 7"
[img8]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht3/md_img_opdr3/img007.png
 "Image 8"
 [img9]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht3/md_img_opdr3/img008.png
 "Image 9"
 
 [img10]:https://raw.githubusercontent.com/itsguus/frontend-voor-designers-1920/master/opdracht3/md_img_opdr3/img009.png
 "Image 10"




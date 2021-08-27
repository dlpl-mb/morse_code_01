
## Geheimzeichen: Das Morse-Alphabet I
**Hallo, ich bin Robi und werde dich beim Programmieren mit micro:bit begleiten.**

<img width="20%" src="https://github.com/dlpl-mb/morse_code_01/blob/master/images/robi_klein.png?raw=1">

Wir werden uns nun einen Geheimsprache ansehen - das ** Morse-Alphabet **. Es diente jahrzehntelang zum Übertragen von Nachrichten und wurde inzwischen in vielen Bereichen von technisch aufwendigen Verfahren abgelöst.
Inzwischen gibt es unzählige Codes, die sogar noch zusätzlich verschlüsselt werden, damit beispielswiese Geldüberweisungen oder auch militärische Informationen sicherer übermittelt werden können.
Du wirst nun diese wichtige Morsealphabet kennenlernen.

## Die Zeichen des Morsealphabets
Die Morsezeichen kann man optisch (Bildern) oder akustisch (Ton) oder auch über elektrische Leitungen übermitteln. Wichtig ist dabei, dass jeder Buchstabe, jede Ziffer genau einem Code entspricht.

<img width="50%" src="https://github.com/dlpl-mb/morse_code_01/blob/master/images/morse-tab.png?raw=1">

* Wie du aus der Tabelle siehst haben Morsezeichen nur den **Punkte** und den **Striche**. Jeder Buchstabe hat einen bestimmte Kombination von Punkten und Strichen.
* Schreib dir die Buchsstaben ersten ** A bis G ** auf ein Blatt Papier heraus: **Buchstabe** und **Code**
* Beim Übertragen werden zwischen den Buchstaben immer eine kurze Pausenm gemacht, damit der Empfänger weiß, dass nun ein neues Zeichen beginnt.
* Meine Frage an dich: Welcher Buchstabe ist das? -.. oder dieser Buchstabe . 

## Programm 1: Codes anzeigen 

Du baust nun für dem BBC micro:bit ein erstes Programm zum Zeigen der Morse-Codes für A bis G. 

**Die Aufgaben lautet:**

* Taste A des micro:bit zeigt die Buchstaben A bis G (Später nehmen wir alle anderen Buchstaben dazu.)
* Taste B zeigt die Morse-Codes für diese Zeichen an 
* Später wirst du dein Programm so ausgebauen, dass du Codes zu anderen micro:bits übertragen und somit Anderen senden kann.
* Probiere das gleich mit dem Button "Dreieck" aus:
<img width="20%" src="https://github.com/dlpl-mb/morse_code_01/blob/master/images/dreieck.png?raw=1">

```blocks
input.onButtonPressed(Button.A, () => { 
    basic.showString("A");
});

input.onButtonPressed(Button.B, () => { 
    basic.showString(".-");
});
```
* Schreib nun im Programmeditor (Button **Blöcke**) die kurzen Programme für die anderen Buchstaben B bis G.

## Programm 2: Alle sechs Buchstaben in ein Programm

Zugegeben: Das war ganz schön aufwändig, für jeden Buchstaben immer ein eigenes Programm zu schreiben.
Wir packen nun alles 7 Buchstaben in ein Programm:
* Wir müssen alle sieben Buchtaben in eine Liste hinein bringen
* Dazu gibt es einen besonderen Variablentyp **Array** oder **Liste** 
* Wähle unter Fortgeschritten **Arrays** und dort setze List ...
  ``||array:let buchstabenliste = ["A", "B"]||``
* Wir benötigen eine Schleife von 1 bis 7

Dieses Bild zeigt den Blockcode vom letzten Commit im Master 

an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

```blocks
input.onButtonPressed(Button.A, () => { 
    basic.showString("A");
});

input.onButtonPressed(Button.B, () => { 
    basic.showString(".-");
});
```
```blocks
input.onButtonPressed(Button.B, () => { 
    basic.showString(".-");
});
```


![Eine gerenderte Ansicht der Blöcke](https://github.com/dlpl-mb/morse_code_01/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

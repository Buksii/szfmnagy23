
# COVID-19 Adat Előrejelző Rendszer Terve

## Bevezetés

A COVID-19 Adat Előrejelző Rendszer célja, hogy pár napos előrejelzést készitsen az olasz hatóságok által közzétett COVID-19 járványstatisztikai adatok alapján, különböző statisztikai modellek segítségével. A rendszer képes letölteni és feldolgozni a friss COVID-19 adatokat, majd előrejelzéseket készíteni a jövőbeli esetszámokra, intenziv osztályos betegek számra, és egyéb metrikákra, a trendeket grafikonon szemléltetve .

## Rendszer Komponensei

A rendszer több komponensből áll, amelyek összefűzik a feldolgozást és az előrejelzéseket:

1. **Adatgyűjtő Komponens**:
   - Letölti az olasz COVID-19 adatokat az Italian Civil Protection weboldaláról.
   - A letöltött adatokat egy CSV fájlba menti a további feldolgozáshoz.


2. **Előrejelző Modellek**:
   - A rendszer különböző statisztikai modelleket használ az előrejelzések készítéséhez.
   - Jelenleg három fő modell van implementálva: általános esetszámokra, napi új esetszámokra és napi intenzív kezelést igénylő betegekre.
   - Modellek: lineáris regresszió polinomiális változataival dolgoznak.

3. **Adatelemző és előrejelző Algoritmusok**:
   - Az adatelemző algoritmusok előkészítik az adatokat az előrejelzésekhez.
   - Az előrejelző algoritmusok végzik az előrejelzéseket a felkészített adatok alapján.

4. **Grafikus Megjelenítés**:
   - A rendszer grafikusan megjeleníti a valós esetszámokat és az előrejelzéseket egy grafikonon.
   - A grafikus megjelenítés lehetővé teszi a felhasználók számára a COVID-19 adatok vizuális elemzését.

5. **Mentés és Visszatöltés**:
   - A rendszer lehetővé teszi a korábbi előrejelzések mentését és visszatöltését.
   - A mentett előrejelzések segítik az adatok követését és összehasonlítását.

## Excel és PowerBI
- A Microsoft Excel és a Microsoft PowerBI Desktop alkalmazásokat is felhasználtuk a gráfok elkészítésére
- A Office és Business szoftverek segítettek a szoftverünk ellenőrzésében és a szebb, egyszerűbb gráfolásban

## Üzleti folyamat

![](https://github.com/Buksii/szfmnagy23/blob/main/Project_Structure/img/Üzleti%20terv.png)

## Működési Folyamat

A COVID-19 Adat Előrejelző Rendszer működése a következő lépésekből áll:

1. **Adat Letöltése**:
   - A rendszer letölti az olasz COVID-19 adatokat az Italian Civil Protection weboldalról.

2. **Adatfeldolgozás**:
   - Az adatelemző algoritmusok előkészítik az adatokat az előrejelzésekhez.
   - Az adatelemző algoritmusok különböző metrikákat számolnak a COVID-19 adatok alapján.

3. **Előrejelzések Készítése**:
   - Az előrejelző modellek és algoritmusok előrejelzéseket készítenek az elérhető adatok alapján.
   - Előrejelzések készülnek az összes fontos metrikára, mint például összes esetszám, új esetszám és napi intenzív kezelést igénylő betegek száma.

4. **Grafikus Megjelenítés**:
   - A rendszer grafikusan megjeleníti a valós esetszámokat és az előrejelzéseket egy grafikonon.
   - A grafikon lehetővé teszi a felhasználók számára a COVID-19 adatok vizuális elemzését.

5. **Előrejelzések Mentése**:
   - Az előrejelzések mentésre kerülnek a további használat céljából.

6. **Korábbi Előrejelzések Visszatöltése**:
   - A rendszer lehetővé teszi a korábbi előrejelzések visszatöltését és összehasonlítását az aktuális adatokkal.

### Fizikai környezet
 #### Felhasználói környezet:
 Az alkalmazás Web-re lett fejlesztve, eléréséhez frissített böngészőt (Stabil verzió) kell használni. 
 #### Fejlesztői környezet:
 - Pycharm
 - Visual Studio
 - Visual Studio Code
 #### Ábrák
 - Lucidcharts 
 - Paint
 #### Kommunikáció
 - Discord
 - Messenger
 - Trello
 - In-Person meeting
 #### Verziókezelés
 - GitHub
 #### Egyéb használt szoftverek
 - Microsoft Word
 - Gmail

### Bootstrap használata a Felhasználói Interfész fejlesztésében

Az alkalmazás felhasználói interfészének fejlesztése során a Bootstrap keretrendszert alkalmazzuk az alábbi módon:

- HTML és CSS: Bootstrap beillesztése a projektünk HTML és CSS fájljaiba egyszerű. Az előre elkészített CSS osztályokat és komponenseket egyszerűen hozzáadhatjuk az HTML elemekhez, így könnyen formázhatjuk azokat.

- Responszív design: Bootstrap segítségével könnyen kialakíthatjuk az alkalmazásunk responszív designját. Az osztályok, például a "container" és a "row", lehetővé teszik a tartalom elrendezését különböző kijelzőméretekre.

- Komponensek: Bootstrap számos előre elkészített komponenst kínál, mint például gombok, űrlapok, navigációs menük és modálok. Ezeket könnyen használhatjuk az alkalmazásunkban, és testreszabhatjuk őket az igényeink szerint.

- JavaScript komponensek: Bootstrap tartalmaz olyan JavaScript alapú komponenseket is, mint például üzenetablakok és húzható-csempék. Ezekkel az interakciókkal gazdagíthatjuk az alkalmazásunkat.

- Testreszabhatóság: Bár Bootstrap előre elkészített stílusokat kínál, könnyen testre szabhatjuk azokat a saját design elképzeléseink szerint. Ezt saját CSS stílusok hozzáadásával vagy az alap stílusok felülírásával tehetjük meg.

## Felhasználás

A COVID-19 Adat Előrejelző Rendszer felhasználható a COVID-19 adatok elemzésére, előrejelzésekre és követésre. A rendszer segít az adatok vizuális megjelenítésében és az előrejelzések készítésében az olasz COVID-19 járvány alakulására vonatkozóan.

## Böngészők és Platformok Támogatása
Az alkalmazás fejlesztése során a Google Chrome böngészőt használunk mint a fő fejlesztői platform. Azonban fontos, hogy az alkalmazás több böngészőben is megfelelően működjön, például Firefox, Safari és Edge. Az alkalmazás reszponzív dizájnt használ, így különböző eszközökön, például asztali számítógépeken, laptopokon, tableteken és mobiltelefonokon is jól működjön.

## Mobilalkalmazás Támogatás
Az alkalmazásnak lehetőséget kell biztosítania a mobilalkalmazásokhoz történő konverzióhoz, hogy a felhasználók különböző platformokon is élvezhessék a játékot. A mobilalkalmazásoknak is támogatniuk kell az előzően említett funkciókat és elvárásokat.

## Deployment
Az alkalmazás telepítésére és üzemeltetésére fontos figyelmet fordítani. Az alkalmazást szerveren (LOCALHOST) kell hostolni, és gondoskodni kell a szükséges infrastruktúra és környezet beállításáról. A telepítés során az adatbázis konfigurációját is be kell állítani, és gondoskodni kell a biztonsági intézkedésekről, például tűzfalakról és hozzáférési jogosultságokról.

## Következtetés

A COVID-19 Adat Előrejelző Rendszer egy erőforrás az adatok elemzéséhez és az előrejelzésekhez a járvány alakulásának követésére. A rendszer rugalmas és bővíthető, és lehetőséget nyújt a COVID-19 adatok elemzésére és a járvány alakulásának nyomon követésére az olaszországi eseményekkel kapcsolatban.

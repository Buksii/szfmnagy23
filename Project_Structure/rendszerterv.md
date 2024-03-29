
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

A COVID-19 Adat Előrejelző Rendszer kiváló eszköz a járványügyi adatok részletes elemzésére és hatékony követésére. Az rendszer által biztosított adatok segítségével a felhasználók részletes betekintést nyerhetnek az olasz COVID-19 járvány dinamikájába. Az interaktív grafikonok és térképek lehetővé teszik az adatok vizuális megjelenítését, segítve ezzel a felhasználókat abban, hogy könnyen értelmezhessék az információkat.

Az előrejelző funkciók révén a rendszer lehetőséget kínál az előzetes becslésekre és trendek elemzésére. Ezáltal a felhasználók képesek lehetnek a járvány alakulásának előrejelzésére, ami segíthet a kormányzati döntéshozóknak és az egészségügyi szakembereknek a megfelelő intézkedések meghozatalában.

A rendszer használata intuitív és felhasználóbarát, így nemcsak szakemberek, hanem a nagyközönség is könnyen tájékozódhat az aktuális helyzetről és a várható fejleményekről. Az adatok naprakészen kerülnek frissítésre, biztosítva a felhasználók számára a legaktuálisabb információkat.

Ezen túlmenően a rendszer segítséget nyújt az epidemiológusoknak és kutatóknak az adatok mélyebb elemzésében, aminek révén új összefüggéseket és mintázatokat fedezhetnek fel, amelyek további információkat szolgáltathatnak a járvány terjedésével kapcsolatban.

Összességében a COVID-19 Adat Előrejelző Rendszer egy hatékony eszköz a járványügyi adatok feldolgozására és értelmezésére, segítve a társadalmat a helyes döntések meghozatalában és a járvány hatékonyabb kezelésében.

## Böngészők és Platformok Támogatása
Az alkalmazás fejlesztése során a Google Chrome böngészőt használunk mint a fő fejlesztői platform. Azonban fontos, hogy az alkalmazás több böngészőben is megfelelően működjön, például Firefox, Safari és Edge. Az alkalmazás reszponzív dizájnt használ, így különböző eszközökön, például asztali számítógépeken, laptopokon, tableteken és mobiltelefonokon is jól működjön.

Az alkalmazás tervezése és fejlesztése során kiemelt figyelmet fordítottunk a böngészők és platformok támogatására, hogy a felhasználók minél szélesebb körben érhessék el és használhassák az alkalmazást.

Böngészők támogatása terén az alkalmazás teljes körű funkcionalitást biztosít a Google Chrome mellett más népszerű böngészőkben is, beleértve a Firefoxot, Safarit és Edge-t. Ennek révén a felhasználók szabadon választhatnak a preferált böngészőjük használatában, anélkül, hogy kompromisszumokat kellene kötniük az alkalmazás teljesítményében.

Az alkalmazás reszponzív dizájnjának köszönhetően a felhasználók számára optimális élményt biztosítunk különböző eszközökön. Legyen szó asztali számítógépről, laptopról, tablet-ről vagy mobiltelefonról, az alkalmazás megfelelően alkalmazkodik a kijelző méretéhez és felbontásához, így biztosítva a felhasználóbarát és könnyen kezelhető felhasználói élményt minden eszközön.

Ezen rugalmasság révén az alkalmazás használata zavartalan és kényelmes minden felhasználó számára, és lehetővé teszi számukra, hogy a kiválasztott eszköz és böngésző kombinációval szabadon navigáljanak és élvezhessék az alkalmazás minden funkcióját.

## Mobilalkalmazás Támogatás

Az alkalmazásnak lehetőséget kell biztosítania a mobilalkalmazásokhoz történő konverzióhoz, hogy a felhasználók különböző platformokon is élvezhessék a játékot. A mobilalkalmazásoknak is támogatniuk kell az előzően említett funkciókat és elvárásokat.

### Főbb Elemek:

1. **Mobilplatformok támogatása:**
   - Biztosítani a konverziót olyan mobilalkalmazásokra, mint Android és iOS.
   - Az alkalmazásnak alkalmazkodnia kell a kisebb kijelzőkhöz és a mobil felhasználói élményhez.

2. **Funkcionális egységesítés:**
   - A mobilalkalmazásnak ugyanazokat a funkcionalitásokat kell támogatnia, mint a webes változat.
   - Azonos játékmenet, adatok elemzése és előrejelzések álljanak rendelkezésre a mobil alkalmazásokban is.

3. **Vizuális összhang:**
   - A mobilalkalmazásoknak az alkalmazás szellemiségével és dizájnélményével összhangban kell lenniük.
   - Biztosítani, hogy az alkalmazás hasonló vizuális élményt nyújtson minden platformon.

4. **Felhasználói Élmény Optimalizálása:**
   - A mobilalkalmazásoknak a kisebb érintőképernyőkre optimalizált felhasználói felülettel kell rendelkezniük.
   - Az érintésvezérlés, a gyors reakcióidő és az egyszerű navigáció kulcsfontosságú elemek a mobil felhasználói élmény szempontjából.

5. **Offline Funkciók:**
   - Lehetővé tenni a felhasználók számára, hogy bizonyos funkciókat offline módban is használhassanak.
   - Például az előző adatok letöltése vagy az offline előrejelzések elérhetősége.

Az ilyen módon kialakított mobilalkalmazások lehetővé teszik a felhasználók számára, hogy rugalmasan élvezhessék az alkalmazást különböző eszközökön, függetlenül attól, hogy éppen asztali számítógépen, laptopon vagy mobiltelefonon használják.

## Deployment

Az alkalmazás telepítésére és üzemeltetésére fontos figyelmet fordítani. Az alkalmazást szerveren (LOCALHOST) kell hostolni, és gondoskodni kell a szükséges infrastruktúra és környezet beállításáról. A telepítés során az adatbázis konfigurációját is be kell állítani, és gondoskodni kell a biztonsági intézkedésekről, például tűzfalakról és hozzáférési jogosultságokról.

### Telepítés Folyamata:

1. **Szerver Konfiguráció:**
   - Ellenőrizni, hogy a szerver megfelelően konfigurált-e az alkalmazás követelményeinek.
   - Telepíteni a szükséges szoftvereket és szolgáltatásokat, mint például a web szerver (pl., Apache vagy Nginx) és a szükséges futtató környezetek.

2. **Alkalmazás Feltöltése:**
   - Feltenni az alkalmazás fájljait a szerverre. Biztosítani, hogy a szükséges fájlok és könyvtárak rendelkezésre álljanak.

3. **Környezeti Beállítások:**
   - Konfigurálni az alkalmazás környezeti beállításait, például a fejlesztői és termelési környezetekhez szükséges paramétereket.

4. **Adatbázis Konfiguráció:**
   - Beállítani az alkalmazás adatbázisát, beleértve az adatbázis típusát, elérési útvonalát, felhasználói nevet és jelszót.

5. **Biztonsági Intézkedések:**
   - Aktiválni tűzfalakat és más biztonsági intézkedéseket a szerveren és az alkalmazáson belül.
   - Gondoskodni a titkosításról (SSL/TLS) az adatok védelme érdekében.

6. **Folyamatos Ellenőrzés és Karbantartás:**
   - Folyamatosan ellenőrizni az alkalmazás állapotát és teljesítményét.
   - Végezni időszakos karbantartásokat, frissítéseket és biztonsági ellenőrzéseket.

7. **Logolás és Monitorozás:**
   - Beállítani logolási mechanizmusokat a hibák és figyelmeztetések rögzítésére.
   - Monitorozni az alkalmazás teljesítményét és rendszeres erőforrásfelhasználását.

Az alkalmazás telepítése során a fenti lépésekre való figyelem és gondosság segít biztosítani az alkalmazás stabil és biztonságos üzemeltetését.

## Következtetés

A COVID-19 Adat Előrejelző Rendszer egy erőforrás az adatok elemzéséhez és az előrejelzésekhez a járvány alakulásának követésére. A rendszer rugalmas és bővíthető, és lehetőséget nyújt a COVID-19 adatok elemzésére és a járvány alakulásának nyomon követésére az olaszországi eseményekkel kapcsolatban.

### Főbb Jellemzők:

1. **Adatok Elemzése és Vizuális Megjelenítés:**
   - Az alkalmazás lehetővé teszi a COVID-19 adatok részletes elemzését és vizuális megjelenítését, így könnyen átláthatóvá válik a járvány alakulása.

2. **Előrejelzések Készítése:**
   - A rendszer előrejelzéseket készít az olaszországi COVID-19 járvány alakulására vonatkozóan, segítve ezzel a jövőbeli tendenciák és kockázatok felismerését.

3. **Rugalmas és Bővíthető Rendszer:**
   - Az alkalmazás rugalmas és könnyen bővíthető, lehetővé téve a további fejlesztéseket és új funkciók hozzáadását a rendszerhez.

4. **Felhasználóbarát Felület:**
   - Az alkalmazás felhasználóbarát felülettel rendelkezik, amely lehetővé teszi a felhasználók számára egyszerű és hatékony használatot.

5. **Mobilalkalmazás Támogatás:**
   - Az alkalmazás lehetőséget biztosít a mobilalkalmazásokhoz történő konverzióra, lehetővé téve a felhasználók számára a különböző platformokon történő használatot.

A COVID-19 Adat Előrejelző Rendszer egy olyan eszköz, amely hozzájárul a járvány alakulásának jobb megértéséhez és az intézkedések meghozatalához az olaszországi események kezelése során. A rendszer folyamatos fejlesztése és karbantartása kulcsfontosságú a releváns és naprakész információk nyújtásához.
# Funkcionális specifikáció

## Rendszer Áttekintése

A COVID-19 Adat Előrejelző Rendszer továbbfejlesztett funkcionalitással rendelkezik, melynek célja a felhasználók számára még komplexebb adatelemzési és előrejelzési lehetőségek biztosítása. A rendszer alkalmazkodó és rugalmas, lehetőséget teremtve az automatizált adatfrissítésre, részletes előrejelzésekre különböző régiókra vonatkozóan, és egy továbbfejlesztett felhasználói interfészre a jobb kezelhetőség érdekében.

### Rendszerkomponensek

- **Adatgyűjtő Komponens**: Ez a komponens felelős a COVID-19 adatok letöltéséért az Italian Civil Protection weboldaláról. Az adatokat rendszeresen frissíti, és egy CSV fájlba menti, biztosítva a további feldolgozás lehetőségét.

- **Előrejelző Modellek**: Ez a komponens különböző statisztikai modellek segítségével előrejelzéseket készít az elérhető COVID-19 adatokra. Magában foglalja az általános esetszámokra, napi új esetszámokra és napi intenzív kezelést igénylő betegekre vonatkozó modelleket.

- **Adatelemző és Előrejelző Algoritmusok**: Adatalemző algoritmusok előkészítik az adatokat az előrejelzésekhez, például kiszámolják a napi új esetszámokat és egyéb metrikákat. Az előrejelző algoritmusok magukban foglalják azokat az algoritmusokat, amelyek az előrejelzéseket a felkészített adatok alapján végzik el.

- **Grafikus Megjelenítés**: Ez a komponens felelős a rendszer által generált adatok grafikus megjelenítéséért. A felhasználóknak lehetőségük van a valós adatok és előrejelzések vizuális elemzésére, többek között idősor diagramok, tortadiagramok és térképek segítségével.

- **Mentés és Visszatöltés**: Ez a komponens lehetővé teszi a felhasználók számára a korábbi előrejelzések mentését és visszatöltését. Ez segít az előző adatok összehasonlításában és azoknak a további használatban.

- **Automatikus Frissítés**: A rendszer automatikus frissítési komponense lehetővé teszi a rendszer számára, hogy meghatározott időközönként automatikusan frissítse az adatokat. A felhasználóknak számára testreszabható frissítési opciókat biztosítva.

- **Részletes Előrejelzések**: A részletes előrejelzések komponense kibővíti az előrejelzéseket a specifikus régiókra vagy városokra vonatkozóan. Ez segíti a felhasználókat a járványhelyzet lokalizáltabb és részletesebb megértésében.

- **Továbbfejlesztett Felhasználói Interfész**: A felhasználói interfész kibővítése a felhasználóbarát funkciókkal és összetettebb adatvizualizációval. Az interaktív elemek, részletes grafikonok és személyre szabhatósági lehetőségek a könnyebb használat és adatmegértés érdekében szolgálnak.

- **Adatok Exportálása és Importálása**: Ezen komponens célja az előrejelzésekből származó adatok exportálása külső fájlba és ezek importálása más rendszerek vagy alkalmazások számára. A felhasználóknak lehetőségük van az előrejelzéseik eredményeinek későbbi felhasználására más platformokon vagy alkalmazásokban.

- **Részletes Grafikus Elemzés**: Ez a komponens a grafikus megjelenítés továbbfejlesztése, amely specifikusabb vizualizációs eszközöket biztosít a felhasználók számára. Többféle diagram, térkép és interaktív eszköz segíti a részletesebb és mélyebb adatelemzést.

- **Felhasználói Jogosultságok Kezelése**: Ez a komponens lehetőséget biztosít a felhasználói jogosultságok kezelésére, azaz a rendszerbe való belépés és a funkcionalitások elérésének szabályozására. Adminisztrátori jogosultságokkal rendelkező felhasználók különböző beállításokat végezhetnek a rendszerben.

- **Hibakeresés és Naplózás**: Ezen komponens felelős a rendszer működésének figyelemmel kíséréséért és a hibakeresésért. Egy naplózó rendszer segítségével a rendszer üzemeltetői könnyen monitorozhatják a rendszer működését és az esetleges hibákat.

## Rendszer Működése

A COVID-19 Adat Előrej

elző Rendszer működése a következő folyamatokból áll:

1. **Adat Letöltése**:
   - A rendszer letölti az olasz COVID-19 adatokat az Italian Civil Protection weboldalról, és egy CSV fájlba menti azokat a további feldolgozás céljából.

2. **Adatfeldolgozás**:
   - Az adatelemző algoritmusok előkészítik az adatokat az előrejelzésekhez. Például, kiszámolják a napi új esetszámokat és egyéb metrikákat.

3. **Előrejelzések Készítése**:
   - Az előrejelző modellek és algoritmusok előrejelzéseket készítenek az elérhető adatok alapján. Előrejelzések készülnek összes esetszámra, új esetszámokra és napi intenzív kezelést igénylő betegekre vonatkozóan.

4. **Grafikus Megjelenítés**:
   - A rendszer grafikusan megjeleníti a valós adatokat és az előrejelzéseket egy grafikonon, amely lehetővé teszi a felhasználók számára az adatok vizuális elemzését.

5. **Előrejelzések Mentése**:
   - Az előrejelzések mentésre kerülnek a további használat céljából.

6. **Korábbi Előrejelzések Visszatöltése**:
   - A rendszer lehetővé teszi a korábbi előrejelzések visszatöltését és összehasonlítását az aktuális adatokkal.

## Funkciók és Bemeneti adatok

Az alábbiakban részletesen leírjuk a rendszer funkcióit és a hozzájuk tartozó bemeneti adatokat:

### 1. Adat Letöltése

- **Funkció**: Az adatok letöltése az Italian Civil Protection weboldalról.
- **Bemeneti adatok**: URL a COVID-19 adatok forrásához.
- **Kimeneti adatok**: Letöltött adatok CSV fájlban.

### 2. Adatfeldolgozás

- **Funkció**: Az adatok előkészítése az előrejelzésekhez és metrikák kiszámítása.
- **Bemeneti adatok**: Letöltött adatok CSV fájlból.
- **Kimeneti adatok**: Felkészített adatok az előrejelzésekhez.

### 3. Előrejelzések Készítése

- **Funkció**: Előrejelzések készítése az elérhető adatok alapján.
- **Bemeneti adatok**: Felkészített adatok és előrejelző modell.
- **Kimeneti adatok**: Előrejelzések az összes fontos metrikára.

### 4. Grafikus Megjelenítés

- **Funkció**: Grafikus megjelenítés a valós adatokról és az előrejelzésekről.
- **Bemeneti adatok**: Valós adatok és előrejelzések.
- **Kimeneti adatok**: Grafikon az adatok vizuális elemzéséhez.

### 5. Előrejelzések Mentése

- **Funkció**: Az előrejelzések mentése a további használat céljából.
- **Bemeneti adatok**: Előrejelzések és a címke (címke az előrejelzés típusát vagy a dátumot jelöli).
- **Kimeneti adatok**: Mentett előrejelzések.

### 6. Korábbi Előrejelzések Visszatöltése

- **Funkció**: A korábbi előrejelzések visszatöltése az aktuális adatokhoz való összehasonlítás céljából.
- **Bemeneti adatok**: Korábbi előrejelzések és az aktuális adatok.
- **Kimeneti adatok**: Visszatöltött előrejelzések az összehasonlításhoz.

### 7. Automatikus Frissítés

- **Funkció**: Az adatok automatikus frissítése meghatározott időközönként.
- **Bemeneti adatok**: Beállított frissítési időköz és az adatforrás URL-je.
- **Kimeneti adatok**: Frissített adatok a további feldolgozás céljából.

### 8. Részletes Előrejelzések

- **Funkció**: Részletes előrejelzések készítése különböző régiókra vagy városokra vonatkozóan.
- **Bemeneti adatok**: Specifikus régióra vagy városra vonatkozó adatok és előrejelző modell.
- **Kimeneti adatok**: Részletes előrejelzések az összes fontos metrikára.

### 9. Továbbfejlesztett Felhasználói Interfész

- **Funkció**: A felhasználói felüszín kibővítése a felhasználóbarát funkciókkal és az összetettebb adatvizualizációval.
- **Bemeneti adatok**: Felhasználói visszajelzések és új funkciók tervezése.
- **Kimeneti adatok**: Frissített felhasználói felület a könnyebb használat és adatmegértés érdekében.

### 10. Adatok Exportálása és Importálása


- **Funkció**: A rendszer lehetővé teszi az előrejelzésekből származó adatok exportálását külső fájlba és azok importálását más rendszerek vagy alkalmazások számára. Ez lehetőséget nyújt a felhasználóknak az előrejelzések eredményeinek megosztására, valamint az adatok más analitikai vagy elemző eszközökben történő további feldolgozására.

- **Bemeneti adatok**: 
  - Exportálni kívánt előrejelzések: A felhasználó kiválaszthatja, hogy melyik előrejelzéseket szeretné exportálni a rendszerből.
  - Importálni kívánt fájl: A felhasználó kiválaszthat egy külső fájlt, amelyet importálni szeretne a rendszerbe.

- **Kimeneti adatok**: 
  - Exportált előrejelzések külső fájlban: A rendszer létrehoz egy struktúrált fájlt, amely tartalmazza az exportált előrejelzéseket. Ez lehet CSV, JSON vagy más formátum, amely könnyen kezelhető más alkalmazásokban.
  - Importált adatok a rendszerbe: A rendszerbe importált adatok a felhasználó által kiválasztott fájlból. Ezek az adatok felhasználhatók további elemzésekhez és összehasonlításokhoz a rendszeren belül.


## Felhasználás

- A COVID-19 Adat Előrejelző Rendszer felhasználható a COVID-19 adatok elemzésére, előrejelzésekre és követésre.
- A rendszer segít az adatok vizuális megjelenítésében és az előrejelzések készítésében az olasz COVID-19 járvány alakulásának követésére.
- Az alkalmazás kiválóan alkalmazható a COVID-19 járvány adatok mélyreható elemzésére. Felhasználói számára lehetőséget nyújt a járvány terjedési mintázatainak és trendjeinek feltárására, segítve ezzel a szakembereket és kutatókat a járvány dinamikájának jobb megértésében.

- A rendszer nemcsak az aktuális adatokat jeleníti meg, hanem lehetőséget ad az előrejelzések készítésére is. Ez segíti a felhasználókat abban, hogy felkészüljenek a lehetséges jövőbeli forgatókönyvekre, és hatékonyabban tervezhessék meg a járvány elleni intézkedéseket.

- Az adatok vizuális megjelenítése révén az alkalmazás felhasználói könnyen átláthatják és értelmezhetik a járvánnyal kapcsolatos információkat. Grafikonok, diagramok és térképek segítségével a felhasználók gyorsan áttekinthetik a helyzetet, és könnyen azonosíthatják az esetleges veszélyzónákat vagy kiemelkedő tendenciákat.

- Az olasz COVID-19 járvány alakulásának követése során az alkalmazás dinamikusan frissülő adatokkal szolgál, biztosítva, hogy a felhasználók mindig naprakész információkkal rendelkezzenek.

- Az alkalmazás nemcsak szakemberek, hanem a lakosság számára is hasznos lehet, mivel segíti a tudatos döntéshozatalt és növeli az általános járványtudatosságot a társadalomban.

## Következtetés

A COVID-19 Adat Előrejelző Rendszer egy erőforrás az adatok elemzéséhez és az előrejelzésekhez a járvány alakulásának követésére. A rendszer rugalmas és bővíthető, és lehetőséget nyújt a COVID-19 adatok elemzésére és a járvány alakulásának nyomon követésére az olaszországi eseményekkel kapcsolatban.

A COVID-19 Adat Előrejelző Rendszer egy hatékony eszköz a járványügyi adatok feldolgozására és értelmezésére. Rugalmasságának és bővíthetőségének köszönhetően alkalmas széles körű felhasználói igények kielégítésére. Az alkalmazás nemcsak a szakemberek, hanem a lakosság számára is hozzáférhetővé teszi a járványügyi adatokat, támogatva ezzel a tudatos döntéshozatalt és az általános járványtudatosságot.

Az alkalmazás lehetővé teszi az adatok vizuális megjelenítését, ami segíti a felhasználókat a járványügyi helyzet gyorsabb és hatékonyabb értelmezésében. Az előrejelző funkciók révén a rendszer segít abban, hogy a felhasználók felkészülhessenek a jövőbeli eseményekre, és hatékonyabb intézkedéseket hozhassanak a járvány kezelésére.

Az olaszországi eseményekkel kapcsolatos adatok nyomon követése révén az alkalmazás naprakész és releváns információkkal szolgál, lehetőséget adva azoknak, akik az országban élnek vagy érdeklődnek az ottani járványügyi helyzet iránt, hogy aktívan kövessék és reagáljanak a változásokra.

Összességében a COVID-19 Adat Előrejelző Rendszer egy értékes eszköz a járvány elleni küzdelemben, hozzájárulva a hatékonyabb intézkedések meghozatalához és a társadalmi tudatosság növeléséhez az egészségügyi kihívásokkal kapcsolatban.


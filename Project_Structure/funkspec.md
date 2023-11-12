# Funkcionális specifikáció

## Rendszer Áttekintése

A COVID-19 Adat Előrejelző Rendszer célja, hogy előrejelezze az olasz COVID-19 adatokat, különböző statisztikai modellek segítségével. A rendszer képes letölteni és feldolgozni a friss COVID-19 adatokat, majd előrejelzéseket készíteni a jövőbeli esetszámokra és egyéb metrikákra.

### Rendszerkomponensek

- **Adatgyűjtő Komponens**: Letölti az olasz COVID-19 adatokat az Italian Civil Protection weboldaláról, majd azokat egy CSV fájlba menti a további feldolgozás céljából.

- **Előrejelző Modellek**: Különböző statisztikai modellek segítségével előrejelzéseket készít az elérhető COVID-19 adatokra. Modellek: általános esetszámokra, napi új esetszámokra és napi intenzív kezelést igénylő betegekre vonatkozóan.

- **Adatelemző és Előrejelző Algoritmusok**: Az adatelemző algoritmusok előkészítik az adatokat az előrejelzésekhez, míg az előrejelző algoritmusok végzik az előrejelzéseket az adatok alapján.

- **Grafikus Megjelenítés**: A rendszer grafikusan megjeleníti a valós adatokat és az előrejelzéseket egy grafikonon, amely lehetővé teszi a felhasználók számára az adatok vizuális elemzését.

- **Mentés és Visszatöltés**: A rendszer lehetővé teszi a korábbi előrejelzések mentését és visszatöltését a további használat céljából.

- **Automatikus Frissítés**: A rendszer lehetővé teszi az automatikus adatfrissítést meghatározott időközönként, hogy mindig a legfrissebb adatokkal dolgozzon.

- **Részletes Előrejelzések**: Kibővítjük az előrejelzéseket, hogy ne csak összesített adatokat, hanem részletes előrejelzéseket is tartalmazzon különböző régiókra vagy városokra vonatkozóan.

## Rendszer Működése

A COVID-19 Adat Előrejelző Rendszer működése a következő folyamatokból áll:

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

- **Funkció**: A felhasználói felület kibővítése a felhasználóbarát funkciókkal és az összetettebb adatvizualizációval.
- **Bemeneti adatok**: Felhasználói visszajelzések és új funkciók tervezése.
- **Kimeneti adatok**: Frissített felhasználói felület a könnyebb használat és adatmegértés érdekében.

## Felhasználás

A COVID-19 Adat Előrejelző Rendszer felhasználható a COVID-19 adatok elemzésére, előrejelzésekre és követésre. A rendszer segít az adatok vizuális megjelenítésében és az előrejelzések készítésében az olasz COVID-19 járvány alakulásának követésére.

## Következtetés

A COVID-19 Adat Előrejelző Rendszer egy erőforrás az adatok elemzéséhez és az előrejelzésekhez a járvány alakulásának követésére. A rendszer rugalmas és bővíthető, és lehetőséget nyújt a COVID-19 adatok elemzésére és a járvány alakulásának nyomon követésére az olaszországi eseményekkel kapcsolatban.
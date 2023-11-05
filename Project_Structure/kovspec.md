# Követelmény specifikáció

## COVID-19 Adat Előrejelző Rendszer Követelményspecifikáció

### Bevezetés

A COVID-19 Adat Előrejelző Rendszer egy olyan alkalmazás, amely lehetővé teszi az olasz COVID-19 adatok előrejelzését és vizuális elemzését. A rendszer a Python programozási nyelvet, valamint a Matplotlib és Scikit-learn könyvtárakat használja az adatok feldolgozására, előrejelzésekre és megjelenítésre.

### 1. Követelmények

#### 1.1. Hardver Követelmények

- A rendszer futtatásához számítógép szükséges olyan hardverrel, amely képes futtatni a Python programot és a Matplotlib grafikus könyvtárat.
- A hardvernek elegendő memóriával és processzor teljesítménnyel kell rendelkeznie az adatok feldolgozásához és az előrejelzések készítéséhez.

#### 1.2. Szoftver Követelmények

- A rendszer működéséhez a következő szoftverekre van szükség:
  - Python programnyelv (legalább Python 3.x verzió).
  - Matplotlib grafikus könyvtár a grafikus megjelenítéshez.
  - Scikit-learn könyvtár a statisztikai modellek készítéséhez.

#### 1.3. Adatelérés

- A rendszernek képesnek kell lennie az interneten keresztüli adatletöltésre, mivel az Italian Civil Protection weboldaláról letölti az olasz COVID-19 adatokat.

### 2. Funkcionális Követelmények

#### 2.1. Adat Letöltése

- A rendszer képesnek kell lennie az olasz COVID-19 adatok letöltésére az Italian Civil Protection weboldalról.
- A letöltött adatokat egy CSV fájlban kell tárolni a további feldolgozás céljából.

#### 2.2. Adatfeldolgozás

- Az adatelemző algoritmusoknak képeseknek kell lenniük az adatok előkészítésére az előrejelzésekhez.
- Az adatelemző algoritmusoknak különböző metrikákat kell számolniuk a COVID-19 adatok alapján.

#### 2.3. Előrejelzések Készítése

- A rendszernek képesnek kell lennie előrejelzések készítésére az elérhető adatok alapján.
- Előrejelzéseknek kell készülniük összes esetszámra, új esetszámokra és napi intenzív kezelést igénylő betegekre vonatkozóan.

#### 2.4. Grafikus Megjelenítés

- A rendszernek képesnek kell lennie a valós adatok és az előrejelzések grafikus megjelenítésére egy grafikonon.
- A grafikus megjelenítésnek lehetővé kell tennie a felhasználók számára az adatok vizuális elemzését.

#### 2.5. Előrejelzések Mentése

- A rendszernek lehetővé kell tennie a korábbi előrejelzések mentését és visszatöltését a további használat céljából.

#### 2.6. Korábbi Előrejelzések Visszatöltése

- A rendszernek képesnek kell lennie a korábbi előrejelzések visszatöltésére az aktuális adatokhoz való összehasonlítás céljából.

### 3. Használat

- A felhasználók a rendszert az olasz COVID-19 adatok elemzésére, előrejelzésére és követésére használhatják. A rendszer segíti az adatok vizuális megjelenítését és az előrejelzések készítését az olasz COVID-19 járvány alakulásának nyomon követésére.

## Záró Megjegyzés

A COVID-19 Adat Előrejelző Rendszer teljesíti a felhasználói igényeket az olasz COVID-19 adatok elemzéséhez és előrejelzéséhez. A rendszernek megfelelő hardver- és szoftverkövetelményeknek kell megfelelnie a hatékony működés érdekében.
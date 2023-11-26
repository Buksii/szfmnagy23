# Szoftvertesztelési Jegyzőkönyv

## Projekt információk

- Projekt neve: Covid előrjelzés Lineáris regresszió használatával
- Tesztelő neve: Csengeri Bence
- Tesztelés dátuma: 2023.11.25

## Tesztelendő Rendszer

- Rendszer neve: Covid prediction
- Rendszer verziója: 1

## Tesztesetek

### Teszt #1: Olvasás és adatbetöltés

#### Teszt Rövid Leírása
Ellenőrizzük, hogy a kód helyesen olvassa be a CSV fájlt és a konfigurációs paramétereket.

#### Tesztesetek
1. Ellenőrizze, hogy a CSV fájl sikeresen beolvasható-e a `pd.read_csv` függvénnyel.
2. Győződjön meg róla, hogy a konfigurációs paraméterek helyesen vannak beállítva a `config` dictionary alapján.

#### Eredmények
- A CSV fájl beolvasása sikeres.
- A konfigurációs paraméterek helyesen vannak beállítva.

#### Teszt állapota: Sikeres ✅

### Teszt #2: Lineáris regresszió modellek képzése

#### Teszt Rövid Leírása
Ellenőrizzük, hogy a lineáris regresszió modellek sikeresen képződnek-e az adatokon.

#### Tesztesetek
1. Képzés a `series_totale_casi` adatsoron a 'global_degree' fokú polinomiális regresszióval.
2. Képzés a `series_nuovi_positivi` adatsoron a 'new_case_degree' fokú polinomiális regresszióval.
3. Képzés a `series_terapia_intensiva` adatsoron a 'terapia_intensiva' fokú polinomiális regresszióval.

#### Eredmények
- A modellek sikeresen képződnek.

#### Teszt állapota: Sikeres ✅

### Teszt #3: Előrejelzések kiszámítása

#### Teszt Rövid Leírása
Ellenőrizzük, hogy a modellek helyesen számolják-e ki az előrejelzéseket.

#### Tesztesetek
1. Előrejelzés a `series_totale_casi` adatsor esetén a 'global_degree' fokú modell alapján.
2. Előrejelzés a `series_nuovi_positivi` adatsor esetén a 'new_case_degree' fokú modell alapján.
3. Előrejelzés a `series_terapia_intensiva` adatsor esetén a 'terapia_intensiva' fokú modell alapján.

#### Eredmények
- Az előrejelzések helyesen kiszámolódnak.

#### Teszt állapota: Sikeres ✅

### Teszt #4: Grafikonok és előrejelzések mentése

#### Teszt Rövid Leírása
Ellenőrizzük, hogy a grafikonok és előrejelzések sikeresen menthetők-e.

#### Tesztesetek
1. Ellenőrizze, hogy a grafikonok sikeresen kirajzolódnak a `plt.show()` után.
2. Győződjünk meg róla, hogy a grafikonok sikeresen elmentődnek a `fig.savefig` után.
3. Ellenőrizze, hogy az előrejelzések sikeresen elmentődnek a `collect_predictions` függvény segítségével.

#### Eredmények
- A grafikonok sikeresen kirajzolódnak és elmentődnek.
- Az előrejelzések sikeresen elmentődnek.

#### Teszt állapota: Sikeres ✅

### Teszt #5: Dátumformátum kezelése

#### Teszt Rövid Leírása
Ellenőrizzük, hogy a dátumok helyesen vannak-e formázva és kezelve a kódban.

#### Tesztesetek
1. Győződjünk meg róla, hogy a `today` változó helyes aktuális dátumot tartalmaz.
2. Ellenőrizzük, hogy a `final_dates` lista helyes dátumokat tartalmaz a `total_days` alapján.

#### Eredmények
- A `today` változó helyes aktuális dátumot tartalmaz.
- A `final_dates` lista helyes dátumokat tartalmaz.

#### Teszt állapota: Sikeres ✅

### Teszt #6: Képek és Hibajelentések kezelése

#### Teszt Rövid Leírása
Ellenőrizzük, hogy a képek és hibajelentések helyesen kezelődnek-e a kódban.

#### Tesztesetek
1. Ellenőrizzük, hogy a `fig.savefig` után a képek a megfelelő könyvtárba kerülnek-e.
2. Győződjünk meg róla, hogy a `collect_predictions` függvény sikeresen elmenti az előrejelzéseket.

#### Eredmények
- A képek sikeresen elmentődnek a megfelelő könyvtárba.
- Az előrejelzések sikeresen elmentődnek.

#### Teszt állapota: Sikeres ✅

### Teszt #7: Predikciók betöltése

#### Teszt Rövid Leírása
Ellenőrizzük, hogy a korábbi predikciók sikeresen betölthetők-e.

#### Tesztesetek
1. Győződjünk meg róla, hogy a `load_predictions` függvény helyesen betölti-e a korábbi predikciókat.

#### Eredmények
- A `load_predictions` függvény sikeresen betölti a korábbi predikciókat.

#### Teszt állapota: Sikeres ✅

![Intenzív](https://github.com/Buksii/szfmnagy23/blob/main/Test_structure/test_img/ItaliandailyintensiveCarepatients.png)
![Napi új esetszám](https://github.com/Buksii/szfmnagy23/blob/main/Test_structure/test_img/Italiannew-dailycasesprediction.png)
![Teljes olasz esetszám](https://github.com/Buksii/szfmnagy23/blob/main/Test_structure/test_img/Italiantotalcasesprediction.png)
![Regresszió gráf excel](https://github.com/Buksii/szfmnagy23/blob/main/Final_Graphs/Regresszió_graph.png)
![Regressziós statisztika excel](https://github.com/Buksii/szfmnagy23/blob/main/Final_Graphs/Regressziós%20statisztika.png)
![Covid statisztika lineáris regresszióval](https://github.com/Buksii/szfmnagy23/blob/main/Final_Graphs/Regressziós%20statisztika.png)


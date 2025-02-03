Wykorzystywane technologie w projekcie:
   - React
   - NodeJS / Express
   - REST
   - MySQL
   - SequelizeJS

Commit: "Tworzenie plikow konfiguracyjnych po stronie serwera"
   1. Po stronie serwera tworzymy plik konfiguracyjny:
      npm init
	2. Instalujemy po stronie serwera  'express cors mysql2':
         npm install express cors mysql2 
   3. Po stronie serwera tworzymy plik wyjściowy 'index.js'
      Nazwa pliku musi być taka sama jaka jest wpisana w pliku package.json:
      "main": "index.js",

	4. W pliku "index.js" lączymy node.js z serwerem i wskazujemy nr portu.

   5. Dla sprawdzenia tej komunikacji w terminalu trzeba wpisać 
         node index.js
      Wtedy zobaczymy nasz console.log

      Istnieje możliwość sprawdzenia w przeglądarce: wpisujemy localhost:{nasz_nr_portu}.



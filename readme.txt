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
   6. Instalujemy kolejny pakiet - nodemon. Ten pakiet pozwala robić zmiany w kodzie a wyniki podglądać w wyszukiwarce w trybie dynamicznym:
         npm install nodemon

      W package.json dopisać:
         "scripts": {
            "start": "nodemon index.js"
      }

   7. Żeby uruchomić aplikację trzeba wpisaćw terminalu:
         npm start

Połączenie bazy danych z projektem:
	1. Tworzymy bazę danych w MySQL

	2. Instalujemy pakiety sequelize i sequelize-cli (instaluje lokalnie)
   npm install sequelize sequelize-cli

	3. W terminalu wpisujemy (dla uruchomienia lokalnego):
   npx sequelize init

   4. Możemy usunąć foldery 'migrations' i 'seeders'


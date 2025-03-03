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

   5. W folderze 'models' tworzymy plik Posts.js

	6. W Posts.js piszemy skrypt który tworzy tablice w MySQL.

	7. Modyfikujemy plik index.js w ten sposób żeby sprawdzał czy istnieje tabela Posts w bazie danych, jeśli tej tablicy nie ma to ją utworzy.

	8. Łączymy aplikację z naszą schemą w MySQL:
Folder config -> plik config.json
W tym pliku można skonfigurować "username", "password", "database" dla takich środowisk jak "development", "test", "production".

	9. Żeby uruchomić aplikację - wpisujemy w terminal:
   npm start

Zrobienie API request:
	1. W folderze serwera tworzymy folder 'routes' a w nim plik 'Posts.js'

	2. Dla testowania requestów najlepiej używać programu zewnętrznego np..: Postman


Budowanie części React w aplikacji:
	1. W terminalu  tworzymy aplikację React w folderze client:  
   npx create-react-app client
   
	2. Żeby uruchomić aplikację wpisz w terminale:
   npm start

	3. Zbędne pliki (App.test.js; index.css; logo.svg; setupTests.js) z katalogu client/src można usunąć

	4. Instalujemy axios - ten dodatek ułatwi nam robienie requestów. Wpisujemy w terminalu:
   npm install axios

	5. Postronie serwera wpisujemy w terminale:
   npm install cors
   
	6. W terminalu w lokalizacji client wpisujemy:
   npm install react-router-dom

	7. W katalogu src tworzymy nowy katalog 'pages'. 
      W tym folderze tworzymy odpowiedni pliki do struktury naszej strony internetowej np..: Home.js; 

	8. Zainstalowanie wtyczki 'ES7+ React/Redux/React-Native snippets' pozwala na szybkie tworzenie nowego komponentu React -> wystarczy wpisać 'rfce' + Enter








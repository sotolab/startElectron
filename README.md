# startElectron
Build cross-platform desktop

https://medium.com/spidernitt/getting-started-with-desktop-applications-using-electron-js-52b55088aacc


    $ mkdir myapp
    $ cd myapp
    $ npm init -y
    $ npm install electron --save-dev
    $ touch main.js
    $ touch index.html
    $ npm start
    $ npm install electron-packager --save-dev
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "electron .",
      "package": "electron-packager ."
    },
    
    $ npm run package
    $ cd myapp-linux-armv7l/
    $ ls
    $ ./myapp
    









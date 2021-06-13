# startElectron
Build cross-platform desktop

https://medium.com/spidernitt/getting-started-with-desktop-applications-using-electron-js-52b55088aacc

examples

https://www.electronjs.org/blog/simple-samples

https://github.com/electron/simple-samples


    $ mkdir myapp
    $ cd myapp
    $ npm init -y
    
    -- package.json
    
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "electron ."      
    },
    
    $ npm install electron --save-dev
    $ touch main.js
    $ touch index.html
    $ npm start
    $ npm install electron-packager --save-dev
    
    -- package.json
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "electron .",
      "package": "electron-packager ."
    },
    
    $ npm run package
    $ cd myapp-linux-armv7l/
    $ ls
    $ ./myapp
    









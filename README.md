# Elector Count - messaging app
Application used to communicate between two users created with Next.js and MongoDB with ultimate SynthWave theme ;)


# Technologies
Project is created with the use of the following libraries:
* next.js version: 11.1.0
* axios version: 0.21.1
* dot-env version: 0.0.1
* express version: 4.17.1
* jsonwebtoken version: 8.5.1
* mongodb version: 4.1.1
* mongoose version: 6.0.1
* next-auth version: 3.29.0
* node-fetch version: 2.6.1
* react version: 17.0.2
* react-dom version: 17.0.2
* sass version: 1.38.1
* socket.io: 4.2.0 only for socket_implementation branch)
* socket.io-client: 4.2.0 (only for socket_implementation branch)

# Setup
To run this project, install it locally using yarn:

```
yarn install
yarn dev
```

Create **.env.local** file inside of the **server** directory, which will contain database connection information and next-auth URL:
```
DB_CONNECTION = mongodb+srv://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
NEXTAUTH_URL=http://localhost:3000/

```
Insert document into the **users** collection inside your database:
![image](https://drive.google.com/uc?export=view&id=1YB4_336jo7i1MiOdi1aiUA6yv5yCWu0T)

Now you can log in using those credentials at **http://localhost:3000**

# Live Example:
Heroku live example created with socket.io can be found under this URL:
```
https://elector-count-socket.herokuapp.com/
```
Branch containing source code for real-time version can be found here:

```
https://github.com/jakub-jarzabek/elector-count/tree/socket_implementation
```


Vercel live example can be found under this URL(outdated version with no real-time communication):

```
https://elector-count.vercel.app/
```

Additional remarks for Vercel version (main branch)
* Refresh intervals are set to 30 seconds, thus messages will appear after refresh action is complete
* We are planning to update our solution using WebSockets in order to achieve real-time communication

# Login
Login credentials for vercel example:
First user:

```
Email: karl@franz.empire
Password: SigmarCalls
```

Second user:

```
Email: balthazar@gelt.empire
Password: ForEmperor
```


# Creators

Jakub Jarz??bek https://github.com/jakub-jarzabek
Kacper Reja https://github.com/kacper-reja

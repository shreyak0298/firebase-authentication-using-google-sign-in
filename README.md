# Firebase Authentication Using Google Login In Angular Applications
Firebase provides a very simple way to setup authentication in your apps. It is very easy to integrate with your application and can be configured to be used with several social authentication providers such as Facebook, Google, Github, Twitter, etc. By integrating these authentication providers, users can use their existing social accounts to perform the login on your web or mobile application.

This repository contains code for firebase authentication using google login in angular applications which have backend in Node.js

# How to use
1. Install angular and node.js in your local machine, if not already done

2. Download or clone the repostitory

3. Open the keys folder in server folder and paste the servicekey of your GCP project here. If this step is not done, then an error will come up that firestore is not initialized but the code will work nevertheless.

4. Open a terminal and navigate to frontend folder. Then run the following commands :

    i) npm install

    ii) ng serve --open

5. Open a new termial and navigate to server folder. Then run the following commands :

    i) npm install

    ii) $env:GOOGLE_APPLICATION_CREDENTIALS = "" (In the quotes, provide path of your servicekey)

    iii) nodemon index.js

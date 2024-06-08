//Basic login system, change this when the web server is set up (this class will will be moved to the webserver and this file will be replaced with a call to the server)

import React from 'react';

class Login {
    constructor() {
        this.map = new Map();
    }

    addUser(username, password) {
        this.map.set(username, password);
    }

    validateLogin (username, password) {
        if (this.map.has(username) && this.map.get(username) == password) {
            return true;
        }
        return false;
    }
}

const login = new Login();
login.addUser(username, password);
export default login;
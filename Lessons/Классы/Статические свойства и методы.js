'use strict';

class User {
    static staticMetod() {
        console.log(User === this);
    }
}

User.staticMetod();
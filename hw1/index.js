"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const userInfo_1 = require("./userInfo");
class UsersData {
    constructor(name, userid, gender, birthdate, age, position) {
        this.name = name;
        this.userid = userid;
        this.gender = gender;
        this.birthdate = birthdate;
        this.age = age;
        this.position = position;
    }
}
function getUsersJobPositions(usersArray, usersInfoArray) {
    var result = [];
    for (var i = 0; i < usersArray.length; i++) {
        var data1 = usersArray[i];
        var data2 = usersInfoArray[i];
        var newdata = {
            name: data1.name,
            position: data2.organization?.position,
            age: data2.age,
            gender: data1.gender
        };
        result.push(newdata);
    }
    return result;
}
console.log(getUsersJobPositions(users_1.usersArray, userInfo_1.usersInfoArray));
//# sourceMappingURL=index.js.map
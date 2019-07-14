let username = 'nikitha@gmail.com'
let password = 'pass@123'

let userChecker = function(username){
    if((username.includes('@')) && (username.length > 0)){
        return true
    }
    return false
}

let passwordChecker = function(password){
    if((password.includes('@')) && (password.length > 0)){
        return true
    }
    return false
}

console.log(userChecker(username))
console.log(passwordChecker(password))
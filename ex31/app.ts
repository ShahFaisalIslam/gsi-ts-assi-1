let usernames = ["admin","root","viewonly","nobody","johndoe"];
while (usernames.length > 0) {
    let username = usernames.shift();
    if (username == "admin")
        console.log("Howdy admin! Fancy some wild wild tea?");
    else
        console.log("Welcome",username);
}
if (usernames.length == 0) {
    console.log("We need to find some users!");
}

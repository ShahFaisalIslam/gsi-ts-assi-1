let usernames = ["admin","root","viewonly","nobody","johndoe"];
for (let username of usernames) {
    if (username == "admin")
        console.log("Howdy admin! Fancy some wild wild tea?");
    else
        console.log("Welcome",username);
}
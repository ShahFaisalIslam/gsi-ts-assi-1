let usernames :string[] = ["admin","root","viewonly","nobody","johndoe"];
let username : string;
for (username of usernames) {
    if (username == "admin")
        console.log("Howdy admin! Fancy some wild wild tea?");
    else
        console.log("Welcome",username);
}
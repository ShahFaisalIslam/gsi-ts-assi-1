let current_users : string[] = ["admin","root","viewonly","superuser","user"];
let new_users : string[] = ["rock","user","superUser","dawn","chalk"];
let new_user : string;
for (new_user of new_users) {
    if (current_users.includes(new_user.toLowerCase())) {
        console.log(new_user,"is available.");
    } else {
        console.log("You need to add",new_user);
    }
}
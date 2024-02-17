let current_users = ["admin","root","viewonly","superuser","user"];
let new_users = ["rock","user","superUser","dawn","chalk"];

for (let new_user of new_users) {
    if (current_users.includes(new_user.toLowerCase())) {
        console.log(new_user,"is available.");
    } else {
        console.log("You need to add",new_user);
    }
}
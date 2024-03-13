let magicians : string[] = ["Crowley","Evola","Dion"];

function show_magicians(magicians_list : string[])
{
    let magician : string;
    for (magician of magicians_list) {
        console.log(magician);
    }
}
show_magicians(magicians);
function make_great (magicians_list : string[])
{
    let i : number;
    for (i = 0; i < magicians_list.length;i++) {
        magicians_list[i] = "Great " + magicians_list[i];
    }
}

make_great(magicians);
show_magicians(magicians);
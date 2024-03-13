let magicians : string[] = ["Crowley","Evola","Dion"];

function show_magicians(magicians_list : string[])
{
    let magician : string;
    for (magician of magicians_list) {
        console.log(magician);
    }
}
function make_great (magicians_list : string[])
{
    let i : number;
    for (i = 0; i < magicians_list.length;i++) {
        magicians_list[i] = "Great " + magicians_list[i];
    }
}
let magicians_copy : string[] = magicians.map((a)=>a);
make_great(magicians_copy);
show_magicians(magicians);
show_magicians(magicians_copy);
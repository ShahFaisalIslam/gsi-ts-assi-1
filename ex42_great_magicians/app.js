"use strict";
let magicians = ["Crowley", "Evola", "Dion"];
function show_magicians(magicians_list) {
    for (let magician of magicians_list) {
        console.log(magician);
    }
}
show_magicians(magicians);
function make_great(magicians_list) {
    for (let i in magicians_list) {
        magicians_list[i] = "Great " + magicians_list[i];
    }
    // return magicians_list;
}
make_great(magicians);
show_magicians(magicians);

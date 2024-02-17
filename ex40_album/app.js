"use strict";
function make_album(artist, title, amount = -1) {
    if (amount == -1)
        return { artist: artist, title: title };
    return { artist: artist, title: title, amount: amount };
}
let album_1 = make_album("Junaid Jamshed", "Badi Uz Zaman");
let album_2 = make_album("Abdul Rahman", "Durood e Mustafa");
let album_3 = make_album("Mahmood Qureshi", "Khatam e Anbiya");
let album_4 = make_album("Yameen Yamaan", "Yamaani", 55);
console.log(album_1);
console.log(album_2);
console.log(album_3);
console.log(album_4);

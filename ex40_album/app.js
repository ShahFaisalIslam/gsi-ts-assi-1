"use strict";
;
function make_album(artistName, title, noOfTitles) {
    let newAlbum = {
        artistName: artistName,
        title: title
    };
    if (typeof noOfTitles !== "undefined")
        newAlbum.noOfTitles = noOfTitles;
    return newAlbum;
}
console.log(make_album("Junaid", "CCNA"));
console.log(make_album("Ibrahim", "MPUDP"));
console.log(make_album("Hasan", "MQTT"));
console.log(make_album("Wasif", "So many", 5));

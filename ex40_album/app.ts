interface Album {
    artistName : string,
    title: string,
    noOfTitles?: number
};

function make_album(artistName : string, title: string, noOfTitles? : number): Album {
    let newAlbum : Album = {
        artistName : artistName,
        title : title
    };

    if (typeof noOfTitles !== "undefined")
        newAlbum.noOfTitles = noOfTitles;

    return newAlbum;
}

console.log(make_album("Junaid","CCNA"));
console.log(make_album("Ibrahim","MPUDP"));
console.log(make_album("Hasan","MQTT"));
console.log(make_album("Wasif","So many",5));
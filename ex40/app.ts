function make_album(artist : string,title : string,amount : number = -1)
{   
    if (amount == -1)
        return {artist : artist,title : title};
    return {artist : artist,title : title,amount : amount};    
}

let album_1 :{
    artist: string,
    title: string
    amount?: number
}= make_album("Junaid Jamshed","Badi Uz Zaman");
let album_2  :{
    artist: string,
    title: string
    amount?: number
}= make_album("Abdul Rahman","Durood e Mustafa");
let album_3  :{
    artist: string,
    title: string
    amount?: number
}= make_album("Mahmood Qureshi","Khatam e Anbiya");
let album_4  :{
    artist: string,
    title: string,
    amount?: number
}= make_album("Yameen Yamaan","Yamaani",55);
console.log(album_1);
console.log(album_2);
console.log(album_3);
console.log(album_4);
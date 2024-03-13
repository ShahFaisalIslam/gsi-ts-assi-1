function make_shirt(size : string = "L",text : string = "I love TypeScript")
{
    console.log("Shirt size: %s, text on it: '%s'",size,text);
}

make_shirt();
make_shirt("M");
make_shirt("S","Let me grow up");
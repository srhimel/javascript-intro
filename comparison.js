var boyos, sallery, buldingAce;
boyos = 22;
sallery = 50000;
buldingAce = true;
if (boyos > 21 && sallery > 60000 && buldingAce == true) {
    console.log("koci mal is ready for you");
} else if (boyos > 24 || sallery > 40000 && buldingAce == true) {
    console.log("meye paba kintu building ki ace ?")
    if (buldingAce == true) {
        console.log('building ace');
    }
    else {
        console.log('na nai');
    }
} else {
    console.log("tor kopale bia nai ");
}
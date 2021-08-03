//এটার কাজ হচ্ছে স্কিপ করা

var age = [12, 15, 19, 17, 92, 522, 45];
ageTotal = age.length;

for (var i = 0; i < ageTotal; i++) {
    if (age[i] < 18) {
        continue;
    }
    console.log(age[i]);
}
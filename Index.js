let card ="4987507960560319";
let bit = 1; let int = 0;
let sum = 0;
let lookup = [0,2,4,6,8,1,3,5,7,9];
while(int < card.length){
   sum += bit==1? Number(lookup[card[int]]) : Number(card[int]);
    bit = bit==1? 0 : 1;
    int++;
}
console.log(sum%10 == 0? "Valid credit card" : "Not valid");

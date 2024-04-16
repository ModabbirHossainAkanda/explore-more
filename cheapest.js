const phones = [
    {name: 'Iphone', camera: 16, storage: '64gb', price: 136000, color: 'blueblack'},
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 14, storage: '164gb', price: 60000, color: 'silver'},
    {name: 'Nokia', camera: 14, storage: '164gb', price: 15000, color: 'silver'},
    {name: 'Xaomi', camera: 14, storage: '164gb', price: 16000, color: 'silver'},
    {name: 'HTC', camera: 14, storage: '164gb', price: 32000, color: 'silver'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);
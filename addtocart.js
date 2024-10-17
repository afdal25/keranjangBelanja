const product = [
    {
        id: 0,
        image: 'image/1.png',
        title:'BELAJAR PEMROGRAMAN WEB UNTUK PEMULA',
        price: 53,
    },
    {
        id: 1,
        image: 'image/2.png',
        title:'ALGORITMA & PEMROGRAMAN',
        price: 90,
    },
    {
        id: 2,
        image: 'image/3.png',
        title:'LOGIKA PEMROGRAMAN JAVA',
        price: 152,
    },
    {
        id: 3,
        image: 'image/4.png',
        title:'PEMROGRAMAN PYTHON KOMPLET',
        price: 108,
    },
    {
        id: 4,
        image: 'image/5.png',
        title:'PEMROGRAMAN LARAVEL',
        price: 207,
    },
    {
        id: 5,
        image: 'image/6.png',
        title:'LANGKAH MUDAH PEMROGRAMAN ARDUINO & PYTHON',
        price: 92,
    }
];
const categories = [...new Set(product.map((item) => {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item) =>
{
    var {image, title, price} = item;
    return(
    `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
    </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp${price}.000</h2>` +
        "<button onclick='addtocart("+(i++)+")'>Masukkan Keranjang</buton>"+
    `</div>
    </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(a){
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Keranjang Kamu Tidak Ada";
        document.getElementById("total").innerHTML = "Rp"+0+".000";
    } else{
        document.getElementById('cartItem').innerHTML = cart.map((items) =>
        {
            var {image, title, price} = items;
            total = total + price;
            document.getElementById("total").innerHTML = "Rp"+total+".000";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>Rp${price}.000</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

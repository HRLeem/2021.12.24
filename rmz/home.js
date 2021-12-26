$(()=>{
    make_cards();
})

function make_cards() {

    for(let i = 0;  i < clothes.length; i++ ) {
        // {
        //     url : 'https://image.msscdn.net/images/goods_img/20210817/2066466/2066466_3_125.jpg'
        //     , name : 'EMBROIDERY HANDSOME DAN HOODIE GRAY'
        //     , price : '39,500'
        // },
        let url = clothes[i].url;
        let name = clothes[i].name;
        let price = clothes[i].price;
        make_temp(url, name, price);
    }
    clothes.map((val) => make_temp(val.url, val.name, val.price))
}

function make_temp (url, name, price) {
    let temp = `
    <a href="/">\
        <div class="card">\
            <div class="product_img">\
                <img src="${url}">\
            </div>\
            <div class="product_name">\
                ${name}\
            </div>\
            <div class="product_price">\
                ${price}\
            </div>\
        </div>\
    </a>`;
    $('.container').append(temp);
    return
}

const clothes = [
    {
        url : 'https://image.msscdn.net/images/goods_img/20210817/2066466/2066466_3_125.jpg'
        , name : 'EMBROIDERY HANDSOME DAN HOODIE GRAY'
        , price : '39,500'
    },
    {
        url : 'https://image.msscdn.net/images/goods_img/20200910/1595528/1595528_3_125.jpg'
        , name : '(BY P.E.DEPT) UNIVERSITY HANDSOME DAN CREWNECK NAVY'
        , price : '36,000'
    },
    {
        url : 'https://image.msscdn.net/images/goods_img/20190902/1139175/1139175_4_125.jpg'
        , name : '화란 세미오버 니트 블랙 '
        , price : '63,900'
    },
    {
        url : 'https://image.msscdn.net/images/goods_img/20200928/1628385/1628385_4_125.jpg'
        , name : '2 TONE ARCH HOODIE GRAY'
        , price : '55,300'
    },
    {
        url : 'https://image.msscdn.net/images/goods_img/20200922/1615829/1615829_1_125.jpg'
        , name : '로그 오버핏 기모 후드 그레이 YHHD2302'
        , price : '29,300'
    },
    {
        url : 'https://image.msscdn.net/images/goods_img/20210917/2139144/2139144_4_125.jpg'
        , name : '[드로우핏X깡스타일리스트] 터틀넥 니트 티셔츠 SET'
        , price : '43,900'
    },
    {
        url : 'https://image.msscdn.net/images/goods_img/20210312/1842702/1842702_1_125.jpg'
        , name : 'TS00TW01 SLIMFIT TURTLE NECK T'
        , price : '79,000'
    },
    {
        url : 'https://image.msscdn.net/images/goods_img/20200821/1558847/1558847_12_125.jpg'
        , name : '하프 터틀넥 니트 세트'
        , price : '39,900'
    },
]
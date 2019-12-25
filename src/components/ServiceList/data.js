/*
data = [
  {
    serviceId: 104,
    serviceUrl: www.remont.ru/104,
    serviceName: РемБытТех,
    servicePhoto: file,
    serviceDescription: Какое-то описание,
    serviceRating: 4,
    serviceAdress: [],
    servicePhone: [],
    serviceStation: [],
    serviceAdvantages: [],
    servicePrices: [],
    isSafeDeal: true,
  },
{},
]
*/

export const data = [
    {
        serviceId: 104,
        serviceUrl: 'www.remont.ru/104',
        serviceName: 'РемБытТех',
        servicePhoto: 'url',
        serviceDescription: 'Пять столетий спустя Lorem Ipsum испытал всплеск популярности с выпуском сухого переноса листов Letraset. Эти листы надписи можно потереть на любом месте и были быстро приняты художники-графики, принтеры, архитекторов и рекламодателей для их профессионального',
        serviceRating: 4,
        serviceCity: 'Москва',
        serviceAddress: ['ул Ленина, дом 45 к.1 офис 256', 'ул Строителей д 2б, офис 12', 'ул Пушкина дом 5 офис 10'],
        servicePhone: ['+79269450314','+79169430513','+79269147394'],
        serviceEmail: 'service@mail.ru',
        serviceStation: ['Планерная', 'Сходненская'],
        serviceAdvantages: ['бесплатная диагностика', 'гарантия 3 года','рейтинг 4.5 из 5'],
        servicePrices: [
            {
                title: 'ремонт ноутбука',
                price: 1200,
            },
            {
                title: 'ремонт телефона',
                price: 750,
            },
            {
                title: 'ремонт телевизора',
                price: 800,
            },
            {
                title: 'ремонт пылесоса',
                price: 1400,
            },
            {
                title: 'ремонт СВЧ',
                price: 500,
            },
            {
                title: 'ремонт холодильника',
                price: 960,
            }],
        isSafeDeal: true,
        isProStatus: true,
    },
];

export const mapData = [
    {
        geometry: [55.88669056886585,37.41228049999999],
        properties: {
            /*phone:'8(800)555-35-35',
            info:'г.Химки, ул. Строителей, 4В, Химки этаж 1',*/
            hintContent: 'ООО Хитес',
            balloonContentHeader:'<Link><h3>ООО "Хитес"</h3></Link>',
            balloonContentBody: '<p>+7 (800)555-35-35</p>' + '<p>ул. Строителей, 4В</p>',
            balloonContentFooter:'ремонт телевизоров, ремонт смартфонов, ремонт холодильников'
        },
        modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
    },

    {
        geometry: [55.89469706885654,37.404455999999875],
        properties: {
            url:'/',
            hintContent: 'ООО Химки-Сервис +7 (495) 970-46-1',
            balloonContentHeader:'<Link><h3>ООО "Химки Сервис"</h3></Link>',
            balloonContentBody: '<p>+7 (495) 970-46-1</p>' + '<p>Нагорное ш., 4</p>',
            balloonContentFooter:'ремонт телевизоров, ремонт смартфонов, ремонт холодильников'
        },
        modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
    },
];


/* default one tag
const placeMark = {
    geometry: [56.848217, 53.236675],
    properties: {
        hintContent: 'Это хинт',
        balloonContent: 'Это балун'
    },
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],

}*/

/*
{
        geometry: [55.89469706885654,37.404455999999875],
        properties: {
            url:'/',
            hintContent: 'хинт',
            balloonContentHeader:'<h3>Заголовок</h3>',
            balloonContentBody: '<p>текст</p>',
            balloonContentFooter:'<p>описание</p>'
        },
        modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
    },
 */

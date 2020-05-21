
var data = [
    {
        point: [55.88669056886585,37.41228049999999],
        serviceInfo: {
            id: '1',
            name: 'ООО Хитес',
            phones: ['+7 (800)555-35-35'],
            site: 'www.hutec.ru',
            address: 'г. Химки, ул. Строителей, 4В',
            tags: ['ремонт телевизоров', 'ремонт смартфонов', 'ремонт холодильников'],
        },
    },

    {
        point: [55.89469706885654,37.404455999999875],
        serviceInfo: {
            id: '2',
            name: 'ООО Химки-Сервис',
            phones: ['+7 (495) 970-46-1', '+7 (495) 970-46-2'],
            site: 'www.himku-service.ru',
            address: 'г. Химки, ул. Нагорное ш., 4',
            tags: ['ремонт телевизоров', 'ремонт смартфонов', 'ремонт холодильников'],
        },
    },
];

const makeListItem = (val) => '<li>' + val + '</li>';
const makeLink = (val, href) => '<a href="' + href + '">' + val + '</a>';

const buttonStyle = {
    normal: [
        "display: block;",
        "color: #fff;",
        "cursor: pointer;",
        "-webkit-transition: all 0.3s ease;",
        "transition: all 0.3s ease;",
        "justify-content: center;",
        //"padding: 15px 35px;",
        //"border-radius: 50px;",
        "-webkit-text-decoration: none;",
        "text-decoration: none;",
        "outline: none;",
        "border: 3px solid #368594;",
        "-webkit-user-select: none;",
        "-moz-user-select: none;",
        "-ms-user-select: none;",
        "user-select: none;",
        "background-color: #368594;",
        "font-size: 18px;",
        "font-family: 'NotoSans-Bold';",
    ].reduce((a, c) => a + c, ''),
    hover:  [
        "display: block;",
        "cursor: pointer;",
        "-webkit-transition: all 0.3s ease;",
        "transition: all 0.3s ease;",
        "justify-content: center;",
        //"padding: 15px 35px;",
        //"border-radius: 50px;",
        "-webkit-text-decoration: none;",
        "text-decoration: none;",
        "outline: none;",
        "-webkit-user-select: none;",
        "-moz-user-select: none;",
        "-ms-user-select: none;",
        "user-select: none;",
        'border: 3px solid #368594;',
        'background: transparent;',
        'color: #368594;',
        "font-size: 18px;",
        "font-family: 'NotoSans-Bold';",
    ].reduce((a, c) => a + c, ''),
};

export const mapData = data.map((e, i) => {
  return {
    geometry: e.point,
    properties: {
        hintContent: '<h3>' + e.serviceInfo.name + '</h3>',
        balloonContentHeader: '<a onclick="location.replace(location.origin + \'/service/\' + ' + e.serviceInfo.id + ')" style="cursor: pointer"><h3>' + e.serviceInfo.name + '</h3></a>',
        balloonContentFooter: '<i>' + e.serviceInfo.tags.join(', ') + '</i>',
        balloonContentBody: '<div style="display: flex">'
            + '<div style="width: 60%">'
            + '<p>Контакты:</p>'
            + '<ul style="list-style: none; padding-left: 1rem; margin-top: .5rem">'
            + e.serviceInfo.phones.reduce((a, c) => a + makeListItem(makeLink(c, c.replace(/[^\d+]/g, ''))), '')
            + '</ul>'
            + '<p>' + makeLink(e.serviceInfo.site, '//' + e.serviceInfo.site) + '</p>'
            + '<p>Адрес: '+ e.serviceInfo.address + '</p>'
            + '</div>'
            + '<div style="width: 40%;">'
            + '<button onClick="location.replace(location.origin + \'/service/\' + ' + e.serviceInfo.id + ')"'
                + ' style="' + buttonStyle.normal + '"'
                + ' onMouseOver="this.style=`' + buttonStyle.hover + '`"'
                + ' onMouseOut="this.style=`' + buttonStyle.normal + '`">Страница сервиса</button>'
            + '</div>'
            + '</div>',
    },
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
  }
})


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

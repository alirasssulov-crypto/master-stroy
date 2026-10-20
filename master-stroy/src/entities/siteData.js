import hero from '../shared/assets/hero.png'
import about from '../shared/assets/about.png'
import logo from '../shared/assets/logo.png'

import pHex from '../shared/assets/p-hex.png'
import pBrus from '../shared/assets/p-brus.png'
import pSquare from '../shared/assets/p-square.png'
import pKatushka from '../shared/assets/p-katushka.png'
import pKirpichik from '../shared/assets/p-kirpichik.png'
import pVolna from '../shared/assets/p-volna.png'

import work1 from '../shared/assets/work-1.png'
import work2 from '../shared/assets/work-2.png'
import work3 from '../shared/assets/work-3.png'
import work4 from '../shared/assets/work-4.png'
import work5 from '../shared/assets/work-5.png'
import work6 from '../shared/assets/work-6.png'
import work7 from '../shared/assets/work-7.png'
import work8 from '../shared/assets/work-8.png'

import iBrick from '../shared/assets/i-brick.png'
import iCertWhite from '../shared/assets/i-cert-white.png'
import iClipboard from '../shared/assets/i-clipboard.png'
import iUser from '../shared/assets/i-user.png'
import iBuilder from '../shared/assets/i-builder.png'
import iDelivery from '../shared/assets/i-delivery.png'
import iCash from '../shared/assets/i-cash.png'
import iQuality from '../shared/assets/i-quality.png'

import kamen1 from '../shared/assets/kamen-1.png'
import kamen2 from '../shared/assets/kamen-2.png'
import kamen3 from '../shared/assets/kamen-3.png'
import kamen4 from '../shared/assets/kamen-4.png'
import kamen5 from '../shared/assets/kamen-5.png'
import kamen6 from '../shared/assets/kamen-6.png'
import kamen7 from '../shared/assets/kamen-7.png'
import kamen8 from '../shared/assets/kamen-8.png'

/* ---------- Header ---------- */
export const headerData = {
  logo,
  address: 'Волоколамский район, пос. Чисмена, ул. Центральная, 1',
  hours: 'Режим работы: с 8:00 до 20:00',
  phones: ['+7 (926) 105-94-14', '+7 (910) 470-67-97', '+7 (499) 994-90-99'],
  nav: [
    { label: 'О компании', href: '#about' },
    { label: 'Укладка тротуарной плитки', href: '#works' },
    { label: 'Портфолио', href: '#works' },
    { label: 'Полезно знать', href: '#advantages' },
    { label: 'Доставка и оплата', href: '#advantages' },
    { label: 'Контакты', href: '#contacts' },
  ],
}

/* ---------- Hero ---------- */
export const heroData = {
  image: hero,
  title: 'Тротуарная плитка в Волоколамске напрямую от производителя',
  text: 'Вам нужна качественная и недорогая тротуарная плитка в Волоколамске? Мы готовы предложить отличную возможность приобрести современные модели с высокими показателями эстетики и механической стойкости напрямую от производителя – компании «Мастер Строй».',
}

/* ---------- Каталог продукции ---------- */
export const catalogData = [
  { id: 1, name: 'Прессованная плитка', image: kamen1 },
  { id: 2, name: 'Вибролитая плитка', image: kamen2 },
  { id: 3, name: 'Садовый бордюр', image: kamen3 },
  { id: 4, name: 'Дорожный бордюр', image: kamen4 },
  { id: 5, name: 'Строительные блоки', image: kamen5 },
  { id: 6, name: 'Фасадная плитка', image: kamen6 },
  { id: 7, name: 'Водостоки тротуарные', image: kamen7 },
  { id: 8, name: 'Крышки на столбы', image: kamen8 },
]

/* ---------- О нас ---------- */
export const aboutData = {
  image: about,
  title: 'О нас',
  subtitle:
    '«Мастер Строй» - надежная и недорогая тротуарная плитка в Волоколамском районе',
  paragraphs: [
    'Наша компания готова помочь вам и с первым и со вторым аспектом данной задачи. В нашем каталоге вы сможете подобрать желаемый вариант материала и сразу заказать профессиональную укладку на вашем участке. Вниманию покупателей всегда доступна качественная и прочная тротуарная плитка от производителя по оптимальной стоимости.',
    'Если вам нужна надежная тротуарная плитка, купить в Волоколамском районе такой материал можно у нас, цена продукции из каталога вас приятно удивит и не ударит по бюджету. Оформить заказ можно прямо на сайте.Если в процессе выбора вам понадобится консультация специалиста, вы всегда можете заказать обратный звонок, используя специальную функцию на сайте, либо самостоятельно позвонить менеджеру по указанным телефонам.',
    'Теперь если вам нужна тротуарная плитка, вы знаете где ее можно приобрести. «Мастер Строй» - компания-производитель, которая гарантирует достойный уровень качества по приятной цене.',
  ],
  company: 'ООО «МАСТЕ',
}

/* ---------- Топ товаров ---------- */
export const colorDots = [
  '#8a8a8a', '#9b3a2e', '#d9a441', '#7a4a2a',
  '#d9453a', '#4a4a4a', '#d99a3a', '#2b2b2b',
]

const std = (gray, red, brown, yellow) => [
  ['Серый', `${gray} руб кв/м`],
  ['Красный', `${red} руб кв/м`],
  ['Коричневый', `${brown} руб кв/м`],
  ['Желтый', yellow],
  ['Другие цвета', 'по запросу'],
]

export const products = [
  {
    id: 1, name: 'Шестигранник 250x220x70', image: pHex,
    size: '250x220x70мм', qty: '21 шт/кв.м', colors: 8,
    prices: [
      ['Серый', '470 руб кв/м'],
      ['Красный', '530 руб кв/м'],
      ['Коричневый', '590 руб кв/м'],
      ['Желтый', 'по запросу'],
      ['Другие цвета', '510 руб кв/м'],
    ],
  },
  {
    id: 2, name: 'Брусчатка 200x100x50', image: pBrus,
    size: '200x100x50мм', qty: '50 пара шт/кв.м', colors: 8,
    prices: std(440, 500, 550, '700 руб кв/м'),
  },
  {
    id: 3, name: 'Плитка квадрат 330x330x60', image: pSquare,
    size: '330x330x60мм', qty: '9 шт/кв.м', colors: 8,
    prices: std(440, 500, 550, '700 руб кв/м'),
  },
  {
    id: 4, name: 'Катушка 250x160x60', image: pKatushka,
    size: '250x160x60мм', qty: '30 шт/кв.м', colors: 8,
    prices: std(440, 500, 550, '700 руб кв/м'),
  },
  {
    id: 5, name: 'Кирпичик 250x125x60', image: pKirpichik,
    size: '250x125x60мм', qty: '32 шт/кв.м', colors: 8,
    prices: std(440, 500, 550, '700 руб кв/м'),
  },
  {
    id: 6, name: 'Волна 250x125x60', image: pVolna,
    size: '250x125x60', qty: '32/40 шт/кв.м', colors: 8,
    prices: std(450, 500, 550, '700 руб кв/м'),
  },
]

/* ---------- О производстве ---------- */
// Вставь свой ID видео с YouTube вместо VIDEO_ID
export const productionData = {
  logo,
  videoUrl: 'https://youtu.be/NLkzBx7NEJY?si=jKdV65aZYaqvJkcE',
  features: [
    { icon: iDelivery, text: 'Доставка и разгрузка плитки краном-манипулятором' },
    { icon: iBrick, text: 'Множество видов тротуарной плитки различной формы и фактуры' },
    { icon: iCertWhite, text: 'Весь товар сертифицирован! Официальная гарантия!' },
  ],
}

/* ---------- Наши работы ---------- */
export const worksData = {
  text: 'Отделка участка, сада, входной группы или любой другой частной территории требует большого внимания со стороны владельца, поскольку именно эти зоны являются «лицом», а значит и престижем вашего дома или коммерческого объекта. Подбор прочного и эстетически презентабельного материала для оформления входа, дорожек, пешеходных зон – это уже половина успеха отделки. Вторая половина – это, безусловно, грамотная укладка, обеспечивающая долговечность покрытия.',
  images: [work1, work2, work3, work4, work5, work6, work7, work8],
}

/* ---------- Наши преимущества ---------- */
export const advantages = [
  {
    icon: iClipboard,
    title: 'Тротуарная плитка от производителя в широком ассортименте',
    text: 'На сайте вы сможете подобрать прессованную, вибролитую или фасадную плитку, блоки и бордюры, водостоки, крышки на столбы и многое другое.',
  },
  {
    icon: iUser,
    title: 'Высокий уровень сервиса обслуживания',
    text: 'Наши менеджеры всегда вежливые и профессиональные в работе с клиентами, они готовы помочь с выбором нужной модели и ответить на все вопросы клиента.',
  },
  {
    icon: iBuilder,
    title: 'Услуги команды опытных специалистов по монтажу',
    text: 'Наша компания предлагает услуги профессиональной укладки и другие работы по благоустройству частных территорий.',
  },
  {
    icon: iDelivery,
    title: 'Быстрая и удобная доставка',
    text: 'Развоз заказов осуществляется при помощи спецтехники – манипулятора, облегчающего процесс погрузки и разгрузки по Волоколамскому, Лотошинскому, Шаховскому району, Истре, Клину, Рузе.',
  },
  {
    icon: iCash,
    title: 'Демократичная стоимость',
    text: 'Если вы хотите подобрать и купить тротуарную плитку по наиболее выгодной цене в регионе – вам однозначно в «Мастер Строй»! У нас всегда первая цена напрямую от производителя!',
  },
  {
    icon: iQuality,
    title: 'Безупречный контроль качества продукции',
    text: 'Все материалы соответствуют техническим нормам ГОСТа, а тщательный контроль позволяет исключить риск попадания брака в партию.',
  },
]

/* ---------- Footer ---------- */
export const footerData = {
  hours: 'Режим работы: с 8:00 до 20:00',
  phones: ['+7 (926) 105-94-14', '+7 (910) 470-67-97', '+7 (499) 994-90-99'],
  columns: [
    {
      title: 'Каталог',
      links: [
        { label: 'Акции', href: '#top' },
        { label: 'Тротуарная плитка', href: '#catalog' },
        { label: 'Бордюры', href: '#catalog' },
      ],
    },
    {
      title: 'Сервисы',
      links: [
        { label: 'Дизайн-проект', href: '#works' },
        { label: 'Укладка брусчатки', href: '#works' },
        { label: 'Доставка', href: '#advantages' },
      ],
    },
    {
      title: 'О компании',
      links: [
        { label: 'Контакты', href: '#contacts' },
        { label: 'Завод BRAER', href: '#production' },
        { label: 'Портфолио', href: '#works' },
      ],
    },
  ],
  copyright: '© 2022 ООО "Мастер строй"',
}
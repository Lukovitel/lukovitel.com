import type { Locale } from './paths.ts'

export const partners = [
  { href: 'https://www.kyivstar.ua', en: 'Kyivstar', ru: 'Киевстар' },
  { href: 'https://www.vodafone.ua', en: 'Vodafone', ru: 'Vodafone' },
  { href: 'https://www.lifecell.ua', en: 'lifecell', ru: 'lifecell' },
  { href: 'https://www.ukrtelecom.ua', en: 'Ukrtelecom', ru: 'Укртелеком' },
  { href: 'https://www.kt.kg', en: 'Kyrgyztelecom', ru: 'Кыргызтелеком' },
  { href: 'https://www.tojiktelecom.tj', en: 'Tajiktelecom', ru: 'Таджиктелеком' },
  { href: 'https://www.telecom.kz', en: 'Kazakhtelecom', ru: 'Казтелеком' },
  { href: 'https://www.bakcell.com', en: 'Bakcell', ru: 'Bakcell' },
  { href: 'https://www.uztelecom.uz', en: 'Uztelecom', ru: 'Uztelecom' },
  {
    href: 'https://www.tatacommunications.com',
    en: 'Tata Communications',
    ru: 'Tata Communications',
  },
  {
    href: 'https://www.chinatelecomglobal.com',
    en: 'China Telecom Europe',
    ru: 'China Telecom Europe',
  },
] as const

const services = {
  en: [
    {
      index: '01',
      title: 'VoIP Wholesale',
      text: 'Wholesale voice calls. International traffic is accepted on Lukovitel servers and sent into fixed and mobile networks.',
    },
    {
      index: '02',
      title: 'SMS Wholesale',
      text: 'Wholesale SMS for carriers, exchanged under direct operator agreements.',
    },
    {
      index: '03',
      title: 'Call centers',
      text: 'Traffic and a platform for call centers, with ready technical solutions and special rates.',
    },
    {
      index: '04',
      title: 'VoIP Retail',
      text: 'Retail voice calls for partners that also need an end-user product.',
    },
  ],
  ru: [
    {
      index: '01',
      title: 'VoIP Wholesale',
      text: 'Оптовые голосовые вызовы. Международный трафик принимается на серверы Lukovitel и направляется в телефонные сети и сети мобильных операторов.',
    },
    {
      index: '02',
      title: 'SMS Wholesale',
      text: 'Оптовый обмен SMS для операторов связи по прямым договорам.',
    },
    {
      index: '03',
      title: 'Колл-центры',
      text: 'Трафик и платформа для колл-центров. Готовые технические решения и специальные тарифы.',
    },
    {
      index: '04',
      title: 'VoIP Retail',
      text: 'Розничные голосовые вызовы для партнёров, которым нужен и конечный продукт.',
    },
  ],
} as const

export const copy = {
  en: {
    htmlLang: 'en',
    metaTitle: 'Lukovitel — Wholesale voice and SMS',
    metaDescription:
      'Lukovitel is a wholesale voice and SMS carrier. International IP telephony since 2005, with servers in Rotterdam and Frankfurt.',
    mast: 'Wholesale carrier · since 2005',
    langLabel: 'Language',
    kicker: 'Since 2005 · voice and SMS for carriers',
    h1: 'Send traffic on a direct interconnect.',
    lede: 'Since 2005, Lukovitel has been a wholesale voice and SMS operator. Carriers and call centers deliver international traffic to servers in Rotterdam and Frankfurt. We send it on into fixed and mobile networks.',
    cta: 'Request routes',
    mailSubject: 'Wholesale voice and SMS routes',
    servicesLabel: 'Lines of business',
    services: services.en,
    networkLabel: 'The network',
    paragraphs: [
      'Lukovitel is a telecommunications company and a wholesale operator of voice and SMS. It has worked on the international carrier market for IP telephony since 2005 and holds direct contracts with telecoms and leading telephone operators in the CIS, Europe, the Americas, and Asia.',
      'International wholesale voice traffic and call-center calls are accepted on servers installed in major data centers in Rotterdam, the Netherlands, and Frankfurt, Germany, and sent into the telephone networks and mobile networks of different countries.',
      'The equipment is colocated in those data centers. The main physical connections and IP connections with international operators for the exchange of voice traffic are established there.',
      'Own interconnections into telephone networks, and direct contracts with operators and telecoms, make optimized rates for calls possible.',
      'Call centers are offered ready technical solutions and special rates.',
    ],
    placesLabel: 'Points of presence',
    places: [
      {
        city: 'Rotterdam',
        country: 'Netherlands',
        text: 'Servers in a major data center. Physical and IP connections with international operators.',
      },
      {
        city: 'Frankfurt',
        country: 'Germany',
        text: 'Colocation and the second set of interconnections into telephone networks.',
      },
    ],
    partnersLabel: 'Direct contracts',
    partnersIntro:
      'Partnerships with leading telecommunications operators:',
    teamLabel: 'Sales',
    personName: 'Andrew Lujansky',
    personRole: 'Sales',
    personText:
      'The desk for wholesale voice, SMS, and call-center routes. Write with destinations, volumes, and the type of traffic you want to send.',
    linkedin: 'LinkedIn',
    emailLabel: 'Email',
    footerNote: 'International IP telephony since 2005',
    contactLabel: 'Contact',
    contactOpen: 'Open contact options',
    contactClose: 'Close contact options',
  },
  ru: {
    htmlLang: 'ru',
    metaTitle: 'Lukovitel — оптовый голос и SMS',
    metaDescription:
      'Lukovitel — оператор оптовых услуг голосовой связи и SMS. IP-телефония с 2005 года. Серверы в Роттердаме и Франкфурте.',
    mast: 'Оптовый оператор · с 2005',
    langLabel: 'Язык',
    kicker: 'С 2005 года · голос и SMS для операторов',
    h1: 'Прямое включение для вашего трафика.',
    lede: 'С 2005 года Lukovitel оказывает оптовые услуги голосовой связи и SMS. Операторы и колл-центры сдают международный трафик на серверы в Роттердаме и Франкфурте. Мы направляем его в телефонные и мобильные сети.',
    cta: 'Запросить маршруты',
    mailSubject: 'Оптовые маршруты голоса и SMS',
    servicesLabel: 'Направления',
    services: services.ru,
    networkLabel: 'Сеть',
    paragraphs: [
      'Телекоммуникационная компания Lukovitel — оператор оптовых услуг голосовой связи и SMS. С 2005 года работает на международном операторском рынке IP-телефонии и имеет прямые договоры со многими телекомами и ведущими телефонными операторами стран СНГ, Европы, Америки и Азии.',
      'На серверы в крупных дата-центрах Роттердама (Нидерланды) и Франкфурта (Германия) принимается международный оптовый телефонный трафик и звонки с колл-центров. Оттуда трафик направляется в телефонные сети и сети мобильных операторов разных стран.',
      'Оборудование размещено на колокации в этих дата-центрах. На площадках выполнены основные физические соединения и соединения по IP с международными операторами для обмена телефонным трафиком.',
      'Собственные включения в телефонные сети и прямые договоры с операторами связи и телекомами позволяют предлагать оптимизированные тарифы на звонки.',
      'Для колл-центров есть готовые технические решения и специальные тарифы.',
    ],
    placesLabel: 'Площадки',
    places: [
      {
        city: 'Роттердам',
        country: 'Нидерланды',
        text: 'Серверы в крупном дата-центре. Физические и IP-соединения с международными операторами.',
      },
      {
        city: 'Франкфурт',
        country: 'Германия',
        text: 'Колокация и второй узел включений в телефонные сети.',
      },
    ],
    partnersLabel: 'Прямые договоры',
    partnersIntro: 'Партнёры — ведущие телекоммуникационные операторы:',
    teamLabel: 'Продажи',
    personName: 'Andrew Lujansky',
    personRole: 'Продажи',
    personText:
      'Стол по оптовому голосу, SMS и маршрутам для колл-центров. Напишите направления, объёмы и тип трафика, который хотите сдавать.',
    linkedin: 'LinkedIn',
    emailLabel: 'Почта',
    footerNote: 'Операторский рынок IP-телефонии с 2005 года',
    contactLabel: 'Связь',
    contactOpen: 'Открыть способы связи',
    contactClose: 'Закрыть способы связи',
  },
} as const

export type Copy = (typeof copy)[Locale]

export const salesEmail = 'andrew@lukovitel.com'
export const telegramUrl = 'https://t.me/lukovitel'
export const whatsappUrl = 'https://wa.me/lukovitel'
export const teamsUrl =
  'https://teams.microsoft.com/l/chat/0/0?users=andrew@lukovitel.com'
export const linkedinUrl = 'https://www.linkedin.com/in/andrew-lujansky-360a44314/'

export function mailHref(subject: string): string {
  return `mailto:${salesEmail}?subject=${encodeURIComponent(subject)}`
}

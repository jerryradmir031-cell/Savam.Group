export const siteConfig = {
  name: "SAVAM GROUP",
  title: "SAVAM GROUP — разработка сайтов в Казахстане",
  description:
    "Разрабатываем лендинги, сайты компаний и интернет-магазины. Посмотрите примеры сайтов SAVAM GROUP и обсудите свой проект.",
  telegramHandle: "@savamgroup",
  telegramUrl: "https://t.me/savamgroup",
  phone: "+7 771 243 66 38",
  phoneHref: "tel:+77712436638",
  email: "savam.group@gmail.com",
  emailHref: "mailto:savam.group@gmail.com",
} as const;

export function formatKzt(value: number): string {
  return new Intl.NumberFormat("ru-KZ", {
    style: "currency",
    currency: "KZT",
    maximumFractionDigits: 0,
  }).format(value);
}

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { DesktopNav, MobileNav } from "@/components/Nav";
import { WorkLightbox } from "@/components/WorkLightbox";

const workItems = [
  {
    src: "/projects/architecture-concept.svg",
    alt: "Архитектурное бюро · концепт сайта",
    width: 1440,
    height: 1024,
  },
  {
    src: "/projects/furniture-product-concept.svg",
    alt: "Мебельный магазин · концепт интернет-магазина",
    width: 1440,
    height: 1024,
  },
];

const services = [
  {
    title: "Лендинг",
    description:
      "Одна страница для конкретной услуги, продукта или акции. Посетитель знакомится с предложением и может сразу оставить заявку.",
  },
  {
    title: "Сайт компании",
    description:
      "Услуги, проекты и контакты на отдельных страницах. Подходит, когда клиенту важно разобраться, чем вы занимаетесь, и посмотреть ваши работы.",
  },
  {
    title: "Интернет-магазин",
    description:
      "Каталог, карточки товаров, корзина и оформление заказа. Подключим оплату и доставку с учётом того, как работает ваш магазин.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-[2px] border-b border-[var(--line)]">
        <div className="container-page relative flex items-center justify-between h-[72px] md:h-[80px]">
          <a href="#" className="inline-flex items-center shrink-0" aria-label="SAVAM GROUP — на главную">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-header.svg"
              alt="SAVAM GROUP"
              width={180}
              height={56}
              className="h-10 md:h-12 w-auto"
            />
          </a>
          <DesktopNav />
          <MobileNav />
        </div>
      </header>

      <main>
        <section className="container-page pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-20 items-end">
            <div className="max-w-[34rem]">
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.035em] font-semibold text-balance">
                Разрабатываем сайты для бизнеса
              </h1>
              <p className="mt-6 text-[17px] md:text-[18px] leading-[1.65] text-[var(--muted)] max-w-[31rem]">
                Делаем лендинги, сайты компаний и интернет-магазины. Берём на себя дизайн, разработку и запуск.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href="#contacts" className="btn-primary">
                  Обсудить проект
                </a>
                <a href="#work" className="text-link text-[15px] font-medium">
                  Посмотреть работы
                </a>
              </div>
            </div>

            <div className="w-full">
              <div className="bg-[var(--bg-soft)] p-3 sm:p-4 md:p-5">
                <Image
                  src="/projects/furniture-hero-concept.svg"
                  alt="Концепт главной страницы мебельного магазина: коллекция кресел в интерьере"
                  width={1440}
                  height={1024}
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-[var(--line)] scroll-mt-24">
          <div className="container-page py-16 md:py-24 lg:py-28">
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="section-label mb-4">Работы</p>
              <h2 className="text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.05] tracking-[-0.03em] font-semibold text-balance">
                Примеры сайтов
              </h2>
            </div>
            <WorkLightbox items={workItems} />
          </div>
        </section>

        <section id="services" className="bg-[var(--bg-soft)] border-y border-[var(--line)] scroll-mt-24">
          <div className="container-page py-16 md:py-24 lg:py-28">
            <div className="max-w-2xl mb-12 md:mb-14">
              <p className="section-label mb-4">Услуги</p>
              <h2 className="text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.05] tracking-[-0.03em] font-semibold text-balance">
                Какой сайт вам нужен?
              </h2>
            </div>

            <div className="border-t border-[var(--line)]">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="grid gap-3 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] md:gap-12 py-7 md:py-8 border-b border-[var(--line)]"
                >
                  <h3 className="text-[1.375rem] md:text-[1.5rem] leading-[1.2] tracking-[-0.02em] font-medium">
                    {service.title}
                  </h3>
                  <p className="text-[16px] md:text-[17px] leading-[1.7] text-[var(--muted)] max-w-[42rem]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[15px] text-[var(--muted)]">
              Стоимость рассчитываем в тенге после обсуждения задачи.
            </p>
          </div>
        </section>

        <section id="contacts" className="scroll-mt-24">
          <div className="container-page py-16 md:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16 items-start">
              <div className="max-w-[38rem]">
                <p className="section-label mb-4">Контакты</p>
                <h2 className="text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.05] tracking-[-0.03em] font-semibold text-balance">
                  Обсудим ваш сайт?
                </h2>
                <p className="mt-6 text-[17px] md:text-[18px] leading-[1.7] text-[var(--muted)] max-w-[32rem]">
                  Расскажите, какой сайт вам нужен. Обсудим задачу, сроки и стоимость разработки.
                </p>
              </div>

              <div className="bg-[var(--bg-soft)] p-6 sm:p-8 md:p-10">
                <a
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Написать в Telegram
                </a>

                <dl className="mt-8 space-y-5 text-[16px]">
                  <div>
                    <dt className="text-[13px] uppercase tracking-[0.06em] text-[var(--muted)] mb-1">Telegram</dt>
                    <dd>
                      <a href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                        {siteConfig.telegramHandle}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] uppercase tracking-[0.06em] text-[var(--muted)] mb-1">Телефон</dt>
                    <dd>
                      <a href={siteConfig.phoneHref} className="text-link">
                        {siteConfig.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] uppercase tracking-[0.06em] text-[var(--muted)] mb-1">Почта</dt>
                    <dd>
                      <a href={siteConfig.emailHref} className="text-link break-words">
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="container-page py-8 md:py-10 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-header.svg"
              alt="SAVAM GROUP"
              width={140}
              height={44}
              className="h-8 w-auto"
            />
            <span className="text-[14px] text-[var(--muted)]">{siteConfig.name}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2.5 text-[15px] font-medium text-[var(--ink)] border border-[var(--line)] rounded-[2px]"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Закрыть" : "Меню"}
      </button>
      {open && (
        <nav
          id="mobile-nav"
          className="absolute left-0 right-0 top-full bg-white border-b border-[var(--line)] px-4 py-5"
        >
          <div className="flex flex-col gap-4">
            <a
              href="#work"
              className="text-[16px] text-[var(--ink)] py-1"
              onClick={() => setOpen(false)}
            >
              Работы
            </a>
            <a
              href="#services"
              className="text-[16px] text-[var(--ink)] py-1"
              onClick={() => setOpen(false)}
            >
              Услуги
            </a>
            <a
              href="#contacts"
              className="btn-primary w-full mt-1"
              onClick={() => setOpen(false)}
            >
              Обсудить проект
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
      <a href="#work" className="text-[15px] text-[var(--ink)] hover:text-[var(--muted)] transition-colors">
        Работы
      </a>
      <a href="#services" className="text-[15px] text-[var(--ink)] hover:text-[var(--muted)] transition-colors">
        Услуги
      </a>
      <a href="#contacts" className="btn-primary">
        Обсудить проект
      </a>
    </nav>
  );
}

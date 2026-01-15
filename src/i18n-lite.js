// src/i18n-lite.js
import React, { createContext, useContext, useMemo, useState } from "react";

const resources = {
    en: {
        filter: { stories: "Filter stories: " },
        nav: { intro: "Introduction", stories: "Stories", search: "Search" },
        card: {
            chooseCategory: "Choose a category",
            chooseOption: "Choose an option"
        },
        button: { ok: "OK", cancel: "Cancel" }
    },
    pt: {
        filter: { stories: "Filtrar histórias: " },
        nav: { intro: "Introdução", stories: "Histórias", search: "Buscar" },
        card: {
            chooseCategory: "Escolha uma categoria",
            chooseOption: "Escolha a opção"
        },
        button: { ok: "OK", cancel: "Cancelar" }
    },
    es: {
        filter: { stories: "Filtrar historias: " },
        nav: { intro: "Introducción", stories: "Historias", search: "Buscar" },
        card: {
            chooseCategory: "Elige una categoría",
            chooseOption: "Elige una opción"
        },
        button: { ok: "OK", cancel: "Cancelar" }
    }
};

const TranslationContext = createContext();

export function TranslationProvider({ children, defaultLang = "pt" }) {

    const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || defaultLang;
    const baseLang = (localStorage.getItem("lang") || browserLang || defaultLang).split("-")[0];

    const [lang, setLang] = useState(baseLang);

    const t = (key) => {

        const parts = key.split(".");
        const val = parts.reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), resources[lang]);
        if (val !== undefined) return val;

        const fallback = parts.reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), resources.en);
        return fallback !== undefined ? fallback : key;
    };

    const changeLanguage = (newLang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    const value = useMemo(() => ({ lang, t, changeLanguage }), [lang]);

    return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
    const ctx = useContext(TranslationContext);
    if (!ctx) throw new Error("useTranslation must be used inside TranslationProvider");
    return ctx;
}

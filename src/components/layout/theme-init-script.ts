/**
 * Inline in <head> before paint: sets `dark` on `<html>` from localStorage or
 * prefers-color-scheme. Tradeoffs: SSR HTML has no `dark` class; the script runs
 * before first paint so flash is usually minimal. ThemeToggle defers its button until mount.
 */
export const THEME_STORAGE_KEY = "creative-tech-catalog-theme";

export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var r=document.documentElement;if(s==="dark"){r.classList.add("dark");}else if(s==="light"){r.classList.remove("dark");}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){r.classList.add("dark");}else{r.classList.remove("dark");}}catch(e){}})();`;

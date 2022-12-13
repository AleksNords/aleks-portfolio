import { writable } from 'svelte/store';
import { browser } from "$app/environment";

let storedTheme;

if (browser){
 storedTheme = localStorage.getItem("theme");
}

export const theme = writable(storedTheme ? storedTheme : "dark");
// ==UserScript==
// @name        Anime and Manga theme
// @namespace   https://github.com/The-Quill/Anime-and-Manga-Design
// @version     1.0
// @description A new A&M theme.
// @author      Quill
// @match       *://anime.stackexchange.com
// @match       *://anime.stackexchange.com/*
// @match       *://meta.anime.stackexchange.com
// @match       *://meta.anime.stackexchange.com/*
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @resource    theme     https://raw.githubusercontent.com/The-Quill/Anime-and-Manga-Design/master/resources/min.design.css
// @resource    main_skin https://raw.githubusercontent.com/The-Quill/Anime-and-Manga-Design/master/resources/min.main.css
// @resource    meta_skin https://raw.githubusercontent.com/The-Quill/Anime-and-Manga-Design/master/resources/min.meta.css
// ==/UserScript==

GM_addStyle(GM_getResourceText('theme'));

GM_addStyle(
    GM_getResourceText(
        (window.location.href.contains('://meta.anime')
        ? 'meta'
        : 'main') + '_skin')
);
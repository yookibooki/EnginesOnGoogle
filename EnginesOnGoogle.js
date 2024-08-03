// ==UserScript==
// @name    EnginesOnGoogle
// @description Adds icons to Google results for quick access to other search engines and resources.
// @match   https://www.google.com/search*
// ==/UserScript==

(function() {
    'use strict';

    const searchEngines=[
        {n:'Yandex',u:'https://ya.ru/search/?text=',i:'https://ya.ru/favicon.ico'},
        {n:'Bing',u:'https://www.bing.com/search?q=',i:'https://www.bing.com/favicon.ico'},
        {n:'DuckDuckGo',u:'https://duckduckgo.com/?q=',i:'https://www.duckduckgo.com/favicon.ico'},
        {n:'Startpage',u:'https://www.startpage.com/do/search?q=',i:'https://www.startpage.com/favicon.ico'},
        {n:'Brave Search',u:'https://search.brave.com/search?q=',i:'https://www.google.com/s2/favicons?domain=search.brave.com&sz=32'},
        {n:'Qwant',u:'https://www.qwant.com/?q=',i:'https://www.qwant.com/favicon.ico'},
        {n:'Searx',u:'https://search.inetol.net/search?q=',i:'https://search.inetol.net/favicon.ico'},
        {n:'Yahoo',u:'https://search.yahoo.com/search?p=',i:'https://www.yahoo.com/favicon.ico'},
        {n:'Perplexity',u:'https://www.perplexity.ai/search?q=',i:'https://www.google.com/s2/favicons?domain=perplexity.ai&sz=32'},
        {n:'Ecosia',u:'https://www.ecosia.org/search?q=',i:'https://www.ecosia.org/favicon.ico'},
        {n:'Ask',u:'https://www.ask.com/web?q=',i:'https://www.ask.com/favicon.ico'},
        {n:'Reddit',u:'https://www.reddit.com/search?q=',i:'https://www.reddit.com/favicon.ico'},
        {n:'Medium',u:'https://medium.com/search?q=',i:'https://www.google.com/s2/favicons?domain=medium.com&sz=32'},
        {n:'Wikipedia',u:'https://en.wikipedia.org/wiki/Special:Search?search=',i:'https://en.wikipedia.org/favicon.ico'},
        {n:'ChatGPT',u:'https://chat.openai.com/?q=',i:'https://chat.openai.com/favicon.ico'},
        {n:'Quora',u:'https://www.quora.com/search?q=',i:'https://www.quora.com/favicon.ico'},
        {n:'GitHub',u:'https://github.com/search?q=',i:'https://github.com/favicon.ico'},
        {n:'Stack Overflow',u:'https://stackoverflow.com/search?q=',i:'https://stackoverflow.com/favicon.ico'},
        {n:'LibGen',u:'https://libgen.is/search.php?req=',i:'https://libgen.is/favicon.ico'},
        {n:'Internet Archive',u:'https://archive.org/search.php?query=',i:'https://archive.org/favicon.ico'},
        {n:'Libgen',u:'http://libgen.rs/search.php?req=',i:'http://libgen.rs/favicon.ico'}
    ];

    function addSearchIcons() {
        const q=new URLSearchParams(window.location.search).get('q');
        if(!q)return;
        const container=document.createElement('div');
        container.style.textAlign='center';
        container.style.margin='10px 0';
        searchEngines.forEach(engine=>{
            const a=document.createElement('a');
            a.href=`${engine.u}${encodeURIComponent(q)}`;
            a.target='_blank';
            const img=document.createElement('img');
            img.src=engine.i;
            img.width=24;
            img.height=24;
            img.alt=`${engine.n} search`;
            img.style.margin='0 5px';
            a.appendChild(img);
            container.appendChild(a);
        });
        const results=document.querySelector('#search');
        if(results)results.insertAdjacentElement('beforebegin',container);
    }

    addSearchIcons();
})();

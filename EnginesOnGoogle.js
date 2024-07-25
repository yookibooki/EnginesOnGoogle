// ==UserScript==
// @name    EnginesOnGoogle
// @match   https://www.google.com/search?q=*
// ==/UserScript==

(function() {
    'use strict';

    const searchEngines=[
        {n:'Yandex',u:'https://yandex.com/search/?text=',i:'https://yandex.com/favicon.ico'},
        {n:'Bing',u:'https://www.bing.com/search?q=',i:'https://www.bing.com/favicon.ico'},
        {n:'DuckDuckGo',u:'https://duckduckgo.com/?q=',i:'https://www.duckduckgo.com/favicon.ico'},
        {n:'Perplexity',u:'https://www.perplexity.ai/search?q=',i:'https://www.google.com/s2/favicons?domain=perplexity.ai&sz=32'},
        {n:'Ecosia',u:'https://www.ecosia.org/search?q=',i:'https://www.ecosia.org/favicon.ico'},
        {n:'Ask',u:'https://www.ask.com/web?q=',i:'https://www.ask.com/favicon.ico'},
        {n:'Reddit',u:'https://www.reddit.com/search?q=',i:'https://www.reddit.com/favicon.ico'},
        {n:'Medium',u:'https://medium.com/search?q=',i:'https://medium.com/favicon.ico'},
        {n:'Wikipedia',u:'https://en.wikipedia.org/wiki/Special:Search?search=',i:'https://en.wikipedia.org/favicon.ico'},
        {n:'Searx',u:'https://searx.org/search?q=',i:'https://searx.org/favicon.ico'},
        {n:'Yahoo',u:'https://search.yahoo.com/search?p=',i:'https://www.yahoo.com/favicon.ico'},
        {n:'ChatGPT',u:'https://chat.openai.com/?q=',i:'https://chat.openai.com/favicon.ico'},
        {n:'Quora',u:'https://www.quora.com/search?q=',i:'https://www.quora.com/favicon.ico'},
        {n:'GitHub',u:'https://github.com/search?q=',i:'https://github.com/favicon.ico'},
        {n:'Stack Overflow',u:'https://stackoverflow.com/search?q=',i:'https://stackoverflow.com/favicon.ico'},
        {n:'Brave Search',u:'https://search.brave.com/search?q=',i:'https://www.google.com/s2/favicons?domain=search.brave.com&sz=32'},
        {n:'Qwant',u:'https://www.qwant.com/?q=',i:'https://www.qwant.com/favicon.ico'},
        {n:'Scientific American',u:'https://www.scientificamerican.com/search/?q=',i:'https://www.scientificamerican.com/favicon.ico'},
        {n:'JSTOR',u:'https://www.jstor.org/action/doBasicSearch?Query=',i:'https://www.jstor.org/favicon.ico'},
        {n:'IEEE Xplore',u:'https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=',i:'https://www.google.com/s2/favicons?domain=ieeexplore.ieee.org&sz=32'},
        {n:'PubChem',u:'https://pubchem.ncbi.nlm.nih.gov/search/?term=',i:'https://pubchem.ncbi.nlm.nih.gov/favicon.ico'},
        {n:'Google Books',u:'https://books.google.com/books?q=',i:'https://books.google.com/favicon.ico'},
        {n:'Internet Archive',u:'https://archive.org/search.php?query=',i:'https://archive.org/favicon.ico'},
        {n:'Project Gutenberg',u:'https://www.gutenberg.org/ebooks/search/?query=',i:'https://www.gutenberg.org/favicon.ico'},
        {n:'Open Library',u:'https://openlibrary.org/search?q=',i:'https://openlibrary.org/favicon.ico'},
        {n:'Libgen',u:'http://libgen.rs/search.php?req=',i:'http://libgen.rs/favicon.ico'},
        {n:'WorldCat',u:'https://www.worldcat.org/search?q=',i:'https://www.google.com/s2/favicons?domain=worldcat.org&sz=32'},
        {n:'LibraryThing',u:'https://www.librarything.com/searchers/?q=',i:'https://www.librarything.com/favicon.ico'},
        {n:'OAIster',u:'https://oaister.worldcat.org/search?q=',i:'https://www.google.com/s2/favicons?domain=oaister.worldcat.org&sz=32'},
        {n:'Europeana',u:'https://www.europeana.eu/en/search?query=',i:'https://www.google.com/s2/favicons?domain=europeana.eu&sz=32'},
        {n:'Digital Public Library of America',u:'https://dp.la/search?q=',i:'https://www.google.com/s2/favicons?domain=dp.la&sz=32'}
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

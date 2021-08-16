(function(){
    const url = "https://player.vimeo.com/video/";
    const list = [
        {name:"Busca Inteligente", link: "551991165"},
        {name:"Retargeting", link: "552010405"},
        {name:"Como usar IA para recomendar produtos e alavancar suas vendas", link: "552489261"}
    ];
    let ul = "<ul style='list-style: decimal;margin: 0;padding: 0;'>"
    list.forEach(el=>ul += `<li id='${el.link}' style="padding: 10px 0px; font-size: 16px;">${el.name}</li>`);
    ul += '</ul>';
    document.body.innerHTML = `<div style='display: flex;'><div style="width: 35%; padding: 20px 45px;">${ul}</div><div  style="width: 65%;padding: 20px;"><iframe src="" style="width: 100%; height: 500px; border: none;" allowfullscreen></iframe></div></div><style>li:hover{cursor:pointer;}</style>`;
    list.forEach(el => document.getElementById(+el.link).addEventListener('click', function(){document.querySelector('iframe').setAttribute('src', url+el.link)}))

})();

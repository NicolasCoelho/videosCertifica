(function(){
    const url = "https://player.vimeo.com/video/";
    const list = [
        {name:"Processo de implantação", link: "451457666"},
        {name:"Definiçoes iniciais", link: "451472538"},
        {name:"Estruturando a loja", link: "451474468"},
        {name:"Grupos de configurações", link: "451475559"},
        {name:"Contratos", link: "451476802"},
        {name:"Canal", link: "451477718"},
        {name:"Lista de preços", link: "451478584"},
        {name:"Meios de pagamento", link: "451479812"},
        {name:"Meio de entrega", link: "451480722"},
        {name:"Estoques", link: "451481591"},
        {name:"Multi-estoque", link: "451482738"},
        {name:"Catalogo de produtos", link: "451483530"},
        {name:"Catalogo de produtos - METADADOS", link: "451484590"},
        {name:"Catalogo de produtos - DEFINIÇOES DE PRODUTOS", link: "451486131"},
        {name:"Catalogo de produtos - CATEGORIAS", link: "451487202"},
        {name:"Catalogo de produtos - GESTÃO DE PRODUTOS", link: "451488571"},
        {name:"Catalogo de produtos - SERVIÇOS ADICIONAIS E FACETAS DE PESQUISA", link: "451490084"},
        {name:"Promoções", link: "451491829"},
        {name:"Programa de pontos", link: "449226777"},
        {name:"Análise de risco", link: "451494223"},
        {name:"Fluxo", link: "451508689"},
        {name:"Representante de vendas", link: "451511085"},
        {name:"Trocas e devoluções", link: "451513095"},
        {name:"Módulo de marketplaces", link: "451516533"},
        {name:"Integrações", link: "451520519"},
        {name:"Ecossistema Linx", link: "451522747"},
        {name:"Importações", link: "451525016"},
        {name:"Feeds de produtos e publicação da loja", link: "451526642"},
    ];

    let ul = "<ul style='list-style: decimal;margin: 0;padding: 0;'>"
    list.forEach(el=>ul += `<li id='${el.link}' style="padding: 10px 0px; font-size: 16px;">${el.name}</li>`);
    ul += '</ul>';
    document.body.innerHTML = `<div style='display: flex;'><div style="width: 35%; padding: 20px 45px;">${ul}</div><div  style="width: 65%;padding: 20px;"><iframe src="" style="width: 100%; height: 500px; border: none;" allowfullscreen></iframe></div></div><style>li:hover{cursor:pointer;}</style>`;
    list.forEach(el => document.getElementById(+el.link).addEventListener('click', function(){document.querySelector('iframe').setAttribute('src', url+el.link)}))

})();

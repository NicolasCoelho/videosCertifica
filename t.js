(function(){
    const url = "https://player.vimeo.com/video/";
    const list = [
        {name:"Area de trabalho", link: "442045007"},
        
        {name:"Cadastro de produtos, marcas, carrossel, estrutura de categorias", link: "442401849"},
        
        {name:"Flags", link: "442046004"},
    
        {name:"Produtos sob consulta, Política de compra e Formulário de compra", link: "442047982"},
        
        {name:"SEO e Descrições", link: "442049487"},
        
        {name:"Mídias e associações", link: "442051357"},
        
        {name:"SKU´s - Gestão de estoque e preços", link: "442052519"},
        
        {name:"Atributos e definições de produtos", link: "442056340"},
        
        {name:"Filtros (facetas de pesquisa ), Tags, formas de produtos e avaliações", link: "442058583"},
        
        {name:"Serviços adicionais.(Parte 2)", link: "442060758"},
        
        {name:"Kits de produtos", link: "442062698"},
        
        {name:"Listas de produtos", link: "442064783"},
        
        {name:"Cadastro de clientes e metadados", link: "442392503"},
        
        {name:"Canais e multicanais", link: "442396653"},
        
        {name:"Gerenciamento de modelos de negócios", link: "442399553"},
        
        {name:"Meios de pagamento", link: "488885889"},
        
        {name:"Vale compras", link: "447106899"},
        
        {name:"Meios de entrega", link: "447108089"},
        
        {name:"Meios de entraga - Configuraçoes", link: "447109230"},
        
        {name:"Gestão de Backoffice", link: "447109960"},
        
        {name:"Carrinhos abandonados e pre pedidos", link: "447110904"},
        
        {name:"Itens de estoque", link: "447111504"},
        
        {name:"Regras de preço", link: "447112308"},
        
        {name:"Trocas e devoluções", link: "447113441"},
    
        {name:"Pedidos", link: "447114849"},
    
        {name:"Pedidos", link: "447116235"},
    
        {name:"Fluxo de trocas e devoluções", link: "447114849"},
    
        {name:"Representantes de vendas", link: "447118856"},
    
        {name:"Parametrização de usuário", link: "447119936"},
    
        {name:"Relatórios", link: "447122086"},
    
        {name:"Entrega e mapeamento de URL", link: "447123190"},
    
        {name:"Configurações gerais", link: "447124668"},
    
        {name:"Integrações", link: "447125742"},
    
        {name:"Configurações adicionais", link: "449251738"},
    
        {name:"Gestão de Banners", link: "447127489"},
        
        {name:"Newsletter", link: "447128352"},
        
        {name:"Páginas Institucionais", link: "447129331"},
    
        {name:"Templates de Email", link: "447130374"},
    
        {name:"Programas de pontos", link: "449226777"},
    
        {name:"Feed de produtos e formatos de feed", link: "449228083"},
    
        {name:"Vitrines de produtos", link: "449230086"},
    
        {name:"Cupom e vale compras", link: "449230766"},
    
        {name:"Criação de promoção", link: "449233166"},
    
        {name:"Canais e regulamento", link: "449233877"},
    
        {name:"Ações promocionais", link: "449236048"},
    
        {name:"Promoção de produtos", link: "449237268"},
        
        {name:"Promoção de pedidos", link: "449239144"},
    
        {name:"Promoção de entrega", link: "449241146"},
        
        {name:"Promoção por meio de entrega", link: "449242378"},
    
        {name:"Acionamentos promocionais", link: "449243742"},
    
        {name:"Promoções - Origens de acesso", link: "449245213"},
    
        {name:"Situações promocionais", link: "449247328"},
    ];

    let ul = "<ul style='list-style: decimal;margin: 0;padding: 0;'>"
    list.forEach(el=>ul += `<li id='${el.link}' style="padding: 10px 0px; font-size: 16px;">${el.name}</li>`);
    ul += '</ul>';
    document.body.innerHTML = `<div style='display: flex;'><div style="width: 35%; padding: 20px 45px;">${ul}</div><div  style="width: 65%;padding: 20px;"><iframe src="" style="width: 100%; height: 500px; border: none;" allowfullscreen></iframe></div></div><style>li:hover{cursor:pointer;}</style>`;
    list.forEach(el => document.getElementById(+el.link).addEventListener('click', function(){document.querySelector('iframe').setAttribute('src', url+el.link)}))

})();

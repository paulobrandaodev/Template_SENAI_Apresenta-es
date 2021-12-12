// EMPRESAS PARCEIRAS ---------------------------------------------------------------------------

let empresas = [
    {img : "avanade.png"},
    {img : "cargox.png"},
    {img : "darede.png"},
    {img : "fyi.png"},
    {img : "intelitrader.svg"},
    {img : "linx.png"},
    {img : "stil.svg"},
    {img : "skillstelecom.png"},            
];

getEmpresas = () => {

    let empresasParceiras   = document.querySelector('#empresasParceiras');
    let listarempresas = empresas.map(item => "<div class='single-brand'><img src=img/empresas/"+item.img+" alt=''/></div>");           
    empresasParceiras.innerHTML = listarempresas.join('');
}

getEmpresas();

// APRESENTAÇÕES - GRUPOS -----------------------------------------------------------------------

let apresentacoes = [
    {
        data : '16/12',
        idData : 'dia1',
        empresas : [
            {
                nome : 'Avanade Learning',
                empresaImg : 'img/empresas/avanade.png',
                grupoImg : 'img/times/Avanade Learning.png',
                grupoQrCode: 'img/qrcode.png',
                descricao: 'A Avanade Learning é uma plataforma de ensino que conta com cursos livres de diferentes áreas obtendo foco no ensino gamificado.',
                time : 'Time 09',
                horario : '8:00',
                integrantes : [
                    {nome : 'Pedro Henrique'},
                    {nome : 'Gustavo Tolentino'},
                    {nome : 'Joyce Santos'},
                    {nome : 'Lucas Araújo'},
                ],
                mentores : 'Fernando Guerra'
            },
            {
                nome : 'M3LC',
                empresaImg : 'img/empresas/linx.png',
                grupoImg : 'img/times/M3LC.png',
                grupoQrCode: 'img/qrcode.png',
                descricao: 'Uma API baseada em OCR, para leitura de documentos, com um sistema Search de palavras chaves.',
                time : 'Time 05',
                horario : '8:30',
                integrantes : [
                    {nome : 'Lucas Neves'},
                    {nome : 'Matheus David'},
                    {nome : 'Camila Prado'},
                    {nome : 'Letícia Araújo'},
                    {nome : 'Leandro Rangel'},
                ],
                mentores : 'Daniel e Hugo'
            },
            {
                nome : 'Quadline Solutions',
                empresaImg : 'img/empresas/cargox.png',
                grupoImg : 'img/times/logoGrupo3-sem-fundo.png',
                grupoQrCode: 'img/qrcode.png',
                descricao: 'Sistema de retrospectiva para usuários (Mobile), e um sistema de monitoramento de dados em dashboard (web).',
                time : 'Time 03',
                horario : '9:00',
                integrantes : [
                    {nome : 'Gabriela Gonzaga'},
                    {nome : 'Lucas Silva'},
                    {nome : 'Erika Leite'},
                    {nome : 'Leandro Cavalcanti'},
                ],
                mentores : 'Caroline e José William'
            },
        ]
    },
    {
        data : '17/12',
        idData : 'dia2',
        empresas : [
            {
                nome : 'Avanade Learning 2',
                empresaImg : 'img/empresas/avanade.png',
                grupoImg : 'img/empresas/avanade.png',
                grupoQrCode: 'img/qrcode.png',
                descricao: 'A Avanade Learning é uma plataforma de ensino que conta com cursos livres de diferentes áreas obtendo foco no ensino gamificado.',
                time : 'Time 08',
                horario : '9:00',
                integrantes : [
                    {nome : 'Pedro Henrique 2'},
                    {nome : 'Gustavo Tolentino 2'},
                    {nome : 'Joyce Santos 2'},
                    {nome : 'Lucas Araújo 2'},
                ],
                mentores : 'Fernando Guerra'
            },
        ]
    },
    
]


LoadData = () => {

    let dias = '';
    let timeline = '';
    let empresasListadas = '';

    apresentacoes.map((item, key) => {
        
        empresasListadas = '';

        let active = '';
        let show = '';
        if(key == 0){ 
            active = 'active';
            show = 'show'
        }

        dias += 
        `<li role="presentation">
            <a class="${active}" href="#${item.idData}" aria-controls="${item.idData}" role="tab" data-bs-toggle="tab">${item.data}</a>
        </li>`;
        
        item.empresas.map(empresa => {
            empresasListadas += 
            `<div class="single-timeline shadow-box">
                <div class="timeline-left">
                    <h4>${empresa.horario}</h4>
                    <p>${empresa.time}</p>
                    <img src="${empresa.empresaImg}" alt="">
                </div>
                <div class="timeline-right">
                    <div class="timeline-img">
                        <img src="${empresa.grupoImg}" alt="">
                        <img src="${empresa.grupoQrCode}" alt="">
                    </div>
                    <div class="timeline-content">
                        <h4>${empresa.nome}</h4>
                        <p>${empresa.descricao}</p>
                        <h5>Integrantes: </h5>
                        <ol class="integrantes">
                            `+ empresa.integrantes.map(integrante => `<li>${integrante.nome}</li>`).join('') +`
                        </ol>
                        <h5>Mentores: ${empresa.mentores}</h5>
                    </div>
                </div>
            </div>`;
        });

        timeline += 
        `<div role="tabpanel" class="tab-pane fade ${show} ${active}" id="${item.idData}">
            <div class="total-timeline">
                ${empresasListadas}
            </div>
        </div>
        `;


    });

    document.querySelector('.timeline-tab').innerHTML = dias;
    document.querySelector('.tab-content').innerHTML = timeline;
}

LoadData();


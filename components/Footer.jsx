import Icons from "./Icons"
import Linkfooter from "./Linkfooter"
import LogoPreta from "./LogoPreta"
import Texto from "./Texto"


export default function Footer() {

    const listaH1 = [
        '.Argentina',
        '.México',
        '.Chile'
    ]
    const listaP = [
        'Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA',
        'Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX',
        'Roberto del Río 1137, Providencia.'
    ]
    
    const listaSubMenu = [
        'a corebiz',
        'serviços',
        'cases',
        'contato'
    ]

    const listaLinksSubMenu = [
        'https://www.corebiz.ag/pt/about',
        'https://www.corebiz.ag/pt/#framework-title',
        'https://www.corebiz.ag/pt/cases',
        'https://www.corebiz.ag/pt/contato'
    ]


    function iterandoLista(){
        const outPut = []
        for(let i = 0; i < listaH1.length ; i++){
            outPut.push(<Texto
                key = {i}
                h1 = {listaH1[i]}
                p  = {listaP[i]}
            />)
        }
        return outPut
        
    }

    function iterandoListaMenu(){
        const outPut = []
        for(let i = 0; i <= listaH1.length ; i++){
            outPut.push(<Linkfooter
                key = {i}
                href = {listaLinksSubMenu[i]}
                nomelink  = {listaSubMenu[i]}
            />)
        }
        return outPut
        
    }

    
    return (

        <footer className="footer">
        
            <div className="footerContent1">
                <div className="footerSubContent">
                <div className="logoPretaContent">
                    <LogoPreta/>
                </div>
                <div className="direitosContent">
                <p className='direitosContent'>
                    direitos reservados. corebiz 2021
                </p>
                </div>
                <div className="iconsContent">
                    <Icons/>
                </div>
                </div>
                
                <div className='FooterMargin '>
                {iterandoListaMenu()}
                </div>
            </div>
            <div className="footerContent2">
                <Texto
                    h1 = '.Brasil'
                    p  = 'Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP'
                    p2  = 'R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP'
               />
               {iterandoLista()}
            </div>
        </footer>
    )
}; 
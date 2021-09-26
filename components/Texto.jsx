

export default function Texto(props) {
    return (

        <div className="textoContent">
            <div className="textoTitulo">
                <h1 className="textoTitulo">
                    {props.h1}
                </h1>
            </div>
            <div className="textoParagrafo">
                <p className="texto Paragrafo">
                    {props.p}
                </p>
                <p className="texto Paragrafo">
                    {props.p2}
                </p>
            </div>
        </div>
    )
};
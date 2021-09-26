import { useState } from "react"
import { useEffect } from "react"

export default function TextoDinamico(props) {

    const [lista, useLista] = useState(null)

    const resposta = props.txtID

    useEffect(() => {
        fetch('./api/hello')
        .then(resp => resp.json())
        .then(useLista)

        },[])
    

        /* const myLoader = ({ id,width,quality }) => {
            return `${lista?.[id].title}`        
        }
 */


        return(

            <div className="MainContentText">
                    <p className="MainContent">
                        {lista?.[resposta].title}
                    </p>  
            </div>
        )
}
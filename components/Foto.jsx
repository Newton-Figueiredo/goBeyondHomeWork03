import { useState } from "react"
import { useEffect } from "react"
import Image from 'next/image'

export default function Foto(props) {

    const [lista, useLista] = useState(null)

    const resposta = props.imgID

    useEffect(() => {
        fetch('http://localhost:3000/api/hello')
        .then(resp => resp.json())
        .then(useLista)

        },[])
    

        const myLoader = ({ src,width,quality }) => {
            return `${lista?.[src].url}`        
        }



        return(

            <div className="fotoContent">
                <Image
                        loader = {myLoader} 
                        src={resposta}
                        width={1130}
                        height={670}
                        alt="Picture of the author"
                    />
            </div>
        )
}
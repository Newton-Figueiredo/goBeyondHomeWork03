import { useState } from "react"
import { useEffect } from "react"
import Image from 'next/image'

export default function Thumbnail(props) {

    const [lista, useLista] = useState(null)

    const resposta = props.imgID

    useEffect(() => {
        fetch('http://localhost:3000/api/hello')
        .then(resp => resp.json())
        .then(useLista)

        },[])
    

        const myLoader = ({ src,width,quality}) => {
            return `${lista?.[src].thumbnailUrl}`        
        }



        return(

            <div className="thumbnailContent">
    
                <Image
                        loader = {myLoader} 
                        src={resposta}
                        width={150}
                        height={150}
                        alt="Picture of the author"
                    />

            </div>
        )
}
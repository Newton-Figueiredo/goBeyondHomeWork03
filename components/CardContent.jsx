import { useState } from 'react';
import Link from 'next/link';
import {AiFillRightCircle} from 'react-icons/ai';
import Foto from './Foto';
import Thumbnail from './Thumbnail';
import TextoDinamico from './TextoDinamico'



export default function CardContent() {

    const [fotoID ,setFotoID] = useState('0')


    return (

        <div className="MainContent">
            <div className="MainContentMargin">
                <div className="MainTextBlock">
                    <TextoDinamico txtID={fotoID}/>
                    <div className="MainContentButton">
                        <Link href='https://www.corebiz.ag/pt/' passHref>
                        <button className="MainContentButton">
                            <p id="btext"> veja mais </p> 
                            <AiFillRightCircle size='1.3em' />
        
                        </button>
                        </Link>
                        
                    </div>

                </div>
                

                <Foto imgID={fotoID}/>


                <div className='thumbnailsContent'>
                <div onClick={()=>setFotoID('0')}><Thumbnail imgID='0'/></div>
                <div onClick={()=>setFotoID('1')}><Thumbnail imgID='1'/></div>
                <div onClick={()=>setFotoID('2')}><Thumbnail imgID='2'/></div>
                <div onClick={()=>setFotoID('3')}><Thumbnail imgID='3'/></div>
                </div>
                

            </div>    
        </div>
    )
};
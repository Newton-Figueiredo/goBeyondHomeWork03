import Link from 'next/link';
import FaFacebookF from "react-icons/fa";

export default function Linkfooter(props) {
    return (

        <div className="linkContent">
            <Link className='linkFooter' href={props.href} passHref>
                <p className='linkFooter'> {props.nomelink} </p>
            </Link>
        </div>
    )
};
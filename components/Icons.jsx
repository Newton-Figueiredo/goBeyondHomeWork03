import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import Link from 'next/link';


export default function Icons(props) {
    return (

        <div className="iconContent">
            <div className="iconMargin">
            <Link className='linkIcon' href='https://www.facebook.com/corebiz.ag/' passHref>
                <FaFacebookF size='1.3em'/>
            </Link>

            <Link className='linkIcon' href='https://www.instagram.com/corebizag/'passHref>
                <AiOutlineInstagram size='1.5em'/>
            </Link>

            <Link className='linkIcon' href='https://www.linkedin.com/company/corebiz-brasil/'passHref>
                <FaLinkedinIn size='1.5em'/>
            </Link>
            </div>

        </div>
    )
};
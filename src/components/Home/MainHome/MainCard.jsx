import {Card, Image } from 'react-bootstrap';
import { Link } from "react-router-dom"
import "../../../style/MainCard.css"

const MainCard = ({key, href, img, alt}) => {
  return (
    <>
      <Card id='MainCard' className="bg-dark text-white border-0" key={key} style={{ width: '18rem'}}>
      <Link to={href} target="_blank">
        <Image href="#" src={img} alt={alt} fluid></Image>
        </Link>
    </Card>
    </>
  );
}

export default MainCard;
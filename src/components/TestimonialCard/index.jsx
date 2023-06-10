/* eslint-disable react/prop-types */
import { FaStar, FaStarHalf } from 'react-icons/fa'
import { Container, Details, DetailsImg, Message, Stars } from '../../styles/TestimonialCardStyles'

const TestimonialCard = (props) => {
    return (
        <Container>
            <Stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
            </Stars>
            <Message>
                {props.message}
            </Message>
            <Details>
                <DetailsImg src={props.img} />
                <h3>{props.name}</h3>
            </Details>
        </Container>
    )
}

export default TestimonialCard
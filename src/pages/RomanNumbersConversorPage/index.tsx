import './style.css'

import {Container,Row} from 'react-bootstrap/'
import { RomanNumberForm } from '../../components/RomanNumberForm';

export const RomanNumbersConversorPage = () =>{

    
    return(
        <Container>
            <Row id="roman-numbers-conversion-page-line-2">
                <RomanNumberForm />
            </Row>

        </Container>
    )
}
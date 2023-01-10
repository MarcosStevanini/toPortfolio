import * as S from './style'

import Carousel from '../Carousel/index'
import 'animate.css'

function HomeScreen() {

    return (
        <>
            <S.Container>
                <S.Content />
                <S.ContentTitle className='animate__animated animate__fadeInDown animate__delay-2s'>
                    <S.Title>EXPLORE THE</S.Title>
                    <S.SubTitle>SPACE</S.SubTitle>
                </S.ContentTitle>
                <Carousel />
            </S.Container>
        </>
    );
}

export default HomeScreen;
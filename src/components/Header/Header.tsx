import { Container, Wrapper, Logo } from "./Header.styles"

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Logo src="/logo.png" alt="Cinnamon AI logo"/>
            </Container>
        </Wrapper>
    )
}

export default Header
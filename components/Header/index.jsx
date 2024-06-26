import { Container, Profile } from "./styles";

export function Header(){

    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <input type="text"  placeholder="Busque por um título" />

            <Profile>
                <div>
                    <strong>Vinicius Werneck</strong>
                    <span>Sair</span>
                </div>
                <img src="https://github.com/wern7ck.png" alt="Foto do Usuário" />
            </Profile>

        </Container>
    )
}
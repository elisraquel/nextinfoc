import { Container, Row } from "react-bootstrap";
import Cards from "./components/cards"

export async function getServerSideProps() {
    const res = await fetch('https://api6c-seven.vercel.app/noticias');
    const repo = await res.json(res);
    return { props: { noticias: repo } }
}

export default function Home({ noticias }) {
  return <>
   <Container>
    Bem vindo a IFMS - MAIN
            <Row xs={1} md={3} className="pt-2 g-4">
                {noticias.map(noticia => (
                    <Cards idnoticia = {noticia.idnoticia}
                           titulonoticia = {noticia.titulonoticia}
                           conteudonoticia = {noticia.conteudonoticia}
                           tiponoticia = {noticia.tiponoticia}
                           datahoracadastro = {noticia.datahoracadastro}
                    />
                ))}
            </Row>
        </Container>
  </>
}

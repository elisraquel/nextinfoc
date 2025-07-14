import { Container, Row } from "react-bootstrap";
import Cards from "../components/cards"

export async function getServerSideProps() {
    const res = await fetch('https://nextinfoc-chi.vercel.app/api/noticias/1');
    const repo = await res.json(res);
    return { props: { noticias: repo } }
}

export default function Cardcomponent({ noticias }) {
    return <>
        <Container>
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

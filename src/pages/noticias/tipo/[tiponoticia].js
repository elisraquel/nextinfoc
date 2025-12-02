import { Container, Row } from "react-bootstrap";
import Cards from "../../components/cards"
export async function getServerSideProps(context) {
    const res = await fetch(`https://api6c-seven.vercel.app/noticias/tipo/` + context.query.tiponoticia);
    const repo = await res.json(res);
    return { props: { noticias: repo } }
}
export default function Cardcomponent({ noticias }) {
    return <>
        <Container>
            <Row xs={1} md={3} className="pt-2 g-4">
                {Array.isArray(noticias) ? noticias.map((noticia) => (
                    <Cards idnoticia={noticia.idnoticia}
                        titulonoticia={noticia.titulonoticia}
                        conteudonoticia={noticia.conteudonoticia}
                        tiponoticia={noticia.tiponoticia}
                        datahoracadastro={noticia.datahoracadastro}/>)):null
                }
            </Row>
        </Container>
    </>
}

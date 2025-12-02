import { Container, Row } from "react-bootstrap";
import Cards from "../components/cards"
export async function getServerSideProps(context) {
    const res = await fetch(`https://api6c-seven.vercel.app/noticias/id/` + context.query.id);
    const repo = await res.json(res);
    return { props: { noticias: repo } }
}
export default function Cardcomponent({ noticias }) {
    return <>
        <Container>
            <Row xs={1} md={3} className="pt-2 g-4">
                {
                    <Cards idnoticia={noticias[0]._id}
                        titulonoticia={noticias[0].titulonoticia}
                        conteudonoticia={noticias[0].conteudonoticia}
                        tiponoticia={noticias[0].tiponoticia}
                        datahoracadastro={noticias[0].datahoracadastro}
                    />
                }
            </Row>
        </Container>
    </>
}

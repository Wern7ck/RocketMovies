import{ Container } from "./styles.js"
import { Tag } from "../Tag"

export function Film({ data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <p>{data.p}</p>

        {
            data.tags &&
            <footer>
     {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
            </footer>
        }

        </Container>
    )
}
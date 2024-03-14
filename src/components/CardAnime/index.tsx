interface Props {
    title: string
    image: string
    link: string
}

const Cardanime = (props: Props) => {
    return(
        <>
        <div>
            <p>
            {props.title}
            </p>
            <div>
               <img src={props.image} />
            </div>
            <button><a href={props.link}>Assistir</a></button>
        </div>
        </>

    )
}

export default Cardanime;
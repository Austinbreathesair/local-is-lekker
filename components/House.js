export default function House(props) {

  console.log(props)
  return (
    <div>
      <img src={props.picture} width="100%" alt="House photo" />
      <p>
        {props.type} - {props.town}
      </p>
      <p>{props.title}</p>
    </div>
  )
}
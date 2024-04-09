import QueryContent from './QueryContent'

const Querypage = (props : any) => {
  const { data } = props;

  return (
    
      <QueryContent valittu = {props.valittu} sivu = {props.sivu} setValittu = {props.setValittu} data = {data}/>
    
  )
}

export default Querypage
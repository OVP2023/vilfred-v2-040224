import 'bootstrap/dist/css/bootstrap.min.css';


function Details(props) {

  console.log(props.name)
  return( 
    <>
      <p className="fs-2 fst-italic fw-semibold lh-sm font-arial text-start" style={{color:'#0080FF'}}>{props.name}</p>
      <p className="fs-4 fst-italic fw-semibold lh-sm font-arial text-start" style={{color:'#464646'}}>{props.textbody1}</p>
      <p className="fs-4 fst-italic fw-semibold lh-sm font-arial text-start" style={{color:'#464646'}}>{props.textbody2}</p>
      <p className="fs-4 fst-italic fw-semibold lh-sm font-arial text-start" style={{color:'#464646'}}>{props.textbody3}</p>
      <p className="fs-4 fst-italic fw-semibold lh-sm font-arial text-start" style={{color:'black'}} >{props.textbody4}</p>
    </>
  )
}

export default Details



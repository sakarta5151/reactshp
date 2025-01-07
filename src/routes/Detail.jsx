import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";


function Detail(props){

  let {id} = useParams();
  let a = props.shoes.find((x)=> x.id == id )

  let [alert,setAlert] = useState(true);
  let [count,SetCount] = useState(0);
  let [탭,탭변경] = useState(0);

useEffect(()=>{
    setTimeout(()=>{ setAlert(false)} ,3000)
})
    
  // [{id:0},{id:1},{id:2}]

  // let a = props.shoes.find((x)=> x.id == id)
  return(
    <div className="container">
        {alert == true ?
        <div className="alert alert-warning">
            5초 이내 구입 하면~할인ㅋ
        </div> : null }
      <div className="row">
        <div className="col-md-6">
          <img src={ import.meta.env.BASE_URL + 'shoes'+ (parseInt(id)+1) +'.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{a.title}</h4>
          <p>{a.content}</p>
          <p>{a.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>                                                                                    
        <Nav.Link eventKey="link-0" onClick={()=>{ 탭변경(0) }}>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{ 탭변경(1) }}>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={()=>{ 탭변경(2) }}>Active</Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent 탭={탭} />


          





    </div>
  )
}

function TabContent(props){
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭]
}

export default Detail;




import React, { useState} from 'react'
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Portfolio() {
  const [modalShow,setModalShow] = useState(false)
  const [tempData, setTempData] = useState({})

 const handleClose = () => setModalShow(false);
  function createModal(data) {
    return(
      < Modal
      show={modalShow}
      onHide={()=>{setModalShow(false)}}
      size='lg'
      arial-labelledby="contained-modal-title-vcenter"
      centered 
      >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          {data.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{data.summary}</p>
        <Image src={data.image} style={{width:'200px'}}/>
      </Modal.Body>
      <a id='portfolio_modal_link' href={data.link} target='_blank' rel='noreferrer'> Check it out</a>
      <Modal.Footer>
        <div>Tech Used: </div>
        <p style={{fontSize: '0.7rem', marginRight: 'auto'}}>{data.tech}</p>
        <Button onClick={()=>{setModalShow(false)}}>Exit</Button>
      </Modal.Footer>
      </Modal>
    )
  }

  const mapped = portfolioData.map((e,idx) => {
    return(
      < Card key={idx} id='portfolio_card_container'>
        < Image className='portfolio_image'
        onClick={() => {
          setTempData({
            image: e.image,
            link: e.link,
            title: e.title,
            summary: e.summary,
            tech: e.tech
          })
          setModalShow(true)
        }}
        src={e.image}/>
        <div className='click_info'>&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
    )
  })

  return (
    <div className='portfolio_main_container' id='portfolio'>
      <h1>Portfolio</h1>
    <p>Github: <a href='https://github.com/jmsoltero' target='_blank' rel='noreferrer'>https://github.com/jmsoltero</a>
    </p>
    <Container fluid='lg' style={{ padding: '2rem 0'}}>
      <Row>
        {mapped}
      </Row>
    </Container>
    </div>
  )
}

export default Portfolio
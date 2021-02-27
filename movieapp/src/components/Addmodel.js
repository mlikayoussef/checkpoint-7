import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';

class Addmodal extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false, }
    };
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, })
    }
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    +
        </Button>
                <Modal show={this.state.show} onHide={this.handleShow}> </Modal>
                <Modal.Header closeButton>
                    <Modal.Title>Add new movie</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <div>
                    <div>
                        <label className='input'>Title:</label>
                        <input type='text' name='name' onChange={this.handleChange}></input>
                    </div>

                </div>
            </div >
        );
    };

};


export default Addmodal 

import React, {Component} from 'react';
import axios from 'axios';

class Imageupload extends Component{
    constructor() {
        super();
        this.state = {
            selectedFile: '',
        };
    }
    onChange = (e) =>{
        this.setState({ selectedFile: e.target.files[0] });
    } 
    onsubmit = (e) => {
        e.preventDefault();
        const {selectedFile} = this.state;
        let formData = new FormData();

        formData.append('selectedFile',selectedFile);

        axios.post('/',formData)
        .then((result) => {

        });
    }
    render(){
    const {selectedFile} = this.state;
    return (
        <form onSubmit = {this.onSubmit}>
            <input 
            type="file"
            name="selectedFile"
            onChange={this.onChange}
            />
            <br></br>
            <button type="submit"> Submit</button>
        </form>
    );
    }
}
export default Imageupload;
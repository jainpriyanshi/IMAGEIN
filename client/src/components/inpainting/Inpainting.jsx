  
    import React, { Component } from 'react';
    import axios from 'axios';

    class Inpainting extends Component {
      constructor() {
        super();
        this.state = {
          selectedFile: '',
        };
      }

      onChange = (e) => {
        switch (e.target.name) {
          case 'selectedFile':
            this.setState({ selectedFile: e.target.files[0] });
            break;
        }
      }

      onSubmit = (e) => {
        e.preventDefault();
        const { selectedFile } = this.state;
        let formData = new FormData();
        formData.append('selectedFile', selectedFile);

        axios.post('/inpainting', formData)
          .then((result) => {
          });
      }

      render() {
        const {  selectedFile } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            
            <input
              type="file"
              name="selectedFile"
              onChange={this.onChange}
            />
            <br></br>
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
  

export default Inpainting;
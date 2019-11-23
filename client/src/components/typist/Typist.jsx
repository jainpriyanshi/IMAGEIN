import React, { Component } from "react";
import Typed from 'typed.js';

export default class Typist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <TypistComponent />
            </div>
        );
    }
}

class TypistComponent extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            new Typed('.type', {
                strings: ["inpaints", "blur", "grayscale"],
                stringsElement: null,
                typeSpeed: 80,
                startDelay: 600,
                backSpeed: 60,
                backDelay: 1000,
                loop: true,
                loopCount: 5,

                cursorChar: "|",
                attr: null,
                contentType: 'html',
            });
        });
    }
    render() {
        return (
            <div class="center">
                <div class="typed">
                    <span> IMAGEIN </span><span class="type"></span><span> image </span>
                </div>
            </div>
        )
    }
}
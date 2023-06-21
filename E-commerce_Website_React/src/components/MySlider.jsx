import React, { Component } from 'react';
import '../CSS/MySlider.css';
import { Carousel } from 'react-bootstrap';
export default class Slider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="R.jpg"
                        alt="Jackets"
                    />
                    <Carousel.Caption>
                        <h3>Women Clothes</h3>
                        <p>Clothes are like members of the family. Take excellent care of them.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="man-buying-clothes-8.jpg"
                        alt="clothes"
                    />

                    <Carousel.Caption>
                        <h3>Men Clothes</h3>
                        <p>Keep it simple, but make it memorable.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="young-girl-posing_155003-6542.jpg"
                        alt="teenagers"
                    />

                    <Carousel.Caption>
                        <h3>Teenagers Clothes</h3>
                        <p>Elegance is beauty. It’s the kind that never fades.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
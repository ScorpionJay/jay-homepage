import React, { Component } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

import './slider.scss'

export default class SimpleSlider extends Component { 

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      autoplay:true,
      arrows:false,
      lazyLoad:true
    }
      
    const { data } = this.props
    return (
        <Slider {...settings} ref={c=> this.slider =c} >
            {
              data.map((item,index) => <div style={{maxHeight:500}} key={index}><SliderItem {...item}/></div>)
            }
        </Slider>
    )
  }
}

class SliderItem extends Component { 
  render() {
    return (
      <a href={this.props.link} target='_blank' rel="noopener">
        <img src={this.props.img} style={{width:'100%',minHeight:260}} />
      </a>
    )
  }
}
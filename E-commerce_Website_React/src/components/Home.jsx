import React from 'react';
import MySlider from '../components/MySlider'
import Content from '../components/Content'
import { Contact_Us } from '../components/Contact_Us'

export function Home() {
    return (
        <div className='mybg'>
            <MySlider />
            <Content />
            <Contact_Us />
        </div>
    )
}
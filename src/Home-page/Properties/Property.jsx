import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Property.css';

const Propertydata = [
    { image: "images/xwork6.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork2.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork3.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork4.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork5.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork9.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork10.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork8.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork11.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork12.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork13.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork14.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork15.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork9.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork7.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'3', square:'1,878 sqft'},

    { image: "images/xwork6.jpg", price:'#30,000,000', name: "John Dorf", text: "2 weeks ago" ,property:'Hammond Loft Property', location:'Victoria Island', sale:'sale', bed:'3bed', bath:'2', square:'1,878 sqft'}

]

const Property = () => {
    const [mobile, setMobile] = useState(false)
    return (
        <>

            <NavBar />

            <div className='property-wrapper'>
                {Propertydata.map((proper) =>

                    // <div className='wrapper'>
                    <div className='card'>
                        <a href="#" className='card_details'>
                            <img src={proper.image} className='img-property' />
                            <p className='price'>
                                {proper.price}
                            </p>
                        </a>
                        <div className='list-team'>
                            <img src="images/male.jpg" className='property-image' />
                            <h3 className='property_list-name'>{proper.name}</h3>
                            <span className='text-right'>{proper.text}
                            </span>
                        </div>

                        <h3 className='property'>
                        {proper.property}
                        </h3>
                        <span class="location"> {proper.location}
                            <span className='sale'>{proper.sale}</span>
                        </span>
                        <ul className='property-icon'>
                            <li><span><img src="images/double-bed.png" /></span>{proper.bed}</li>
                            <li><span><img src="images/bathtub.png" /></span>{proper.bath}</li>
                            <li><span><img src="images/blueprint.png" /></span>{proper.square}</li>
                        </ul>

                    </div>


                )}
            </div>
            <Footer />



        </>
    )
}

export default Property;

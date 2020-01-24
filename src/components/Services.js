import React, { Component } from 'react';
import {FaCocktail,FaShuttleVan,FaHiking,FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icons: <FaCocktail/>,
                title: "Free Cocktails",
                info: 'Loren ipsum dolor sit amet consectetur adipiscing elit. Magnis, corporis!'
            },
            {
                icons: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: 'Loren ipsum dolor sit amet consectetur adipiscing elit. Magnis, corporis!'
            },{
                icons: <FaHiking/>,
                title: "Endless Hiking",
                info: 'Loren ipsum dolor sit amet consectetur adipiscing elit. Magnis, corporis!'
            },
            {
                icons: <FaBeer/>,
                title: "Finest Beer",
                info: 'Loren ipsum dolor sit amet consectetur adipiscing elit. Magnis, corporis!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="Services" />
               <div className="services-center">
                {this.state.services.map((item,index) => {
                    return <article key={index} className="service">
                        <span>{item.icons}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
               </div>
            </section>
        )
    }
}

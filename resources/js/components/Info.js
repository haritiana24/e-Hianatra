import React from 'react'
import style from 'styled-components'
import infoImg from '../../../public/images/landing.png'

export default class Info extends React.Component {
    render() {
        return (
            <Div className="row mt-5">
                <div className="col-4 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt doloremque quasi natus molestiae officiis nobis minima sapiente explicabo, quam saepe inventore recusandae vitae laudantium quaerat quae, ipsum ipsa possimus!
                </div>
                <div className="col-4 mx-auto">
                    <img src={infoImg} alt="" className="infoImg"/>
                </div>
            </Div>
        )
    }
}

const Div = style.div `
    width: 100%;
    padding: 20px;
    background: gray;
    color: white;
`
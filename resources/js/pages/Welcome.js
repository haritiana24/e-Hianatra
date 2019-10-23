import React from 'react';
import GuestNav from '../components/GuestNav';
import Course from '../components/Course';
import SearchBar from '../components/SearchBar';

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [
        {id: 1, name: "Hello world !", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aute", categorie: "IT & Software", price:30, duration: 4, prof: "Mme nandra", img: '../../../public/images/course/p1.jpg'},
        {id: 2, name: "Hello to you", description:"Lorem ipsum dolor sit , adipisicing elit. Aute", categorie: "Business", price:0, duration: 6, prof: "Mme nivo", img: '../../../public/images/course/p2.jpg'},
        {id: 3, name: "Shoot", description:"Lorem ipsum dolor sit amet consectetur, ute", categorie: "Photography", price:20, duration: 2, prof: "Mr Lova", img: '../../../public/images/course/p3.jpg'},
      ],
      profs: [
        {id: 1, name: "Mme nivo", contact: [{tel: "032 00 000 00", mail: "test@test.test"}], course: []},
        {id: 2, name: "Mme nandra", contact: [{tel: "033 00 000 00", mail: "test@test.test"}], course: []},
        {id: 3, name: "Mr Lova", contact: [{tel: "034 00 000 00", mail: "test@test.test"}], course: []},
      ]
    }
  }
  render () {
    return (
      <React.Fragment>
        <GuestNav/>
        <SearchBar />
        <div>
          <h3 className="text-center mt-5">- Les cours -</h3>
          <div className="row">
            {this.state.courses.map(course => (
              <Course course={course} />
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Welcome;

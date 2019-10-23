import React from 'react';
import GuestNav from '../components/GuestNav';
import SearchBar from '../components/SearchBar';
import CourseList from '../components/CourseLIst';
import Info from '../components/Info'
import ProfList from '../components/ProfList';

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [
        {id: 1, name: "Hello world !", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aute", categorie: "IT & Software", price:30, duration: 4, prof: "Mme nandra", img: ''},
        {id: 2, name: "Hello to you", description:"Lorem ipsum dolor sit , adipisicing elit. Aute", categorie: "Business", price:0, duration: 6, prof: "Mme nivo", img: ''},
        {id: 3, name: "Shoot", description:"Lorem ipsum dolor sit amet consectetur, ute", categorie: "Photography", price:20, duration: 2, prof: "Mr Lova", img: ''},
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
          <h4 className="text-center mt-5">- Les cours -</h4>
          <CourseList courses={this.state.courses}/>
          <Info />
        </div>
        <div className="mt-5">
          <h4 className="text-center mt-5">- Nos profs -</h4>
          <ProfList profs={this.state.profs}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Welcome;

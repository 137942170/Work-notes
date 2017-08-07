import React, { Component } from 'react';
import logo from './fwt.png';
import './App.css';

const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
]



  class App extends Component {
    render(){
      return (
        <div>
          {lessons.map((lesson,i)=>
            <LessonsList key={i} lesson={lesson}/>
          )}
        </div>
      )
    }
  }

  class LessonsList extends Component {
    render(){
      const {lesson} =this.props
      return(
        <div>
          <div key="a">title:{lesson.title}</div>
          <div key="b">description:{lesson.description}</div>
        </div>
      )
    }
  }



export default App;

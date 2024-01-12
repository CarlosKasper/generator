import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

function App(props) {
  const [memeLimit, setMemeLimit] = useState(10);
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");


    return (
      <div>
        <h2><u>Welcome to the Meme Generator!</u></h2>
        <MyMemes />
        <h4><i>Write Some Text</i></h4>
        <Form inline>
          <FormGroup>
            <FormLabel>Top</FormLabel>
            {' '}
            <FormControl
              type="text"
              onChange={event => setText0(event.target.value)}
            ></FormControl>
          </FormGroup>
          {' '}
          <FormGroup>
            <FormLabel>Bottom</FormLabel>
            {' '}
            <FormControl
              type="text"
              onChange={event => setText1(event.target.value)}
            ></FormControl>
          </FormGroup>
        </Form>
        {
          props.memes.slice(0, memeLimit).map((meme, index) => {
            return (
              <MemeItem 
                key={index} 
                meme={meme}
                text0={text0}
                text1={text1}
              />
            )
          })
        }
        <div className="meme-button" onClick={() => {
            setMemeLimit(memeLimit+10)
          }}>Load 10 more memes...</div>
      </div>
    )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
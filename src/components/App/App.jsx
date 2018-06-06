import React from 'react';
import PropTypes from 'prop-types';

import DashBoard from '../DashBoard/DashBoard';
import reactImg from '../../react.svg';
import { appStyle, titleStyle, imageStyle } from './App.scss';


export default class App extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 'Hello World',
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={appStyle}>
        <div><img className={imageStyle} src={reactImg} alt="react" /></div>
        <span className={titleStyle}>{this.props.title}</span>
        <DashBoard />
      </div>
    );
  }
}

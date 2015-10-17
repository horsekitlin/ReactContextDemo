import testcom from './test.jsx';

export default class Hello extends React.Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      say: 'hi'
    };
  }
  render() {
      return <h1 onClick={this._handleClick}>
          eee
          <testcom>eeee</testcom>
          Hello ESee順耶!
      </h1>;
  }
  _handleClick() {
    console.log(this.state.say);
  }
}


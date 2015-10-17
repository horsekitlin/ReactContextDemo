class Button extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <button style={{background: this.props.color}}>
                {this.props.children}
            </button>
       );
    }
}

class Message extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                {this.props.text}
                <Button color={this.props.color}>
                    Delete
                </Button>
            </div>
        );
    }
}
export default class Messageslist extends React.Component {
    constructor() {
        super();
    }
    render() {
        const color = 'yellow';
        let children = ["hello", "world"].map((message) => {
            return <Message text={message} color={color} />;
        });
        return(
            <div>
                {children}
            </div>
        );
    }
}


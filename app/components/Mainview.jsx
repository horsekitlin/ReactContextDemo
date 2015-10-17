class Button extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
       );
    }
}

Button.contextTypes = {
    color: React.PropTypes.string
};

class Message extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                {this.props.text}
                <Button>
                    Delete
                </Button>
            </div>
        );
    }
}
class Messageslist extends React.Component {
    constructor() {
        super();
    }
    getChildContext(){
        return {color: "purple"};
    }
    render() {
        const color = 'yellow';
        let children = ["hello", "world"].map((message) => {
            return <Message text={message} />;
        });
        return(
            <div>
                {children}
            </div>
        );
    }
}

Messageslist.childContextTypes = {
    color : React.PropTypes.string
};

export default Messageslist;

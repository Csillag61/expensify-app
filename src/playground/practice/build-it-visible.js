class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state={
            visibility:false
        };

    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handletoggleVisibility}>
            {this.state.visibility ? 'Hide Details' : 'Show details'} </button>
            {this.state.visibility && (
                <div>
                <p>Hey</p>
                </div>
            )}
            </div>
        );
    }
}
    
    
    
ReactDOM.render(<VisibilityToggle />, document.getElementById)
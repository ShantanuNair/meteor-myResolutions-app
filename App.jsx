import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

    resolutions(){
        return Resolutions.find().fetch();
    }
    addResolution(event){
        event.preventDefault();
        var text = this.refs.resolution.value.trim()
        Resolutions.insert({
            text: text,
            complete: false,
            createdAt: new Date()
        });
        this.refs.resolution.value = "";
        console.log(text);
    }
    
    render() {
        console.log(this.resolutions());
        let res = this.resolutions();
        return(
            <div>
                <h1>My Resolution App</h1>
                <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                    <input
                        type = "text" 
                        ref="resolution"
                        placeholder = "text Placeholder" />
                </form>
                <div>
                    {res[0].text}
                </div>
            </div>
            )
    }
    
}
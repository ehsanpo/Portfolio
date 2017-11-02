import React from 'react'

import ReactScriptLoaderMixin  from 'react-script-loader'



class Foo  extends React.Component {
    mixins: [ReactScriptLoaderMixin]
    getInitialState() {
        return {
            scriptLoading: true,
            scriptLoadError: false,
        };
    }
 
    // this function tells ReactScriptLoaderMixin where to load the script from 
    getScriptURL() {
        return "/lib/main.js";
    }
 
    // ReactScriptLoaderMixin calls this function when the script has loaded 
    // successfully. 
    onScriptLoaded() {
        this.setState({scriptLoading: false});
    }
 
    // ReactScriptLoaderMixin calls this function when the script has failed to load. 
    onScriptError() {
        this.setState({scriptLoading: false, scriptLoadError: true});
    }
 
    render() {
        var message;
        if (this.state.scriptLoading) {
            message = 'loading script...';
        } else if (this.state.scriptLoadError) {
            message = 'loading failed';
        } else {
            message = 'loading succeeded';
        }
        return <span>{message}</span>;
    }
};
export default Foo;
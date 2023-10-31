import * as React from 'react';

interface blabla {
    name: string;
}

class Home extends React.Component<{}, blabla>{
    constructor(props: {}) {
        super(props);
        this.state = {name: 'mate'};
    }

    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            </>
        )
    }

    componentDidMount() {
        this.setState({
            name: 'jure'
        });
    }
}

export default Home;
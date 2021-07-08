// const User = (props) => {
//     return (
//     <div>
//         <h1>{props.name}</h1>
//         <h4>{props.description}</h4>
//     </div>
//     );
// };

// export default User;

// props => properties/parameters

import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet : "earth",
        };
        console.log("Hey I'm from Constructor");
    }

    componentDidMount() {
        this.setState({ planet: "Jupiter"});
        this.setState({ planet: "Mars"});
    }

    shouldComponentUpdate(nextProp, nextState) {
        console.log("from shouldComponentUpdate")
        console.log({
            nextProp,
            nextState,
        });
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("from getSnapshotBeforeUpdate");
        console.log({ 
            prevProp, 
            prevState,
        });
        return true;
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        console.log("Hey I'm from rendered");
//  view
//  logic
// Component Life-Cycle Methods
        return (
            <div>
                <h1> {this.props.name} </h1>
                <p> {this.props.description} </p>
                <h4> {this.state.planet} </h4>
            </div>
        );
    }
}

export default User;
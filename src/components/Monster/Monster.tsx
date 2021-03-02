import React, { Component } from "react";



class Monster extends Component<{},{}> {
    constructor(props: any){
    super(props);
    this.state = {};
    }
    redner(){
        return(
            <div>Monster Component</div>
        )
    }
}

export default Monster;
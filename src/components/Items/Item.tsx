import React, { Component } from "react";



class Item extends Component<{},{}> {
    constructor(props: any){
    super(props);
    this.state = {};
    }
    redner(){
        return(
            <div>Indvidual Item Component</div>
        )
    }
}

export default Item;
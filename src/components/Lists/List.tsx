import React, { Component } from "react";



class ListItem extends Component<{},{}> {
    constructor(props: any){
    super(props);
    this.state = {};
    }
    redner(){
        return(
            <div>List Item Component</div>
        )
    }
}

export default ListItem;
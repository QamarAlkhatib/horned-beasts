import React from "react";
import HornedBeasts from "./HornedBeasts";

class Main extends React.Component {

    render() {
        return (
                <div>
                    {this.props.dataToSend.map((element, index) => {
                        return <HornedBeasts key={index} title={element.title} image_url={element.image_url} description={element.description} keyword={element.keyword} horns={element.horns} />
                    })}
                </div>
        )
    }
}
export default Main;

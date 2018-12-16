import React from "react";

class CREDMenu extends React.Component {
    addText = () => {
        this.props.addText()
    }
    addSmallImg = () => {
        this.props.addImg()
    }
    addBigImg = () => {
        this.props.addImg()
    }
    render() {
        return (
            <div className="CRED-menu">
                <p>Agregar:</p>
                <ul>
                    <li onClick={this.addText}>
                        <span>Parrafo +</span>
                    </li>
                    <li onClick={this.addSmallImg}>
                        <span>Imagen pequeña +</span>
                    </li>
                    <li onClick={this.addBigImg}>
                        <span>Imagen grande +</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CREDMenu;

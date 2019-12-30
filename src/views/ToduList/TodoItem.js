import React from 'react';

class ToduItem extends React.Component {

    del() {
        console.log(this.props.content.index)
        this.props.del(this.props.content.index)
    }

    render() {
        const { content }= this.props
        return (
            <div className="as" onClick={ this.del.bind(this)}>{content.item.value}</div>
        )
    }
}

export default ToduItem
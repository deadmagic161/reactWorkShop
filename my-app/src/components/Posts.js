import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" alt="text"/>
                <Post src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" alt="text222"/>
            </div>
        )
    }
}
import React from 'react';
import { connect } from 'react-redux';

const App = ({ qty, dispatch }) => {
    return (
        <div className={'wrapper'}>
            Landing page
        </div>
    )
}

export default connect()(App)
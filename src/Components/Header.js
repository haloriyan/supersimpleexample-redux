import React, { Component } from 'react'

// Urusan redux
import { connect } from 'react-redux'
// import { increaseCount,decreaseCount } from '../Redux/Actions'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Redux Supersimple-example (count : {this.props.count})</h1>
            </div>
        )
    }
}

// buat ngambil data dari store
const mapStateToProps = (state) => {
    return {
        count: state.count,
    }
}

// yang biasanya jadi gini
// export default Header

// ubah jadi begini
export default connect(mapStateToProps)(Header)
import React from 'react'
import PropTypes from 'prop-types';

// Helpers
import { convertMoney, calcTime } from '../../helpers'
// styles
import { Content, Wrapper } from './MovieInfoBar.styles'


const MovieInfoBar = ({ time, budget, revenue }) => {
    return (
        <Wrapper>
            <Content>
                <div className="column">
                    <p>Running Time: {calcTime(time)}</p>
                </div>
                <div className="column">
                    <p>Budget: {convertMoney(budget)}</p>
                </div>
                <div className="column">
                    <p>Revenue: {convertMoney(revenue)}</p>
                </div>
            </Content>
        </Wrapper>
    )
}

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
}

export default MovieInfoBar

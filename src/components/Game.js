import React from 'react';
import Card from './Card/Card.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions'


class Game extends React.Component {

    constructor(props) {
        super(props);
    }
    
    handleEnhanceClick = (level, weaponData) => {
        const weapon = weaponData[level-1];
        const enhance = Math.floor(Math.random() * 100);
        const isEnhance = weapon.enhance > enhance ? true : false;
        if( isEnhance ) {
            return this.props.successEnhance(level);
        }
        else {
            return this.props.failEnhance(level);
        }
    }
    
    render() {
        const { weaponData, level, Enhance, shield, money, sellWeapon } = this.props;
        const enhanceData = (level) => {
            return <Card weapon = {weaponData[level-1]} />
        }
        return (
            <div>
                <div className='header'>
                    <h1 className='logo'>
                        <a href='#' className='logo_link'>신나는 강화게임</a>
                    </h1>
                    <div className='item_area'>
                        <ul className='item_list'>
                            <li className='list_item'>
                                강화쉴드 <span className='count'>{shield}개</span>
                            </li>
                            <li className='list_item'>
                                돈 <span className='count'>{money}원</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content'>
                    {enhanceData(level)}
                </div>
                <div className='footer'>
                    <div className='btn_area'>
                        <a href='#' className='btn' role='button' onClick={() => sellWeapon(level)}>판매</a>
                        <a href='#' className='btn' role='button' onClick={() => this.handleEnhanceClick(level, weaponData)}>강화</a>
                        {/*<a href='#' className='btn' role='button' onClick={this.props.successEnhance}>강화</a>*/}
                        <a href='#' className='btn' role='button'>보관</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weaponData: state.weaponData,
        level: state.level,
        shield: state.shield,
        money: state.money
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
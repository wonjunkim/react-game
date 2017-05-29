import React from 'react';
import Card from './Card/Card.js';
import ListWeapon from './ListWeapon/ListWeapon.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { successEnhance, failEnhance, sellWeapon, saveWeapon, useShield, nouseShield } from '../actions/enhance';
import { openWeaponLayer, closeWeaponLayer } from '../actions/headLayers';


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
    handleLayerClick = ( isOpened ) => {
        if( isOpened ) {
            return this.props.closeWeaponLayer();
        }
        else {
            return this.props.openWeaponLayer();
        }
    }
    handleEnhanceUseClick = (isUsed) => {
        if( isUsed ) {
            return this.props.nouseShield();
        }
        else {
            return this.props.useShield();
        }
    }
    render() {
        const { weaponData, level, Enhance, shield, money, sellWeapon, saveWeapon, haveWeapon, isOpened, openWeaponLayer, closeWeaponLayer, isUsed } = this.props;
        const enhanceData = (level) => {
            return <Card weapon = {weaponData[level-1]} />
        }

        const listWeapon = haveWeapon.map((item, index) => 
            <ListWeapon 
                key={index} 
                index={index} 
                item={item} 
            />
        )
        
        return (
            <div>
                <div className='header'>
                    <h1 className='logo'>
                        <a href='#' className='logo_link'>신나는 강화게임</a>
                    </h1>
                    <div className='item_area'>
                        <ul className='item_list'>
                            <li className='list_item'>
                                <a href='#' onClick={() => this.handleLayerClick(isOpened)}>보관 <span className='count'>{haveWeapon.length}개</span></a>
                                { isOpened &&
                                <div className='list_layer'>
                                    <ul className='item_info_list'>
                                        {listWeapon.length ? listWeapon : 
                                            <li className='list_item_info'>결과값이 없습니다</li>
                                        }
                                    </ul>
                                    <a href='#' className='btn_close' role='button' onClick={() => this.handleLayerClick(isOpened)}>닫기</a>
                                </div>
                                }
                            </li>
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
                        <a href='#' className='btn' role='button' onClick={() => saveWeapon(level)}>보관</a>
                    </div>
                    <div className='btn_area'>
                        <a href='#' className={`btn ${isUsed ? 'on' : ''}`} role='button' onClick={() => this.handleEnhanceUseClick(isUsed)}>강화쉴드</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weaponData: state.enhance.weaponData,
        level: state.enhance.level,
        shield: state.enhance.shield,
        money: state.enhance.money,
        haveWeapon: state.enhance.haveWeapon,
        isOpened: state.headLayers.isOpened,
        isUsed: state.enhance.isUsed
    }
}

const mapDispatchToProps = (dispatch) => ({
    successEnhance: bindActionCreators(successEnhance, dispatch),
    failEnhance: bindActionCreators(failEnhance, dispatch),
    sellWeapon: bindActionCreators(sellWeapon, dispatch),
    saveWeapon: bindActionCreators(saveWeapon, dispatch),
    openWeaponLayer: bindActionCreators(openWeaponLayer, dispatch),
    closeWeaponLayer: bindActionCreators(closeWeaponLayer, dispatch),
    useShield: bindActionCreators(useShield, dispatch),
    nouseShield: bindActionCreators(nouseShield, dispatch)
    // return bindActionCreators(actions, dispatch);
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);
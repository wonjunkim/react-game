import { SUCCESS_ENHANCE, FAIL_ENHANCE, SELL_WEAPON, SAVE_WEAPON, USE_SHIELD, NOUSE_SHIELD } from '../actions/enhance';

const enhanceInitialState = {
    weaponData: [
        {name: '무기1', image: 'images/weapon1.png', level: 1, enhance: 100, enhance_cost: 100, sell: 0, shield_cost: 0},
        {name: '무기2', image: 'images/weapon2.png', level: 2, enhance: 90, enhance_cost: 200, sell: 300, shield_cost: 1},
        {name: '무기3', image: 'images/weapon3.png', level: 3, enhance: 80, enhance_cost: 600, sell: 1000, shield_cost: 1},
        {name: '무기4', image: 'images/weapon4.png', level: 4, enhance: 70, enhance_cost: 1500, sell: 4000, shield_cost: 2},
        {name: '무기5', image: 'images/weapon4.png', level: 5, enhance: 60, enhance_cost: 4500, sell: 12000, shield_cost: 2},
        {name: '무기6', image: 'images/weapon4.png', level: 6, enhance: 50, enhance_cost: 10500, sell: 26000, shield_cost: 2},
        {name: '무기7', image: 'images/weapon4.png', level: 7, enhance: 40, enhance_cost: 20500, sell: 50000, shield_cost: 3},
        {name: '무기8', image: 'images/weapon4.png', level: 8, enhance: 30, enhance_cost: 101500, sell: 154000, shield_cost: 3},
        {name: '무기9', image: 'images/weapon4.png', level: 9, enhance: 20, enhance_cost: 231500, sell: 434000, shield_cost: 4}
    ],
    money: 150000,
    shield: 100,    
    level: 1,
    haveWeapon: [],
    useShield: false
}

const enhance = (state = enhanceInitialState, action) => {
    switch(action.type) {
        case SUCCESS_ENHANCE:
            if( state.isUsed ) {
                return {
                    ...state, 
                    shield: state.shield - state.weaponData[action.level-1].shield_cost,
                    level: state.level + 1,
                    money: state.money - state.weaponData[action.level-1].enhance_cost
                }
            }
            return {
                ...state, 
                level: state.level + 1,
                money: state.money - state.weaponData[action.level-1].enhance_cost
            }
        case FAIL_ENHANCE:
            if( state.isUsed ) {
                return {
                    ...state, 
                    shield: state.shield - state.weaponData[action.level-1].shield_cost,
                    money: state.money - state.weaponData[action.level-1].enhance_cost
                }
            }
            else {
                return {
                    ...state, 
                    level: 1,
                    money: state.money - state.weaponData[action.level-1].enhance_cost
                }
            }
        case SELL_WEAPON:
            
            return {
                ...state,
                level: 1,
                money: state.money + state.weaponData[action.level-1].sell
            }    
        case SAVE_WEAPON:
            return {
                ...state,
                haveWeapon: [
                    ...state.haveWeapon, {
                        name: state.weaponData[action.level-1].name,
                        sell: state.weaponData[action.level-1].sell,
                    }
                ],
                level: 1
            }
        case USE_SHIELD: 
            return {
                ...state,
                isUsed: true
            }
        case NOUSE_SHIELD:
            return {
                ...state,
                isUsed: false
            }
        default:
            return state
    }
}

export default enhance;
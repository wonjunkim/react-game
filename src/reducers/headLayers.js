import { OPEN_WEAPON_LAYER, CLOSE_WEAPON_LAYER } from '../actions/headLayers';

export default function headLayers (state = {isOpened: false}, action) {
    switch(action.type) {
        case OPEN_WEAPON_LAYER:
            return {
                ...state, 
                isOpened: true,
            }
        case CLOSE_WEAPON_LAYER:
            return {
                ...state, 
                isOpened: false,
            }
        default:
            return state;
    }
}
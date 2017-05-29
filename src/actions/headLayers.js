export const OPEN_WEAPON_LAYER = 'OPEN_WEAPON_LAYER';
export const CLOSE_WEAPON_LAYER = 'CLOSE_WEAPON_LAYER';

export function openWeaponLayer() {
    return {
        type: OPEN_WEAPON_LAYER,
        isOpened: true
    }
}

export function closeWeaponLayer() {
    return {
        type: CLOSE_WEAPON_LAYER,
        isOpened: false
    }
}
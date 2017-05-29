export const SUCCESS_ENHANCE = 'SUCCESS_ENHANCE';
export const FAIL_ENHANCE = 'FAIL_ENHANCE';
export const SELL_WEAPON = 'SELL_WEAPON';
export const SAVE_WEAPON = 'SAVE_WEAPON';
export const USE_SHIELD = 'USE_SHIELD';
export const NOUSE_SHIELD = 'NOUSE_SHIELD';

export function successEnhance(level) {
    return {
        type: SUCCESS_ENHANCE,
        level
    }
}

export function failEnhance(level) {
    return {
        type: FAIL_ENHANCE,
        level
    }
}

export function sellWeapon(level) {
    return {
        type: SELL_WEAPON,
        level
    }
}

export function saveWeapon(level) {
    return {
        type: SAVE_WEAPON,
        level
    }
}

export function useShield() {
    return {
        type: USE_SHIELD,
        isUsed: true
    }
}
export function nouseShield() {
    return {
        type: NOUSE_SHIELD,
        isUsed: false
    }
}
export const SUCCESS_ENHANCE = 'SUCCESS_ENHANCE';
export const FAIL_ENHANCE = 'FAIL_ENHANCE';
export const SELL_WEAPON = 'SELL_WEAPON';

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
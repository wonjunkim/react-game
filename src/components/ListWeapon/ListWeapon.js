import React from 'react';

class ListWeapon extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <li className='list_item_info'>
                <span className='name'>{item.name}</span>
                <span className='price'>{item.sell}원</span>
            </li>
        )
    }
}

export default ListWeapon;

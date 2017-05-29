import React from 'react';

class Card extends React.Component {
    render() {
        const { weapon } = this.props;
        return (
            <div className='card_area'>
                <div className='thumb_area'>
                    <img src={weapon.image} width='100' height='100' alt={weapon.name} />
                </div>
                <div className='info_area'>
                    <span className='name'>{weapon.name}</span>
                </div>
                <div className='enhance_area'>
                    <dl className='enhance_define'>
                        <dt className='define_term'>강화확률</dt>
                        <dd className='define_description'>{weapon.enhance}%</dd>
                        <dt className='define_term'>강화비용</dt>
                        <dd className='define_description'>{weapon.enhance_cost}원</dd>
                        <dt className='define_term'>판매비용</dt>
                        <dd className='define_description'>{weapon.sell}원</dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default Card;

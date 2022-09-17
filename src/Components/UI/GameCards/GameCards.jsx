import React from 'react'


import '../../../Styles/GameCards.css'

function GameCards(props) {
    const {name1, name2, imgUrl, id} = props.item
    return(
        <div>         
            {/* rounded-[19px] border-BtnColor border-[6px] mb-7 w-full lg:w-auto */}
            <div key={id} className='card_desc'>     
            <img className='game_img'  src={imgUrl} alt='ss' />
                <p className='card_name mt-4'>{name1}<span className=''>{name2}</span></p>
             </div>
        </div>
    )

    }
export default GameCards
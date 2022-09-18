import React from 'react'
import { motion} from "framer-motion/dist/framer-motion";


import '../../../Styles/GameCards.css'

function GameCards(props) {
    const {name1, name2, imgUrl, id} = props.item
    return(
        <motion.article
        className="col-12 md:col-3"
        layout
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        style={{width: '100%'}}
    >
        <div>         
            {/* rounded-[19px] border-BtnColor border-[6px] mb-7 w-full lg:w-auto */}
            <div key={id} className='card_desc'>     
            <img className='game_img'  src={imgUrl} alt='ss' />
                <p className='card_name mt-4'>{name1}<span className=''>{name2}</span></p>
             </div>
        </div>
        </motion.article>
    )
   
    }
export default GameCards
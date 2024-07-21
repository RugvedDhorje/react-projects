import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>Choose from diverse menu featuring a  detectable array of dishes crafted with the
       finest ingredients and culinary expertise.our mission is to satisfy your craving and evaluate your dining 
       experience,one delicious meal at a time.</p>
       <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index}
                     className='explore-menu-list-items'>
                    <img className={category===item.menu_name?"active":" "} src={item.menu_image} alt={item.menu_name}></img>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
       </div>
       <hr />
    </div>
  )
}

export default ExploreMenu
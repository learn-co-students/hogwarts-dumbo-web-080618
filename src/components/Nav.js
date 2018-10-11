import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (

		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<select onChange={(e) => {
				props.sortBy(e.target.value)
			}}>
				<option value="all"> All </option>
				<option value="name"> Name </option>
				<option value="weight"> Weight </option>
				<option value="greased"> Greased </option>
			</select>
		</div>
	)
}

export default Nav
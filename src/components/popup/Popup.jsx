import React from 'react';
import './popup.css'

const Popup = ({ isVisible, close, children }) => {
	return (
		<div className={isVisible ? 'popup active' : 'popup'} onClick={() => close()}>
			<div className="popup__container" onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Popup;
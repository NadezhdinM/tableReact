import React, { useState } from 'react';
import Table from './components/table/Table';
import './App.css'
import Popup from './components/popup/Popup';

const App = () => {
	const [items, setItems] = useState(JSON.parse(localStorage.getItem('services')));
	const [isVisible, setIsVisible] = useState(false);
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [qty, setQty] = useState('');
	const [date, setDate] = useState('');
	const [checked, setChecked] = useState(false);
	const [index, setIndex] = useState(-1);

	function editItem(item, index) {
		setName(item.name);
		setPrice(item.price);
		setQty(item.qty);
		setDate(item.date);
		setChecked(item.option);
		setIndex(index);
		setIsVisible(true);
		console.log(index);
	}

	function close() {
		setName('');
		setPrice('');
		setQty('');
		setDate('');
		setChecked(false);
		setIndex(-1);
		setIsVisible(false);
	}

	function save(e) {
		e.preventDefault();
		const mergeInt = price * qty;
		const arr = {
			name: name,
			price: price,
			qty: qty,
			date: date,
			option: checked,
			total: mergeInt
		}
		if (index > -1) {
			items[index] = arr;
			setItems(items);
			localStorage.setItem("services", JSON.stringify(items));
		 } else {
			items.push(arr)
			setItems(items);
			localStorage.setItem("services", JSON.stringify(items));
		 }
		close();
	}

	return (
		<>
			<Table 
				items={items}
				setItems={setItems}
				editItem={editItem}
				setIsVisible={setIsVisible} />
			<Popup isVisible={isVisible} close={close}>
				<form action="">
					<input onChange={(e) => setName(e.target.value)} value={name} placeholder="Название услуги" type="text"/>
					<input onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Цена" type="text"/>
					<input onChange={(e) => setQty(e.target.value)} value={qty} placeholder="Кол.-во дней стационара" type="text"/>
					<input onChange={(e) => setDate(e.target.value)} value={date} type="date"/>
					<div><input checked={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox"/><span>Отдельная палата</span></div>
					<button onClick={(e) => save(e)}>{index === -1 ? 'Добавить' : 'Редактировать'}</button>
				</form>
			</Popup>
		</>
	);
};

export default App;
import React, { useState } from 'react';
import './table.css';
import pencil from '../../assets/pencil.svg'
import trash from '../../assets/trash.svg'

const Table = ({ setIsVisible, editItem, items, setItems }) => {

	function deleteItem(index) {
		const arr = items.slice(0, index).concat(items.slice(index + 1));
		setItems(arr);
		localStorage.setItem('services', JSON.stringify(arr));
	}

	return (
		<div className="table">
			<div className="table__header">
				<button onClick={(e) => setIsVisible(true)} className="table__btn">Добавить</button>
			</div>
			<table className="table__main">
				<thead className="table__thead">
					<tr>
						<th>
							<span>Название услуги</span>
						</th>
						<th>
							<span>Цена</span>
						</th>
						<th>
							<span>Кол.-во дней стационара</span>
						</th>
						<th>
							<span>Дата мероприятия</span>
						</th>
						<th>
							<span>Отдельная палата</span>
						</th>
						<th>
							<span>Всего</span>
						</th>
						<th>
							<span></span>
						</th>
					</tr>
				</thead>
				<tbody className="table__tbody">
					{items.map((el, index) => (
						<tr key={index}>
							<td>{el.name}</td>
							<td>{el.price}</td>
							<td>{el.qty}</td>
							<td>{el.date}</td>
							<td>{el.option ? 'Плюс' : 'Минус'}</td>
							<td>{el.total}</td>
							<td>
								<button onClick={() => editItem(el, index)}><img src={pencil} alt="" /></button>
								<button onClick={() => deleteItem(index)}><img src={trash} alt="" /></button>
							</td>
						</tr>
					)
					)}

				</tbody>
			</table>
		</div>
	);
};

export default Table;
import React from 'react'
import books from '../../books'
import {Row, Col} from 'react-bootstrap'
import Book from '../Book'

function Homescreen() {
  return (
	<div>
		<h1 className='text-center'>Новинки</h1>
		<Row>
			{books.map((book)=>(
				<Col key={book._id} sm={12} md={6} lg={4} xl={3}>

					{/* {<h3>{book.title}</h3>} */}
					<Book book={book}/>
				</Col>
			))}
		</Row>
	</div>
  )
}

export default Homescreen
import { TextField } from './TextField/TextField'
import { Button } from './Button/Button'

export const DatabaseChanger = () => {
	return(
		<div className='DatabaseChanger'>
			<div className='DatabaseChangerBanner'>
				<TextField id='searcher' label='Ingrese un nombre o numero de control'></TextField>
				<Button label='Agregar' variant='allow'></Button>
			</div>

			<div className='SearchResults'>
				<h1>hola</h1>
			</div>
		</div>
	)
}
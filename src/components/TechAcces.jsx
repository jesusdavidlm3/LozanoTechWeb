import { useState } from 'react';
import { Button } from './Button/Button';
import { TextField } from './TextField/TextField';

const TechAcces = () => {

	const [techDisplay, setTechDisplay] = useState('')

	return(
		<div className='TechAccesContainer'>
			<div className='TechAccesBanner'>
				<Button label='Agregar' onClick={() => {setTechDisplay('add')}}></Button>
				<Button label='Consultar' onClick={() => {setTechDisplay('check')}}></Button>
				<Button label='Editar' onClick={() => {setTechDisplay('edit')}}></Button>		
			</div>

			<div className='TechAccesDisplay'>
				{ techDisplay == 'add' &&
					<div>
						<p>Numero de control: </p>
						<TextField label='Cliente'></TextField>
						<TextField label='Equipo'></TextField>
						<TextField label='Estado'></TextField>
						<TextField label='Fecha de recepcion'></TextField>
						<TextField label='Fecha de entrega'></TextField>
						<TextField label='Observaciones'></TextField>

						<Button label='Guardar'></Button>
					</div>
			 	}

				{ techDisplay == 'check' &&
					<div>
						
					</div>
				}

				{ techDisplay == 'edit' &&
					<div>
						
					</div>
				}
			</div>
		</div>
	)
}

export default TechAcces
import Button from './Button'

const Header = () => {

    const onClick = () => {
        console.log('click')
    }

    return (
        <div>
            <header className='header'>
            <h1>Trakify</h1>
            <Button color='green' text='Add Task' onClick={onClick}/>
            </header>
        </div>
    )
}

export default Header

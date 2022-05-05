import Button from "./Button";

function Header({ title }) {
    return (
        <>
            <header className='header'>
                <h1>{title}</h1>
                <Button color='blue' text='restock'/>
            </header>
        </>
    )
}

// Deconstructing props with {}
Header.defaultProps = {
    title: 'Stock Page'
}

export default Header;
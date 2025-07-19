import { Link } from "react-router-dom";


export default function Header() {
    return (
        <>
            <div>
                Meu PetOnline
            </div>

            <div>
                <Link to='/'>Home</Link>
                <Link to='/contato'>Contato</Link>
            </div>
        </>
    )
}
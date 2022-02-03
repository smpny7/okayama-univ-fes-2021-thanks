import logo from '../assets/img/logo.jpg'

function Header() {
    return (
        <div className="flex h-20 items-center shadow">
            <img src={logo} className="ml-6 h-10 md:ml-12" alt="岡山大学" />
        </div>
    )
}

export default Header

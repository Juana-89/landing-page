import image from '../assets/banner.png'

const Header = () => {
    return(
        <header className='flex items-center mt-2' >
            <div className='bg-transparent w-1/6 text center'>
            <img class='w-64' src={image} alt='Banner'/>    
            </div>
            <nav className='flex sm:justify-center space-x-4'>
            <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>Home</h1></a>
            <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>About us</h1></a>
            <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>Services</h1></a>
            <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>Testimonials</h1></a>
            <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>Contact</h1></a>
            <a href='#' className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><h1>Blog</h1></a>
            
            </nav>
        </header>
    )
}
export default Header
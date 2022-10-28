import './header.css';

const Header =(props)=>{
    return(
        <div className='header'>
        <h1>R-ToDOApp</h1>
                <div className='buttons-class'>
                <button className={
                    props.currentPage === "add" ? 'active' : ""
                }
                onClick={
                    () => props.onSwitchPage("add")
            }>Add Item Page</button>
            <button className={
                    props.currentPage === "view" ? 'active' : ""
                }
                onClick={
                    () => props.onSwitchPage("view")
            }>View Items Page</button></div>
        </div>
    );

}
export default Header
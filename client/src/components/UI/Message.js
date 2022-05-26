const Message = (props) => {

    return (<>
         <div className="main">
            <p className='btn-danger'>{props.children}</p>
        </div>
    </>)
}
export default Message
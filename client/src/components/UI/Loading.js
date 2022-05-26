// Loading component. Shows up when some data is coming from database and take some time

const Loading = ({center}) => {
    return <div className={center ? 'loading loading-center' : 'loading'}></div>
}

export default Loading
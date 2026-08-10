export default function Instructions ({setCurrentScreen}) {


    return (
        <>
        <h1>Acá van las instrucciones</h1>
        <button onClick={setCurrentScreen("introduction")}>Siguinte</button>
        </>
    )
}
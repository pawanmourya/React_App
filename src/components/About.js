import React, {useState} from 'react'

export default function About() {
    
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '20px',
        border: '1px solid black'
    })

    const [btnText, setBtnText] = useState("Enable Light Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                padding: '20px',
                borderRadius: '20px',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '20px',
                border: '1px solid black'
            })
            setBtnText("Enable Dark Mode")
        }      
    }
    

    return (
        <>
            <div className="container" style={myStyle}>
                <h1 className="text-center fw-bold">About Us</h1>
                <div className="my-5">
                    <div className="alert alert-primary" role="alert">
                        A simple primary alert—check it out!
                    </div>
                    <div className="alert alert-secondary" role="alert">
                        A simple secondary alert—check it out!
                    </div>
                    <div className="alert alert-success" role="alert">
                        A simple success alert—check it out!
                    </div>
                    <div className="alert alert-danger" role="alert">
                        A simple danger alert—check it out!
                    </div>
                    <div className="alert alert-warning" role="alert">
                        A simple warning alert—check it out!
                    </div>
                    <div className="alert alert-info" role="alert">
                        A simple info alert—check it out!
                    </div>
                    <div className="alert alert-light" role="alert">
                        A simple light alert—check it out!
                    </div>
                    <div className="alert alert-dark" role="alert">
                        A simple dark alert—check it out!
                    </div>
                </div>
                <div className="container text-center">
                    <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btnText}</button>
                </div>
            </div>
        </>
    )
}

export default function NumeroDisplay(props) {
    return (
        <div style={{display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            backgroundColor: "blue",
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            margin: "10px",
            transition: "background-color 0.5s ease-in-out"
            }}>{props.numero}</div>
    )
}
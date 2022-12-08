const mainStyle = {
    backgroundColor: "#e06666",
    height: "380px",
    width: "680px",
    display: "inline-block",
    padding: "5px",
    margin: "5px 0px 0px 10px"
};

const Main = props => {

    return (
        <div style={ mainStyle }>
            { props.children }
        </div>
    )

}

export default Main;
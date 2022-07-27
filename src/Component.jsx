import "./style.css";

function Component() {
    let data = new Date();
    let time = data.getHours();
    console.log(time, "time");
    let text = "";

    if (time < 12) {
        text = "good morning";
    }else if (time>=12 && time <=16)
    {
        text = "good afternoon";
    }
    else if (time>16 && time<=20){
         text = "good evening";
    }
    else{
         text = "good night"
    }

    let styleobj={
        color:"red",
        border:"2px solid black",
        padding: "10px",
        width:"50%",
        backgroundColor:"skyblue",
    }

    return<>
     <h2 style={styleobj}>Rishabh {text}</h2>
     <p className="para">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut ratione suscipit inventore eos ipsam minus atque incidunt voluptatibus fugit voluptatum error aperiam, voluptas molestiae nostrum officiis similique, nulla excepturi.
     </p>
     </>;

}
export default Component;
function Bye(props) {
    const name = props.name;
    const age = props.age;
    const gender = props.gender;
    return (
        <div>
           <p> bye {name}</p>
            <p>he's {age + 2} years old</p>
            <p>he's {gender}</p>
        </div>
    )
}

export default Bye
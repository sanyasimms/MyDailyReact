function Random(){
    let number =Math.random()*10;
    return <h1 style={{'backgroundColor':'#443355'}}>this is a random number {Math.round(number)}</h1>

}
export default Random
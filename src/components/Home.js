import { useState } from 'react';
const Home = () => {
  const [Greet, setGreet] = useState("Hey ✋");
  const handleGreeting = () => {
    setGreet("Peace out ✌️");
  }
  const numbers = [1, 2, 3, 4, 5]
  const output = numbers.map(item => item*2);
  console.log(output); 

 return ( 
    <div className="card mt-5">
    <div className="card-header bg-dark">
      <h3 className="text-light">{Greet}</h3>
    </div>
    <div className="card-body pt-5 pb-5">
      <p className="mb-0">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        voluptas esse vel minus cupiditate earum culpa quam inventore
        accusantium rem impedit cumque quos et, tenetur eum quaerat
        obcaecati consequuntur tempora.
      </p>
      <button className="btn btn-dark mt-4" onClick={handleGreeting}>
            Click me
          </button>
    </div>
  </div>
);

}

export default Home;
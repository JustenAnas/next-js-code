import Hello from "../../components/Hello";

 
 const Home = () => {
  console.log("What type of component am  I ?");
  
   return (
    <main>
       <div className="text-5xl">Welcome to Nextjs</div>
       <Hello/>
    </main>
    
   )
 }
 
 export default Home
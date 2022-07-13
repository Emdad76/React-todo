import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import Todos from '../Todos/Todos';
import {useState} from 'react';

 const dummy = [
   {
       id: 1,
       user:{ title: "React", decs: " React is javascript front-end libery and most popolar . This application built by React js. "}
    } 
];

export default function Home() {
    const [newTodo, setNewTodo] = useState(dummy);
    const [user, setUser] = useState({
        title: " ", decs: ""
    })
   
   /*  const {title, decs } = user; */


    const handleChange = (e) => {
        const { name, value} = e.target;
     setUser((prevUser) => {
            return { ...prevUser, [name]: value }
        })
        
    }
   

    const handleSubmit = (e) => {
        e.preventDefault();
       
       setNewTodo((prevTodo) => {
        return [...prevTodo, {id: [( Math.random()*5)], user}]
    })
  
     setUser ({title: "", decs: ""})
    }

     const handleRemove = (id) => {
       setNewTodo((prevTodo) => {
            const filteredTodo = prevTodo.filter((item) => item.id !== id);
            return filteredTodo;
       }) 
       

    }
    
   


    return (
        <Layout>
            <Header user={user}  handleChange={handleChange} handleSubmit={handleSubmit} />
            <Todos newTodo={newTodo}  handleRemove= {handleRemove} />
        </Layout>
    );
}
import Todo from '../Todo/Todo';
import classes from './Todos.module.css';

export default  function Todos (props) {

    return (
        <main className={classes.todos}>
            {props.newTodo.map((item, index) => (<Todo key={index}  todo={item} handleRemove={props.handleRemove} />))} 
             
        </main>
    );
}
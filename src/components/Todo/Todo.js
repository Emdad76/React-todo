import classes from './Todo.module.css';
import Button from '../Button/Button';

export default  function Todo ({todo, handleRemove}) {
  const {user, id} = todo;
  const {title, decs} = user;
console.log(todo)


    return (
        <section className={classes.todo}>
                <h1>{title} </h1>
                <p> {decs} </p>
                <Button className={classes.del} value={id} onClick={(e) => handleRemove(id)}> Delete </Button>
         </section>
    );
}
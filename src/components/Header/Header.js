import classes from './Header.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function Header({handleChange, handleSubmit, user}) {
const {title, decs }= user;

    return (
        <header className={classes.header}>
            <h1>My Todo List</h1>
            <form  onSubmit={(e) => handleSubmit(e)} >

            <Input type="text" name="title" required value={title} onChange={handleChange} className={classes.title}/>
             <Input type="text" name="decs" required value={decs} className={classes.decs} onChange={handleChange}/>

                <Button className={classes.sub} type="submit"><span> Add Todo</span>  </Button>

              
            </form>
        </header>
    );
}
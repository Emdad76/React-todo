import classes from './Layout.module.css';

export default function Layout({children}) {
    return (
        <section className={classes.layout}>
            {children}
        </section>
    );
}
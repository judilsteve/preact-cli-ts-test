import { FunctionalComponent, h } from 'preact';
import style from './style.css';
import { Header } from 'semantic-ui-react';

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
            <Header>This is a header</Header>{/* IDE/build error: JSX element type 'Header' does not have any construct or call signatures. ts(2604) */}
        </div>
    );
};

export default Home;

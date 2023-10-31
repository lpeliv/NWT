import * as React from 'react';
import styles from './header.module.css';

export interface HeaderProps {

}

export interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        // this.state = {  };
    }

    render() {
        return (
            <>
                <header className={styles.mainHeader}>
                    <div className={styles.innerHeaderContainer}>
                        <div className={styles.overlay}>
                            <h1 className={styles.headerTitle}> Nacionalni parkovi Hrvatske</h1>
                            <p className={styles.titleParagraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod venenatis quam eu facilisis. 
                            Sed pharetra aliquet nulla at venenatis. Pellentesque id mollis massa, id commodo nibh.
                            </p>
                        </div>
                    </div>
                </header>
                <nav id="navigation" className={styles.primaryNavigation}>
                    <ul>
                        <li><a href="#">Početna</a></li>
                        <li><a href="#">Nacionalni parkovi</a>
                            <ul className="dropdown">
                                <li><a href="#">NP Brijuni</a></li>
                                <li><a href="#">NP Krka</a></li>
                                <li><a href="#">NP Paklenica</a></li>
                                <li><a href="#">NP Plitvička jezera</a></li>
                                <li><a href="#">NP Kornati</a></li>
                                <li><a href="#">NP Mljet</a></li>
                                <li><a href="#">NP Risnjak</a></li>
                                <li><a href="#">NP Sjeverni Velebit</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Komentari</a></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Header;
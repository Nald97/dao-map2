import React, { useState } from "react";

const Circle = ({ children }) => {
    return (
        <div className="circle">
            {children}
        </div>
    );
};

const Header = ({ icon, title }) => {
    return (
        <header>
            <i className={icon}></i>
            <h2>{title}</h2>
        </header>
    );
};

const Body = ({ children }) => {
    return (
        <div className="body">
            {children}
        </div>
    );
};


const Article = ({ icon, title, step, children }) => {
    const [active, setActive] = useState(false);

    const handleClick = () => setActive(!active);

    return (
        <section onClick={handleClick}>
            <Circle>
                <article data-step={step} className={active ? 'active' : ''}>
                    <Header icon={icon} title={title} />
                    <Body>
                        {children}
                    </Body>
                </article>
            </Circle>
        </section>
    );
};

export default Article;

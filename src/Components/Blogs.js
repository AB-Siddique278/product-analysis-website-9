import React from 'react';

const Blogs = () => {
    return (
        <div>

            <div className='container'>


                <div className='my-5'>
                    <div>
                        <h2>What is context api in react</h2>
                        <p>The Context API is a component structure provided by the React framework that allows us to share specific types of data across all levels of the application. This is an alternative to "prop drilling" or passing props from grandparent to child to parent, and so on. Context is also promoted as a simpler, lighter approach to Redux state management.Prior to the Context API, we could solve this with a module, which led to the growing popularity of state management libraries like Redux. Libraries like Redux make it simple to get data from the store from anywhere in the tree. However, let us concentrate on the Context API.</p>
                    </div>

                    <div>
                        <h2>What is semantic tag</h2>
                        <p>Semantic HTML, also known as semantic markup, is HTML that adds meaning to a web page rather than just presenting it. HTML 5 is completely semantic. Article, Footer, Header, Figure, Caption, Section, Nav.HTML Semantic tags assist the browser in determining the purpose of the page and its content. Semantic tags also aid in search engine optimization by making content more adaptable. People who use screen readers benefit greatly from semantic elements. The additional information provided by semantic tags aids screen readers in better understanding the content and determining the various sections within a page more efficiently.</p>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Blogs;
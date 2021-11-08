import React from 'react';
import { Subreddits } from '../../features/Subreddits';

export function PageTemplate(props){
    // base template for the layout of a page. 
    // created so the page layout can be reused in NotFound page. 
    return (
        <>  
            <main>  
                <div className="feed">
                    { props.children }
                </div>
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    )
}
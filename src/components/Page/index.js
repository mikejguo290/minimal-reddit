import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PageTemplate } from '../PageTemplate';
import { Posts } from '../../features/Posts';
import { Banner } from '../Banner';
import { selectPostsError } from '../../features/Posts/postsSlice';
import { selectSearch, clearSearch } from '../../features/Search/searchSlice';
import { NoSearchResults } from '../NoSearchResults';

export function Page(props){
    /* page takes props passed from the three page types and conditionally renders Banner & Posts components.  */
    const { type, params, postIds } = props;
    const { subreddit, postId } = params;
    const isSubredditPage = type === "subreddit";
    const dispatch = useDispatch();
    const error = useSelector(selectPostsError);
    
    // only show NoSearchResults component if BOTH search term exists and list of PostIds is empty (it has already filtered by searchTerm on parent page);
    const searchTerm = useSelector(selectSearch);
    const filteredPostsIsEmpty = postIds.length === 0;
    const showNoSearchResults = searchTerm && filteredPostsIsEmpty;

    useEffect(()=>{
        // clear search term whenever user navigates to a different page/url.
        // thunk to dispatch action only if searchTerm exists. logic in searchSlice.js's clearSearch thunk creator.
        dispatch(clearSearch());
    },[dispatch, subreddit, postId]);

    return (
        <>  
            {/* display the subreddit banner with its name if there was no error fetching the Posts. */}
            { error
                ? <></>
                : isSubredditPage && <Banner name={subreddit} />
            }

           <PageTemplate>
                    { error
                        ?<Redirect to={{
                                pathname:'/error',
                                state:{error: error}
                            }}
                        />
                    
                        :<>
                            <Posts  pageType={type} postIds={postIds} /> 
                            { showNoSearchResults && <NoSearchResults/> }
                        </>
                    }
            </PageTemplate>
        </>
    )
}

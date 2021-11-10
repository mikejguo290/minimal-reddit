import React from 'react';
import { PageTemplate } from '../PageTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Posts } from '../../features/Posts';
import { Banner } from '../Banner';
import { selectPostsError } from '../../features/Posts/postsSlice';
import { clearSearchTerm, selectSearch } from '../../features/Search/searchSlice';
import { NoSearchResults } from '../NoSearchResults';

export function Page(props){
    const { type, params, postIds } = props;
    const dispatch = useDispatch();
    const isSubredditPage = type === "subreddit";
    const subreddit = params.subreddit;
    const postId = params.postId;
    const error = useSelector(selectPostsError);
    
    // only show NoSearchResults component if BOTH search term exists and list of PostIds is empty (it has already filtered by searchTerm on parent page);
    const searchTerm = useSelector(selectSearch);
    const filteredPostsIsEmpty = postIds.length === 0;
    const showNoSearchResults = searchTerm && filteredPostsIsEmpty;
    
    const usePrevious = (value) =>{
        // custom hook to get previous value of argument.
        const ref = useRef(); // persists across renders
        useEffect(()=>{
            ref.current = value;
        });
        return ref.current; // returns on render, before useEffect. (in effect returns previous ref value)
    }

    const prevSubreddit = usePrevious(subreddit);
    const prevPostId = usePrevious(postId);
    const pageChange = prevSubreddit !== subreddit || prevPostId !== postId; // test to see if user navigated to new page.

    useEffect(()=>{
        // clear search term whenever user navigates to a different page/url.
        // scenarios. 
        // 1. same page typing into search => expect searchTerm to change
        // 2. same page deleting search => expect searchTerm to diminish
        // 3. navigating to a different page with empty searchTerm.
        // 4. navigating to a different page with non-empty searchTerm. 

        if(searchTerm && pageChange){
            dispatch(clearSearchTerm());
        }
        
    },[dispatch, searchTerm, pageChange]);

    return (
        <>  
            {/* display the subreddit page banner with subreddit name if it is valid.
            i.e. there was no error with fetching the Posts. 
            else do not display a banner.*/}

            { error 
                ? <></>
                : isSubredditPage && <Banner name={subreddit} />
            }

           <PageTemplate>
                    { error
                        ? <div className="errorMessage">{error.message}</div>
                        :<>
                            <Posts  pageType={type} postIds={postIds} /> 
                            { showNoSearchResults && <NoSearchResults/> }
                        </>
                    }
            </PageTemplate>
        </>
    )
}

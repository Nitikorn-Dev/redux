import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../state/action-creator/posts-action';
import { RootState } from '../state/store';
//rafc

export const Posts = () => {

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state) as any;

  React.useEffect(() => {
    dispatch(fetchPost());
  }, [])

  const renderPost = () => {
    if (state.loading) {
     return <div><h1>Loading</h1></div>
    }
  return  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',width:'960px',border:'1px solid'}}>
      {
        state?.items.map((state: any) => (
          <div style={{ maxWidth: '150px', border: '1px solid',textOverflow:'ellipsis',margin:1}} key={state.title}>
            <p>id:{state.id}</p>
            <p>title:{state.title}</p>
          </div>
        ))
      }
    </div>
  }
  return (
    <div>
      <h1>Posts</h1>
      {renderPost()}
    </div>
  )
}

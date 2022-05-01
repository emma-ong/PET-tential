import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchReviews, postReviews} from '../api'

function Reviews() {

  const reviews = useSelector((state)=> state.reviews)
  const lastThreeReviews = reviews.slice(reviews.length - 3,reviews.length)
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: '',
    post: ''
  })

  // const [posts, setPosts] = useState(null)

  useEffect(()=>{
    //dispatching reviews alters state of reviews
    dispatch(fetchReviews())
  },[])

  function handleChange(e) {
    //console.log(form)
    const {name, value} = e.target
    const newForm = {
     ...form, [name]:value
    }
    setForm(newForm)
  }

  function handleSubmit(e){
    e.preventDefault()
    //dispatch add form request 
    dispatch(postReviews(form))
    dispatch(fetchReviews())
    //dispatch re fetching of posts
  }

  return <>
  <div className="reviews">
  <div>
     <h1>Latest Reviews</h1>
  </div>
  <div className='reviews-list'>
    <ul className='review-posts'>
      {lastThreeReviews?.map(review => { return (
        <><li><p>`&quot;{review.post}&quot;`</p> <br />-- {review.name}</li></>
      )}) }
    </ul>
  </div>
  <div>
    <h2>Add a review</h2>
    <form className='reviews'>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" value={form.name} onChange={handleChange}/>
      <label htmlFor="post">Review: </label>
      <input type="text" name="post" value={form.post} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Review</button>
    </form>
  </div>
  </div>
  </>
}

export default Reviews
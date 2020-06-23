import React from 'react'

export default function LikesButton(props) {
  function increaseLikes(id) {
    fetch(`/api/v1/recipes/${id}/likes`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        props.onLike(data);
      })
  }

  return (
    <div>
      <button onClick={()=>increaseLikes(props.id)}>
        <span role="img" aria-label="Likes: ">👍</span> {props.likes}
      </button>
    </div>
  )
}

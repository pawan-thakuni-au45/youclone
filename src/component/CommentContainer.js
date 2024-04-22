import React from 'react'
import Comment from './Comment.js'

const CommentData=[
    {
        name:"Pawan",
        text:"this is first comment",
        replies:[]
    },
    {
        name:"Pawan",
        text:"this is first comment",
        replies:[ {
            name:"Pawan",
            text:"this is first comment",
            replies:[]
        },
        {
            name:"Pawan",
            text:"this is first comment",
            replies:[]
        },
        {
            name:"Pawan",
            text:"this is first comment",
            replies:[]
        }, {
            name:"Pawan",
            text:"this is first comment",
            replies:[]
        },
        ]
    }, {
        name:"Pawan",
        text:"this is first comment",
        replies:[]
    }, {
        name:"Pawan",
        text:"this is first comment",
        replies:[]
    }, {
        name:"Pawan",
        text:"this is first comment",
        replies:[]
    }, {
        name:"Pawan",
        text:"this is first comment",
        replies:[]
    }, {
        name:"Pawan",
        text:"this is first comment",
        replies:[ {
            name:"Pawan",
            text:"this is first comment",
            replies:[]
        }, {
            name:"Pawan",
            text:"this is first comment",
            replies:[]
        }, {
            name:"Pawan",
            text:"this is first comment",
            replies:[]
        },]
    }, {
        name:"Pawan",
        text:"this is first comment",
        replies:[]
    },
]

const CommentList=({comment})=>{
    return comment.map((comment,index)=>
    <div>
    <Comment key={index} data={comment}/>
      <div className='pl-5 '>
      <CommentList comment={comment.replies}/>
      </div>
    </div>


)
}

const CommentContainer = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList comment={CommentData}/>
    </div>
  )
}

export default CommentContainer
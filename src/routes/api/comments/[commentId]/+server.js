import {json} from '@sveltejs/kit'
import {comments} from '$lib/comments.js'

export function GET(requestEvent){
    const {params}=requestEvent
    const {commentId}=params
    const findComment=comments.find((comment)=>comment.id===parseInt(commentId))
    return json(findComment)
}

export async function PATCH(requestEvent){
    const {params,request}=requestEvent
    const {commentId}=params
    const{text}=await request.json()

    const patchComment=comments.find((comment)=>comment.id===parseInt(commentId))
    patchComment.text=text
    return json(patchComment)
}

export async function DELETE(requestEvent){
    const {params}=requestEvent
    const {commentId}=params
    const deleteComment=comments.find((comment)=>comment.id===parseInt(commentId))
    const deleteIndex=comments.findIndex((comment)=>comment.id===parseInt(commentId))
    comments.splice(deleteIndex,1)
    return json(deleteComment)
}
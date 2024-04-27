import {json} from '@sveltejs/kit'
import {comments} from '$lib/comments.js'

export function GET(requestEvent){
    const {params}=requestEvent
    const {commentId}=params
    const findComment=comments.find((comment)=>comment.id===parseInt(commentId))
    return json(findComment)
}
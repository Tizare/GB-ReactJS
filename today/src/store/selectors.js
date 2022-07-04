export function getChatList(state){
    return state.chats.chatList
}
export function getName(state){
    return state.profile
}
export function getMessageList(state){
    return state.message.messageList
}

export function getGists(state){
    return state.gists
}

export function getGistsError(state){
    return state.gists.error
}

export function getGistsLoading(state){
    return state.gists.request
}
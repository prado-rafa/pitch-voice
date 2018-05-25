export const If = (props) => {
    if(props.list.length <= 6) {
        return props.children
    } else {
        return false
    }
}
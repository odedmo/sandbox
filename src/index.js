import './style.scss'

const funcA = () => {
    funcB()
}

const funcB = (data = {inner: true}) => {
    console.log(data)
}

funcA()
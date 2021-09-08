import ProductWriteUI from './ProductWrite.presenter'

export default function ProductWrite(props) {

    return(
        <>
        <ProductWriteUI isEdit={props.isEdit}/>
        </>
    )
}
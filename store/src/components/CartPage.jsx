import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from "react-redux"
import { editState } from '../store';
import { useEffect } from 'react';


const CartPage = () => {

  const state = useSelector((store) => store.tData)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    console.log(state)
  })
  const addData =     {
        id:  Date.now(),
        title: "Red Knit",
        content: "Born in Seoul",
        price: 130000,
        rating : 0,
        discount: 0,
        src:"https://codingapple1.github.io/shop/shoes2.jpg",
        cate: "shoes"
    }
  return (
    <>
      <h1>{state.length}개의 리스트가 있습니다.</h1>
      <button
        onClick={()=>{
          dispatch(editState(state, addData))
        }}
      >
        리스트 추가
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>content</th>
            <th>cate</th>
          </tr>
        </thead>
        <tbody>
          {state.map(s => {
            return (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.content}</td>
                <td>{s.price}</td>
                <td>{s.cate}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default CartPage
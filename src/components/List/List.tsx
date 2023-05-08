import React from 'react'
import { ListProps } from './List.interface'

const List: React.FC<ListProps> = ({ inputValue, filterData }) => {
  console.log('List component')
  return (
    <div>
      {inputValue &&
        filterData?.map((datas: any, id: any) => {
          return (
            <div key={id}>
              <li>{datas.title}</li>
            </div>
          )
        })}
    </div>
  )
}

export default React.memo(List)

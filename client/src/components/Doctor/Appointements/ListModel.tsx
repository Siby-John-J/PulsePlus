import React from "react"
import '../style.css'

function ListModel(props: any) {
  const { children, prop } = props
  
  return (
    <div className={prop.main}>
        {
          children.map((element, index: number) => {
            return (
              <>
                <element.type />
                {
                  index !== children.length - 1 &&
                  <div className="content-bar font-thin text-[1.1em] mb-4">|</div>
                }
              </>
            )
          })
        }
    </div>
  )
}

export default ListModel

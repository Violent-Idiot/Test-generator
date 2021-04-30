import react from "react"
import reactDom from "react-dom"
import Landing from "../Landing"

it("renders without crashing", ()=>{
    const divs = document.createElement("div")
    reactDom.render(<Landing></Landing>, divs) 
})
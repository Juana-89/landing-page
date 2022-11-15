import { useEffect } from "react";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Blog from "./components/Blog";

function App() {
  useEffect(() => {
    document.title='Landing Page - Tourism Peru'
  },[])
  return (
    <>
    <Header/>
    <Cover/>
    <Blog/>
    </>
  )
}

export default App
